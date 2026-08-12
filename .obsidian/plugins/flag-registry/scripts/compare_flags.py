#!/usr/bin/env python3
"""
compare_flags.py — D2: Obsidian registry vs Unity FlagRegistry comparison.

Reads master-registry.md (produced by scan_flags.py) and the Unity
FlagRegistry.asset, then reports:

  1. Flags in Obsidian but NOT in Unity   (writers added, Unity never saw them)
  2. Flags in Unity but NOT in Obsidian   (in the registry but no vault source)
  3. Flag-name format violations          (naming convention from planning/22)

Naming convention (planning/22): {Subject}_{State}, {QuestID}_{Stage},
{System}_{Metric} — underscore-separated, no spaces, no special characters,
segments non-empty, first char a letter.

Usage:
    python3 compare_flags.py <vault_path> --unity-asset <FlagRegistry.asset> [--output <report.md>]

Vault path is used to locate master-registry.md (or pass --registry explicitly).
Exit code: 0 = no drift found, 1 = drift found, 2 = error.
"""

import argparse
import os
import re
import sys

REGISTRY_NAME_RE = re.compile(r"^\| `([A-Za-z0-9_]+)` \|")
UNITY_FLAG_RE = re.compile(r"^\s+-\s+name:\s+(.+?)\s*$")
NAME_RE = re.compile(r"^[A-Za-z][A-Za-z0-9_]*$")


def load_obsidian_registry(path: str) -> set[str]:
    """Parse flag names from the master-registry.md table."""
    flags: set[str] = set()
    if not os.path.isfile(path):
        print(f"error: registry not found: {path}", file=sys.stderr)
        print("  Run scan_flags.py first to generate master-registry.md.", file=sys.stderr)
        sys.exit(2)
    with open(path, "r", encoding="utf-8") as fh:
        for line in fh:
            m = REGISTRY_NAME_RE.match(line)
            if m:
                flags.add(m.group(1))
    return flags


def load_unity_registry(asset_path: str) -> dict[str, list[str]]:
    """Parse flag names from FlagRegistry.asset.

    Unity YAML is tagged (%TAG !u!) so we regex the `- name:` list entries
    under the `flags:` list rather than full YAML-parse.
    Returns {name: [sourceType,...]} where sourceType is the first reference's
    source type, or [] if none.
    """
    flags: dict[str, list[str]] = {}
    if not os.path.isfile(asset_path):
        print(f"error: Unity FlagRegistry asset not found: {asset_path}", file=sys.stderr)
        sys.exit(2)

    current = None
    in_flags = False
    source_types: list[str] = []
    with open(asset_path, "r", encoding="utf-8") as fh:
        for raw in fh:
            line = raw.rstrip("\n")
            if re.match(r"^\s+flags:\s*$", line):
                in_flags = True
                continue
            if in_flags and re.match(r"^\S", line):
                in_flags = False
            if not in_flags:
                continue
            m = UNITY_FLAG_RE.match(line)
            if m:
                if current is not None:
                    flags[current] = list(dict.fromkeys(source_types))
                current = m.group(1).strip()
                source_types = []
                continue
            st = re.match(r"^\s+sourceType:\s+(.+?)\s*$", line)
            if st and current is not None:
                source_types.append(st.group(1))
    if current is not None:
        flags[current] = list(dict.fromkeys(source_types))
    return flags


def naming_violations(names: set[str]) -> list[str]:
    """Return names violating the planning/22 naming convention."""
    bad: list[str] = []
    for name in sorted(names):
        if "_" not in name:
            bad.append(f"{name} — no underscore (needs {{Subject}}_{{State}} / {{QuestID}}_{{Stage}} / {{System}}_{{Metric}})")
        elif not NAME_RE.match(name):
            bad.append(f"{name} — illegal characters (letters/digits/underscore only)")
        elif name.startswith("_") or name.endswith("_"):
            bad.append(f"{name} — empty segment (underscore at start/end)")
        elif "__" in name:
            bad.append(f"{name} — empty segment (double underscore)")
    return bad


def build_report(obsidian: set[str], unity: dict[str, list[str]], vault: str) -> str:
    in_obsidian_not_unity = sorted(o for o in obsidian if o not in unity)
    in_unity_not_obsidian = sorted(u for u in unity if u not in obsidian)
    violations = naming_violations(obsidian | set(unity.keys()))

    lines: list[str] = []
    lines.append("# Flag Registry Comparison")
    lines.append("")
    lines.append(f"> Generated: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M')}")
    lines.append("")
    lines.append(f"- Obsidian registry: {len(obsidian)} flags")
    lines.append(f"- Unity FlagRegistry: {len(unity)} flags")
    lines.append(f"- In Obsidian, not in Unity: {len(in_obsidian_not_unity)}")
    lines.append(f"- In Unity, not in Obsidian: {len(in_unity_not_obsidian)}")
    lines.append(f"- Naming violations: {len(violations)}")
    lines.append("")

    lines.append("## In Obsidian, not in Unity")
    lines.append("")
    if in_obsidian_not_unity:
        lines.append("Writer-defined flags the Unity registry has not seen. Run the Unity")
        lines.append("FlagRegistry scan (editor) to import them, or check for renames.")
        lines.append("")
        lines.append("| Flag |")
        lines.append("|---|---|")
        for name in in_obsidian_not_unity:
            lines.append(f"| `{name}` |")
    else:
        lines.append("_None._")
    lines.append("")

    lines.append("## In Unity, not in Obsidian")
    lines.append("")
    if in_unity_not_obsidian:
        lines.append("Registry entries with no vault source. May be runtime-computed,")
        lines.append("deleted, renamed, or orphaned. Stale entries are purged by the Unity scan.")
        lines.append("")
        lines.append("| Flag | Unity source type |")
        lines.append("|---|---|")
        for name in in_unity_not_obsidian:
            src = ", ".join(unity[name]) if unity[name] else "—"
            lines.append(f"| `{name}` | {src} |")
    else:
        lines.append("_None._")
    lines.append("")

    lines.append("## Naming convention violations")
    lines.append("")
    lines.append("Per planning/22: `{Subject}_{State}`, `{QuestID}_{Stage}`, `{System}_{Metric}`.")
    lines.append("")
    if violations:
        for v in violations:
            lines.append(f"- {v}")
    else:
        lines.append("_None._")
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    ap = argparse.ArgumentParser(description="Compare Obsidian flag registry vs Unity FlagRegistry.")
    ap.add_argument("vault_path", help="Path to the Obsidian vault root")
    ap.add_argument("--unity-asset", required=True, help="Path to Unity FlagRegistry.asset")
    ap.add_argument("--registry", default=None, help="Path to master-registry.md (default <vault>/master-registry.md)")
    ap.add_argument("--output", default=None, help="Write report to this markdown file")
    args = ap.parse_args()

    vault = os.path.abspath(args.vault_path)
    registry_path = os.path.abspath(args.registry) if args.registry else os.path.join(vault, "master-registry.md")
    unity_asset = os.path.abspath(args.unity_asset)

    obsidian = load_obsidian_registry(registry_path)
    unity = load_unity_registry(unity_asset)

    report = build_report(obsidian, unity, vault)
    print(report)

    if args.output:
        with open(args.output, "w", encoding="utf-8") as fh:
            fh.write(report)
        print(f"\nReport written to {os.path.abspath(args.output)}")

    drift = len(obsidian - set(unity.keys())) + len(set(unity.keys()) - obsidian)
    return 1 if drift else 0


if __name__ == "__main__":
    sys.exit(main())
