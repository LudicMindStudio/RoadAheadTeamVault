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



## General Description: "What Are You Really Doing Out Here?"

Lakshmi has gained some trust at the sanctuary. She digs deeper into the research. The protest narrative says the sanctuary is hiding something. It's true — but not in the way anyone thinks. Anita's dolphin communication and Gyo's feeding research are genuine. But there's a piece of monitoring equipment in the lab that Dr. Lamborghini provided — collecting data for something beyond basic dolphin care. Neither researcher fully understands its purpose. Lakshmi finds enough to know something larger is going on, but not enough to resolve it here.

This sets up the larger mystery thread (the game-wide secret about the fog's origin and the research network). It doesn't resolve. It just opens a door.

## Quest Logic

Trigger Start - LearnSanctuaryResearch_0=True (Trust threshold with both Anita and Gyo)
Trigger Clear - LearnSanctuaryResearch_3=True

---

# Quest Scenes

[[Scene 1 - The Full Tour - Outline]]
	Location: [[Dolphin Bay Sanctuary - Location Outline#Sub-Locations]] Sanctuary lab
	Trigger Start - LearnSanctuaryResearch_0=True
	Trigger Clear - LearnSanctuaryResearch_1=True

[[Scene 2 - Something Doesn't Fit - Outline]]
	Location: [[Dolphin Bay Sanctuary - Location Outline#Sub-Locations]] Secondary pens and storage
	Trigger Start - LearnSanctuaryResearch_1=True
	Trigger Clear - LearnSanctuaryResearch_2=True

[[Scene 3 - Loose Threads - Outline]]
	Location: [[Dolphin Bay Sanctuary - Location Outline]] Sanctuary lab, Lamborghini terminal
	Trigger Start - LearnSanctuaryResearch_2=True
	Trigger Clear - LearnSanctuaryResearch_3=True
