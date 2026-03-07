---
tags:
created: 2026-03-06
---
By: Corina
# Progress
- [x] Outside scene with Grandpa Dan - Act 1, Quest 1 - Scene 2
- [x] Intern Memory - Quest 2 - Scene 1
- [x] Graduation Ceremony - Quest 2 - Scene 2 (?) 
- [ ] Exam questions
- [ ] Interactables in Chalet
- [ ] Add narrator to other parts of the writing 
- [ ] Make sure all exam answers are hinted at in previous dialogue/interctebles
- [ ] Finish Quest 2 - Scene 6
---

# Context
Lakshmi graduates from postal guild, then the story of Dolphin Bay starts.

Links to the previous work done about the graduation:
Early game notes: [[Dolphin Bay - Elements to be reviewed]], [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]], [[Dolphin Bay Story]] [[Main Story (Lakshmi's) Loose Brainstorming]], [[Original RPG Maker Scripts]]

# Characters
Lakshmi, Grandpa Dan, Greg. Intern (NAME??). [[Guild Receptionist (Robert)]], [[Lakshmi (MC)]], [[Old Character Bios]], experienced guild member

---
# Draft 
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

---
### Quest 1, Scene 2 : Lakshmi Talks to Grandpa Dan

Event
    Lakshmi walks out of Greg's chalet
Lakshmi
    Today is the day! Now if I go straight from here, Guild Hall should be up ahead.
    I have not been in Dolphin Bay often though.. 
    Bah, I'll figure this out!

Event 
    If player goes up to Greg.
    Descriptive notes: Parallax map of the whole world. Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. Grandpa Dan is sitting at the lone bench. [Player can come back to look at the villages as they are unveiled by the fog, with game progression]
Lakshmi 
	Wow. What a view...
Narrator
    A light breeze touches your cheek.
   Grandpa Dan
       Huff.
Lakshmi
       Still grumpy?
   Grandpa Dan
       ...
   Grandpa Dan
       Sit down a bit with me, will you?
   **Player Choice**
    **Sit Down**
	    Lakshmi
		    What got your mood so sour?
	    Grandpa Dan
		    ...
	    Grandpa Dan
		    Tell me what do you see in front of you.
	    **Player choice**
		    **The Fog**
		    **The Fog, duh**
			    Grandpa Dan
				    [jumps in place] Don't play coy with me --Ayy. my back.
				Grandpa Dan
				    Khum. 
		[Regardless of choice]
		Grandpa Dan
		    Right. And how do you feel about the fog?
	    **Player choice**
		    **It's peaceful**
				 Narrator
				    The stillness of the moment is oddly... soothing. Birds chirp quietly, keeping company to the dawn of another day.
			    Grandpa Dan
				    That is... an odd way to put it.
			**It's creepy**
			    Narrator
				    Crows kackle nosily, laughing at you.
				**Event**
					Lakshmi jumps in place.
				Narrator 
					Who knows what else is hiding in there? 
				Lakshmi
				    I just... the vibes are not there... The fog is too mysterious.
				Grandpa Dan
				    Not unexpected. 
				Grandpa Dan
				    Still, I had some hope the new generation would be blissfully ignorant of old fears.
		[Regardless of choice]
		Lakshmi
			What do you mean?
		Grandpa Dan
			Do you remember anything about the **fog**? How it came to be?
		**Player choice** 
			**Some**
				Lakshmi
					I have visions... When it all started... of my parents. I don't remember much anymore.
			**Not at all**
		[Regardless of choice]
		Grandpa Dan
			Most youth don't nowadays. 
		Grandpa Dan
			This fog shrouds your memories in ways you wouldn't expect. *(to double check if makes sense with [[Narrative Goals]])*
		Grandpa Dan
			Maybe it's for the best. Dwelling on past memories won't build a future.
		**Player choice**
			**Intensely Disagree**
				Lakshmi
					NO! Sharing memories is what will keep us together! How can you say that!
				 Grandpa Dan: 
					 ...
				Lakshmi
					Shoot! Too brash. Should I apologize? Quick!
				 [Quick QTE to apologize: press a button before time runs out (to double check if possible with dev team)]
				 **If player is successful** 
					 Lakshmi
						 I... I'm sorry. I shouldn't have raised my voice at you.
					 Grandpa Dan
						 ...
					Grandpa Dan
						 You're still young. 
					Grandpa Dan
						Go see Greg, he is waiting for you. 
					Grandpa Dan
						I... 
					Grandpa Dan
						Hope to share some of your enthusiasm one day.
				 **If player is unsuccessful**
					 Lakshmi
						 ...
					 Grandpa Dan
						 ...
					Event
						 Lakshmi runs away form the scene.
			**Softly Disagree**
				Lakshmi
					I see your point, Grandpa Dan... but I... think keeping and sharing memories is what will keep us together. To build a strong future. 
				Lakshmi
					A future where you can share your memories too.
				Grandpa Dan
					Hum...
				Lakshmi
					I should go. Greg will get impatient otherwise.
				Grandpa Dan
					See you later Lakshmi. 
				Grandpa Dan
					I... 
				Grandpa Dan
					Hope to share some of your enthusiasm one day.
	**Walk Away**
	    Lakshmi
		    Sorry Gramps, I am in a hurry. You know how Greg gets when he is angsty. Maybe later?
		Grandpa Dan
		    Huff... Right.
Event
	Lakshmi walks away from the scene a bit.
Lakshmi
	Shoot! I forgot to thank him for the bread...
Lakshmi
	Ah well, I'll do it later. I won't forget it for sure.

*Notes:*
* *Opened thread about Fog and memories  [[Narrative Goals#The fog subplot]] [[Narrative Goals#Calamity]]*: *Fog shrouds your memories*
* *Opened thread: [[Narrative Goals#Lakshmi’s trauma subplot]]: Doesn't remember her parents* 
* *Established Lakshmi's values: individual memories are important*
==* *Might need to establish that the fog is related to strong emotions?*==
---
### Quest 1, Scene 3: Forest Dialogue
Lakshmi
    Brr. The forest gives me the creeps. 
    I heard kids in the village say there are monsters lurking here... 
    No! Lakshmi get a hold of yourself! These are kid's tales, nothing more. 

### Quest 2, Interactible Receptionist

**Receptionist**
       Welcome to the post guild! 
       Ah Lakshmi it's you! Greg is waiting in his office in the back room. Good luck!
**Lakshmi**
    ...Good luck? What's going on here...
    Is it because I am late? 
    Please please tell me I won't be pulling out weeds today!
**Receptionist**
    Bahahahaha
    Can't promise anything.
**Lakshmi**
    That bad... Alright! Thanks!
### Quest 2, Interactible Intern
**Event**
	Player Overhears Intern talking to themselves
**Intern** 
    Dammit! Where are those shipment boxes? I'm going to get in trouble again… The guild work is too much.
### Quest 2, Scene 1: Theoretical Exam - Quest Giver

**Greg**
    Good morning, Lakshmi. 
**Greg**
	You slept in today. I hope you are well rested.
**Lakshmi**
    As much as I can be... haha. Sorry Greg... I must have missed my alarm. Nothing too big is going on today I hope?
**Greg**
      I'm afraid you are incorrect, Lakshmi. You have.... 
**Greg**
     Your graduation exam today!
**Lakshmi**
    My graduation exam?
**Greg**
    Yes, Lakshmi. I'm sorry for what I am about to say…
**Greg**
    You've been progressing too quickly and I believe you are ready to become a postal worker!
**Player choice**
	**I'm so excited!**
		Lakshmi
			Are you kidding me? I've been dreaming of this day! 
	**I'm absolutely scared!**
		Lakshmi
			Am-am I ready? I feel so underprepared!
[Regardless of choice]
**Greg**
    You leave much to be desired in terms of discipline. But no matter, you are young. 
**Lakshmi**
    Is this a challenge? If so, I accept!
**Greg**
	A challenge? Who said anything about a challenge? You'll start with just a few written questions.
**Greg**
    Go over to the classroom, take a seat and I'll be over in a minute with your exam.
**Lakshmi**
	Oki doki!

### Quest 2, Scene 2: Theoretical Exam
**Event**
    Player goes towards the classroom. Sits at a desk.
**Lakshmi**
    Deep breaths, I've got this!
**Event**
    Greg walks over to Lakshmi to give her the exam.
**Greg**
    Here you are Lakshmi. Best of luck..
**Event**
    Greg walks away.
**Lakshmi**
    Bring it on!
 **Event: Multiple Choice**
    The Fog is most receptive to what human aspect?
    **Player choice**
	        **Hunger**
	        Lakshmi
		           Mm. I'm hungry just thinking about it.
	        **Emotion** (Correct Answer) 
			Lakshmi
				"Where the heart storms, the fog grows" - is what Greg would say, right?
	        **Speech**
			Lakshmi
				While I wouldn't scream if I ever get lost in the foggy woods myself… 
			Lakshmi
				Is this what makes the fog appear?
    What's the primary goal of our influential guild?
	**Player choice**
		**Fortune**
			Lakshmi
		        All economy collapsed after the Calamity. It makes sense for the Guild to create new jobs.
			 Lakshmi
				 Right?
		**Adventure**
	        Lakshmi
				The postal workers are pretty much the only people travelling between villages now.
			Lakshmi
				 So exciting!
        **Communication**
	        Lakshmi
				All manner of modern technology collapsed after the cataclysm…
			Lakshmi
				Postal workers have such an important job!
	==What is the ranking system in the Guild?==
	**Player choice**
	==Who found the Postal Worker Guild?==
	**Player choice**
	

Lakshmi
	Wait, that's it?
**Journal Update**
	Exam done. Time to see Greg.
### Quest 2, Scene 3: Theoretical Exam - Test Result
Lakshmi
    Ok Greg, I've finished the exam. It was...
**Player choice**
	Easy peasy
		Greg
			Now, now, don’t get too cocky.
	Unfair
		Greg
			Hahahaha. Nothing in life is fair.
[Regardless of choice]
Greg
	Let’s see how you did first.
    `If variable is true` (All answers are correct.)
        Greg
	        Great job Lakshmi! You've got all correct. 
		Lakshmi
			Whoo hoo!
    `If variable is true` (One question or more are wrong.)	
	Greg
		Hmmm.... You did alright Lakshmi but you can do better.
	Lakshmi
	    Darn. I knew I was blanking on a few.
Greg
	And your test result is…
Lakshmi
    ...
Greg
	Insignificant!
Lakshmi
    What kind of grade is that?
Greg
	I was more interested in how you react to unpredictable situations. 
Greg
	Today’s exam was out of nowhere, and yet you challenged it face first.
Greg
	It’s fine not to know all the answers.
Lakshmi
	Hum... so all that work for nothing.
Greg 
	I won’t lie to you Lakshmi, postal workers face challenges where pure enthusiasm won’t be enough. 
Greg
	When that happens, don't forget you can take a step back and ask for help.
Greg
	...
Greg
	Do you need a few minutes to think about it?
**Player choice**
	Yes
		Good. Know your limits. Get back to me when you are ready. [End dialogue. If interacts again. Start at Regardless of choice.]
	No 	
[Regardless of choice]
Greg
    Hum. Very well, let’s move on to the next part.
Lakshmi
    Bring it on!    
### Quest 2 - Scene 4: Practical Exam Quest Giver

Greg
    Alright! Now it's time for the... 
    Practical test! 
    Deliver a little message for the new intern.
**Event**
    Player receives the mail.
Greg
	Deliver this to the new intern. They should be in the storage room.
Lakshmi
	And... where is that?
Greg
	Hum hum!
Greg
	You won't always be guided by a hand, you know. Explore the Guild a bit. Get to know the folks.
Greg
	Make sure to deliver the note like you've been taught. Treat it as a real postal delivery.
Lakshmi
    Got it!
Narrator
	Sharply breathing in, you are filled with resolution. Almost there.

**Journal update**
    Deliver the mail to the new intern. They should be in the storage room in the Guild.
### Quest 2 - Scene 5: Practical Exam Intern Memory

**Intern**
    Dammit where did that go?
**Lakshmi**
    Uhmm Hi! Are you the new intern?
**Intern**
    Oh. Hum... Yes. Hi! What's up?
**Lakshmi**
    Well, I'm in the middle of my postal guild graduation testing and have a delivery for you!
**Intern**
    Wow, really? You’re so lucky. I'll receive your mail then.
**Lakshmi**
    Ok! Well then... Hello... Ola...vius.
**Lakshmi**
	 I'm Lakshmi from the postal guild here to deliver your mail! Thank you for using our services and have a good day!
**Event**
    Screen shakes.
**Lakshmi**
	Whoaa. Em, t-thanks again! 
**Intern**
    Hey... are you okay Lakshmi? 
**Player Choice**
    **YES**
	    Lakshmi
		    I am feeling perfect!
		Intern
			If you say so... Are you sure you don't want to sit down for a minute?
		Lakshmi
			You worry too much... Ol-
    **I think I am sick**
	    Lakshmi
		    Euh... Not feeling superb.
		Intern
			W-would you like to sit down for a bit...?
		Lakshmi
			Sure! Thanks... Ol-
[Regardless of choice]
**Lakshmi**
    Oh no. Not this again...
**Event**
    Screen blacks out and the player is now in a different room as the intern. 
**Intern**
    Dang-it... I dumped the mail again. Greg will be so pissed.
**Intern**
    How come I keep messing up everything... Even the simplest of tasks. 
**Intern**
    I'm not cut out to be a guild member... What was I thinking coming here? I can't even fit in. Nobody even remembers my name...
**Greg**
    Hey intern!
**Event**
	Intern jumps in place. The intern hides behind scattered boxes. Greg enters the scene, looking around.
**Greg**
    Wow, what a mess. Did a hurricane pass through here? 
**Greg**
    And where did that new intern go...
**Event**
	Greg leaves the room.
**Intern**
    I'll just hide here... For a minute. or forever...
**Event**
    Screen blacks out and the player is back in the guild room as Lakshmi. 
**Intern**
    Lakshmi!? Are you ok?
**Lakshmi**
    Ah... Yeah I'm ok sorry...
**Lakshmi**
	These flashbacks are getting more intense... (+ [[Narrative Goals#Memories subplot]])
**Intern**
	What was that?
**Lakshmi**
	Oh, nothing. I'm better now.
**Intern**
    Ok phew. I thought I did something wrong again.
**Lakshmi**
    No no...You did nothing wrong? Thanks for your help...
**Player's choice**
	**Octavius**
		Intern
			...
		Lakshmi
			...
		Lakshmi
			It is their name, right?
		Narrator
			The intern cracks an awkward smile. You notice the name tag on their shirt: Olavius.
		Lakshmi
			Oopsies.
	**Olavius** *(correct choice)*
		Intern
			Aw, thanks Lakshmi!
		Narrator
			Olavius' face flushes with relief. They look more relaxed than they did before.
	**Olivier**
		Intern
			...
		Lakshmi
			...
		Lakshmi
			It is their name, right?
		Narrator
			The intern cracks an awkward smile. You notice the name tag on their shirt: Olavius.
		Lakshmi
			Oopsies.
**Intern**
    M-my pleasure!
**Lakshmi**
    Keep up the good work! I'm sure you'll be a full guild member in no time!
**Intern**
    Really? Do you believe that Lakshmi?
**Player's choice**
	**Without a doubt**
		Intern
			Oh... I don't know what to say... T-thanks Lakshmi! I'm sure you'll do great things!
	**On second thought**
		Intern
			Ah... haha. Yeah, I should probably get better at sorting mail first...
**Lakshmi**
    Well I better go back to Greg and tell him how I did. Thanks again, see you around.
**Journal Update**
    First mail delivered! Let's get back to Greg.

### Quest 2: Scene 6: Graduation

Lakshmi
    I did it Greg! Mail delivered.
Greg
    Well done Lakshmi! I'm very proud. 
Greg
    Walk with me.
**Event**
	Greg walks to the center of the Guild of the second floor. Other NPCs in the building come in the scene, closer to see Lakshmi.
Greg
    I am very proud to announce... 
Greg
    Welcome, Lakshmi! You are now a full guild member. 
**Event**
	NPCs cheer in the background.
Greg
    I hope to see great things from you.
Lakshmi
    All right! This is so awesome Greg!
Greg
    And now... I'm putting you straight to work.
**Player choice**
	==**Already?**==
	==**Bring it on!**==
Greg
    Go up to the front desk. Robert will have some deliveries for you to make.

### Quest 3: See Robert in Guild Hall
Event
    Player goes to see the receptionist.
Robert
    Hey Lakshmi, congrats on becoming a full member. I've got a whole batch of deliveries here for you to make. Good luck!
Lakshmi
    Thanks! 

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

