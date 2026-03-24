---
tags:
Date_Created: 2206-03-23
---
```
> PLEASE TITLE - Event - Event Number - EventName -  Script
```
# Event Description

## Root SCENE

[[Scene 1 - Chalet First Morning - Outline]]
## General Description

Lakshmi is surprised to learn that Grandpa Dan has stopped by to bake her some bread. He encourages her not to be late. 
## Event Logic

Trigger Start - Lakshmi_is_MidwayDownStairs=True
On Clear - Grandpa_Dan_Surpised_Lakshmi=True 

--- 
# Event Script

Smell Of Bread - Dialogue 
- |DIA|[[SmellOfBread_0]]

Lakshmi goes down the stairs - action 

Stairs Squeak - Dialogue 
- |DIA|[[StairsSqueak_0]]

Grandpa Dan Looks Up - action 
	Slight jump and Grandpa Dan turns slightly (not fully in Lakshmi's direction)

Who's There - Dialogue 
- |DIA|[[WhosThere_0]]
	Grandpa Dan asks who is there 

Lakshmi goes to the bottom of the stairs - action

First Greeting - Dialogue 
- |DIA|[[FirstGreeting_0]]

Lakshmi approaches Grandpa Dan- action 
	Lakshmi moves towards Grandpa Dan. Grandpa Dan's head turns to look at Lakshmi. 

Grandpa Approaches - action 
	Grandpa Dan crosses the threshold to approach Lakshmi 

Chat Before Work - Dialogue 
- |DIA|[[ChatBeforeWork_0]]
	Grandpa Dan corrects Lakshmi's straps, and sends her on her way. 
	Lakshmi learns the new puppy is named Leo. 
	The puppy yelps 
	On Clear - GrandpaDanIsLookingForLeo=True

Grandpa Dan exits - action 
	Grandpa Dan jumps up and then runs out of the house 



