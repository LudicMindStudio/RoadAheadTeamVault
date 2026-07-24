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
[[Anita - Profile]]
[[Gyo - Profile]]

## Setting Specifics

Sanctuary lab, post-tours. The Lamborghini terminal is accessible — a monitor displaying data feeds unrelated to dolphin research. Anita's logbooks are nearby. The metronome ticks. The sanctuary's dual nature is visible: genuine animal care alongside equipment that serves a larger, less-understood purpose.

## General Description

Lakshmi processes what she's found. The sanctuary IS trying to help the dolphins — the research is real, Anita's dedication is genuine, Gyo's care is authentic. But there's also something bigger going on. The Lamborghini terminal. The fog-monitoring equipment. Data being collected for something beyond basic dolphin care.

Anita and Gyo are not part of the conspiracy — they're tools of it, whether they know it or not. The question stays open. Nothing resolves here.

## Quest Logic

Trigger Start - LearnSanctuaryResearch_2=True
Trigger Clear - LearnSanctuaryResearch_3=True

## Actor Behaviours

This scene is a stub — no dialogue chains exist yet. The Lamborghini terminal is the primary interactable. When implemented, it should trigger an inspect dialogue chain (Inspect_LamborghiniTerminal_0) and possibly a brief follow-up with Anita or Gyo.

Anita and Gyo are at their normal stations. Anita at her lab desk, Gyo in the kitchen. Both are available for optional dialogue post-scene.

---

# Scene Events

*[STUB — needs implementation when Lamborghini terminal chain is created.]*

Lakshmi examines the terminal. The data feeds are environmental monitoring — fog density, atmospheric readings, signal traces. Nothing obviously sinister. But the collection pattern doesn't match dolphin research. Someone is gathering data through the sanctuary's equipment.

Anita may offer her perspective: she uses some of the readings for her own work, but admits Dr. Lamborghini asked her to keep the terminal running and she never questioned why.

---

# Scene Dialogues

*[STUB — Inspect_LamborghiniTerminal_0 needs creation per production plan Track 1.]*

---

# Scene Interactables

[[Lamborghini Terminal]]
	Inspect dialogue pending — Track 1 item in production plan.
		Trigger Start - LearnSanctuaryResearch_2=True
		On Clear - LearnSanctuaryResearch_3=True
