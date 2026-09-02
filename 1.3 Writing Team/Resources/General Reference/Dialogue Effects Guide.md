---
Type: Reference
Audience: Writing Team
Status: Live
Updated: 2026-09-01
---

# Dialogue Effects Guide

Dialogue lines can carry **effects**: emphasis, emotion, sound cues, and typing rhythm. You write them right into the line with a compact annotation syntax. The game reads the annotations when dialogue is imported and renders them live — a word that shakes, a portrait that changes, a whisper that plays at the right beat. Obsidian preview shows the same annotations styled, so you see the effect while you are writing.

The syntax has three shapes plus one escape rule. Everything builds on those.

---

## The three shapes

| Shape             | What it looks like           | What it does                                     |
| ----------------- | ---------------------------- | ------------------------------------------------ |
| Inline annotation | `[words]{text_effect=shake}` | Applies effects to a specific span of words      |
| Standalone effect | `{sfx="whisper"}`            | Fires something at that exact point in the line  |
| Sentiment         | `Camie{excited}: ...`        | Sets the speaker's portrait/emotion for the line |

You can mix all three in one line. Most lines need none. Effects are seasoning, not a requirement.

---

## Inline annotations — effects on specific words

Wrap the words in square brackets, then attach effects in curly braces immediately after, `effect=value` pairs separated by commas.

```
[words]{effect=value}
[words]{effect1=value1, effect2=value2}
```

### Examples

```
Camie: [Hey kid]{text_effect=groovy}, cool [hair]{color=red}!
```
"Hey kid" plays a wavy behavior. "hair" renders red.

```
Lakshmi: I did it [myself]{text_effect=bold, color=red}
```
One span, two effects.

### Inline effect reference

| Effect | Syntax | Values | What it does |
|---|---|---|---|
| Color | `color=red` | CSS color names or hex (`#ff6644`) | Text color |
| Font size | `font_size=0.7` | 0.1 – 2.0 (scale) | Text size relative to normal (1.0) |
| Bold | `text_effect=bold` | — | Bold text |
| Italic | `text_effect=italic` | — | Italic text |
| Behavior | `text_effect=shake` | shake, wave, dangle, bounce, swing, rainbow, fade, and more | Letter/word animation. The available behaviors grow over time; any name works and is stored. |

The behavior list (`text_effect=...`) is open. If a value does not render yet, the annotation is still stored — it will render once the game supports it. Nothing you write becomes an error.

---

## Standalone effects — something happens at this point

A bare `{key=value}` placed in the line fires at that exact position. It is not attached to a word; it happens as the text reaches that point.

```
Camie: ...all the riff raff. {sfx="whisper"} Don't tell Gatz.
```
The whisper plays right after "riff raff." lands, before "Don't tell" types.

### Standalone effect reference

| Effect | Syntax | Values | What it does |
|---|---|---|---|
| Text speed | `{text_speed=0.5}` | 0.1 – 3.0 | Slows (or speeds) typing for everything after it |
| Sound effect | `{sfx="name"}` | Audio clip name in quotes | Plays the named sound |
| Screen effect | `{effect=screen_shake}` | screen_shake, camera_zoom, flash | Fires a visual effect at this beat |
| Custom action | `{custom_action=N}` | Integer ID | Fires a scripted action, documented in **Notes** |

Any other `{key=value}` works too — the parser stores it. New standalone effects can be added by writers and wired up later.

### Speed regions

`text_speed` sets typing speed for everything after it until changed.

```
Lakshmi: [I'm new]{font_size=0.7}. {text_speed=0.5} Not sure. {text_speed=1}
```
"Not sure." types slowly. Then speed resets to normal.

---

## Sentiment — the speaker's portrait for the line

Sentiment goes on the character name, before the colon. It switches the speaker's portrait to a matching expression for that line.

```
Camie{excited}: Hey kid, cool hair!
Lakshmi{sad}: Awe thanks.
Camie{whispering}: Don't tell Gatz.
```

Portraits are per-character. If a character has no portrait for a sentiment, the game falls back to their default expression — no error, no missing art. When in doubt, use the sentiments the character's portrait set already covers (happy, sad, angry, excited, surprised, whispering, neutral). A line with no sentiment uses the default portrait.

---

## Notes — writer comments and custom action documentation

The **Notes** section at the end of a dialogue file is for writer-side comments. It is parsed and stored but never rendered in-game. Custom actions reference it by ID.

```
**Notes**
- action id 1: play animation of grabbing belly
- The kelp buns should be a funny moment
- TODO: get art for kelp bun icon
```

Use Notes to tell the team what an effect or action is for, and to document anything a developer needs to wire up.

---

## Escape characters — literal brackets and braces

Dialogue text sometimes contains real brackets or braces. Prefix them with a backslash so they render literally instead of being read as annotations.

| Want to type | Write |
|---|---|
| `[` | `\[` |
| `]` | `\]` |
| `{` | `\{` |
| `}` | `\}` |

```
Lakshmi: I love \[brackets\]!
```
Renders as: "I love [brackets]!"

If a bare brace has no `=` and no escape, it is flagged at import so the writer can fix it — it is never silently dropped from the text.

---

## Bundle settings live in the editor, not the file

Per-bundle options like unskippable lines, auto-advance, and background music are set on the dialogue bundle in the Unity editor after import. They are **not** written in the markdown. Do not add a `**Metadata**` section to dialogue files — the game no longer reads one.

---

## Complete worked dialogue

A full dialogue file, annotated.

```markdown
*Dialogue Root* : [[Camie - Profile]]
# Characters: Lakshmi, Camie
## Bundle : LakshmiMeetsCamie_0

Camie{happy}: [Hey kid]{text_effect=groovy}, nice [hair]{color=red}!

Lakshmi{happy}: Thanks! Right back at ya!

Camie: Say, with that uniform I bet you work at that Guild Hall.

Camie{excited}: Any postal workers planning on joining us for the protest?

Lakshmi{unsure}: I'm unsure. I'm pretty [new]{font_size=0.8} around here.

Camie: Didn't hurt to ask. I don't enjoy the hussle and bussle, but I can't stand still while the dolphins have disappeared. {sfx="gulls"}

Camie{cheerful}: But enough about me. You look a bit hungry hun. Would you like to try one of my "[internationally acclaimed]"{text_effect=bold} kelp buns?

**Options**
- [[LakshmiMeetsCamie_1]]: Try kelp buns
- [[LakshmiMeetsCamie_2]]: Politely decline

**Notes**
- sfx "gulls": distant gull calls, ambient
- "internationally acclaimed" is Camie's running bit, keep it bold
```

All three shapes appear here: inline effects on spans, one standalone effect at a beat, and sentiments on the speaker lines. The line lengths still respect dialogue economy — annotations never justify longer lines.

---

## Checklist before you finish a file

- [ ] Every annotation uses one of the three shapes — no freeform markup
- [ ] Commas separate multiple effects, no spaces needed: `[x]{a=1, b=2}`
- [ ] Literal brackets/braces in the text are escaped with a backslash
- [ ] `text_speed` changes are paired: slow it down, then restore
- [ ] Sentiments only name expressions the character can actually show (or accept the default fallback)
- [ ] `custom_action` IDs have a matching numbered line in **Notes**
- [ ] The file has no `**Metadata**` section — bundle settings are editor-set
- [ ] Line length still follows dialogue economy — effects are not a license for longer lines

---

## Related

- [[How to make Dialogues]]
- [[Writer's Index]]
- [[Writing Flags — The Writer's Guide]]