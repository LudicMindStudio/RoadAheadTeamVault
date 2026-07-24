---
tags:
Date_Created: 2026-07-18
---

```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Sanctuary - Quest D - The Wrong Frequency - Outline]]

## Root Location

[[Dolphin Bay Sanctuary - Location Outline]]

## Character List

[[Anita - Profile]]
[[Lakshmi - Profile]]

## Setting Specifics

Research equipment added around the main sanctuary room. A recording rig, cables, a waterproof speaker on a pole. Anita is mid-setup, slightly winded from moving equipment.

## General Description

Anita asks Lakshmi to help set up recording equipment at a specific spot on the pier. Simple task, run a cable, check the connection. Anita explains the experiment while they work: she's trying a new frequency range, and the positioning needs to be precise.

Lakshmi can accept or decline. If she declines, Anita accepts it and moves on without overriding her behaviour.

## Quest Logic

Trigger Start - HelpAnitaResearch_0=True
Trigger Clear - HelpAnitaResearch_1=True

## Actor Behaviours

Anita is no longer at her usual lab desk or pier stations. She is in the reception room, moving equipment, slightly winded, focused on setup. Her normal morning vocalization and afternoon session anchors are replaced by prep work for the experiment. She is not available for optional dialogue while setting up.

Gyo's schedule is unchanged during this scene.

---

# Scene Events

Lakshmi arrives. Anita is setting down equipment with a heavy exhale. Winded from moving gear.

After Lakshmi listens to the dialogue and picks up the box, the scene completes.

---

# Scene Dialogues

Anita explains to Lakshmi what she's doing. Lakshmi can accept to help or not.
	|DIA|[[ExplainGeneralExperiment_0]]
		Trigger Start - HelpAnitaResearch_0=True
		On Clear - Lakshmi_Agreed_To_Help=|BOOL|

Anita walks Lakshmi through the equipment.
	|DIA|[[SetupExperiment_0]]
		Trigger Start - Lakshmi_Agreed_To_Help=True
		On Clear - HelpAnitaResearch_1=True

---

# Scene Interactables

[[Anita's Research Equipment - Interactable]]
	Research equipment picked up by Lakshmi to help move into the main room.
		Trigger Start - HelpAnitaResearch_0=True
