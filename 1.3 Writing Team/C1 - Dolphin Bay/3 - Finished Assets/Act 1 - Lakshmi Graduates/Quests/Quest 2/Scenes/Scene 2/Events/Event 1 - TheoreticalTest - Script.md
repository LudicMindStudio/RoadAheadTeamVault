---
tags:
Date_Created:
Characters:
---
```
> PLEASE TITLE - Event - Event Number - EventName -  Script
```
# Event Description

## Root Scene

[[Scene 2 - Writing Theoretical Test - Scene Outline]]
## General Description

Lakshmi sits at the desk and does her theoretical test.
## Event Logic

Trigger Start - TheoreticalTestStartLakshmiSitsTable=True
On Clear - TheoreticalTestDone=True

--- 
# Event Script

|DIA|[[TheoreticalTestStartLakshmiSitsTable]]
	Lakshmi sits at the desk and waits to be given the theoretical test.
	On Clear - TheoreticalTestStartLakshmiSitsTable=True

Greg walks over to Lakshmi - GREG
	Greg walks over to give her the exam 
	On Clear - GregWalksOverTheoreticalTest=True

 Exam on table - GREG
	Greg gives Lakshmi her the exam on the table
	On Clear - GregGivesTheoreticalTest=True

|DIA|[[GregSaysGoodLuckTheoreticalTest]]
	Lakshmi sits at the desk and waits to be given the theoretical test.
	On Clear - GregSaysGoodLuckTheoreticalTest=True

Greg walks away from Lakshmi - GREG
	Greg walks away from Lakshmi to his desk, leaving her alone 
	On Clear - GregWalksAwayTheoreticalTest=True

|DIA|[[BringItOnTheoreticalTest]]
	On Clear - BringItOnTheoreticalTest=True

MultipleChoiceEvent
	Three Multiple choice questions are presented like dialogue options, one after the other. We want to save what the correct choices are. Result options are 3/3, 2/3 or 1/3. We ALSO want to keep track which questions are INCORRECT. It will be important for dialogue options in Scene 3 - Event 1
	Question 1: |DIA|[[TheoreticalTestQuestion1]]
	Question 2: |DIA|[[TheoreticalTestQuestion2]]
	Question 3: |DIA|[[TheoreticalTestQuestion3]]

|DIA|[[TheoreticalTestDone]]
	On Clear - TheoreticalTestDone=True