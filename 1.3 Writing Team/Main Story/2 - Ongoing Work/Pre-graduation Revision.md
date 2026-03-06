---
tags:
created: 2025-10-13
---
By: Corina
# Progress
- [ ] Outside scene with Grandpa Dan - Act 1, Quest 1 - Scene 2
- [ ] Intern Memory - Quest 2 - Scene 1
- [ ] Graduation Ceremony - Quest 2 - Scene 2 (?) 
- [ ] Exam 
- [ ] Interactable in Chalet
---

# Context
Lakshmi graduates from postal guild, then the story of Dolphin Bay starts.

Links to the previous work done about the graduation:
Early game notes: [[Dolphin Bay - Elements to be reviewed]], [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]], [[Dolphin Bay Story]] [[Main Story (Lakshmi's) Loose Brainstorming]], [[Original RPG Maker Scripts]]

# Characters
Lakshmi, Grandpa Dan, Greg. Intern (NAME??). [[Guild Receptionist (Robert)]], [[Lakshmi (MC)]], [[Old Character Bios]], experienced guild member

---

#### Lakshmi wakes up in Greg's chalet
*Map [[Greg Chalet]]*

#### Lakshmi does her exam 
*Map (interior not created yet)*

Prev work done: [[Day of the exam]]

* [Exam] event Since Greg can be a big goofball, I want him to troll Lakshmi with the pop quizz. Whether she does good or bad, she passes her exam, because it's more about her actions and maturity that Greg is evaluating.
* [Exam] Revaluate the multiple choice event. If we do this, we need for Greg to explain each of the wrong answers and it can be difficult. Might make a mini game or internal monologue with doodles instead.


-> List of questions during exam (multiple choice?): Lakshmi will comment about her experiences with these :
- Economy : isolation between villages. Less economy now. Self sustained villages
- Technology : fell. No modern means of communication
- Schools : farming schools (e.g. Lakshmi comments that prefers farming schools much more over normal schools, likes plants, can add a plant in her room)
- Fog : calamity, cant traverse it. Monsters. (e.g. can add that she didn't encounter any monster before but she is deeply scared of them)
- Reason for deliverymen : connect all villages together (maybe have a short verbal saying.) Delivering mail at your doorstep faster than email

Fun twist to **confirm with dev team** : she is very bored and imagines it as a mini game. Or doodles by accident on the exam page and we can show it as drawings on screen. Easier to get the player interested in the game and hint at future gameplay?
- ==COMMENT FROM ARKANA:== I love the idea of the doodling, but if she's late maybe she doesn't have much time to do that. I think having an image of the actual exam questions pop up and then choosing her answer would make it more interesting visually. Maybe she could get distracted by seeing everyone getting up because they're done and do a little doodle then tell herself to stay focused. Then, on the image of the exam we would see her doodle. Can you visualise what I'm trying to explain?
#### Lakshmi speaks to the intern (enter first memory) 
*Map (interior not created yet)*
#### Lakshmi delivers the first few mail (Start Dolphin Bay story) 
*Map [[Dolphin Bay Locations]] (Eastern and Western side?)*

Previous work done :  [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]] (may want not to include Dr. Lamborghini's delivery yet so we can flesh out the character better)

---


---

### Lakshmi wakes up in Greg's chalet (AK revision, another doc)


**Event**
    Cutscene of Lakshmi waking up at the table in her room (see if we can make a parallax image for it or not)
**Lakshmi**
    *Yaawwwn...* *Right. I ended up journaling pretty late last night...*
**Event**
    Lakshmi stands up and looks to the left and right
**Lakshmi**
    *My back is so sore... I better get going, Greg will get me with his slipper if he finds out I slept in. He had something important to tell me. He should be at the **Guild Hall**, as usual.*
**Event** 
    Journal updated: Greg will be upset with me if I am late... I should hurry up to the *Guild Hall*.   
**Event** 
    Lakshmi Interaction options [in the room]
    `If variable is true` Table
        **Lakshmi**
            *Journaling keeps your mind at bay and spirits sharp! But makes you prone to losing track of time… must have been written in small font.*
    `If variable is true` Mirror
        **Lakshmi**
            *Looking good there! Dressed in uniform since 3 AM*
	*…*
	*That does sound pretty distasteful when I put it that way.*
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
    *Ah! Lakshmi don't scare me like that! That mutt already got the jump on me this morning. My heart can't take much more!*
**Lakshmi**
    *Leo? Pfft. Ok grandpa. He just knows you need the energy to get your morning started.*
**Grandpa Dan**
      * *grumble grumble* * *Yet I've been up since morning.* * *grumble grumble* * *Well, if you see that dog, get him home. I made him his favourite biscuits.*
**Lakshmi**
    *Ay Ay, cap'n!*
**Event**
    Journal Updated: Find Leo. Who should I hurry up to first, Leo or Greg? The answer is *yes*.
**Grandpa Dan**
    *Speaking of breakfast, go eat your slice of bread and run straight to the **Guild Hall**! Greg will skewer you if you are late!*
**Event**
    Grandpa Dan starts walking away towards the door.
**Lakshmi**
     *Thanks Grandpa Dan.* 
**Grandpa Dan**
    * *Khum.* * *Right. See you later Lakshmi.
**Event**

    Grandpa Dan walks out.
    
**Event**    
    Player interaction options
    `If variable is true` Bread
    **Lakshmi**
        *Gotta give it to him, he's so gifted! The crust is the best part! Huh... Is it... maple syrup sour bread? Wow it’s not even my birthday. I should thank him later.*
**Event** 
    Journal Updated: Thank Grandpa Dan for making your favourite bread.

### Quest 1, Scene 2 : Lakshmi Talks to Grandpa Dan

#### Lakshmi goes to the Guild Hall in Dolphin Bay (Corina)
**Event**
    Lakshmi walks out of Greg's chalet
**Lakshmi**
    *Today is the day! Now if I go straight from here, **Guild Hall** should be up ahead. 
    I have not been in Dolphin Bay often though... 
    Bah, I'll figure this out!*
**Event** 
    If player goes up to Greg. 
    Descriptive notes: Parallax map of the whole world. Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. Grandpa Dan is sitting at the lone bench. [Player can come back to look at the villages as they are unveiled by the fog, with game progression]
    `If variable is true` Interact with Grandpa Dan
    Lakshmi 
        Wow. What a view...
    Narrator: 
	    A light breeze touches your cheek.
    Grandpa Dan
        Huff
	Lakshmi
        Still grumpy?
    Grandpa Dan
        ...
        Sit down a bit with me, will you?
    Player Choice:
	    Sit Down
		    Lakshmi: 
			    Hey Gramps, what got your mood so sour?
		    Grandpa Dan: 
			    ...
		    Grandpa Dan: 
			    Tell me what do you see in front of you.
		    Player choice:
			    The Fog
				    Grandpa Dan: Right. And how do you feel about the fog?
					    Player choice:  
						    It's peaceful
							    Narrator: 
								    The stillness of the moment is oddly... soothing. Birds chirp quietly, keeping company to the dawn of another day.
							    Grandpa Dan
								    That is... an odd way to put it.
							    Lakshmi
								    What do you mean?
								Grandpa Dan
									Do you remember anything about the **fog**? How it came to be?
								Player choice: 
									Some
										Lakshmi
											I have visions... When it all started... of my parents. I don't remember much anymore.
										Grandpa Dan
											Most youth don't nowadays. 
										Grandpa Dan
											This fog shrouds your memories in ways you wouldn't expect. *(double check [[Narrative Goals]])*
										Grandpa Dan
											Maybe for the best. Dwelling on past memories won't build a future.
										Player choice:
											Intensely Disagree
												Lakshmi
													NO! Keeping and sharing memories is what will keep us together! How can you say that!
												 Grandpa Dan: 
													 ...
												 [Quick QTE to apologize: press a button before time runs out]
												 If player is successful: 
													 Lakshmi
														 I... I'm sorry. I shouldn't have raised my voice at you.
													 Grandpa Dan
														 ...
													 Grandpa Dan
														 You're still young. 
												 If player is unsuccessful: 
													 Lakshmi
														 ...
													 Grandpa Dan
														 ...
													 [Lakshmi runs away form the scene.]
											Softly Disagree
												Lakshmi
													I see your point, Grandpa Dan... but I... think keeping and sharing memories is what will keep us together. To build a strong future. 
												Lakshmi
													A future with your memories too.
												Grandpa Dan
													Hum...
												Lakshmi
													I should go. Greg will get impatient otherwise.
												Grandpa Dan
													See you later Lakshmi. 
												Grandpa Dan
													I... 
												Grandpa Dan
													hope to share some of your enthusiasm one day.
									Not at all  
										Grandpa Dan
											Most youth don't nowadays. 
										Grandpa Dan
											This fog shrouds your memories in ways you wouldn't expect. *(double check [[Narrative Goals]])*
										Grandpa Dan
											Maybe for the best. Dwelling on past memories won't build a future.
										Player choice:
											Intensely Disagree
												Lakshmi
													NO! Keeping and sharing memories is what will keep us together! How can you say that!
												 Grandpa Dan: 
													 ...
												 [Quick QTE to apologize: press a button before time runs out]
												 If player is successful: 
													 Lakshmi
														 I... I'm sorry. I shouldn't have raised my voice at you.
													 Grandpa Dan
														 ...
													 Grandpa Dan
														 You're still young. 
												 If player is unsuccessful: 
													 Lakshmi
														 ...
													 Grandpa Dan
														 ...
													 [Lakshmi runs away form the scene.]
											Softly Disagree
												Lakshmi
													I see your point, Grandpa Dan... but I... think keeping and sharing memories is what will keep us together. To build a strong future. 
												Lakshmi
													A future with your memories too.
												Grandpa Dan
													Hum...
												Lakshmi
													I should go. Greg will get impatient otherwise.
												Grandpa Dan
													See you later Lakshmi. 
												Grandpa Dan
													I... 
												Grandpa Dan
													hope to share some of your enthusiasm one day.
						    It's creepy
							    Narrator
								    Crows kackle nosily, laughing at you. [Lakshmi humps in place]. 
							    Narrator 
								    Who knows what else is hiding in there? 
							    Lakshmi
								    I just... the vibes are not there... The fog is too mysterious.
							    Grandpa Dan
								    Not unexpected. 
							    Grandpa Dan
								    Still, I had some hope the new generation would be blissfully unaware of old fears.
							    Lakshmi
								    What do you mean?
								Grandpa Dan
									Do you remember anything about the **fog**? How it came to be?
								Player choice: 
									Some
										Lakshmi
											I have visions... When it all started... of my parents. I don't remember much anymore.
										Grandpa Dan
											Most youth don't nowadays. 
										Grandpa Dan
											This fog shrouds your memories in ways you wouldn't expect. *(double check [[Narrative Goals]])*
										Grandpa Dan
											Maybe for the best. Dwelling on past memories won't build a future.
										Player choice:
											Intensely Disagree
												Lakshmi
													NO! Keeping and sharing memories is what will keep us together! How can you say that!
												 Grandpa Dan: 
													 ...
												 [Quick QTE to apologize: press a button before time runs out]
												 If player is successful: 
													 Lakshmi
														 I... I'm sorry. I shouldn't have raised my voice at you.
													 Grandpa Dan
														 ...
													 Grandpa Dan
														 You're still young. 
												 If player is unsuccessful: 
													 Lakshmi
														 ...
													 Grandpa Dan
														 ...
													 [Lakshmi runs away form the scene.]
											Softly Disagree
												Lakshmi
													I see your point, Grandpa Dan... but I... think keeping and sharing memories is what will keep us together. To build a strong future. 
												Lakshmi
													A future with your memories too.
												Grandpa Dan
													Hum...
												Lakshmi
													I should go. Greg will get impatient otherwise.
												Grandpa Dan
													See you later Lakshmi. 
												Grandpa Dan
													I... 
												Grandpa Dan
													hope to share some of your enthusiasm one day.
									Not at all  
										Grandpa Dan
											Most youth don't nowadays. 
										Grandpa Dan
											This fog shrouds your memories in ways you wouldn't expect. *(double check [[Narrative Goals]])*
										Grandpa Dan
											Maybe for the best. Dwelling on past memories won't build a future.
										Player choice:
											Intensely Disagree
												Lakshmi
													NO! Keeping and sharing memories is what will keep us together! How can you say that!
												 Grandpa Dan: 
													 ...
												 [Quick QTE to apologize: press a button before time runs out]
												 If player is successful: 
													 Lakshmi
														 I... I'm sorry. I shouldn't have raised my voice at you.
													 Grandpa Dan
														 ...
													 Grandpa Dan
														 You're still young. 
												 If player is unsuccessful: 
													 Lakshmi
														 ...
													 Grandpa Dan
														 ...
													 [Lakshmi runs away form the scene.]
											Softly Disagree
												Lakshmi
													I see your point, Grandpa Dan... but I... think keeping and sharing memories is what will keep us together. To build a strong future. 
												Lakshmi
													A future with your memories too.
												Grandpa Dan
													Hum...
												Lakshmi
													I should go. Greg will get impatient otherwise.
												Grandpa Dan
													See you later Lakshmi. 
												Grandpa Dan
													I... 
												Grandpa Dan
													hope to share some of your enthusiasm one day.
											
								
			    The Fog, duh
				    Grandpa Dan: [jumps in place] Don't play coy with me --Ayy. my back.
				    Khum. 
				    Right. And how do you feel about the fog?
			    
	    Walk Away
		    *Lakshmi: Sorry Gramps, I am in a hurry. You know how Greg gets when he is angsty. Maybe another time.*
		    *Grandpa Dan: Huff... Right.*




    **Lakshmi**
         *Maybe. I do not have many memories left of the times before the fog... And while the cataclysm does sound like an intense period of time... I cannot help but love the world. I want to see all of it.*
    **Grandpa Dan**
        *...*
    There is a silent pause during the cutscene, with the wind blowing. The interaction ends on this awkward note.
     `If variable is true` Interact with Grandpa Dan again
     **Grandpa Dan**
        *Hurry up to the Guild Hall! Greg is waiting for you.*
**Event**
    `If variable is true` Lakshmi walks down the path towards Dolphin Bay
**Lakshmi**
    *Brr. The forest gives me the creeps. Now I heard kids in the village say there are monsters lurking here... No! Lakshmi get a hold of yourself! These are kid's tales, nothing more.* 
**Event**
    Lakshmi enters the village and can explore a bit. 
    `If variable is true` Leo (dog) jumps out on Lakshmi.
    **Lakshmi*
        *Eek! Leo! You cannot do that to me! It’s a Grandpa Dan thing!*
    **Leo**
        *Wuf wuf!* 
    Leo runs away. 
    **Lakshmi**
        *Ugh. Knowing this energetic pup, I will need to get a few more scares before he is satisfied.*
    Journal Update: Leo thinks it is a game. Look in the village if you can find him. He will be exhausted at some point.
    
### Quest 2: Graduation Lakshmi does her exam 
**Event**
Before crossing the bridge to get to the guild hall, Lakshmi notices a boy staring into the horizon. Just looks at him for a few seconds. Does not comment anything.
**Event**
    Lakshmi goes up to the receptionist. 
**Receptionist**
    `If variable is true`
        *Welcome to the post guild! I'm the receptionist....ah Lakshmi it's you! A big day, eh? Greg is waiting in his office in the back room. Good luck!*
**Lakshmi**
    *... Big day? Good luck? Euhhh. How much am I in trouble on a scale from 1 to "You're on farming duty today."*
**Receptionist**
    *Oh, you will be pulling weeds alright.*
**Lakshmi**
    *That bad... Alright! Thanks!*
**Event**
    Lakshmi turns around.
**Lakshmi**
    *Brr... He is getting scarier than Greg.*
**Event**
    Lakshmi goes to the back of the guild hall. Lakshmi overhears the intern speaking to themselves behind a wall. Cannot interact with them yet.
**Intern** 
    *Dammit! Where are those shipment boxes? I'm going to get in trouble again… The guild work is too much.*
**Greg**
    `If variable is true` Interact with Greg
        *Ah Lakshmi, good morning. You slept in today, I hope you are well rested.*
**Lakshmi**
    *As much as I can be... haha. Sorry Greg... I must have missed my alarm. Nothing too big is going on today I hope?*
**Greg**
      _I'm afraid you are incorrect, Lakshmi. You have.... your graduation exam today!_
**Lakshmi**
    _My graduation exam??_
**Greg**
    _Yes Lakshmi I'm sorry for what I am about to say… You've been progressing too quickly and I believe you are ready to become a postal worker!
**Lakshmi**
    *Are you kidding me? I've been dreaming of this day!* *Although... I expected a bit of a heads up so I could sleep in a bit more… *
**Greg**
    *Ah well, you leave much to be desired in terms of discipline. But no matter, you are young. You will learn.*
*Lakshmi*
    *Is this a challenge? If so, I accept!*
**Greg**
    A challenge? Who said anything about a challenge? You'll start with just a few written questions. Go over to the classroom, take a seat and I'll be over in a minute with your exam._
**Lakshmi**
    *Eugh... At least it beats pulling out weeds all afternoon.*
**Event**
    Player goes towards the classroom. Sits at a desk.
**Lakshmi**
    _(Deep breaths, I've got this!)_
**Event**
    Greg walks over to Lakshmi to give her the exam.
**Greg**
    `If variable is true`
        _Here you are Lakshmi, only 3 questions. Best of luck._.
**Event**
    Greg walks away.
**Lakshmi**
    *Bring it on!*
**Event** [Quizz] p.s. it can look like a paper on screen, where the player will click on the right answer. If the player picks the correct option (in bold) then a doodle will appear next to the paper.
 **Lakshmi** 
 _Ok, bring it on, question 1!_
        1) The fog affecting our world is most receptive to what human aspect?
            1) Hunger
                _It was hunger that makes the fog appear right? I'm hungry just thinking about it._
            2) **Emotion** 
				*Strong emotion sublimes the fog - is what Greg would say, right?*
            3) Speech
				*While Greg recommended against screaming if I ever get lost in the foggy woods… is this what makes the fog appear?*
        2) What's the primary goal of our influential guild located in every village?
            1) Fortune
	               _Fortune. All economy collapsed after the calamity, so the guild tries to create jobs in the new world._ 
            2) Adventure
				*Adventure. It is pretty much the only way to travel between villages now! That excites me the most.*
            3) **Communication**
				*All manner of modern technology collapsed after the cataclysm… of course it's the only way people communicate nowadays if you live in different villages.*
	    3) What do children learn in school?
		    1) **Farming**
				*Most folks farm to sustain the village. While I love picking apples in the Fall… I most certainly hate picking out weeds all year long. Guess who has to do that most often.*
			2) There are no schools anymore
				*That makes sense too. There aren't enough students to fill a real school in villages anymore… but they still learn somehow. Seems like a trick question to me. But whatever, it’s the process of elimination*
			3) Meditation 
				_Boredom aside, Lora did insist on teaching me. My best shot of traversing through the fog. Not sure I want to think about that!_
**Lakshmi**
	*Wait, that's it? Is this a joke?*
**Event**
    Journal updated: Exam done. Time to see Greg for some explanation.
**Lakshmi**
    *Ok Greg, I've finished the exam. Do you really think three questions are enough to test someone’s deep understanding of the world?*
**Greg**
	*Now, now, don’t get too cocky. Let’s see how you did first.*
    `If variable is true` (All answers are correct.)
        **Greg**
	        _Great job Lakshmi! You've got all correct. 
		**Lakshmi**
			*Whoo hoo!*
    `If variable is true` (One question or more are wrong.)	
	**Greg**
		Hmmm.... You did alright Lakshmi but I've seen you do better._
	**Lakshmi**
	    _Darn. I knew I was blanking on a few._
**Greg**
	*And your test result is…*
**Lakshmi**
    _..._
**Greg**
	*Insignificant!*
**Lakshmi**
    _What kind of grade is that?_
**Greg**
	*It was less about how much you know about the world, and more about how you react to unpredictable and stressful situations. Today’s exam was out of nowhere, and yet you challenged it face first. It’s fine not to know all the answers.*
	*I won’t lie to you Lakshmi, guild members face challenges where pure enthusiasm won’t be enough. When that happens, don't forget you can take a step back and ask for help.*
**Lakshmi**
    _…_
**Greg**
    _Hum. Very well, let’s move on to the next part._
**Lakshmi**
    _I'll try my best Greg, bring it on!_    
    
### Quest 2 - Scene 1: Lakshmi speaks to the intern (enter first memory) (Arkana) -> to modify

**Greg**
    _Alright! Now it's time for the... Practical test! You'll deliver a little message for the new intern._
**Event**
    Player receives the mail.
**Greg**
	_Deliver this to the new intern. They should be in the storage room on the right of reception. Make sure to deliver it like you've been taught. Treat this note like you would a real postal delivery._
**Lakshmi**
    _Got it!_
**Event**
    Journal updated. Player picks up the item and goes to see the intern.
**Intern**
    _Dammit where did that go?_
**Lakshmi**
    _Uhmm Hi! Are you the new intern?_
**Intern**
    _Oh, hum hi, what's up?_
**Lakshmi**
    _Well, I'm in the middle of my postal guild graduation testing and have a delivery for you!_
**Intern**
    _Wow, really? You’re so lucky. I'll receive your mail then._
**Lakshmi**
    _Ok! Well then, I'm Lakshmi from the postal guild here to deliver your mail! Thank you for using our services and have a good day!_
**Event**
    Screen shakes.
**Lakshmi**
	_Whoa thanks again!_ 
**Intern**
    _Hey... are you okay?_ 
**Lakshmi**
    _Yes, just a little excited! Oh no not this again..._
**Event**
    Screen blacks out and the player is now in a different room as the intern. 
**Intern**
    _Dang-it... I dumped the mail again. How come I keep messing up everything... Even the simplest of tasks... I'm not cut out to be a guild member, what was I thinking coming here. I can't do anything right.._
**Greg**
    _Where's that mail I asked for? Where did that new intern go?_
**Intern**
    _Well I can at least minimize their disappointment... Back to it...but I just want to hide in here._
**Event**
    Screen blacks out and the player is back in the guild room as Lakshmi. 
**Intern**
    _Lakshmi!? Are you ok?_
**Lakshmi**
    _Ah... Yeah I'm ok sorry... (Argh... I got to get better at that)_
**Intern**
    _Ok phew. I thought I did something wrong again._
**Lakshmi**
    _No no...You did nothing wrong? Thanks for your help._
**Intern**
    _No problem, then!_
**Lakshmi**
    _Keep up the good work and I'm sure you'll be a full guild member soon too!_
**Intern**
    _Really? Do you really believe that?_
**Lakshmi**
    _For sure! Well I better go back to Greg and tell him how I did. Thanks again, see you around._
**Event**
    Journal updated. Player goes to see Greg.
**Lakshmi**
    _I did it Greg! Mail delivered._
**Greg**
    _I saw, well done. I'm very proud. I am also happy to say... Welcome in, Lakshmi you are now a full guild member. I hope to see more great things from you._
**Lakshmi**
    _All right! This is so awesome Greg!_
**Greg**
    _Now, I'm putting you straight to work._
**Lakshmi**
     _Bring it on!_
**Greg**
    _Go up to the front desk. Robert will have some deliveries for you to make._
**Event**
    Player goes to see the receptionist.
**Robert**
    _Hey Lakshmi, congrats on becoming a full member. I've got a whole batch of deliveries here for you to make. Good luck!_
**Lakshmi**
    _Thanks! 

### Lakshmi delivers the first few mail (Start Dolphin Bay story) (CL)

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
	_I don't like passing by the protesters... they're loud. They sound like monsters._

*Lakshmi*
	_Hum... sorry kids, I'm not sure what you're talking about but I better get to work see you around!

**Event**
	In their bag, the player has 4 letters but only have access to 3. There will be an event later where Lakshmi realises there is a 4th letter. The 3 first letters are for NPCs.  The player can take a right to go towards "East dolphin bay" or to the left towards "West dolphin bay"

**Event (Option chosen is player goes left)**
	Player has mail for Oliver. They have to walk around to find where to go. Lakshmi passes by a boy sitting and staring into the horizon. 
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
			**Event**
				Oliver walks towards his house and the player has to follow him
					_Oliver_
						_This is my place. Well... I guess you could've just left the letter with me instead of following me around._
					_Lakshmi_
						_It's okay, I'll know where your house is for future deliveries! In the mailbox it goes. Thank you for trusting me with your mail, goodbye!_
		2. Take your own way.
			*Lakshmi*
				_It's okay, I'll figure it out. Thank you._
			*Oliver*
				_As you wish._
	Option 2: No.
		`If variable is true`
	_Lakshmi_
		_(In her head) I'll let him be. Now, let's deliver some mail! How about I try to find 92 Peak street_
	**Event**
		Player walks around the map of "rural Dolphin Bay" until they find the house on 92 Peak street. 
	_Lakshmi_
		_Haha! I found it. Let's go ring the doorbell._
	**Event**
		Player has to approach the door and hears a doorbell sound
	_Lakshmi_
		_Oh...No answer. I guess it goes right into the mailbox. Thank you for trusting us with your mail!! Now onto the next house._
		
**Event (Option chosen is player goes right)**
	*Lakshmi*
		_Let's go to central Dolphin Bay!_
		**Event**
			Player walks on the bridge to go to central Dolphin Bay.
			*Elio*
				_Hello! Did you know that the male seahorse gives birth?_
			*Lakshmi*
				_Haha... no I didn't know._
			*Elio*
				_Did you know that octupuses have 3 hearts? Animals are so interesting!_
			*Lakshmi*
				_No, I..._
			*ELio*
				 _Animals are so interesting!_
			*Lakshmi*
				*Yes, they...*
			*Elio*
				_Did you know that sea otters hold hands when they sleep on their backs?_
			*Lakshmi*
				_Sorry, I have to go. Thank you for the fun facts._
			*Elio*
				_I wouldn't go that way if I were you but do as you wish!_
			**Event**
				Elio leaves happily. Lakshmi continues crossing the bridge a bit scared. 
			*Lakshmi*
				_These kids confuse me... I need to focus and have a good first day on the job! I need to go find the baker._	
		**Event**
				Player must walk around to find the bakery. They walk inside and the sound of a bell resonates. 
			**Lakshmi**
				_Looks like I've got a package for you_ 
			**Camie**
				_No Way! OMG please, please be that almond flour_ 
			**Lakshmi**
				_Feels right_
			**Camie**
				_Hey thanks kid. Here, I packed some muffins for the protest. You want one?_
			**Lakshmi**
				_Protest?...I'll take it to go please. Thanks!_
			**Lakshmi**
				_(In her head) Something weird is happening in this town..._

**Event (Quest to Liam's memory)**
	After delivering mail to 2 NPCs. Lakshmi is ready to go back to the guild but realises she missed a letter which has a nice dolphin wax seal on it.
	_Lakshmi_
		_Ahhhh! I'm all done with my deliveries. It was an easy first day. Let me double check that my bag is empty._
	_Lakshmi_
		_Ahhhh! I'm all done with my deliveries. It was an easy first day. Let me double check that my bag is empty._
	_Lakshmi_
		_NO WAY!!! I missed one and it has such a pretty wax seal on it. I need to get this to a certain Liam. I have to get going now!_ 
	**Event**
		In her confusion. Lakshmi doesn't check the address and doesn't know where to go. A timer of 30 seconds starts where the player tries to find where they need to go but nothing is helping them.
	_Lakshmi_
		_ARGHH! I don't know where to go! I need to breathe. Let me take a second to figure this out. I should look at the address._
	**Event**
		Player opens their bag.
	_Lakshmi_
		_There it is 54 dolphin corner in Central Dolphin Bay. I've got this!_
	**Event**
		Journal uptate. Lakshmi reminds herself that she needs to breathe when she's overwhelmed.
	**Event**
		Player walks around to find Liam's house. Once found they ring the doorbell and Liam's sister answers.
	==ADD DISCUSSION WITH SISTER==

[[Memory of Liam Script]]


### Miscellaneous Side Quests Wrap-Up

1. Find Leo the dog

2. Thank Grandpa Dan for making your favourite bread 

3. (WIP) Can talk to kids about the tales of monsters in the forest.

4. Journaling (note. To wrap up some loose ends of the plot and to get Lakshmi’s perspective of the world. It would be nice for her to have spots to sit down and write a sentence or two about what she has just experienced. Very thematic for mental health and emotion processing and also memories.)

