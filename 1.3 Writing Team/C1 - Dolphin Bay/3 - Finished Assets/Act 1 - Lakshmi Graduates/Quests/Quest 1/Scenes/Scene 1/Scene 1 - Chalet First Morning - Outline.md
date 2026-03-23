---
tags:
Date_Created:
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

[[Event 1 - Grandpa Dan Surprises Lakshmi - Script]]
	Brief summary of Event One 
		Trigger Start - Lakshmi_is_MidwayDownStairs=True
		On Clear - Grandpa_Dan_Surpised_Lakshmi=True 
		
---  
# Scene Dialogues

Lakshmi Wakes Up - Dialogue 
	|DIA|[[LakshmiWakesUp_0]]
	Lakshmi dreams of being a grasshopper, she realizes she's late and needs to get to the guildhall 
		Trigger Start - GameStart=True 
		On Clear - Lakshmi_Just_Woke_Up=True 

---
# Scene Interactables

[[Mirror - Interactable]]
	Lakshmi realizes she was in uniform since late last night
		Trigger Start - Lakshmi_Just_Woke_Up=True  
		On Clear - Lakshmi_Saw_Uniform_Mirror=True 
			

[[Journal - Interactable]]
	Lakshmi's journal she left open 
		Trigger Start - Lakshmi_Just_Woke_Up=True 
		On Clear - Lakshmi_Read_Journal=True 
		

[[Bed - Interactable]]
	Lakshmi is tempted by the bed  
		Trigger Start - Lakshmi_Just_Woke_Up=True 
		On Clear - Lakshmi_Tempted_By_Bed=True 

[[Bread - Interactable]]
	Bread that Grandpa Dan made for Lakshmi 
		Trigger Start - Grandpa_Dan_Surpised_Lakshmi=True 

[[Gregs Book - Interactable]]
	A book Greg left behind 
		Trigger Start - Grandpa_Dan_Surpised_Lakshmi=True 

[[Tea - Interactable]]
	Green tea with loose herbs 


