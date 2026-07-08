---
tags:
  - DolphinBay
  - Sanctuary
Date_Created: 2026-07-07
Age: ~60s
Profession: Dolphin Behavioral Researcher (Sanctuary)
---

# Reference Art Links

*None yet*

# Description

## Appearance

Stocky, warm-faced. Always wears a bandana (often patterned, sometimes mismatched with his apron). A well-worn chef's apron over durable clothes. Has a good knife on his waist at all times — not a weapon, a tool. His hands are always moving — gesturing while he talks, adjusting his bandana, picking things up and putting them down. Smells faintly of fish no matter how recently he washed.

## Core Characteristics

Gyo is the sanctuary's creative half. His research domain is feeding and behavioral observation — how food preparation affects dolphin mood, how presentation changes engagement, whether the ritual of a meal matters as much as the nutrition. He treats cooking as an experimental science and every meal as a data point.

He is warm, talkative, and de-escalating by nature. Where Anita meets conflict with data, Gyo meets it with a joke and an open hand. He's the one who tells Francois to calm down, who smooths things over with the fish suppliers, who makes sure the sanctuary still has friends even when the town is angry. But he's not a pushover — he's genuinely charismatic, just non-confrontational.

His worry is Anita. He watches her burn herself on her research, convinced the next breakthrough is one experiment away, and he can't stop her because he doesn't want to. He believes in her. He's just afraid she'll break before she gets there.

Has a quieter suspicion that the fog is involved in the dolphins leaving — that this might be beyond their control. He doesn't voice this to Anita because she won't hear it, but he feels it. Intuition, not data. He's a wise enough man to trust his gut.

## Essential History

Same as Anita — decades at the sanctuary, pre-Calamity arrivals, built a life around this place. He came as a culinary researcher interested in animal nutrition and stayed because he fell in love with both the work and the woman doing it next to him.

His research has taken strange turns over the years. The sushi experiments started as a hobby — he was making himself lunch and noticed the dolphins were more engaged with carefully prepared food than with standard feed. He chased that observation into a full research thread: does presentation affect consumption? Does ritual affect mood? Does a dolphin who feels cared for heal faster?

He's not as convinced as Anita that the answer is just around the corner. He's more comfortable with uncertainty. But he'll never say that to her.

## Relationships

**[Anita - Profile]]** — His wife. His partner in everything. He worries about her constantly and expresses it through jokes and fresh sushi. They have the kind of marriage where a single look communicates an entire conversation.

**[[Francois Hustle - Profile]]** — Came out after Anita got cornered. Tried to talk Francois down. Couldn't. Respects Francois's passion even if he thinks it's misdirected. Might quietly understand where the anger comes from.

**Gordon (Guild map maker)** — Probably the one who coordinates fish deliveries to the sanctuary. They'd have a working relationship — Gordon sends supplies, Gyo sends back observations or data notes.

**[[Sammy - Profile]]** — Would like this kid if he ever met him. A boy who wants to open a turtle sanctuary? Gyo would see a kindred spirit.

# Brainstorming Links

[[Sanctuary Worker Development - Notes]] (planning doc)
[[Gyo - Dialogue Stubs]]

---

# Character Dialogue

*To be written*

OPENING_INTRODUCTION
  Brief summary: Lakshmi's first meeting with Gyo at the sanctuary
    Trigger Start - Lakshmi_Visits_Sanctuary_First=True
    On Clear - Lakshmi_Met_Gyo=True

ABOUT_HIS_RESEARCH
  Brief summary: Gyo explains the sushi experiments
    Trigger Start - Lakshmi_Met_Gyo=True, Lakshmi_Asks_About_Research=True
    On Clear - Lakshmi_Knows_About_Feeding_Research=True

ABOUT_ANITA
  Brief summary: Gyo opens up slightly about worrying for Anita
    Trigger Start - Lakshmi_Met_Anita=True, Lakshmi_Knows_About_Research=True
    On Clear - Lakshmi_Sees_Gyos_Worry=True

INTUITION_ABOUT_FOG
  Brief summary: Gyo mentions his suspicion that the fog is involved
    Trigger Start - Lakshmi_Sees_Gyos_Worry=True, Lakshmi_Asks_About_Fog=True
    On Clear - Lakshmi_Hears_Fog_Theory=True
