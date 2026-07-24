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

## Setting Specifics

Sanctuary lab. Anita's workstation covered in waveform printouts, logbooks, audio rigs. Decades of dolphin call data organized on the walls. The lab is cluttered but organized — every piece of paper means something to Anita. Her metronome is on the desk, ticking quietly.

## General Description

Anita gives Lakshmi the real tour of her research — not the polite version she gives visitors. She walks through twenty years of dolphin call data, frequency analysis, response patterns. She reveals that the dolphins who left showed a gradual frequency drop in their calls six to eight months before they went. She missed it at the time because she was looking at the wrong variable.

This is Anita at her most open — sharing her life's work with someone who genuinely wants to understand. The tour is dense, enthusiastic, slightly overwhelming. Lakshmi can ask about the variable Anita was tracking, ask to hear a recording, or ask whether Anita has shared this data with the town.

## Quest Logic

Trigger Start - LearnSanctuaryResearch_0=True
Trigger Clear - LearnSanctuaryResearch_1=True

## Actor Behaviours

Anita is in her lab, at her workstation. Her normal morning schedule (data entry, audio analysis, call-response experiment at 10:00) is suspended — she is giving the tour instead. Her 12:00 lunch with Gyo and 15:00 vocalization session continue unaffected.

She is more animated than usual. The research is her element. She speaks faster, gestures at equipment, moves through the lab pointing things out. This is Anita at her most comfortable — when she's sharing data with someone who's actually listening.

Gyo is not present in the lab but can be seen through the kitchen window, going about his normal prep work.

---

# Scene Events

Anita leads Lakshmi through the lab, pointing out equipment and logbooks. She stops at a workstation covered in waveform printouts — twenty years of data. She explains the frequency drop in the dolphins' calls before they left and admits she was tracking the wrong variable.

The tour is information-dense. Lakshmi chooses what to focus on. The scene ends when Anita has shared the core finding: the calls changed, and she missed it.

---

# Scene Dialogues

Anita gives Lakshmi the full research tour — the real version, not the polite summary.
	|DIA|[[Anita_ResearchTour_0]]
		Trigger Start - LearnSanctuaryResearch_0=True
		On Clear - LearnSanctuaryResearch_1=True

---

# Scene Interactables


