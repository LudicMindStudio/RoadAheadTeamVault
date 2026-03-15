---
tags:
created: 2026-03-06
---
By: Corina
# Progress
- [x] Outside scene with Grandpa Dan - Act 1, Quest 1 - Scene 2
- [x] Intern Memory - Quest 2 - Scene 1
- [x] Graduation Ceremony - Quest 2 - Scene 2 (?) 
- [ ] Exam questions +  Make sure all exam answers are hinted at in previous dialogue/interactable (fog + emotions is fine) 
- [ ] Interactable in Chalet
- [ ] Make Greg more idealistic and positively inspiring to contrast with Grandpa Dan 
- [ ] Intern more related to DB?
- [ ] Finish Quest 2 - Scene 6
- [ ] Add narrator to other parts of the writing 
- [ ] Add dialogue in case the player interacts with NPCs again

Overall comments
* To add to narrative style: how to handle the narrator and not handle onomatopoeias in dialogue 

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
    *Leo? {emote/sfx laughing} Ok grandpa. He just knows you need the energy to get your morning started.*
**Grandpa Dan**
       {emote frustrated} [*Yet I've been up since morning.*]{small font}  *Well, if you see that dog, get him home. I made him his favourite biscuits.*
**Lakshmi**
    *Ay Ay, cap'n!*
**Event**
    Journal Updated: Find Leo. Who should I hurry up to first, Leo or Greg? The answer is *yes*.
**Grandpa Dan**
    *Speaking of breakfast, eat quick and run straight to the **Guild Hall**! Greg will skewer you if you are any later!*
**Event**
    Grandpa Dan starts walking away towards the door.
**Lakshmi**
     *Thanks Grandpa Dan.* 
**Grandpa Dan**
     {sfx/emote content}* Ahem right. See you later Lakshmi.
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
    Descriptive notes: Parallax map of the whole world. Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. Grandpa Dan is sitting at the lone bench. [Player can come back to look at the villages as they are unveiled by the fog, with game progression] See previous concept art
Lakshmi 
	Wow. What a view...
Narrator
    A light breeze touches your cheek.
Grandpa Dan
       ...
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
				 [Quick QTE to apologize: press a button before time runs out (to double check if possible with dev team)]{>>this would be possible. but i think we should think more about adding qtes to dialogue. we can meet and discuss how this is typically done and how it would work best in our game<<}
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
		    Right.{>>grandpa dan seems to be very vocal with his onomatopoeia. I think it can work maybe for just his character if we are committing to it. but as some of my corrections have shown, we should leverage sounds and emotes for conveying emotion and communicating along with the text.<<}
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
* *Might need to establish that the fog is related to strong emotions?*{>>This can be done later, no worries. Having the player figure out and have a deeper understanding of this will take time. Its kind of the whole point of the simplicity of the dolphin bay story<<}
---
### Quest 1, Scene 3: Forest Dialogue
Lakshmi
    Brr. The forest gives me the creeps. 
    I heard kids in the village say there are monsters lurking here... 
    No! Lakshmi get a hold of yourself! These are kid's tales, nothing more. 

### Quest 2, Interactable Receptionist

**Receptionist**
       Welcome to the post guild! 
**Receptionist**
       Ah Lakshmi it's you! Greg is waiting in his office in the back room. Good luck!
**Lakshmi**
    ...Good luck? What's going on here...
**Lakshmi**
    Is it because I am late?
**Lakshmi**
    Please please tell me I won't be pulling out weeds today!
**Receptionist**
    Bahahahaha
**Receptionist**
    Can't promise anything.
**Lakshmi**
    That bad... Alright! Thanks!
### Quest 2, Interactable Intern
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
    What's the point of that?
Greg
	I was more interested in seeing the way you react to unpredictable situations. 
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
Lakshmi
	I understand
Greg
	Very well. Are you ready to move on to the next part?
**Player choice**
	Yes
		Greg
			Good. Know your limits. Get back to me when you are ready. [End dialogue. If interacts again. Start at Regardless of choice.]
	No 	
[Regardless of choice]
Greg
    Let’s move on to the next part.
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
    Well done Lakshmi! I waited for this day a long time. 
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
    You might think you are doing a small feat. Bringing letters from town to town. 
Greg
    But with each letter, you bring people closer. You keep people connected. And it's what we really need today.
**Event**
	More NPCs cheers in the background.
Lakshmi
    All right! This is so awesome Greg!
Greg
	You have your heart in the right place Lakshmi. I know you'll do great.
Greg
    And now... I'm putting you straight to work.
**Event**
	NPCs scatter to their usual places.
Greg
    Go up to the front desk. Robert will have some deliveries for you to make.

### Quest 3: See Robert in Guild Hall
Event
    Player goes to see the receptionist.
Robert
    Hey Lakshmi! Congrats on becoming a full member! 
Lakshmi
	Thanks!
Robert    
    I've got a whole batch of deliveries here for you to make. Good luck!
Lakshmi
    Thanks! 
