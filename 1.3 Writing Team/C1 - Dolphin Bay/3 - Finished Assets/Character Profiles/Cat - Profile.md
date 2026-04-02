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
Cat (short for Caterina) Everyone calls her Cat because she can be soft and kind but when needed she can be fierce. That's why she's the leader.  She has developed a love for animals and has been actively working to protect the wildlife around Dolphin Bay. She appreciates the beauty and complexity of all creatures (big or small). She is protective over her hometown. 
## Essential History 
She is protective over her hometown and finds the protesters' work more harmful than helpful. 
## Relationships

Cat has grown up hearing stories about the ocean as her father is a sailor.
## Brainstorming Links
[[Little Girl 1 (Cat)]]

--- 
# Character Dialogue 

[[LakshmiMeetsCatAndTullia_0]] 
	Cat is sitting near the docks with Tullia. They are talking among themselves. Lakshmi comes near and Cat calls her out. 
		Trigger Start - Lakshmi_comes_near_the_group=True, Lakshmi_Has_Met_Cat_and_Tullia = False
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True

[[LakshmiMeetsCat_0]]
	Lakshmi chats with Cat about the ocean.
		Trigger Start - Lakshmi_Interacts_Cat =True
		On Clear - Lakshmi_Has_Met_Cat_and_Tullia =True
	
[[LakshmiDeliversMailToCat_0]]
	Lakshmi delivers mail to Cat and learns that she is waiting for an answer from the mayor.
		Trigger Start - Lakshmi_Has_Cats_Mail=True, Lakshmi_Interacts_Cat=True  
		On Clear - Lakshmi_Has_Delivered_Cats_Mail=True, Lakshmi_Has_NPCs_Mail=False, Lakshmi_Learns_Cats_Mayor_Quest=True