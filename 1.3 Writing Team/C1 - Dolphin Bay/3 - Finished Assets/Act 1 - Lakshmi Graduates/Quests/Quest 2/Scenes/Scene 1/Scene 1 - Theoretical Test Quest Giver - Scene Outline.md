---
tags:
Date_Created:
---
```
> PLEASE TITLE - Scene SceneNumber - SceneName - Outline
```

# Scene Description

## Root Quest

[[Quest 2 - Theoretical Exam - Outline]]
## Root Location

[[Guild Hall - Location Outline]]
## Character List

[[Greg - Profile]]
Lakshmi 
## Brainstorming Links

[[Act 1 - Pre-graduation Revision#Quest 2, Scene 2 Writing Theoretical Exam|Act 1 - Pre-graduation Revision - Quest 2]]
## Setting Specifics  

Second Floor. Greg behind his desk. Day Time.
## General Description 

Greg tells Lakshmi that she is ready to do her graduation exam and he tells Lakshmi to sit at the desk and wait to be given the theoretical test. Other Guild Hall members might give her directions.
## Scene Logic 
Trigger Start - LakshmiTalksGregTheoreticalTest=True
Trigger Clear - TheoreticalTestReady=True

--- 
# Scene Events

[[Event 1 - ReadyForTheoreticalTest - Script]]
	Lakshmi talks to Greg and Greg suprises her with a theoretical exam
		Trigger Start - LakshmiTalksGregTheoreticalTest=True 
		On Clear - TheoreticalTestReady=True 

---  
# Scene Dialogues

|DIA|[[ReceptionistRobertSaysHi]]
	Robert greets Lakshmi and tells her to go see Greg
		Trigger Start - LakshmiTalksGregTheoreticalTest=True 
		On Clear - ReceptionistRobertSaysHiClear=True 

|DIA|[[InternMumbles]]
	Player overhears the intern talking to herself
		Trigger Start - LakshmiTalksGregTheoreticalTest=True 
		On Clear - InternMumblesClear=True 

