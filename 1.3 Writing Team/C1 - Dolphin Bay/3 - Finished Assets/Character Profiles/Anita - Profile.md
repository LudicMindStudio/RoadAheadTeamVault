---
tags:
  - DolphinBay
  - Sanctuary
Date_Created: 2026-07-07
Age: ~60s
Profession: Dolphin Communication Researcher (Sanctuary)
---

# Reference Art Links

![User:TrainerSplash/Lillie/Lillie (Gallery) - Bulbapedia, the community ...](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.1KCQK2fr_P2i8DXTb92l3wAAAA%3Fr%3D0%26pid%3DApi&f=1&ipt=6272084d92ebd4976284f5032aba834cbcefbc8279c26c925881b02e0e486128)

MIXED WITH 

![[Pasted image 20260708193653.png]]

## Portraits

# Description

## Appearance

Tall, straight posture — stands like a pencil. Greying hair pulled back in a comically protruded pony tail, but still functional. Wears practical lab-adjacent clothing: a faded jacket with too many pockets, durable boots. Always has a pair of over-ear headphones around her neck or a small handheld recorder nearby. Her hands are often still but she often stands in pensive poses. Carries an old electric metronome from pre-Calamity as a personal totem — sometimes taps along to it unconsciously.

## Core Characteristics

Anita is the sanctuary's empirical half. She communicates with dolphins through sound — singing, synthesized audio, call-and-response pattern analysis. She is brilliant at her work and completely lost when it comes to people. Her default mode is matter-of-fact: when someone is emotional, she responds with data. It's not coldness, she genuinely believes information is the most helpful thing she can offer. She just can't read the room.

Deeply analytical. Keeps meticulous logs. Hums constantly, there's always a tune running underneath everything she does. Has strong opinions about coffee and will critique the brewing method of anyone who offers her a cup. Her research is her life's work and she believes, with absolute certainty, that she is on the verge of a breakthrough in dolphin communication. This certainty is both her strength and her blind spot.

## Essential History

Anita and her husband Gyo have worked at the Dolphin Bay sanctuary for decades, since before the Calamity, since the fog changed everything. They arrived as young researchers and never left. The sanctuary became their life, their home, their project together. They've weathered funding crises, equipment failures, the slow growth and shift of the town's attention as the fog reshaped everyone's priorities. But they always had their work that still needed to be done. 

Anita was able to continue her technical work post calamity, even without the electricity to power the more complex research machines. The new equipment given by Dr. Lamborghini have been able to help fill the void, but mostly, Anita's is left the more fundamental research techniques, which she prefers.  

The last few months have been the hardest. With only one or two dolphins remaining, and they're listless, low-energy, and seemingly depressed. Anita sees how powerful the time at the sanctuary is for these dolphins as their last resort. Anita has poured everything into understanding why. She's convinced the key is communication - that if she can find the right frequency, the right pattern, she can reach them. She doesn't know if the fog is involved. She doesn't care. The problem is the dolphins, and the solution is her research.

~~When Francois came to the sanctuary demanding answers about Fin, Anita tried to help. She explained her research. She used her terminology. She tried to reassure him with data. The mismatch between his panic and her clinical delivery inflamed him. She didn't understand why he was getting angrier — she was trying to help. Her husband Gio came out to de-escalate, but by then it was too late.~~

## Relationships

**[[Gyo - Profile]]** — Her husband of decades. Her opposite in every way that matters and her perfect complement. He's warm where she's clinical, talkative where she's terse, creative where she's empirical. They finish each other's sentences and jab each other constantly. He worries she over-exerts herself. She tells him to stop worrying.

**[[Francois Hustle - Profile]]** — ~~The source of the town's anger. She doesn't understand why he's so upset — she tried to help him. She hasn't processed that her attempt at reassurance was the thing that broke everything.~~

**[[Cat - Profile]]** — Wrote to the sanctuary. To follow up

---

<<<<<<< HEAD
---

=======
>>>>>>> origin/master
## Daily Schedule

See the [[18-sanctuary-production-plan]] in the project planning folder for the full time-blocked schedule. Key anchors:
- **07:00** — Morning vocalization at the dolphin pens (Anchor 2 — non-negotiable)
- **12:00** — Lunch with Gyo — best player conversation window (Anchor 3)
- **17:00** — Wind down with metronome and coffee on the pier

State variants: on research failure, 15:00 block shifts to reflection at the pier.

---

# Character Dialogue

All dialogue files are at `Dialogues/Anita/`.

## [[OpenIntroduction_Anita_0]] — First Meeting
*Lakshmi's first meeting with Anita in the lab.*
- `Requires: Lakshmi_Visits_Sanctuary_First=True`
- `Sets: Lakshmi_Met_Anita=True`

<<<<<<< HEAD
## [[AnitaResearch_0]] — Research Deep Dive
*Anita explains her dolphin communication research in detail.*
- `Requires: Lakshmi_Met_Anita=True`
- `Sets: Lakshmi_Known_About_Anita_Dolphin_Calls=True`

=======
Lakshmi: dsadsadas

Anita: dadsada

Option 1
Option 2

## [[AnitaResearch_0]] — Research Deep Dive
*Anita explains her dolphin communication research in detail.*
- `Requires:Lakshmi_Has_3_Hearts=True`
- `Sets: Lakshmi_Known_About_Anita_Dolphin_Calls=True`

>>>>>>> origin/master
## [[AboutFrancois_0]] — The Confrontation
*Anita's clinical perspective on what happened when Francois came to the sanctuary.*
- `Requires: Lakshmi_Met_Anita=True`

## [[AnitaNonApology_0]] — After the Research Fails
*Post-Quest D. Anita on the pier at sunset, metronome ticking.*
- `Requires: DolphinBay_Research_Failed=True`
- `Sets: DolphinBay_Anita_Accepted_Failure=True`
