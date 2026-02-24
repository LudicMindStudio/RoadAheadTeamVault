---
tags:
Date_Created: 2026-02-23
---
```
> PLEASE TITLE - Quest QuestNumber - QuestName - Outline
```
# Quest Description

## Root Act

[[Act 1 - Lakshmi Graduates Outline]]
## Brainstorming Links

Brainstorming Document One 
Brainstorming Document Two...
## General Description 

Lakshmi wakes up in Grandpa Dan's Chalet and realizes she's late. 

Lakshmi wanders through the Chalet exterior woods making her way to Dolphin Bay. 

Lakshmi navigates Eastern Dolphin Bay and finds her way to the guildhall on Central Dolphin Bay.
## Quest Logic 
Trigger Start - Lakshmi_Wakes_Up=True 
Trigger Clear - Lakshmi_Visited_Hall=True 

--- 
# Quest Scenes

[[Scene 1 - Chalet First Morning - Outline]]
	Location: [[Grandpa Dan's Chalet - Location Outline]]
	Lakshmi goes downstairs and leaves the Chalet 
		Trigger Start - Lakshmi=True 
		Trigger Clear - Lakshmi_Left_Chalet=True

Scene 2 - Navigate Chalet Woods - Scene Outline
	Location: Granda Dan Chalet Exterior - Location Outline 
	Lakshmi finds an alternative path through the woods to Dolphin Bay 
		Trigger Start - Lakshmi_Left_Chalet=True
		Trigger Clear - Lakshmi_Enters_EasternDolphinBay=True 
	
Scene 3 - Lakshmi Finds the Guild Hall- Scene Outline
	Location 1: Eastern Dolphin Bay - Location Outline 
	Location 2: Central Dolphin Bay - Location Outline 
	Lakshmi finds the Guild Hall at Central Dolphin Bay
		Trigger Start - Lakshmi_Arrived_at_CentralDolphinBay=True 
		Trigger Clear - Lakshmi_Entered_GuildHall=True 
	