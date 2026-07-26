---
tags:
Date_Created: 2026-07-18
---

```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Sanctuary - Quest B - What Are You Really Doing Out Here - Outline]]

## Root Location

[[Dolphin Bay Sanctuary - Location Outline]]

## Character List

[[Lakshmi - Profile]]
[[Gyo - Profile]]

## Setting Specifics

Secondary pens behind the sanctuary. Pigs root in the mud. Geese patrol the fence line. Gyo is in his element — this is his domain, the less-visited side of the sanctuary. Nearby, storage shelves hold equipment crates and older research materials. The Lamborghini terminal is visible but not yet highlighted — a piece of monitoring equipment collecting data for something beyond dolphin care.

## General Description

Gyo gives Lakshmi his version of the research tour — the feeding science side. He jokes that Anita showed her the "high-tech stuff" and now he'll show her where the real science happens. He walks her through the secondary pens: the pigs, the geese, the feeding experiments that started as a hobby and became a full research thread.

Gyo's tour is warm, self-deprecating, and grounded in care for animals. He connects everything back to the dolphins — presentation affects consumption, ritual affects mood, a dolphin who feels cared for heals faster.

Near the end of the tour, Lakshmi may notice the Lamborghini terminal — equipment unrelated to dolphin research. Gyo brushes it off as background monitoring but his body language shifts. He genuinely doesn't know the full scope of what it's collecting.

## Quest Logic

Trigger Start - LearnSanctuaryResearch_1=True
Trigger Clear - LearnSanctuaryResearch_2=True

## Actor Behaviours

Gyo is at the secondary pens during his normal 09:00 animal rounds. His usual route (pigs, dogs, geese) is expanded for the tour — he lingers at each station, telling stories. His 11:00 lunch prep is pushed slightly but not suspended. His 12:00 lunch with Anita continues as scheduled.

Anita is at her lab desk, not present for this scene. She may be visible through the windows but is focused on her work.

If Lakshmi interacts with the Lamborghini terminal (interactable, not a dialogue chain), Gyo's schedule pauses while he answers questions about it. He is hesitant, not evasive — he genuinely doesn't know what all the equipment does.

---

# Scene Events

Gyo leads Lakshmi to the secondary pens. He introduces her to the pigs and geese with obvious pride and humor. The "Sushi Research Division" bit lands — he's joking, but he's also serious. The diagonal-cut root vegetable experiments are real.

He connects his feeding research back to the dolphins. Care, not just nutrition. Trust, not just data.

Lakshmi can engage with the humor, ask about the dolphin connection, or express genuine appreciation for what the sanctuary does.

Near the end, the Lamborghini terminal is visible. If Lakshmi asks, Gyo admits he doesn't fully understand its purpose — Dr. Lamborghini provided it for monitoring, and Anita handles the technical side.

---

# Scene Dialogues

Gyo gives Lakshmi the feeding science tour — pigs, geese, and the philosophy of animal care.
	|DIA|[[Gyo_ResearchTour_0]]
		Trigger Start - LearnSanctuaryResearch_1=True
		On Clear - LearnSanctuaryResearch_2=True

---

# Scene Interactables

[[Lamborghini Terminal]]
	Fog-monitoring equipment in storage. Collecting data beyond dolphin care. Gyo doesn't fully understand its purpose.
		Trigger Start - LearnSanctuaryResearch_2=True
		On Clear - LearnSanctuaryResearch_3=True
