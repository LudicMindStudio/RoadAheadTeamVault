---
tags:
Date_Created:
---
```
> PLEASE TITLE - (Side-)Quest QuestNumber - QuestName - Outline
```
# Quest Description

## Root Act

[[Act 1 - Lakshmi Graduates Outline]]
## Brainstorming Links

[[Act 1 - Pre-graduation Revision#Quest 3, Scene 1 Practical Test - Introduction|Act 1 - Pre-graduation Revision - Quest 3]]
## General Description 

Lakshmi does the Postal Work practical test (first memory), and graduates. 

## Quest Logic 
Trigger Start - LakshmiTalksGregPracticalTest =True
Trigger Clear - LakshmiGraduates=True

--- 
# Quest Scenes

[[Scene 1 - Practical Test - Quest Giver - Scene Outline]]
	Location 1: Guild Hall - Second Floor - Greg's Office - Location Outline
	Greg gives the quest and repeats the postal worker greeting with Lakshmi
		Trigger Start - LakshmiInteractsGregPracticalTest=True 
		Trigger Clear - LakshmHasInternLetter=True

[[Scene 2 - Practical Test - Meeting the Intern - Scene Outline]]
	Location 2: [[Guild Hall - Location Outline]] - First Floor - StorageRoom
	Lakshmi meets the intern and greets her
		Trigger Start - LakshmiInteractsIntern=True
		Trigger Clear - InternMemoryEnter=True

[[Scene 3 - Practical Test - Intern Memory - Scene Outline]]
	Location 2: [[Guild Hall - Location Outline]] - First Floor - StorageRoom 
	Intern's memory 
		Trigger Start - ExampleTag=True 
		On Clear - ExampleTag=True 

[[Scene 4 - Practical Test - Remembering the Intern's name - Scene Outline]]
	Location 2: Guild Hall - First Floor - StorageRoom - Location Outline
	Lakshmi tries to remember the intern's name 
		Trigger Start - InternMemoryStart=True
		Trigger Clear - InternMemoryEnd=True

[[Scene 5 - Practical Test - Lakshmi Graduates Postal School - Scene Outline]]
	Location 1: Guild Hall - Second Floor - Balcony - Location Outline
	Lakshmi has a graduating ceremony
		Trigger Start - LakshmiTalksGregPracticalTestDone=True
		Trigger Clear - LakshmiGraduates=True


