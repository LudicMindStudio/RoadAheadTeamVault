---
tags:
created: 2025-10-13
---
By: Arkana and Corina
# Progress
- [x] Extract Dialogue from RPG Maker
- [x] Draft the Pre-Graduation portion. 
- [ ] Detail dialogue and events. (Make as many details about the environment for interaction with the map)
- [ ] Review each other's scripts
	** overarching review note. Do we keep the apostrophe in the game text or do we keep the language professional (you're vs you are)?
- [ ] Implement in the game
# Context
Lakshmi graduates from postal guild, then the story of Dolphin Bay starts.

Links to the previous work done about the graduation:
Early game notes: [[Dolphin Bay - Elements to be reviewed]], [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]], [[Dolphin Bay Story]] [[Main Story (Lakshmi's) Loose Brainstorming]], [[Original RPG Maker Scripts]]

# Characters
Lakshmi, Grandpa Dan, Greg. Intern. [[Guild Receptionist (Robert)]], [[Lakshmi (MC)]], [[Old Character Bios]]

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
- [x] Establish Lakshmi as a cheerful and happy go lucky person (finds beauty in the depressing world) (empathize when seeing fog and during exam) [[Lakshmi (MC)]]
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

Reference to [[(WIP) Plotlines & Story Progression]]  mention of fog and her memories being foggy (sorry)
#### Lakshmi does her exam 
*Map (interior not created yet)*

Prev work done: [[Day of the exam]]

* [Exam] event Since Greg can be a big goofball, I want him to troll Lakshmi with the pop quizz. Whether she does good or bad, she passes her exam, because it's more about her actions and maturity that Greg is evaluating.
* [Exam] Revaluate the multiple choice event. If we do this, we need for Greg to explain each of the wrong answers and it can be difficult. Might make a mini game or internal monologue with doodles instead.

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
##### Template
Template:
**Character 1**
	_Dialogue_

**Event**
	Description

**Character 2**
	`If variable is true`
		_Dialogue_


##### Notes for devs when implementing events
* [Welcome world] event is optional and can be interacted with later in the game. The game will implicitly point towards it with the Journal Side Quest [Thank Grandpa Dan for the bread]

#### Lakshmi wakes up in Greg's chalet (Corina)

** note. Do we include the grasshopper memory, or do we leave it for later?*
**Event**
	Cutscene of Lakshmi waking up at the table in her room (see if we can make a sprite for it or not)
**Lakshmi**
	*Yaawwwn...* *Right. I ended up journaling pretty late last night...*
**Event**
	Lakshmi stands up and looks to the left and right
**Lakshmi**
	*My back is so sore... I better get going, Greg will get me with his slipper if he finds out I slept in. He had something to tell me. He should be at the **Guild Hall**, as usual.*
**Event** 
	Journal updated: Greg will get to me if I am late... I should hurry up to the *Guild Hall*.   
**Event** 
	Lakshmi Interaction options [in the room]
	`If variable is true` Table
		**Lakshmi**
			*Journaling keeps your mind at bay and spirits sharp! But makes you prone to losing track of time… must have been written in small font.*
	`If variable is true` Mirror
		**Lakshmi**
			*Looking good there! Got dressed and ready since 3 AM!* 
			*...*
			*That does sound disgusting when I put it that way.*
	`If variable is true` Bed
		**Lakshmi**
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
	*Speaking of breakfast, go eat your slice of bread and run straight to the **Guild Hall**! Greg will skewer you if you are late!*
**Event**
	Grandpa Dan starts walking away towards the door.
**Lakshmi**
	 *Thanks Grandpa Dan. For the bread.* 
**Grandpa Dan**
	* *Khum.* * *Right. See you later Lakshmi.
**Event**
	Grandpa Dan walks out.
**Event**	
	Player interaction options
	`If variable is true` Bread
	**Lakshmi**
		His fingers really are blessed. The crust is the best part! Huh... Is it... maple syrup sour bread? Wow it is not even my birthday, I should thank him later.*
**Event** 
	Journal Updated: Thank Grandpa Dan for making your favourite bread.
	
#### Lakshmi goes to the Guild Hall in Dolphin Bay (Corina)
**Event**
	Lakshmi walks out of Greg's chalet
**Lakshmi**
	*Today is the day! Now if I go straight from here, **Guild Hall** should be up ahead. I have not been in Dolphin Bay often though... Bah, I can ask around for directions.*
**Event** 
	Lakshmi wanders through the forest, a narrow path from Greg's chalet towards Dolphin Bay. There is an optional path on the way.
**Event** [Welcome world]
	Optional path: Parallax map of the whole world. Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. Grandpa Dan is sitting on the lone bench. [Player can come back to look at the villages as they are unveiled by the fog, with game progression]
	`If variable is true` Interact with Grandpa Dan
	**Lakshmi** 
		*Wow. How beautiful.*
	**Grandpa Dan**
		*That is... one way to put it.*
	**Lakshmi**
		*How come?*
	**Grandpa Dan**
		*I'd say the world looks miserable with the fog.*
	**Lakshmi**
		 *Maybe. I do not have many memories left of the times before the fog... And it does sound terrible... But I cannot help but love it. I want to see all of it.*
	**Grandpa Dan**
		*...*
	There is a silent pause of the cutscene. And the interaction ends on this awkward note.
 	`If variable is true` Interact with Grandpa Dan again
	 **Grandpa Dan**
		*Hurry up to the Guild Hall! Greg is waiting for you.*
**Event**
	`If variable is true` Lakshmi walks down the path towards Dolphin Bay
**Lakshmi**
	*Brr. The forest gives me the creeps. Now I did hear kids in the village say there are monsters lurking there... No! Lakshmi get a hold of yourself! These are kid's tales, nothing more.* 
**Event**
	Lakshmi enters the village and can explore a bit. 
	`If variable is true` Leo (dog) jumps out on Lakshmi.
	**Lakshmi**
		*Eek! Leo! You cannot do that to me! It is a Grandpa Dan thing!*
	**Leo**
		*Wuf wuf!* 
	Leo runs away. 
	**Lakshmi**
		*Ugh. Knowing this energetic pup, I will need to get a few more scares before he is satisfied.*
	Journal Update: Leo thinks it is a game. Look in the village if you can find him. He will be exhausted at some point.
	
#### Lakshmi does her exam (Corina)
**Event**
	Lakshmi goes up to the receptionist. 
**Receptionist**
	`If variable is true`
		*Welcome to the post guild! I'm the receptionist....ah Lakshmi it's you! A big day for you!  Greg is waiting in his office in the back room. Good luck!*
**Lakshmi**
	*... Big day? Good luck? Euhhh. How much am I in trouble on a scale from 1 to "You're on farming duty today."*
**Receptionist**
	*Oh, you will be picking apples alright.*
**Lakshmi**
	*That bad... Alright! Thanks!*
**Lakshmi**
	*Brr... She is getting scarier than Greg.*
**Event**
	Lakshmi goes to the back of the guild hall. 
**Intern** 
	Lakshmi overhears the intern speaking to themselves behind a wall. Cannot interact with them yet.
	*Dammit where are those shipment boxes? The guild work is too much I'm going to get in trouble again*
**Greg**
	`If variable is true` Interact with Greg
		*Ah Lakshmi, good morning. You slept in today, I hope you are well rested.*
**Lakshmi**
	*As much as I can be... haha. Sorry Greg... I must have missed my alarm. Nothing too big is going on today I hope?*
**Greg**
	`If variable is true`
		_I'm afraid you are incorrect, Lakshmi. You have.... a pop quiz today!_
**Lakshmi**
	_A pop quiz??_
**Greg**
	`If variable is true`
		_Yes Lakshmi I'm sorry to say. You've been progressing too quickly and I believe you are ready to graduate._
**Lakshmi**
	*Are you kidding me? I've been dreaming of this day!* *Although... didn't expect to sleep so little...*
**Greg**
	*Ah well, you leave much to be desired in terms of discipline. But no matter, you are young. You will learn.*
**Lakshmi**
	*Is this a challenge? If so, I accept!*
**Greg**
	_(?) A challenge? Who said anything about a challenge? You'll start with just a few written questions. Go over to the classroom, take a seat and I'll be over in a minute with your exam._
**Lakshmi**
	*Eugh... At least it beats picking up apples all afternoon.*
**Event**
	Journal updated. Player goes towards the classroom.  Sits at a desk.
**Lakshmi**
	_(deep breaths, I've got this!)_
**Event**
	Greg walks over to Lakshmi to give her the exam.
**Greg**
	`If variable is true`
		_Here you are Lakshmi, only 3 questions. Best of luck._.
**Event**
	Greg walks away.
**Lakshmi**
	*Bring it on!*
**(WIP) Event** [Exam] 
	_Ok, bring on question 1!_
		1) The fog that effects our world is most receptive to what human condition?
			1) Hunger
				1) _It was hunger that makes the fog appear right?_
			2) Emotion 
			3) Speech
		2) What's the primary goal of our influential guild, with location across many post fog cities?
			1) Fortune
				1) _Fortune, the guild tried to make money in the new world._
			2) Adventure
			3) Communication
		3) What types of government did the survivors of the fog create for their new cities?
			1) Community Driven
				1) _Us post fog people have community values! A lot of strength was gained by coming together as communities against the fog._
			2) Monarch 
			3) Anarchy
**Event**
	Journal updated: Exam is done. Time to see Greg to see how I have done.
**Lakshmi**
	_Ok Greg, I've finished the test._
**Greg**
	`If variable is true` (if completed the test badly)
		_Great job Lakshmi, Let's see how you did. Hmmm.... You did alright Lakshmi but I've seen you do better._
**Lakshmi**
	_Darn. I knew I was blanking on a few._
**Greg**
	`If variable is true` (if completed the test well)
		_We'll still move on to the next part. I believe in you Lakshmi._
**Lakshmi**
	_I'll try my best Greg, bring it on!_	
	
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


#### Miscelaneous Side Quests Wrap-Up

1. Find Leo the dog

2. Thank Grandpa Dan for making your favourite bread 

3. (WIP) Can talk to kids about the tales of monsters in the forest.