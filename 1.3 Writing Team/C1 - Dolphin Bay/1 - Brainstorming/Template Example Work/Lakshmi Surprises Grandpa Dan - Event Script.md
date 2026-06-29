---
tags:
Date_Created:
---
```
> PLEASE TITLE - EventName - Event Script
```
# Event Description

## Root SCENE

[[1.3 Writing Team/C1 - Dolphin Bay/3 - Finished Assets/Act 1 - Lakshmi Graduates/Quests/Quest 1/Scenes/Scene 1/Scene 1 - Chalet First Morning - Outline]]
## General Description

Lakshmi surprises Grandpa Dan (who is immersed in his baking) with her sudden presence. He encourages her to not be late. 
## Event Logic

Trigger Start - Lakshmi_is_DownStairs=True
On Clear - Lakshmi_Surpised_GrandpaDan=True 

--- 
# Event Script

Grandpa Dan jumps  - action 
	Grandpa Dan jumps and turns away from the stove towards Lakshmi

[[Grandpa Dan Exclaims_0 - Dialogue]]
	Grandpa Dan is upset Lakshmi surprised him. He encourages her not to be late. 
	On Clear - GrandpaDan_Encouraged_Lakshmi=True 

Grandpa Dan begins to exits - action 
	Grandpa Dan walks towards towards the door and stops 

[[Lakshmi Says Thanks_0 - Dialogue]]
	Lakshmi thanks Grandpa Dan for the encouragement 
	
Grandpa Dan exits - action 
	Grandpa Dan walks out of the room 
	On Clear - Lakshmi_Surpised_GrandpaDan=True



