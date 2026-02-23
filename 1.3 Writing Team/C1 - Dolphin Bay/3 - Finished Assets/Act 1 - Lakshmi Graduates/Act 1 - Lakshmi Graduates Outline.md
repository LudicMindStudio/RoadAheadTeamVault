---
tags:
Date_Created:
---
```
> PLEASE TITLE - Act ActNumber - ActName - Outline
```
# Act Description

## Brainstorming Links

Brainstorming Document One 
Brainstorming Document Two...
## Character List

Grandpa Dan Character Character Profile
Guild Hall Receptionist (Robert) Character Profile
Greg Character Profile
Intern Character Profile

## Root Plot 

Lakshmi Saves Dolphin Bay - Main Plot Outline 
## General Description

Lakshmi wakes up in Grandpa Dan's  Chalet and has to rush to the Guild Hall. Once there, Greg gives her a surprise quiz followed by a practical field test. Once she completes these tasks, she graduates and becomes a full guild-member! 

--- 
# Act Quests

[[Quest 1 - Visit the Guild Hall - Outline]]
	Lakshmi makes her way from Dan's Chalet to the Guild Hall in Dolphin Bay East
		Trigger Start - Lakshmi_Wakes_Up=True 
		Trigger Clear - Lakshmi_Visited_Hall=True 

Quest 2 - Pass the Exam - Outline
	Lakshmi talks to Greg and he gives her a quiz to complete 
		Trigger Start - Lakshmi_Visited_Hall=True 
		Trigger Clear - Lakshmi_Passed_Quiz=True 

Quest 3 - Deliver Mail to Intern - Outline
	Lakshmi has to complete a practical test  
		Trigger Start - Lakshmi_Passed_Quiz=True 
		Trigger Clear - Lakshmi_Graduated=True 


