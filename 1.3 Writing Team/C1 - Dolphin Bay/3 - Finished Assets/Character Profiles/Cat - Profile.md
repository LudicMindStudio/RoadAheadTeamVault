---
tags:
  - DolphinBay
Date_Created: 2026-03-04
Age: 15
Profession: Kid
---

# Character Brainstorming 
[[Little Girl 1 (Cat)]]
# Reference Art  

![[Pasted image 20260710155906.png|290]]
# Description

## Key Information 

| Age                 | 15               |
| ------------------- | ---------------- |
| Profession          | Teen             |
| Relationship Status | Daughter of Garp |
|                     | Sister of Sammy  |
## Appearance 

- she has thick red hair
- brown eyes
- bandana in her hair
- tank top and shorts
## Core Characteristics
Cat (short for Caterina) Everyone calls her Cat because she can be soft and kind but when needed she can be fierce. That's why she's the leader of the kids.  She has developed a love for animals and has been actively working to protect the wildlife around Dolphin Bay. She appreciates the beauty and complexity of all creatures (big or small). She is protective over her hometown. She encourages her brother in his dream of building a turtle sanctuary. She has started to built a little one in their backyard. 
## Essential History 

She lost her mom when her younger brother was born. It's been hard on her but she grew closer to her father, Garp as well as wildlife. She loves her brother and recognizes that Elio has been a great friend to Sammy.  Cat has grown up hearing stories about the ocean as her father is a sailor and she's been telling the same ones to Sammy. 
## Relationships

Tullia - Cat doesn't mind being followed by Tullia all the time. They have grown up together and she's learned to love Tullia as she is.

Garp - Cat is very close with her Dad. She tells him everything and he listens with an attentive ear. She likes to hang out by the docks to be near her dad. 

Sammy - Cat used to be very close with her brother, but these days he's been spending a lot of time with Elio. They mostly hang out together building a mini turtle sanctuary so Abby can have friends. 

## Character Behavior 

|           | LOCATION                         | ACTIVITY                                        | SPECIAL NOTES |
| --------- | -------------------------------- | ----------------------------------------------- | ------------- |
| MORNING   | Beach                            | helps her dad setting traps, collecting oysters |               |
| AFTERNOON | Around the village and the docks | Hangs out                                       |               |
| EVENING   | At home                          | Builds mini turtle sanctuary with Sammy         |               |
| SPECIAL   |                                  |                                                 |               |


--- 
# Character Quests
[[CAT- Side Quest Brainstorm]]
CHARACTER SIDE QUEST 1 LINK

--- 
# Character Dialogue 

## Essential Reactions 

[[IntroToCatAndTullia_0]] {>>CL: So from what we previously discussed. We can assume Lakshmi met Cat and Tullie before. And the two NPCs can still follow each other at all times so they can be in the same scene if youd like<<}{>>AFP: I like that but I want to make sure everyone is okay with it<<}
	Cat is sitting near the docks with Tullia. They are talking among themselves. Lakshmi comes near and Cat calls her out. 
		Trigger Start - Lakshmi_comes_near_the_group=True, Lakshmi_Has_Met_Cat_and_Tullia = False
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True
		
[[LakshmiMeetsCat_0]]
	Lakshmi chats with Cat about the ocean.
		Trigger Start - Lakshmi_Interacts_Cat =True
		
[[IntroToCat_0]] {>>CL Cat and Francois both seem to had the same idea of sending mail to the dolphin sanctuary (?) organization. Maybe we need another idea for Cat. Im happy to chat! But that's going into quest making. You can leave it vague for now just ot get a sense that Cat is the leader of the kids <<}{>>Maybe it's interesting that they are both waiting for a response? They are the leaders of different "associations" who share a somewhat common goal.
<<}
	Cat talks about her interest in the ocean life. 
		Trigger Start - Lakshmi_Interacts_Cat=True, Lakshmi_Has_Met_Cat_and_Tullia = False

		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True
		
[[LakshmiDeliversMailToCat_0]]
	Lakshmi delivers mail to Cat and learns that she is waiting for an answer from the mayor.
		Trigger Start - Lakshmi_Has_Cats_Mail=True, Lakshmi_Interacts_Cat=True  
		On Clear - Lakshmi_Has_Delivered_Cats_Mail=True, Lakshmi_Has_NPCs_Mail=False, Lakshmi_Learns_Cats_Mayor_Quest=True
## Misc Reactions 

EXAMPLE INTERACTION 
	Brief summary of interaction 
		Conditions -


