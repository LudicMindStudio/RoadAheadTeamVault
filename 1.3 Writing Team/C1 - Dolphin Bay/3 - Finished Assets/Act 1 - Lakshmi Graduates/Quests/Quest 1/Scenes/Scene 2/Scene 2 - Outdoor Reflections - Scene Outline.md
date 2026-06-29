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
	On Clear: 
	- LakshmiInsultsGrandpaDan=True (FogChat_0_2, FogChat_0_1_1_1_3_2)
	-LakshmiSupportsFogMemories=True (FogChat_0_1_1_1_2 and FogChat_0_1_1_1_3_1)
	-LakshmiWantsNewMemories=True (FogChat_0_1_1_1_1)

[[Event 3 - Forest Sounds - Script ]]
	Lakshmi thinks about the forest 
	Trigger start - Lakshmi enters Forest to Chalet 

