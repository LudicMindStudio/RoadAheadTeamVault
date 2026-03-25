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

Camie is attending the protest with Doran{>>CL: Let's not mention him yet since we dont have doran in this sprint. We can figure out later if we will implement him<<} because they're good friends. 
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


{>>CL: The easiest way to implement that would be to leave the choice to the player. e.g. If the player tried Camie's goods, maybe they would be more likely to try it out, or not . Feel free to checj out some examples of Player Choices in [[Act 1 - Pre-graduation Revision]]<<}**Comment from arkana: Would be fun to have Lakshmi take the muffin depending if she tired Camie's baked goods previously or not**