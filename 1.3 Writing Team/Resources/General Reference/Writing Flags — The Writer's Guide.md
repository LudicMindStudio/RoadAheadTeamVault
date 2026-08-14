---
Type: Reference
Audience: Writing Team
Status: Live
Updated: 2026-08-12
---

# Writing Flags — The Writer's Guide

 Flags are the game's memory. When a story moment happens, a flag records it. Other scenes, quests, and NPC dialogue read flags to decide what the player sees next. This page is the full guide: what flags are, how to name them, and the exact syntax to write them in dialogue files.

---

## What is a flag?

A flag is a named piece of world state that is either **True** or **False** (or a number).

- The player talks to Anita for the first time → `Anita_Introduced` becomes True.
- The player finishes Scene 1 of the Fish Supply quest → `FishSupply_1` becomes True.
- Anita's trust in the player changes → `Anita_Trust` becomes a number.

Two rules make the system work:

1. **A flag describes WHAT changed, not WHO caused it.** It is a fact about the
   world, not about the player. "Anita has been introduced" is a fact about
   Anita. Any system can read it — dialogue, quests, schedules, mail.
2. **Everything is world state by default.** Flags persist across scenes and
   saves. If a condition should survive the player leaving the scene, it is a flag.

---

## Naming convention

Flag names follow one of three forms. **Pick the form, then write it everywhere.
A flag is created the first time a writer uses its name — so naming mistakes
multiply.** The naming convention is the only thing that keeps the registry sane.

### Form 1: `{Subject}_{State}` — boolean state change (most common)

The subject is the thing whose state changed. The state is past-tense.

| Subject type | Pattern | Examples |
|---|---|---|
| NPC | `{NPC}_{State}` | `Anita_Introduced`, `Gyo_Introduced` |
| Location | `{Location}_{State}` | `Sanctuary_Visited`, `GuildHall_Entered` |
| Object | `Inspect_{Object}` | `Inspect_Metronome`, `Inspect_CoffeeSetup` |
| World | `{Village}_{State}` | `DolphinBay_Reconciled`, `DolphinBay_ProtestActive` |

### Form 2: `{QuestID}_{Stage}` — quest progression

Quest flags use the quest's canonical short ID plus a sequential stage number.
The **final numbered flag IS the quest clear flag**.

| Stage | Meaning | Example |
|---|---|---|
| `_0` | Quest accepted (trigger fired) | `FishSupply_0`, `WrongFreq_0` |
| `_1` | Scene 1 complete | `FishSupply_1`, `WrongFreq_1` |
| `_2` | Scene 2 complete | `WrongFreq_2`, `FullTour_2` |
| `_3` | Scene 3 complete (quest complete) | `FishSupply_3`, `FullTour_3` |

**Quest short IDs** — defined once in the quest outline, used everywhere:

| Quest | Short ID | First flag |
|---|---|---|
| Sanctuary — A Delivery Disrupted | `FishSupply` | `FishSupply_0` |
| Sanctuary — What Are You Really Doing Out Here | `FullTour` | `FullTour_0` |
| Sanctuary — The Wrong Frequency | `WrongFreq` | `WrongFreq_0` |

### Form 3: `{System}_{Metric}` — numbers

For values that aren't True/False. Used rarely — most flags are boolean.

| Example | Meaning |
|---|---|
| `Anita_Trust` | Numeric trust level (0-10) |
| `Gyo_Friendship` | Numeric friendship score |
| `TownReputation` | Village-wide reputation |

### Hard rules

- Underscores between segments: `Anita_Introduced`, **never** `AnitaIntroduced`
- Letters and digits only: `Sanctuary_Visited`, **never** `Sanctuary-Visited`
- No empty segments: `_Anita` and `Anita_` are both wrong
- No spaces, no special characters

---

## Where flags are written

Flags appear in dialogue and interactable files inside **Conditions** and
**Sets** sections. The scanner (`scan_flags.py`) finds these sections
automatically and builds the master registry from them. **You do not need to register a flag anywhere — just use its name in a Conditions or Sets block.**

```
**Conditions**
{Requires=Anita_Introduced=True}

**Sets**
{FishSupply_1=True}
```

- **Conditions** — what must be true BEFORE this dialogue can play. The game
  checks these at runtime.
- **Sets** — what becomes true WHEN this dialogue plays. The game writes
  these after the moment happens.

---

## Syntax

### Simple conditions

```
{Requires=Anita_Introduced=True}
{Requires=Anita_Introduced=False}
{Requires=Anita_Trust>=8}
```

Multiple conditions on one line, comma-separated:

```
{Requires=Anita_Introduced=True, FishSupply_1=False}
```

Multiple lines are allowed too — every line must be a full `{...}` block.

### OR / Any — "this OR that"

```
{Requires=Any(Anita_Introduced=True, Gyo_Introduced=True)}
```

The block plays if **either** condition is true.

### Numeric thresholds

```
{Requires=Anita_Trust>=8}
{Requires=Gyo_Friendship>3}
```

Supported operators: `>=`, `<=`, `==`, `!=`, `>`, `<`.

### Things that are NOT flags

| Syntax | What it is | Why it is not a flag |
|---|---|---|
| `Distance(Player, 20)` | Runtime check — how close the player is | Checked live, never saved |
| `Has(MailItem_X)` | Inventory check — does the player hold an item | Checked live against inventory |

These go inside Conditions if the moment needs them, but the scanner skips them — they are not world state.

---

## The master registry

Every time the flag scan runs, it regenerates `master-registry.md` at the
vault root:

- **Flag** — the exact name, used everywhere
- **Description** — a short context snippet pulled from the source file
- **Source** — a link back to the file that uses the flag

The registry is **generated — never edit it by hand**. It exists so writers can see every flag that exists and where it came from, and so the comparison tool can check the vault against the game.

### How to run the scan

- **In Obsidian:** click the flag ribbon icon, or Command Palette →
  "Run flag scan". The registry opens when done.
- 
### Checking against the game

Command Palette → "Compare Obsidian registry vs Unity FlagRegistry".

The report shows three things:

1. **In Obsidian, not in Unity** — new flags the game hasn't imported yet.
   Normal after writing. The Unity import picks them up.
2. **In Unity, not in Obsidian** — flags in the game with no vault source.
   May be runtime-computed, renamed, or stale.
3. **Naming violations** — names that break the convention. Fix these by
   renaming the flag everywhere it appears.

---

## Checklist before you finish a file

- [ ] Every flag name follows Form 1, 2, or 3
- [ ] The same flag name is spelled identically everywhere (watch
      `Introduced` vs `introduced`, `_` vs `-`)
- [ ] Conditions only reference flags that exist or are set elsewhere in
      the same quest line
- [ ] Every `_0` quest flag (quest accepted) has a corresponding clear flag
      (`_1`, `_2`, `_3` per the quest outline)
- [ ] You did not invent a new flag where an existing one means the same
      thing — check the master registry first

---

## Related

- [[1.1 Admin/Resources/Dolphin Bay — Content Pipeline & Asset Types]]
- [[1.1 Admin/Resources/Templates/Dialogue Template]]
- [[master-registry]]
