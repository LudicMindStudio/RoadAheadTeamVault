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

[[Scene 3 - Test Result Review - Scene Outline]]
## General Description

Lakshmi reviews her test result with Greg and Greg tells her there is a practical test left.
## Event Logic

Trigger Start - LakshmiTalksGregTheoreticalTestReview=True
On Clear - TheoreticalTestClear=True

--- 
# Event Script

|DIA|[[LakshmiSaysTheoreticalTestDone]]
	Greg tells Lakshmi she has to take an exam to graduate as a postal worker 
	On Clear - TheoreticalTestGiver=True

Theoretical Test Result
	Greg Tells Lakshmi her practical test result.
	If the player got 3/3 on Scene 2 - Event 1 : |DIA|[[TheoreticalTestSucceed]]
	If the player got 1/3 or 2/3 Scene 2 - Event 1 : |DIA|[[TheoreticalTestFail]] 
	On Clear - TheoreticalTestResult=True

Theoretical Test Review
	Greg will explain Lakshmi her mistakes. There is a dialogue if the question in Scene 2 - Event 1 is INCORRECT
	Question 1 Incorrect: |DIA|[[TheoreticalTestQuestion1Review]]
	Question 2 Incorrect: |DIA|[[TheoreticalTestQuestion2Review]]
	Question 3 Incorrect: |DIA|[[TheoreticalTestQuestion3Review]]
	On Clear - TheoreticalTestReview=True

|DIA|[[GregInspiringMonologue]]
	Greg tells Lakshmi she has to take an exam to graduate as a postal worker 
	On Clear - GregInspiringMonologue=True

Greg Walks away to his desk - GREG
	On Clear - TheoreticalTestClear=True