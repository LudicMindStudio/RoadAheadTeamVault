---
tags:
Date_Created:
---
```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Quest 3 - Deliver Mail to Intern - Outline]]
## Root Location

[[Guild Hall - Location Outline]]
## Character List

[[Greg - Profile]]

Lakshmi 
## Brainstorming Links

[[Act 1 - Pre-graduation Revision]]
## Setting Specifics  

Second Floor. Greg behind his desk.
## General Description 

Greg Tells Lakshmi to deliver letter for intern as part of the practical test to become postal worker.
## Scene Logic 
Trigger Start - LakshmiInteractsGregPracticalTest=True 
{>>Not a big deal, but I think when this scene finishes, Lakshmi hasn't finished the practical test. She's been given the practical test. So something like "lakshmi has practical test = true" is a bit better. That way we could have custom interactions with the guild members where they're all like "the intern is in the mailroom!" etc<<}{>>CL: done. changed var<<}On Clear - LakshmHasInternLetter=True

--- 
# Scene Events

[[Event 1 - ReadyForPracticalTest - Script]]
	Lakshmi goes up to Greg to take the Practical test
		Trigger Start - LakshmiInteractsGregPracticalTest=True
		On Clear - LakshmHasInternLetter=True 

---  
# Scene Dialogues

NA

---
# Scene Interactables

NA

**Options**
- |DIA|[[Scene 1 - Practical Test - Quest Giver - Scene Outline_1]] : Test