---
tags:
  - DolphinBay
  - Sanctuary
Date_Created: 2026-07-07
Age: ~60s
Profession: Dolphin Behavioral Researcher (Sanctuary)
---

# Reference Art Links
[

![Brock - Pokémon Wiki - Neoseeker](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.5ko2A1VQF1etKIuR3o8TIwAAAA%3Fpid%3DApi&f=1&ipt=22689c102368b77069408b7b9dee7aa5d01d2e5e71b127390d800226d194bd35)![Brock - Pokémon Wiki - Neoseeker](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.staticneo.com%2Fw%2Fpokemon%2F7%2F71%2FDP-Brock.png&f=1&nofb=1&ipt=6483819c0310ccc9f3a74852575ee8d0c9bf24b6fd4e3a38dd0522046dea6e23)


MIXED WITH 


![Dave The Diver Save Location On PC And Steam](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIP.qTbUf-5KCE3iO6sBhQ_UlQHaEK%3Fr%3D0%26pid%3DApi&f=1&ipt=93b2194145f166152823900b8feb450b2048811658977664b045a515d0da84b2)
# Description

## Appearance

Stocky, warm-faced. Always wears a bandana (often patterned, sometimes mismatched with his apron). A well-worn chef's apron over durable clothes. Has a good knife on his waist at all times, a tool sturdy lightly ornamented tool. His hands are always moving, gesturing while he talks, adjusting his bandana, picking things up and putting them down. Smells faintly of fish no matter how recently he washed.

## Core Characteristics

Gyo is the sanctuary's creative half. His research domain is feeding and behavioral observation, how food preparation affects dolphin mood, how presentation changes engagement, whether the ritual of a meal matters as much as the nutrition. He knows how to keep the dolphins coming back. He treats cooking as an experimental science and every meal as his data point.

He is warm, talkative, and de-escalating by nature. Where Anita meets conflict with data, Gyo meets it with a joke and an open hand. 
He's does this by [trying to get Francois to calm down], who [smooths things over with the fish suppliers], who [makes sure the sanctuary still has friends even when the town is angry]. But he's not a pushover, he's genuinely charismatic, just non-confrontational.

He worries about Anita. He watches her burn herself on her research, convinced the next breakthrough is one experiment away. He's worried she'll go too far. He believes in her and knows she wont risk that for him, but also that hes the one who has to help her know when enough is enough. 

He has a  suspicion that the fog is involved in the dolphins leaving, that this might be beyond their control. Intuition, not data. He's a wise enough man to trust his gut.

## Essential History

Same as Anita — decades at the sanctuary, pre-Calamity arrivals, built a life around this place. He came as a culinary researcher interested in animal nutrition and stayed because he fell in love with both the work and the woman doing it next to him.

His research has taken strange turns over the years. The sushi experiments started as a hobby — he was making himself lunch and noticed the dolphins were more engaged with carefully prepared food than with standard feed. He chased that observation into a full research thread: does presentation affect consumption? Does ritual affect mood? Does a dolphin who feels cared for heal faster?

He's not as convinced as Anita that the answer is just around the corner. He's more comfortable with uncertainty. But he'll never say that to her.

## Relationships

**[Anita - Profile]]** — His wife. His partner in everything. He worries about her constantly and expresses it through jokes and fresh sushi. They have the kind of marriage where a single look communicates an entire conversation.

**[[Francois Hustle - ProfileArchive]]** — Came out after Anita got cornered. Tried to talk Francois down. Couldn't. Respects Francois's passion even if he thinks it's misdirected. Might quietly understand where the anger comes from.

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
