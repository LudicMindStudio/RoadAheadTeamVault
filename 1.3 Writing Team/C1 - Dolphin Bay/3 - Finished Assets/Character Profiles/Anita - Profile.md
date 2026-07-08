---
tags:
  - DolphinBay
  - Sanctuary
Date_Created: 2026-07-07
Age: ~60s
Profession: Dolphin Communication Researcher (Sanctuary)
---

# Reference Art Links

*None yet*

# Description

## Appearance

Tall, straight posture — stands like a pencil. Greying hair pulled back, functional. Wears practical lab-adjacent clothing: a faded jacket with too many pockets, durable boots. Always has a pair of over-ear headphones around her neck or a small handheld recorder nearby. Her hands are often still — she doesn't fidget much, except when thinking (then she'll grab at her hair absently). Carries an old electric metronome from pre-Calamity as a personal totem — sometimes taps along to it unconsciously.

## Core Characteristics

Anita is the sanctuary's empirical half. She communicates with dolphins through sound — singing, synthesized audio, call-and-response pattern analysis. She is brilliant at her work and completely lost when it comes to people. Her default mode is matter-of-fact: when someone is emotional, she responds with data. It's not coldness — she genuinely believes information is the most helpful thing she can offer. She just can't read the room.

Deeply analytical. Keeps meticulous logs. Hums constantly — there's always a tune running underneath everything she does. Has strong opinions about coffee and will critique the brewing method of anyone who offers her a cup. Her research is her life's work and she believes, with absolute certainty, that she is on the verge of a breakthrough in dolphin communication. This certainty is both her strength and her blind spot.

## Essential History

Anita and her husband Gio have worked at the Dolphin Bay sanctuary for decades — since before the Calamity, since the fog changed everything. They arrived as young researchers and never left. The sanctuary became their life, their home, their project together. They've weathered funding crises, equipment failures, the slow shift of the town's attention as the fog reshaped everyone's priorities.

The last few years have been the hardest. The dolphins started leaving. At first it was gradual — a pod that used to visit stopped coming. Then more. Now only one or two remain, and they're listless, low-energy, depressed. Anita has poured everything into understanding why. She's convinced the key is communication — that if she can find the right frequency, the right pattern, she can reach them. She doesn't know if the fog is involved. She doesn't care. The problem is the dolphins, and the solution is her research.

When Francois came to the sanctuary demanding answers about Fin, Anita tried to help. She explained her research. She used her terminology. She tried to reassure him with data. The mismatch between his panic and her clinical delivery inflamed him. She didn't understand why he was getting angrier — she was trying to help. Her husband Gio came out to de-escalate, but by then it was too late.

## Relationships

**[Gyo - Profile]]** — Her husband of decades. Her opposite in every way that matters and her perfect complement. He's warm where she's clinical, talkative where she's terse, creative where she's empirical. They finish each other's sentences and jab each other constantly. He worries she over-exerts herself. She tells him to stop worrying.

**[[Francois Hustle - Profile]]** — The source of the town's anger. She doesn't understand why he's so upset — she tried to help him. She hasn't processed that her attempt at reassurance was the thing that broke everything.

**[[Sammy - Profile]]** — One of the few people in town who defends the sanctuary. "Too bad no one believes them." Anita doesn't know this kid exists, but he's out there on her side.

**[[Cat - Profile]]** — Wrote to the sanctuary. Anita may or may not have read the letter.

# Brainstorming Links

[[Sanctuary Worker Development - Notes]] (planning doc)
[[Anita - Dialogue Stubs]]

---

# Character Dialogue

*To be written*

OPENING_INTRODUCTION
  Brief summary: Lakshmi's first meeting with Anita at the sanctuary
    Trigger Start - Lakshmi_Visits_Sanctuary_First=True
    On Clear - Lakshmi_Met_Anita=True

RESEARCH_EXPLANATION
  Brief summary: Anita explains her dolphin communication research
    Trigger Start - Lakshmi_Met_Anita=True, Lakshmi_Asks_About_Research=True
    On Clear - Lakshmi_Knows_About_Dolphin_Calls=True

ABOUT_FRANCOIS
  Brief summary: Anita's perspective on the Francois confrontation
    Trigger Start - Lakshmi_Knows_About_Anita_Dolphin_Calls=True, Lakshmi_Asks_About_Francois=True
    On Clear - Lakshmi_Hears_Anitas_Side=True
