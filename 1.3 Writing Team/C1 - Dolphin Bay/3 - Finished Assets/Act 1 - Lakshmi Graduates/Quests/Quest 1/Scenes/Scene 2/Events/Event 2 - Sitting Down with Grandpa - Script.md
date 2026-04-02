---
tags:
Date_Created: 2026-04-01
Characters:
---
```
> PLEASE TITLE - Event - Event Number - EventName -  Script
```
# Event Description

## Root Scene

[[Scene 2 - Outdoor Reflections - Scene Outline]]
## General Description

Lakshmi chats with Grandpa Dan about the fog 
## Event Logic

Trigger Start - Lakshmi passes by Grandpa Dan sitting on the bench = True 
On Clear:
	- LakshmiInsultsGrandpaDan=True (FogChat_0_2, 
	-LakshmiSupportsFogMemories=True (FogChat_0_1_1_1_2 and Option #)
	-LakshmiWantsNewMemories=True (FogChat_0_1_1_1_1)

--- 
# Event Script

Action - Lakshmi Goes up to Granpda Dan 
	Small steps towards Grandpa Dan 

Environmental Description - Parallax Map
	A parallax map of the world appears on screen.  Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. 
	On Clear - ExampleTag=True

|DIA|[[FogChat_0]]
	Brief summary of dialogue 
	On Clear - ExampleTag=True

Action - Grandpa Dan turns
	Granpda goes from looking at the beach to looking at Lakshmi 
	Trigger Start - After narrator's line (a light breeze touches your cheek)

Action - Grandpa Dan jumps  


Action - Sit Down with Granpda
	Lakshmi sits down with Grandpa Dan, simutaneous with FogChat
	Trigger Start - Action triggers if FogChat_1 is selected 

Action - Lakshmi runs off 
	Lakshmi sits down with Grandpa Dan, simutaneous with FogChat

Action - Grandpa Dan turns back to the fog 
	Grandpa Dan turns from looking at Lakshmi go, to looking back at the fog 

Action - Grandpa Dan gets up 
	Grandpa Dan stands and starts to look around 

