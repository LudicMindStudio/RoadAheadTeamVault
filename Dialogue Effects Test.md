# Dialogue Effects — Test File

This file exercises every effect shape. Open it in Obsidian and check the preview: styled spans, behavior hints, pills, sentiment chips. The stored text is untouched; only the preview changes.

---

## Inline effects — color, size, style

Camie: This word is [red]{color=red}, this one is [small]{font_size=0.7}, and this is [big]{font_size=1.4}.

Anita: [Bold]{text_effect=bold} and [italic]{text_effect=italic} both work.

---

## Behavior effects

Camie: [shake]{text_effect=shake} [wave]{text_effect=wave} [dangle]{text_effect=dangle} [bounce]{text_effect=bounce}

Gyo: [swing]{text_effect=swing} [rainbow]{text_effect=rainbow} [fade]{text_effect=fade}

---

## Multiple effects on one span

Lakshmi: [I'm new]{font_size=0.7, text_effect=bold, color=gray}

---

## Unknown annotations — stored, never an error

Camie: [groovy]{text_effect=groovy} and [mystery]{text_effect=mystery_custom}

(The renderer marks them as unknown. The game stores them too; it never errors.)

---

## Standalone effects — fire at a point

Camie: ...all the riff raff. {sfx="whisper"} Don't tell Gatz.

Gyo: {text_speed=0.5} This types slowly. {text_speed=1} This is normal speed.

Anita: {effect=screen_shake} The screen shakes. {effect=camera_zoom} Zoom. {effect=flash} Flash.

Lakshmi: {custom_action=1} A scripted action fires here.

---

## Sentiment — per-line portrait

Camie{neutral}: neutral
Camie{happy}: happy
Camie{sad}: sad
Camie{angry}: angry
Camie{excited}: excited
Camie{surprised}: surprised
Camie{whispering}: whispering
Camie{cheerful}: open-ended sentiments work too

---

## Escapes — literal brackets and braces

Lakshmi: I love \[brackets\] and \{braces\}!

---

## Conditional marker (renders dim, not styled)

{Requires=Test_Flag=True}

(Flag conditions look like this. The plugin renders them dim so they don't read as effects.)

---

## Notes

- This file is a plugin test, not an importable dialogue bundle. No **Conditions** or **Sets** sections on purpose.
- Fake flag in the conditional line above: scanner ignores lines outside Conditions/Sets sections.