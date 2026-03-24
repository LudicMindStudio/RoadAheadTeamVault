---
tags:
  - DolphinBay
Date_Created: 2026-03-04
Age: 15
Profession: Kid
---
TO FINISH
# Reference Art Links
![[Pasted image 20260304153212.png]]
# Description

## Appearance 
- she has thick red hair
- brown eyes
- bandana in her hair
- tank top and shorts
## Core Characteristics 
Cat (short for [[François Hustle - Profile]]Caterina) Everyone calls her Cat because she can be soft and kind but when needed she can be fierce. That's why she's the leader.  She has developed a love for animals and has been actively working to protect the wildlife around Dolphin Bay. She appreciates the beauty and complexity of all creatures (big or small). She is protective over her hometown. 
## Essential History 
She is protective over her hometown and finds the protesters' work more harmful than helpful. 
## Relationships

Cat has grown up hearing stories about the ocean as her father is a sailor.
## Brainstorming Links
[[Little Girl 1 (Cat)]]

--- 
# Character Dialogue 

[[LakshmiMeetsCatAndTullia_0]] {>>CL: So from what we previously discussed. We can assume Lakshmi met Cat and Tullie before. And the two NPCs can still follow each other at all times so they can be in the same scene if youd like<<}
	Cat is sitting near the docks with Tullia. They are talking among themselves. Lakshmi comes near and Cat calls her out. 
		Trigger Start - Lakshmi_comes_near_the_group=True, Lakshmi_Has_Met_Cat_and_Tullia = False
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True

[[LakshmiMeetsCat_0]] {>>CL Cat and Francois both seem to had the same idea of sending mail to the dolphin sanctuary (?) organization. Maybe we need another idea for Cat. Im happy to chat! But that's going into quest making. You can leave it vague for now just ot get a sense that Cat is the leader of the kids <<}
	ADD Description
		Trigger Start - Lakshmi_comes_near_the_group=True, Lakshmi_Has_Met_Cat_and_Tullia = False
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True
	
		
[[LakshmiDeliversMailToCat_0]]
	Brief summary of DELIVERED MAIL TO NPC
		Trigger Start - Lakshmi_Has_Cats_Mail=True, Lakshmi_Interacts_NPC=True  
		On Clear - Lakshmi_Has_Delivered_Cats_Mail=True, Lakshmi_Has_NPCs_Mail=False