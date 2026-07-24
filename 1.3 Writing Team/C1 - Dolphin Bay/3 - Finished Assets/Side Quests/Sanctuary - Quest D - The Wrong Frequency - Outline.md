---
tags:
  - DolphinBay
  - Sanctuary
Date_Created: 2026-07-07
Date_Modified: 2026-07-18
---

```
> PLEASE TITLE - Quest QuestNumber - QuestName - Outline
```

# Quest Description

## Root Act

Dolphin Bay Village Story (Act 2)

## Brainstorming Links



## General Description: "The Wrong Frequency"

[[Anita - Profile]] is convinced she's one breakthrough away from communicating with the dolphins. She's been running experiments for months, different frequencies, different synthesized calls, and nothing is working. The remaining dolphins aren't responding the way she expects. She interprets this as "not the right frequency yet."

The player helps Anita run experiments, observes the dolphins, and ultimately witnesses the research fail. The real resolution isn't technical, it's Anita sitting with the lesson that not everything can be solved through data.

**This is a relationship quest.**

## Quest Logic

Trigger Start - HelpAnitaResearch_0=True (Relationship above 5 hearts)
Trigger Clear - HelpAnitaResearch_3=True

---

# Quest Scenes

[[Scene 1 - The New Frequency - Outline]]
	Location: [[Dolphin Bay Sanctuary - Location Outline#Sub-Locations]] Reception room
	Trigger Start - HelpAnitaResearch_0=True
	Trigger Clear - HelpAnitaResearch_1=True

[[Scene 2 - The Session - Outline]]
	Location: [[Dolphin Bay Sanctuary - Location Outline#Sub-Locations]] Main dolphin pen
	Trigger Start - HelpAnitaResearch_1=True
	Trigger Clear - HelpAnitaResearch_2=True

[[Scene 3 - The Failure - Outline]]
	Location: [[Dolphin Bay Sanctuary - Location Outline]] Sanctuary pier, evening
	Trigger Start - HelpAnitaResearch_2=True
	Trigger Clear - HelpAnitaResearch_3=True
