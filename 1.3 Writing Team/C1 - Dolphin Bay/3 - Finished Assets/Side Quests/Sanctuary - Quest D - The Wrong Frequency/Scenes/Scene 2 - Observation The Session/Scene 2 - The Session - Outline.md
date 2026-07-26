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

More dolphins begin showing up as the scene takes place. The sanctuary has been prepped for this experiment. A special microphone with a strange dish attachment sits on Anita's desk. Audio systems are wired throughout the lab.

## General Description

Anita walks Lakshmi through all the points of the research in an overwhelming way. Anita needs Lakshmi's help to operate some of the machinery while she is performing.

Anita begins to sing. Random wiring goes out around the lab. Lakshmi must fix the bugs as they arise or Anita will need to restart her singing.

Once the singing is done, all the dolphins look pleased and almost clapping, but Anita does not look pleased. She states the experiment was a failure, thanks Lakshmi for her help, and says she can pack up herself.

## Quest Logic

Trigger Start - HelpAnitaResearch_1=True
Trigger Clear - HelpAnitaResearch_2=True

## Actor Behaviours

Anita is at the main dolphin pen, operating the recording rig and singing. She is not available for optional dialogue during the experiment. Her usual lab desk, pier, and living quarter stations are vacant. She remains in performance mode until the singing ends.

Gyo appears at the edge of the scene, visible at the kitchen window or near the pens, observing but not intervening. He is available for brief dialogue after the experiment concludes, but his normal schedule anchors (morning feeding, lunch prep) continue unaffected.

---

# Scene Events

Anita runs up to a desk to gesture for Lakshmi to place down the box. Anita unpacks a special type of microphone with a strange dish on it.

Anita explains the rest of the experiment procedure. She warns that the audio systems might not be able to sustain the load from her amplified gadget, and that Lakshmi might have to fix the bugs as they arise.

Anita begins to sing as randomly wiring will go out around the lab. Lakshmi will have to go fix it or Anita will need to restart her singing.

Once the singing is done, all the dolphins look pleased and almost clapping but Anita does not look pleased. She says that the experiment was a failure. She thanks Lakshmi for her help and says she can pack up herself.

---

# Scene Dialogues

Anita thanks Lakshmi for the help moving and explains the experiment.
	|DIA|[[Anita_Session_0]]
		Trigger Start - HelpAnitaResearch_1=True

Anita asks Lakshmi if she's ready to start and warns about audio surges.
	|DIA|[[Anita_Session_Start_0]]
		Trigger Start - HelpAnitaResearch_1=True

Anita states the results of the experiment.
	|DIA|[[Anita_Session_Done_0]]
		Trigger Start - HelpAnitaResearch_1=True
		On Clear - HelpAnitaResearch_2=True

---

# Scene Interactables

[[Anita's Research Notes - Interactable]]
	Anita's notes of the transcript. Available to be interacted with after the scene.
		Trigger Start - HelpAnitaResearch_2=True

Power Surges
	Special interactable as part of the Anita singing minigame. Wiring fails at random. Lakshmi must reset breakers and reconnect loose wiring.
