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

-> List of questions during exam (multiple choice?): Lakshmi will comment about her experiences with these :
- Economy : isolation between villages. Less economy now. Self sustained villages
- Technology : fell. No modern means of communication
- Schools : farming schools (e.g. Lakshmi comments that prefers farming schools much more over normal schools, likes plants, can add a plant in her room)
- Fog : calamity, cant traverse it. Monsters. (e.g. can add that she didn't encounter any monster before but she is deeply scared of them)
- Reason for deliverymen : connect all villages together (maybe have a short verbal saying.) Delivering mail at your doorstep faster than email

Fun twist to **confirm with dev team** : she is very bored and imagines it as a mini game. Or doodles by accident on the exam page and we can show it as drawings on screen. Easier to get the player interested in the game and hint at future gameplay?
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
***note. Do we include the grasshopper memory, or do we leave it for later?*

**Event**
	Cutscene of Lakshmi waking up at the table in her room (see if we can make a sprite for it or not)
**Lakshmi**
	*Yaawwwn...* *Right. I ended up journaling pretty late last night...*
**Event**
	Lakshmi stands up and looks to the left and right
**Lakshmi**
	*My back is so sore... I better get going, Greg will get me with his slipper if he finds out I slept in today of all days.*
**Event** 
	Journal updated: Greg will get to me if I missed today... I should hurry up to the *Guild Hall*.   
**Event** 
	Lakshmi Interaction options [in the room]
	`If variable is true` Table
		*Journaling keeps your mind at bay and spirits sharp! But makes you prone to losing track of time… must have been written in small font.*
	`If variable is true` Mirror
		*Looking good there! Dressed in uniform since 2 AM*
	`If variable is true` Bed
		*Do not tempt me.*
**Event**	
	`If variable is true` Player leaves the room.
		Lakshmi finds Grandpa Dan downstairs, his back is to her with various breads spread on the counter he stands in front of.
**Lakshmi**
	*Grandpa Dan?!*
**Event**
	Grandpa Dan jumps in place and turns towards Lakshmi.
**Grandpa Dan**
	*Ah! Lakshmi don't scare me! That mutt already got the jump on me this morning, my heart can't take much more!*
**Lakshmi**
	*Leo? Pfft. Ok grandpa. He just knows you need the energy to get your morning started.*
**Grandpa Dan**
	  * *grumble grumble* * *Yet I've been up since morning.* * *grumble grumble* * *Well, if you see that dog, get him home. I made him his favourite biscuits.*
**Lakshmi**
	*Ay Ay, cap'n!*
**Event**
	Journal Updated: Find Leo. Where should I hurry up first? Yes.
**Grandpa Dan**
	*Speaking of breakfast, go eat your slice of bread and run straight to the **Guild Hall**! Greg will skewer you if you are late for the boarding exam!*
**Event**
	Grandpa Dan starts walking away towards the door.
**Lakshmi**
	 *Thanks Grandpa Dan. For the bread.* 
**Grandpa Dan**
	* *Khum.* * *Right. See you later Lakshmi. The next time I see you, you better be the new postal worker.*
**Lakshmi**
	*You bet!*
**Event**
	Grandpa Dan walks out.
**Event**	
	Player interaction options
	`If variable is true` Bread
	*Lakshmi: His fingers really are blessed. The crust is the best part! Huh... Is it... maple syrup sour bread? Wow it is not even my birthday, I should thank him later.*
**Event** 
	Journal Updated: Thank Grandpa Dan for making your favourite bread.
	
#### Lakshmi goes to the Guild Hall in Dolphin Bay (Corina)


#### Lakshmi does her exam (Corina)

#### Lakshmi speaks to the intern (enter first memory) (Arkana) -> to modify
**Greg**
	_Alright! Now it's time for the... Practical test!_
**Lakshmi**
	`If variable is true`
		_Will I be delivering mail alone?_
**Greg**
	__Well for now it's just a little message for the new intern. Deliver this to the new intern. They should be in the storage room on the right of reception. Make sure to deliver it like you've been taught. Treat this note like you would a real postal delivery.__
**Lakshmi**
	`If variable is true`
		_Got it!_
**Event**
	Journal updated. Player picks up the item and goes to see the intern.
**Intern**
	`If variable is true`
		_Dammit where did that go?_
**Lakshmi**
	_Uhmm Hi! Are you the new intern?_
**Intern**
	`If variable is true`
		_Oh, hum hi Lakshmi, what's up?_
**Lakshmi**
	_Well, I'm in the middle of my postal guild graduation testing and have a delivery for you!_
**Intern**
	`If variable is true`
		_Wow, really? You,re so lucky. I'll receive your mail then._
**Lakshmi**
	_Ok! Well then, I'm Lakshmi from the postal guild here to deliver your mail! Thank you for using our services and have a good day! 
		Wow thanks again!_ 
			_(...)_
**Intern**
	`If variable is true`
		_Hey are you okay?_ 
**Lakshmi**
		_Yes, just a little excited! Oh no not this again._
**Event**
	Screen blacks out and the player is now in a different room as the intern. 
	
**Intern**
	`If variable is true`
		_Dammit... I messed up again... How come I keep messing up everything... Even the simplest of task... I'm not cut out to be a guild member what was I thinking coming here. I can't do anything right.. (...)_
**Greg**
	`If variable is true`
		_Hello? Anybody in here? Where did that new intern go?_
**Intern**
	`If variable is true`
		_(...) Well I can at least minimize their disapointment... Back to it..._
**Event**
	Screen blacks out and the player is back in the guild room as Lakshmi. 
**Intern**
	`If variable is true`
		_Lakshmi!? Are you ok?_
**Lakshmi**
	_Ah... Yeah I'm ok sorry... (?) (Argh... I gotta get bettwe at that)_
**Intern**
	`If variable is true`
		_Ok phew. I thought I did something wrong again._
**Lakshmi**
	_No no! You did nothing wrong! In fact, thank you for being such a good practive delivery! I feel so much more prepared to be a guild worker and it's all thanks to you._
**Intern**
	`If variable is true`
		_(<3) Oh geez, well no problem then!_
**Lakshmi**
	_Keep up the good work and I'm sure you'll be a full guild member soon too!_
**Intern**
	`If variable is true`
		_Really? Do you really believe that?_
**Lakshmi**
	1) _Absolutelu_
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
	`If variable is true`
		_I saw, well done Lakshmi. I'm very proud. I am also happy to say... Welcome in, Lakshmi you are now a full guilf member. I hope to see more great things from you._
**Lakshmi**
	_(!) All right! Awesome! This is so awesome Greg! can we have a party!?_
**Greg**
	`If variable is true`
		_Maybe we'll set one up for later tonight, for now I'm putting you straight to work._
**Lakshmi**
	_Ok then, bring it on!_
**Greg**
	`If variable is true`
		_Go up to the front desk. The receptionist will have some deliveres for you to make._
**Event**
	Player goes to see the receptionist.
**Greg**
	`If variable is true`
		_Hey Lakshmi, congrats on becoming a full member. I've got a whole batch of deliveries here for you to make. Good luck!_
**Lakshmi**
	_Thanks! ( I better read who I need to deliver these too)_
#### Lakshmi delivers the first few mail (Start Dolphin Bay story) (Arkana)


general idea
- Leaves the guild hall proudly, but disorganised. 
- meets CAT and the gang
- meets Elio
- delivers mail to Doran
- delievers mail to Liam's sister. 


