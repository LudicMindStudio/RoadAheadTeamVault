---
tags:
created: 2025-10-13
---
By: Arkana and Corina
# Progress
- [x] Extract Dialogue from RPG Maker
- [x] Draft the Pre-Graduation portion. 
- [ ] Detail dialogue and events. (Make as many details about the environment for interaction with the map)
- [ ] Implement in the game
# Context
Lakshmi graduates from postal guild, then the story of Dolphin Bay starts.

Links to the previous work done about the graduation:
Early game notes: [[Dolphin Bay - Elements to be reviewed]], [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]], [[Dolphin Bay Story]] [[Main Story (Lakshmi's) Loose Brainstorming]], [[Original RPG Maker Scripts]]

# Characters
Lakshmi, Grandpa Dan, Greg. Intern. [[Guild Receptionist (Robert)]], [[Lakshmi]], [[Old Character Bios]]

# Content
---
## Drafting the story
Brainstorm events before graduation: 
#### Loose progression:
Lakshmi wakes up in Greg's chalet (Corina) -> Lakshmi goes to the Guild Hall in Dolphin Bay (Corina) -> Lakshmi does her exam (Corina) -> Lakshmi speaks to the intern (enter first memory) (Arkana) -> Lakshmi delivers the first few mail (Start Dolphin Bay story)  (Arkana)

#### Checkboxes to include (tutorial for gameplay & introduce story)
- [x] Entering memories - (intern)
- [x] Main occupation - graduation delivering mail (can test the intern after that)
- [x] Fog (can be shown at the beginning & during exam the status quo of the world)
- [x] Establish Lakshmi as a cheerful and happy go lucky person (finds beauty in the depressing world) (empathize when seeing fog and during exam) [[Lakshmi]]
- [x] Introduce Grandpa Dan (Deliverymen Headquarters Master) [[Old Character Bios]]
- [x] Introduce Greg (?? Makes food for Lakshmi) [[Old Character Bios]]
- [ ] Need to establish that she lost her memory about her parents (? - to confirm) (start plot 2) 
---


#### Lakshmi wakes up in Greg's chalet
*Map [[Greg Chalet]]*

Prev work done: [[Grasshopper Discussion]], [[Day of the exam]]

- Wakes up at her desk, was writing in her journal because got too excited for the exam and stayed late. May be a very brief cameo about her parents. (picture of parents on desk or her lamenting in her journal)
- Talks with Grandpa Dan who cooks for her breakfast, tells her she's late
- I need THIS moment with fog. AGGHH. Lakshmi is excited to go on her adventure and do her exam. Takes a moment to look at the scenery. Grandpa Dan tender moment until he gets grumpy and tells her to hurry up.

![[Pasted image 20251015202001.png]]

![[Copy of Idea for Prologue Scope of the World.png]]
#### Lakshmi goes to the Guild Hall in Dolphin Bay 
*Map [[Dolphin Bay Locations]] (in the middle of the dolphin tail)*
#### Lakshmi does her exam 
*Map (interior not created yet)*

Prev work done: [[Day of the exam]]

* Meets Greg
* Does her exam. Alone? With someone? Or shes late so shes alone? Idk 
	* ==COMMENT FROM ARKANA==: I think it would be interesting to have other students doing their exam but they are finishing before her because she's late. It would give more life to the guild hall too if multiple people are doing their exam. We could have all of them getting up and walking around too doing their practical exam which doesn't have to be the same as Lakshmi. Maybe having at least 2 other students.

-> List of questions during exam (multiple choice?): Lakshmi will comment about her experiences with these :
- Economy : isolation between villages. Less economy now. Self sustained villages
- Technology : fell. No modern means of communication
- Schools : farming schools (e.g. Lakshmi comments that prefers farming schools much more over normal schools, likes plants, can add a plant in her room)
- Fog : calamity, cant traverse it. Monsters. (e.g. can add that she didn't encounter any monster before but she is deeply scared of them)
- Reason for deliverymen : connect all villages together (maybe have a short verbal saying.) Delivering mail at your doorstep faster than email

Fun twist to **confirm with dev team** : she is very bored and imagines it as a mini game. Or doodles by accident on the exam page and we can show it as drawings on screen. Easier to get the player interested in the game and hint at future gameplay?
	- ==COMMENT FROM ARKANA:== I love the idea of the doodling, but if she's late maybe she doesn't have much time to do that. I think having an image of the actual exam questions pop up and then choosing her answer would make it more interesting visually. Maybe she could get distracted by seeing everyone getting up because they're done and do a little doodle then tell herself to stay focused. Then, on the image of the exam we would see her doodle. Can you visualise what I'm trying to explain?
	- ==Answer From Corina== : I love that idea. But I also realized that in the original script, the pop quizz was like a surprise exam. When Lakshmi woke up, she just knew Greg had to talk to her. If we keep that, we might not need to include other characters doing the exam. The advantage of that is for us not to make extra characters haha. Because we might need to flesh out new characters and make the script much longer. Another advantage is for the exam not to have good or bad answers like we had in the original, because it seems like a nightmare to code and write with the multiple choices. I can make it look like a prank exam from Greg (will also work into his strict but goofy character) and the real exam is the practice test. To think over. 
#### Lakshmi speaks to the intern (enter first memory) 
*Map (interior not created yet)*
#### Lakshmi delivers the first few mail (Start Dolphin Bay story) 
*Map [[Dolphin Bay Locations]] (Eastern and Western side?)*

Previous work done :  [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]] (may want not to include Dr. Lamborghini's delivery yet so we can flesh out the character better)

---
## Dialogue & Events

Template:
**Character 1**
	_Dialogue_

**Event**
	Description

**Character 2**
	`If variable is true`
		_Dialogue_

#### Lakshmi wakes up in Greg's chalet (Corina)

#### Lakshmi goes to the Guild Hall in Dolphin Bay (Corina)

#### Lakshmi does her exam (Corina)

#### Lakshmi speaks to the intern (enter first memory) (Arkana) -> to modify
**Greg**
	_Alright! Now it's time for the... Practical test!_
**Lakshmi**
	_Will I be delivering mail alone?_
**Greg**
	_Well for now it's just a little message for the new intern. Deliver this to the new intern. They should be in the storage room on the right of reception. Make sure to deliver it like you've been taught. Treat this note like you would a real postal delivery._
**Lakshmi**
	_Got it!_
**Event**
	Journal updated. Player picks up the item and goes to see the intern.
**Intern**
	_Dammit where did that go?_
**Lakshmi**
	_Uhmm Hi! Are you the new intern?_
**Intern**
	_Oh, hum hi Lakshmi, what's up?_
**Lakshmi**
	_Well, I'm in the middle of my postal guild graduation testing and have a delivery for you!_
**Intern**
	_Wow, really? You're so lucky. I'll receive your mail then._
**Lakshmi**
	_Ok! Well then, I'm Lakshmi from the postal guild here to deliver your mail! Thank you for using our services and have a good day! 
		Wow thanks again!_ 
			_(...)_
**Intern**
	_Hey are you okay?_ 
**Lakshmi**
	_Yes, just a little excited! Oh no not this again._
**Event**
	Screen blacks out and the player is now in a different room as the intern. 
	
**Intern**
	_Dammit... I messed up again... How come I keep messing up everything... Even the simplest of task... I'm not cut out to be a guild member what was I thinking coming here. I can't do anything right.. (...)_
**Greg**
	_Hello? Anybody in here? Where did that new intern go?_
**Intern**
	_(...) Well I can at least minimize their disappointment... Back to it..._
**Event**
	Screen blacks out and the player is back in the guild room as Lakshmi. 
**Intern**
	_Lakshmi!? Are you ok?_
**Lakshmi**
	_Ah... Yeah I'm ok sorry... (?) (Argh... I gotta get bettwe at that)_
**Intern**
	_Ok phew. I thought I did something wrong again._
**Lakshmi**
	_No no! You did nothing wrong! In fact, thank you for being such a good practive delivery! I feel so much more prepared to be a guild worker and it's all thanks to you._
**Intern**
	_(<3) Oh geez, well no problem then!_
**Lakshmi**
	_Keep up the good work and I'm sure you'll be a full guild member soon too!_
**Intern**
	_Really? Do you really believe that?_
**Lakshmi**
	1) _Absoluteluy
	2) _Well..._
		1) _Well. Maybe one day. Theres hope for anytone._
		 **Intern**
			`If variable is true`
			_(...) Yeah maybe one day...._
**Lakshmi**
	_Welll I better go back to Greg and tell him how I did. Thanks again, see you around._
**Event**
	Journal updated. Player goes to see Greg.
**Lakshmi**
	_I did it Greg! Mail delivered._
**Greg**
	_I saw, well done Lakshmi. I'm very proud. I am also happy to say... Welcome in, Lakshmi you are now a full guilf member. I hope to see more great things from you._
**Lakshmi**
	_(!) All right! Awesome! This is so awesome Greg! can we have a party!?_
**Greg**
	_Maybe we'll set one up for later tonight, for now I'm putting you straight to work._
**Lakshmi**
	_Ok then, bring it on!_
**Greg**
	_Go up to the front desk. The receptionist will have some deliveres for you to make._
**Event**
	Player goes to see the receptionist.
**Receptionist**
	_Hey Lakshmi, congrats on becoming a full member. I've got a whole batch of deliveries here for you to make. Good luck!_
**Lakshmi**
	_Thanks!_
**Event**
	Player collects the mail.
**Lakshmi**
	_I better get started!_
#### Lakshmi delivers the first few mail (Start Dolphin Bay story) (Arkana)
general idea of order of events
- Leaves the guild hall proudly, but disorganised. 
- meets CAT and the gang by the docks
- meets Elio
- delivers mail to Doran
- delievers mail to Liam's sister. 
- Enters  Liam's memory

==PLEASE COMMENT ON THIS==: I'm realising I'm going with a very strict order of events. I'm thinking the player should decide which letter to deliver first. I just don't think they should start with Liam's so maybe after they have delevered two letters we could have an event saying like of there's one at the bottom of my bag that I didn't notice. 
==COMMENT FROM CORINA:== Yup, you have the answer haha. That's great! It shows her inexperience too this way.

**Event**
	Player leaves the guild hall. Walks around a bit but Cat calls her out. 

**Event**
	Cat is sitting near the docks with Tullia and Sammy. They are talking among themselves. Lakshmi comes near and Cat calls her out. 

*Cat* (Standing up; looking in Lakshmi's direction)
	_Hey you! Why are you just standing there? What are you doing here?
	
*Lakshmi*
	_Hi sorry to disturb. I'm a new postal worker. I've been so focused on my studies that it's like I've been in my own world. I'm just checking where I need to go and I like feeling the sea breeze.

*Sammy*
	_It used to be a lot nicer around here. Along with the sea breeze, you would hear dolphins clicking and whistling. Now, we mostly hear shouting._
	
*Tullia*
	_I don't like passing by the protesters... they're loud._

*Lakshmi*
	_Sorry kids, I'm not sure what you're taking about but I better get to work see you around!

**Event**
	In their bag, the player has 4 letters but only have access to 3. There will be an event later where Lakshmi realises there is a 4th letter. The 3 first letters are for NPCs.  The player can take a right to go towards "central dolphin bay" or to the left towards "rural dolphin bay"

**Event (Option chosen is player goes left)**
	Player has mail for Doran and Oliver's mother. They have to walk around to find where to go. Lakshmi passes by a boy sitting and staring into the horizon. 
_Lakshmi_
	_(In her head). He's been sitting since this morning. Should I go check on him?_
	Option 1: Yes
		`If variable is true`
	*Lakshmi*
		_Hey, I've been seeing you alone staring into the horizon around here for a while._
	*Oliver*
		_Hey. I enjoy solitude plus I enjoy watching the nature around us. It's nice to admire what is right in front of you._
	_Lakshmi_
		_Okay, I just wanted to check on you. I have mail to deliver close by. Do you happen to know where 92 Peak street is?_
	*Oliver*
		_Yes, that's where I live. I can bring you there. Follow me._
	Choices:
		1. Follow Oliver.
			*Lakshmi*
				_Oh! Thank you._
		2. Take your own way.
			*Lakshmi*
				_It's okay, I will figure it out. Thank you._
			*Oliver*
				_As you wish_
	Option 2: No.
		`If variable is true`
	_Lakshmi_
		_(In her head) I will let him be. Now, let's deliver some mail!_
	
			










