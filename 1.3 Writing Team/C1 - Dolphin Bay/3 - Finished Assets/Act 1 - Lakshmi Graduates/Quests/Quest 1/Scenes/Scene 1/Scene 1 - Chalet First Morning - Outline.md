---
tags:
Date_Created: 2026-03-23
---
```
> PLEASE TITLE - Scene SceneNumber - SceneName Outline
```
# Scene Description

## Root Quest

[[Quest 1 - Visit the Guild Hall - Outline]]
## Root Location

[[Greg's Chalet - Location Outline]]
## Character List

Grandpa Dan Character Profile
## Setting Specifics  

Lakshmi's **journal** is open on her desk. 

Downstairs: A basket of **bread** sits on the kitchen counter. A glass of **tea** rests on the kitchen table beside **Greg's book**. Granda Dan is in the kitchen cleaning up. 
## General Description 

Lakshmi wakes up and realizes she's late. The player is free to explore the Chalet. The player can surprise Grandpa Dan. The player can exit the Chalet through the front door. 
## Quest Logic 
Trigger Start - Game_Starts=True
Trigger Clear - Lakshmi_Left_Chalet=True

--- 
# Scene Events

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Events/Event 1 - Grandpa Dan Surprises Lakshmi - Script|Event 1 - Grandpa Dan Surprises Lakshmi - Script]]
	Brief summary of Event One 
		Trigger Start - Lakshmi_is_MidwayDownStairs=True
		On Clear - Grandpa_Dan_Surpised_Lakshmi=True 
		
---  
# Scene Dialogues

Lakshmi Wakes Up - Dialogue 
	|DIA|[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Dialogues/LakshmiWakesUp/LakshmiWakesUp_0]]
	Lakshmi dreams of being a grasshopper, she realizes she's late and needs to get to the guildhall 
		Trigger Start - GameStart=True 
		On Clear - Lakshmi_Just_Woke_Up=True 

---
# Scene Interactables

[[Mirror - Interactable]]
	Lakshmi realizes she was in uniform since late last night
		Trigger Start - Lakshmi_Just_Woke_Up=True  
		On Clear - Lakshmi_Saw_Uniform_Mirror=True 
			

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Interactables/Journal - Interactable]]
	Lakshmi's journal she left open 
		Trigger Start - Lakshmi_Just_Woke_Up=True 
		On Clear - Lakshmi_Read_Journal=True 
		

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Interactables/Bed - Interactable]]
	Lakshmi is tempted by the bed  
		Trigger Start - Lakshmi_Just_Woke_Up=True 
		On Clear - Lakshmi_Tempted_By_Bed=True 

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Interactables/Bread - Interactable]]
	Bread that Grandpa Dan made for Lakshmi 
		Trigger Start - Grandpa_Dan_Surpised_Lakshmi=True 

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Interactables/Gregs Book - Interactable]]
	A book Greg left behind 
		Trigger Start - Grandpa_Dan_Surpised_Lakshmi=True 

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Interactables/Tea - Interactable]]
	Green tea with loose herbs 

