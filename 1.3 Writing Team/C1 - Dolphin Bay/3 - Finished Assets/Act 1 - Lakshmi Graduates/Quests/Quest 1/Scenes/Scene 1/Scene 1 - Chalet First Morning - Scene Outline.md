---
tags:
Date_Created:
---
```
> PLEASE TITLE - Scene SceneNumber - SceneName Outline
```
# Root Quest

[[Quest 1 - Visit the Guild Hall - Outline]]
# Scene Description

## Setting 

Rustic Chalet with two floors. Lakshmi has a small room on the top floor with a desk covered in her studying materials and her journal. She has bright windows and a full size mirror. Grandpa Dan's room is next door with a comfortable arm chair. 

Downstairs, there is a large kitchen with baking supplies out in plain view. A basket of bread is on the counter. There's also a large kitchen table with three chairs. 

## General Description 

Lakshmi wakes up and realizes she's late. The player is free to explore the Chalet. The player can surprise Grandpa Dan. The player can exit the Chalet through the front door. 

## Quest Logic 
Trigger Start - Game_Starts=True
Trigger Clear - Lakshmi_Left_Chalet=True

--- 
# Scene Events

[[Lakshmi Surprises Grandpa Dan - Event Script]]
	Brief summary of Event One 
		Trigger Start - Lakshmi_is_DownStairs=True 
		On Clear - Lakshmi_Surpised_GrandpaDan=True 
		

---  
# Scene Dialogues

[[Lakshmi Wakes Up_0 - Dialogue]]
	Lakshmi wakes up to realize she slept in, so she thinks she better run to the guild hall  
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
		Trigger Start - Lakshmi_Surpised_GrandpaDan=True 
		On Clear - Lakshmi_Complimented_Bread=True 


