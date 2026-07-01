---
tags:
  - DolphinBay
Date_Created: 2026-03-13
Age: 27
Profession: Baker
---

# Reference Art Links

Include any links to reference art here 
# Description

## Appearance 

Camie is 5ft tall with bright pink hair and several custom wooden earrings. She wears a hand sewn hide jacket over a simple shirt with baggy pants and a big belt. She's got a wide friendly face and generally round, kind features. 
## Core Characteristics 

Camie is the local baker. They approach their craft with much artistry, and are inspired by aquatic life to create new experimental loaves (like a sea-weed loaf). Camie is also deeply sensitive to the dolphin cause, and concerned that the organization of their society is perpetuating ongoing issues. 
## Essential History 

She's also a little worried about everyone getting rallied up, and wants to contribute a warm loving presence to keep everything calm. That doesn't mean she isn't angry about the dolphins though! She's no stranger to protests. 
## Relationships

Camie is attending the protest with the rest of the protesters. Like tp go with her best friend, Doran (not to implement))
## Brainstorming Links
[[Camie]]

--- 
# Character Dialogue 

[[LakshmiMeetsCamie_0]]
	Lakshmi walks around where a protest is happening and Camie is there standing a bit in the back.
		Trigger Start -  Camie_Interacts_Lakshmi=True  
		On Clear - LakshmiMeetsCamie_1 - LakshmiTriesBuns = True, LakshmiMeetsCamie_2 - LakshmiDeclinesBuns = True,

[[LakshmiDeliversMailToCamie_0]]
	Lakshmi goes up to Camie who is getting to a protest.
		Trigger Start - Lakshmi_Has_NPCs_Mail=True, Lakshmi_Interacts_NPC=True  
		On Clear - Lakshmi_Has_Delivered_NPCs_Mail=True, Lakshmi_Has_NPCs_Mail=False, Lakshmi_Has_Muffins = True

