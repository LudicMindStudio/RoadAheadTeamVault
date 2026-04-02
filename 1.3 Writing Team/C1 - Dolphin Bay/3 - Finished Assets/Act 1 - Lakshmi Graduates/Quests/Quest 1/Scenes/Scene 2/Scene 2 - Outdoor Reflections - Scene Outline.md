---
tags:
Date_Created: 2026-04-01
---
```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Quest 1 - Visit the Guild Hall - Outline]]
## Root Location

[[Greg's Chalet Exterior - Location Outline]]
## Character List

Lakshmi 
Grandpa Dan
## Brainstorming Links

[[Act 1 - Pre-graduation Revision]]
## Setting Specifics  

Grandpa Dan is found sitting on a bench on top of a large cliff. 
## General Description 

Lakshmi reflects on where to go next. 
Lakshmi talks to Grandpa Dan about the fog. 

## Scene Logic 
Trigger Start - LakshmiFirstExitsChalet=True
Trigger Clear - LakshmiLeavesChaletExterior=True

--- 
# Scene Events

[[Event 1 - Lakshmi Reminds Herself - Script]]
	Lakshmi reminds herself to go to the guildhall 
		Trigger Start - Lakshmi takes a few steps outside of the Chalet= True

[[Event 2 - Sitting Down with Grandpa - Script]]
	Lakshmi chats with Grandpa Dan
		Trigger Start - Lakshmi passes by Grandpa Dan sitting on the bench = True 
		On Clear - LakshmiInsultsGrandpaDan=True (Option #)
				-LakshmiSupportsFogMemories (Option # and Option #)
				-LakshmiWantsNewMemories (Option #)

---  
# Scene Dialogues

DIALOGUE_0 ONE
	Brief summary of Dialogue One 
		Trigger Start - ExampleTag=True 
		On Clear - ExampleTag=True 

DIALOGUE_0 TWO... 
	Brief summary of Dialogue Two 
		Trigger Start - ExampleTag=True 
		On Clear - ExampleTag=True 

---
# Scene Interactables

INTERACTABLE ONE
	Brief summary of Interactable One 
		Trigger Start - ExampleTag=True 
		On Clear - ExampleTag=True 

INTERACTABLE TWO
	Brief summary of Interactable One 
		Trigger Start - ExampleTag=True 
		On Clear - ExampleTag=True 


