#!/usr/bin/env python3
"""
scan_flags.py — D1: Obsidian master flag registry scanner.

Walks a vault's markdown, finds **Conditions** / **Sets** sections
(verified writer format: {Requires=FlagA=True, FlagB=False} and {FlagC=True}),
extracts flag names with source file, and writes master-registry.md:

    | FlagName | 5-word description | wiki-link |

What counts as a flag name: keys inside Conditions/Sets braces, excluding
operator keywords (Requires, OR, AND, Any, Has, Distance). Nested groups
(OR(...), Any(...)) contribute their keys. Has()/Distance() are runtime or
inventory conditions — skipped (they bypass the flag registry per C3).

Usage:
    python3 scan_flags.py <vault_path> [--output <path>]

Default output: <vault>/master-registry.md
"""

import argparse
import os
import re
import sys

# Operator keywords that are NOT flag names.
OPERATOR_KEYWORDS = {"Requires", "OR", "AND", "Any", "Has", "Distance"}

SECTION_RE = re.compile(r"^\*\*(Conditions|Sets)\*\*\s*$")
BLOCK_RE = re.compile(r"^(\{.*\})\s*$")
KEY_VALUE_RE = re.compile(r"^([A-Za-z0-9_]+)\s*(?:>=|<=|==|!=|>|<|=)\s*(.*)$")
FUNC_RE = re.compile(r"^([A-Za-z]+)\s*\((.*)\)$", re.DOTALL)

# Directories to skip while walking the vault.
SKIP_DIRS = {".obsidian", ".git", ".trash", "node_modules", ".smart-env"}


def split_top_level(text: str, sep: str = ",") -> list[str]:
    """Split on sep, ignoring separators inside parentheses."""
    parts: list[str] = []
    depth = 0
    current: list[str] = []
    for ch in text:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == sep and depth == 0:
            parts.append("".join(current))
            current = []
        else:
            current.append(ch)
    if current:
        parts.append("".join(current))
    return parts


def parse_flag_block(block: str) -> set[str]:
    """Parse a { ... } block into a set of flag names."""
    flags: set[str] = set()
    content = block.strip()
    if content.startswith("{") and content.endswith("}"):
        content = content[1:-1]
    for entry in split_top_level(content):
        entry = entry.strip()
        if not entry:
            continue

        # Func(...) form: OR/AND/Any recurse; Has/Distance skipped.
        func_m = FUNC_RE.match(entry)
        if func_m:
            func, inner = func_m.group(1), func_m.group(2)
            if func in ("OR", "AND", "Any"):
                flags |= parse_flag_block("{" + inner + "}")
            # Has / Distance: inventory or runtime conditions, not registry flags.
            continue

        # key=value form.
        kv_m = KEY_VALUE_RE.match(entry)
        if kv_m:
            key = kv_m.group(1)
            if key in OPERATOR_KEYWORDS:
                # Requires=FlagA=True → value is a nested key=value pair.
                flags |= parse_flag_block("{" + kv_m.group(2) + "}")
            else:
                flags.add(key)
    return flags


def collect_blocks(filepath: str) -> list[dict]:
    """Collect flag blocks from one markdown file.

    Returns list of dicts: {section, line, block, flags, context}
    """
    found: list[dict] = []
    try:
        with open(filepath, "r", encoding="utf-8") as fh:
            lines = fh.readlines()
    except (OSError, UnicodeDecodeError) as exc:
        print(f"  [warn] skipping {filepath}: {exc}", file=sys.stderr)
        return found

    section = None
    for idx, raw in enumerate(lines):
        line = raw.rstrip("\n")
        sec_m = SECTION_RE.match(line)
        if sec_m:
            section = sec_m.group(1)
            continue
        if section is None:
            continue
        # A `{ ... }` block directly after the section header (multiple
        # consecutive blocks are allowed, e.g. two Sets lines in a row).
        blk_m = BLOCK_RE.match(line)
        if blk_m:
            flags = parse_flag_block(blk_m.group(1))
            if flags:
                context = describe_context(lines, idx)
                found.append(
                    {
                        "section": section,
                        "line": idx + 1,
                        "block": blk_m.group(1),
                        "flags": sorted(flags),
                        "context": context,
                    }
                )
            # Stay in the section: the next line may be another block.
            # Only exit the section once a non-block, non-blank line appears.
            continue
        if line.strip():
            section = None
    return found


def describe_context(lines: list[str], block_idx: int) -> str:
    """5-word context heuristic: first content line after the block,
    stripped of markdown wrappers and speaker prefixes. Skips section
    headers, headings, and other flag blocks."""
    for raw in lines[block_idx + 1 : block_idx + 6]:
        text = raw.strip()
        if not text:
            continue
        if text.startswith("**") or text.startswith("##") or text.startswith("# "):
            continue
        if text.startswith("{") and text.endswith("}"):
            continue
        if text.startswith("- "):  # markdown list items (e.g. **Options** choices)
            continue
        text = re.sub(r"^[A-Za-z][A-Za-z ]*\{[^}]*\}:?\s*", "", text)  # speaker{emote}:
        text = re.sub(r"^[A-Za-z][A-Za-z ]*:\s*", "", text)            # Speaker:
        text = re.sub(r"^\*\[(.*)\]\*$", r"\1", text)                  # *[stage]*
        text = re.sub(r"[*>`#\[\]]", "", text)
        text = text.strip()
        if not text:
            continue
        words = text.split()
        if words:
            return " ".join(words[:5])
    return ""


def vault_walk(vault_path: str):
    """Yield markdown file paths under the vault, skipping plugin dirs."""
    for root, dirs, files in os.walk(vault_path):
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS]
        for name in files:
            if name.lower().endswith(".md"):
                yield os.path.join(root, name)


def obsidian_link(abs_path: str, vault_path: str) -> str:
    """Obsidian wiki-link relative to the vault root, no extension."""
    rel = os.path.relpath(abs_path, vault_path)
    rel_noext = os.path.splitext(rel)[0]
    stem = os.path.basename(rel_noext)
    return f"[[{rel_noext}|{stem}]]"


def write_registry(flags: list[dict], vault_path: str, output: str) -> None:
    """Write master-registry.md. flags: sorted list of dicts with
    name, description, link, sources (list of file/line strings)."""
    lines = [
        "# Master Flag Registry",
        "",
        "> Auto-generated by `scan_flags.py` — do not edit by hand.",
        "> Sources: `**Conditions**` / `**Sets**` sections in vault markdown.",
        f"> Generated: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M')}",
        f"> Flags: {len(flags)}",
        "",
        "| Flag | Description | Source |",
        "|---|---|---|",
    ]
    for f in flags:
        desc = f.get("description") or ""
        lines.append(f"| `{f['name']}` | {desc} | {f['link']} |")
    lines.append("")
    with open(output, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))


def main() -> int:
    ap = argparse.ArgumentParser(description="Scan vault markdown for flag names.")
    ap.add_argument("vault_path", help="Path to the Obsidian vault root")
    ap.add_argument("--output", default=None, help="Output registry path (default <vault>/master-registry.md)")
    args = ap.parse_args()

    vault = os.path.abspath(args.vault_path)
    if not os.path.isdir(vault):
        print(f"error: vault path not found: {vault}", file=sys.stderr)
        return 1
    output = os.path.abspath(args.output) if args.output else os.path.join(vault, "master-registry.md")

    # Collect flag -> sources across the whole vault.
    by_flag: dict[str, dict] = {}
    scanned = 0
    for filepath in vault_walk(vault):
        blocks = collect_blocks(filepath)
        if not blocks:
            continue
        scanned += 1
        rel = os.path.relpath(filepath, vault)
        for blk in blocks:
            for flag in blk["flags"]:
                entry = by_flag.setdefault(
                    flag, {"name": flag, "description": blk["context"], "link": obsidian_link(filepath, vault), "sources": []}
                )
                entry["sources"].append(f"{rel}:{blk['line']} ({blk['section']})")
                if not entry["description"] and blk["context"]:
                    entry["description"] = blk["context"]

    if not by_flag:
        print("No flags found.", file=sys.stderr)
        return 0

    ordered = sorted(by_flag.values(), key=lambda e: e["name"].lower())
    write_registry(ordered, vault, output)

    print(f"Scanned {scanned} markdown files with Conditions/Sets sections")
    print(f"Found {len(ordered)} unique flag names")
    print(f"Registry written to {output}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
