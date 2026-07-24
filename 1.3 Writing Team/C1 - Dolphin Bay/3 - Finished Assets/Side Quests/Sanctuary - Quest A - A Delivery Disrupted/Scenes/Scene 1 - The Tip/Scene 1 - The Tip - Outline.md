---
tags:
Date_Created: 2026-07-18
---

```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Sanctuary - Quest A - A Delivery Disrupted - Outline]]

## Root Location

[[Dolphin Bay Sanctuary - Location Outline]]

## Character List

[[Lakshmi - Profile]]
Warren (fish supply transporter — see Quest A production notes)

## Setting Specifics

Guild Hall loading dock. Supply crates stacked near the water. A clipboard with delivery manifests. Warren is mid-count, transport worker's vest, focused on logistics. The dock is busy but not chaotic — regular supply day rhythm.

## General Description

Warren, a transport worker who handles sanctuary deliveries, notices Lakshmi and flags her down. He's been watching the fish orders shrink for three weeks and something doesn't add up. The catch reports show plenty of fish — someone is squeezing the sanctuary's supply on purpose.

He can't prove it, but his gut says Francois's protest has a quiet, petty arm. He tells Lakshmi what he knows and points her toward the fishermen at the docks for more information.

## Quest Logic

Trigger Start - HelpGyoFishSupply_0=True
Trigger Clear - HelpGyoFishSupply_1=True

## Actor Behaviours

Warren is at the guild hall loading dock during his normal supply route. This is his regular delivery run — Lakshmi catches him during his work. He is available for this dialogue only while on shift.

No other NPC schedules are affected during this scene.

---

# Scene Events

Lakshmi passes through the guild hall loading dock area. Warren notices her and waves her over. He's been wanting to tell someone about the sanctuary fish situation and Lakshmi, as the new carrier, is the right person.

The conversation covers what Warren has observed, who might be responsible, and where Lakshmi should go next. Warren gives her the supplier's location and sends her toward the docks.

---

# Scene Dialogues

Warren tips off Lakshmi about the sanctuary's fish supply being cut.
	|DIA|[[Warren_DeliveryChanges_0]]
		Trigger Start - HelpGyoFishSupply_0=True
		On Clear - HelpGyoFishSupply_1=True

---

# Scene Interactables


