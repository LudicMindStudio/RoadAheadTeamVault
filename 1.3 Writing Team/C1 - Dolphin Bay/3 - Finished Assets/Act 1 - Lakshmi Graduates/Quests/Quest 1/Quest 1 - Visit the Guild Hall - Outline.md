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

Lakshmi wakes up in Greg's Chalet and realizes she's late. 

Lakshmi wanders through the Chalet exterior woods making her way to Dolphin Bay. 

Lakshmi navigates Eastern Dolphin Bay and finds her way to the guildhall on Central Dolphin Bay.
## Quest Logic 
Trigger Start - Lakshmi_Wakes_Up=True (start of the game)
Trigger Clear - Lakshmi_Visited_GuildHall=True (Lakshmi enters the Guildhall)

--- 
# Quest Scenes

<<<<<<< HEAD
[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Scene 1 - Chalet First Morning - Outline]]
=======
[[Scene 1 - Chalet First Morning - Outline]]
>>>>>>> origin/master
	Location: [[Greg's Chalet - Location Outline]]
	Lakshmi goes downstairs and leaves the Chalet 
		Trigger Start - Lakshmi=True 
		Trigger Clear - Lakshmi_Left_Chalet=True


[[Scene 2 - Outdoor Reflections - Scene Outline]]
	Location: [[Greg's Chalet Exterior - Location Outline]] [[Grandpa Dan's Bench Overlooking Dolphin Bay - POI]]
	Lakshmi can sit down with Grandpa Dan to contemplate the fog 
		Trigger Start - Lakshmi_Left_Chalet=True
		Trigger Clear - Lakshmi_Enters_EasternDolphinBay=True 

Scene 3 - Navigate Chalet Woods - Scene Outline
	Location: Tutorial Path - Location Outline 
	Lakshmi finds an alternative path through the woods to Dolphin Bay 
		Trigger Clear - Lakshmi_Enters_EasternDolphinBay=True 
