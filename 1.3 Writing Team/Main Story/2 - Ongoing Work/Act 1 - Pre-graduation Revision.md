---
tags:
created: 2026-03-06
---
By: Corina
# Implementers to Review !
[[#Multiple Choice Event]] (previously implemented, only dialogue changed)
[[#QTE 1 Quest 1, Scene 3 Lakshmi Talks to Grandpa Dan on the bench]]
[[#Dialogue choices based on wrong player choices on previous event Quest 2, Scene 3 Theoretical Exam - Test Result]]
# Progress - Done
- [x] Outside scene with Grandpa Dan - Act 1, Quest 1 - Scene 2
- [x] Intern Memory - Quest 2 - Scene 1
- [x] Graduation Ceremony - Quest 2 - Scene 2 (?) 
- [x] Exam questions +  Make sure all exam answers are hinted at in previous dialogue/interactable (fog + emotions is fine) 
- [x] Interactable in Chalet
- [x] Make Greg more idealistic and positively inspiring to contrast with Grandpa Dan 
- [x] Intern more related to DB story?  
- [x] Finish Quest 2 - Scene 6
- [x] Add narrator to other parts of the writing 
- [x] Add dialogue in case the player interacts with NPCs again

Overall comments
* To add to narrative style: how to handle the narrator and not handle onomatopoeias in dialogue 
* How to handle complicated dialogue trees (and if we should make those)

---
# Context
Lakshmi graduates from postal guild, then the story of Dolphin Bay starts.

Links to the previous work done about the graduation:
Early game notes: [[Dolphin Bay - Elements to be reviewed]], [[Dolphin Bay - Event 1 post exam]], [[Dolphin Bay - Event 2 post exam]], [[Dolphin Bay - Event 3 post exam]], [[Dolphin Bay Story]] [[Main Story (Lakshmi's) Loose Brainstorming]], [[Original RPG Maker Scripts]]

# Characters
Lakshmi, Grandpa Dan, Greg. Intern (NAME??). [[Guild Receptionist (Robert)]], [[Lakshmi (MC)]], [[Old Character Bios]], experienced guild member

---
# Draft 

[[Act 1 - Quest 1 - Scene 1 (Rough Work)]]
### Quest 1, Interactable : Chalet Top Floor
Table
	Lakshmi
		Journaling keeps your mind at bay and spirits sharp{>>I was wondering what you might think of journaling about her past a bit I made a rough draft: [[Journal Rough Work]]<<}{>>CL : yep cool! Left some comments<<}!
	Lakshmi
		Always calms me down when I have many thoughts.
Mirror
	Lakshmi
           Hey there! The new uniform is looking-
	**Player Choice**
	    **GREAT**
		    Lakshmi
			    I knew you had good taste. 
	    **Meh**        
		    Lakshmi
			      This might take awhile to get used to.
Bed
	   Lakshmi
	       Don't tempt me.

### Quest 1, Scene 2, Event 1: Step out of the chalet self-reflection

Event
    Lakshmi walks out of Greg's chalet
Lakshmi
    Today is the day! Now if I go straight from here, Guild Hall should be up ahead.
Lakshmi
    I have not been in Dolphin Bay often though.. 
Lakshmi
    Bah. I'll figure this out!
### Quest 1, Scene 2, Event 2, Event 2 : Lakshmi Talks to Grandpa Dan on the bench

Event 
    If player goes up to Grandpa Dan.
    Descriptive notes: Parallax map of the whole world. Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. Grandpa Dan is sitting at the lone bench. [Player can come back to look at the villages as they are unveiled by the fog, with game progression] See previous concept art
Lakshmi 
	Wow. What a view...
Narrator
    A light breeze touches your cheek.

   Grandpa Dan
       Sit down a bit with me, will you?
   **Player Choice**
    **Sit Down**
	    Lakshmi
		     What's come over you?
	    Grandpa Dan
		    ...
	    Grandpa Dan
		    Tell me what do you see in front of you.
	    **Player choice**
		    **The Fog**
		    **The Fog, duh**
			    Grandpa Dan
				    [jumps in place] Don't play coy with me -Ayy. My back.
				Grandpa Dan
				    Khum. 
		[Regardless of choice]
		Grandpa Dan
		    Right. And how do you feel about the fog?
	    **Player choice**
		    **It's peaceful**
				 Narrator
				    The stillness of the moment is oddly... soothing. Birds chirp quietly, welcoming the dawn of {>>Great
<<}another day.
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
				    I just... The fog is too mysterious. Too many unknowns.
				{>>I my opinion this comes off as a bit too cerebral. Like I could see Greg saying this perhaps more than Grandpa Dan. I would recommend reframing his hope that the youth would see the fog differently <<}{>>CL : wdym? Feel free to suggest the changes directly<<}Grandpa Dan
				    Not... unexpected. 
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
					I have flashes{>>CL: Ended up with 'flashes' instead of 'fragments.' I wanted more of a direct visual connotation<<}... When it all started... of my parents. I don't remember much anymore.
			**Not at all**
		[Regardless of choice]
		Grandpa Dan
			{>>Really like how this response works for both options<<}{>>yayy<<}Most youth don't nowadays. 
		Grandpa Dan
			This fog shrouds your memories in ways you wouldn't expect. *(+to double check if makes sense with [[Narrative Goals]])*
		Grandpa Dan
			Maybe it's for the best not to dwell on the past.
		**Player choice**
			**Intensely Disagree**
				Lakshmi
					NO! Sharing memories is what will keep us together! How can you say that!
				 Grandpa Dan
					 ...
				Lakshmi
					Shoot! Too brash. Should I apologize? Quick!
				**Player Choice**
					**Apologize**
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
					 **Do not Apologize**
						 Lakshmi
							 ...
						 Grandpa Dan
							 ...
						Event
							 Lakshmi runs away form the scene.
			{>>Probably should add the option to agree<<}{>>CL: Good call. done
<<}**Softly Disagree**
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
			**Agree**
				Lakshmi
					I see your point, Grandpa Dan...
				Lakshmi
					And I want to create new memories with everyone.
				Lakshmi
					With you too.
				Grandpa Dan
					Hum...
				Grandpa Dan
					It was not how I was seeing it. 
				Grandpa Dan
					Unlike me, you really cherish memories.
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
		    Right.{>>grandpa dan seems to be very vocal with his onomatopoeia. I think it can work maybe for just his character if we are committing to it. but as some of my corrections have shown, we should leverage sounds and emotes for conveying emotion and communicating along with the text.<<}{>>CL: Cool<<}
Event
	Lakshmi walks away from the scene a bit.

If Player wishes to talk to Grandpa Dan again
	Grandpa Dan
		Move your feet Lakshmi! Greg is waiting for you at the Guild Hall.

*Notes:*
* *Opened thread about Fog and memories  [[Narrative Goals#The fog subplot]] [[Narrative Goals#Calamity]]*: *Fog shrouds your memories*
* *Opened thread: [[Narrative Goals#Lakshmi’s trauma subplot]]: Doesn't remember her parents* 
* *Established Lakshmi's values: individual memories are important*
* *Might need to establish that the fog is related to strong emotions?*{>>This can be done later, no worries. Having the player figure out and have a deeper understanding of this will take time. Its kind of the whole point of the simplicity of the dolphin bay story<<}
---
### Quest 1, Scene 4: Forest self-reflection (map after Chalet)
Lakshmi
    Brr. The forest gives me the creeps. 
Lakshmi
    I heard kids in the village say there are monsters lurking here... 
{>>Happy to discuss this, but this strikes me as something the player should motivate. Like if the player chose to calm Lakshmi down she would say this kind of thing <<}{>><<}{>>CL: I like how you reframed it! Plz feel free to add the option<<}Lakshmi
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

### Quest 2, Interactable Intern
**Event**
	Player Overhears Intern talking to themselves
**Intern** 
    Dammit! Where are those shipment boxes? I'm going to get in trouble again… The guild work is too much.
### Quest 2, Scene 1: Introduction to Theoretical Exam - Quest Giver

{--**Greg**
    Good morning, Lakshmi. 
**Greg**
	You slept in today. I hope you are well rested.
**Lakshmi**
    As much as I can be... haha. 
**Lakshmi**
    Sorry Greg... I must have missed my alarm. Nothing too big going on today I hope?
**Greg**
      I'm afraid you are incorrect, Lakshmi. You have.... 
**Greg**
     Your graduation exam today!
**Lakshmi**
    My graduation exam?
**Greg**
    Yes, Lakshmi. I'm sorry for what I am about to say…
**Greg**
    You've been progressing too quickly and I believe you are ready to become a postal worker!--}

{>>I was hoping for a bit more characterization from Greg, so I wrote an alternative version of the dialogue. Take what you like. Happy to chat. <<}{>>CL: I like it!<<}(Alternative Version)

Narrator: Greg lifts his steely eyes from pages of indecipherable characters 

Greg: Remind me of line 14 of the guild code? 

Lakshmi: "guild members are the first of the community to rise" (sigh)

Greg: I shouldn't have to wake you, Lakshmi. Especially not today. 

Narrator: You lift your head inquisitively. 

Greg: I've been writing to the other guilds and their willing to make an exception.

Greg: It's time to make you a full postal worker! If you can pass the exam, that is... 

**Player choice**
	**I'm so excited!**
		Lakshmi
			Are you kidding me? I've been dreaming of this day! 
	**I'm absolutely scared!**
		Lakshmi
			Am-am I ready? I feel so underprepared!
[Regardless of choice]
**Greg**
	You'll start with  a few written questions.
**Greg**
    Take a seat and I'll be over in a minute with your exam.
**Lakshmi**
	Oki doki!

### Quest 2, Scene 2: Writing Theoretical Exam 
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
#### Multiple Choice Event
 **Event: Multiple Choice**
    The Fog is most receptive to which human aspect?
    **Player choice**
	    **Hunger**
	        Lakshmi
			    Mm. I'm hungry just thinking about it.
			Lakshmi
				Is this what makes the fog appear?
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
				It's the primary goal... right?
		**Adventure**
	        Lakshmi
				The postal workers are pretty much the only people travelling between villages now.
			Lakshmi
				 So exciting!
			Lakshmi
				It's the primary goal... right?
        **Communication** (Correct Answer) 
	        Lakshmi
				All manner of instant communication tech collapsed after the cataclysm…
			Lakshmi
				Postal workers have such an important job!
	What is the most common way to travel between villages?
	**Player choice**
		**By carriages**
			Lakshmi
				That's how we got between villages before the fog got so thick... Now it's barely possible to see where you step. (+*double check [[Narrative Goals]]. Insinuating that the fog got worse*)
			Lakshmi
				It's still the most common way though to travel. Right?
		**By foot** (Correct Answer) 
			Lakshmi
				The fog got so thick we can only travel by foot. 
			Lakshmi
				People rely on postal workers more than ever.
		**By plane**
			Lakshmi
				I heard planes were common before the fog appeared but I've never seen one.
			Lakshmi
				It's still the most common way though to travel. Right?
[Add extra questions if we want]
	==What is the ranking system in the Guild?==
	**Player choice**
	==Who found the Postal Worker Guild?==
	**Player choice**
[End Multiple Choice]
Lakshmi
	Wait, that's it?
**Journal Update**
	Exam done. Time to see Greg.

*Update Lore: fog got thicker recently so postal workers can only move by foot between villages.*

### Quest 2, Scene 3: Theoretical Exam - Test Result
Lakshmi
    Ok Greg, I've finished the exam. It was...
**Player choice**
	**Easy peasy**
		Greg
			Now, now, don’t get too cocky.
	**Unfair**
		Greg
			Hahahaha. Nothing in life is fair.
[Regardless of choice]
Greg
	Let’s see how you did first.
**If all answers are correct.**
    Greg
	    Great job Lakshmi! You've got all correct. 
	Lakshmi
		Whoo hoo!
**If one question or more are wrong.**	
	Greg
		Hmmm.... You did alright Lakshmi but you can do better.
	Lakshmi
	    Darn. I knew I was blanking on a few.
Greg
	Let's review.
#### Dialogue choices based on wrong player choices on previous event : Quest 2, Scene 3: Theoretical Exam - Test Result
[Greg will explain the choice for the wrong answers only]
**If player got 'The Fog is most receptive to which human aspect?' wrong**
	Greg
		About the fog question...
	Greg
		Remember this saying well.
	Greg
		Where the heart storms, the fog grows.
	Greg
		Make sure to remember it. It will help you aid other folks in need.
	Lakshmi
		The Fog really is quite powerful...
**If player got 'What's the primary goal of our influential guild?' wrong**
	Greg
		About the Guild question...
	Greg
		There is no more technology for instant communication.
	Greg
		As postal workers of the Guild, we travel from village to village to deliver mail.
	Lakshmi
		Postal workers have such an essential job!
	Greg
		Couldn't have said it better myself.
**If player got 'What is the most common way to travel between villages?' wrong**
	Greg
		About the means of travelling question...
	Greg
		We mostly travel by foot nowadays.
	Lakshmi
		Is it because the Fog got so thick recently?
	Greg
		Correct. 
	Lakshmi
		Does it make postal worker's job more difficult?
	Greg
		Difficult, perhaps. And so much more important.
[End event - Regardless of choice]
Greg
	And your test result is…
Lakshmi
    ...
Greg
	Insignificant!
Lakshmi
    What's the point of that?
Greg
	To test your reaction to unpredictable situations. 
Greg
	Today’s exam was out of nowhere, and yet you challenged it face first.
Greg
	It’s fine not to know all the answers.
Lakshmi
	I don't have any problem improvising
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
			Good. Know your limits. 
		Greg
			Get back to me when you are ready. [End dialogue. If interacts again. Start at Regardless of choice.]
	No 	
[Regardless of choice]
Greg
    Let’s move on to the next part.
Lakshmi
    Bring it on!    
### Quest 3, Scene 1: Practical Test - Introduction

Greg
    Alright! Now it's time for the... 
    Practical test! 
    
**Event**
    Player receives the mail.
Greg
	Deliver this to the new intern. They should be in the storage room.
Lakshmi
	And... where is that?
Greg
	Hum hum!
Greg
	{>>super!<<}You won't always be guided by the hand, you know. Explore the Guild a bit. Get to know the folks.
Greg
	Make sure to deliver the note like you've been taught. Treat it as a real postal delivery.
Greg
	Do you remember how to deliver the mail?
**Player Choice**
	**Of course...**
		Greg
			Mm, you don't sound so sure.
	**Can you remind me again?**
[Regardless of choice]
Greg
	Listen carefully.
Greg
	First. You greet. 
Greg
	Then you tell them your name. 
Greg
	Then you thank them for using our services. 
Greg
	Lastly, don't forget to say goodbye. 
Greg
	Capice?
**Player Choice**
{>>Awesome bit of fun!<<}**Can you repeat it?**
	Greg
		Sure. Strain your ears.
	Greg
		First. You greet. 
	Greg
		Then you tell them your name. 
	Greg
		Then you thank them for using our services. 
	Greg
		Lastly, don't forget to say goodbye. 
	Greg
		Feeling good now?
	[Dialogue goes back to last player choice]
**I've got it!**
Greg
	Fantastic. Go do good deeds.
Narrator
	Sharply breathing in, you are filled with resolution. It's the real final test.

**Journal update**
    Deliver the mail to the new intern. They should be in the storage room in the Guild.
### Quest 3, Scene 2: Practical Test - Meeting the Intern

**Intern**
    Dammit where did it go?
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
**Player Choice** [previous choices should disappear with each question] 
	Lakshmi
		What do I say first?
		{>>Super fun! I think I'll scramble the options a bit for the player selection each time 
<<}**Hello!** 
		**I'm Lakshmi from the postal guild here to deliver your mail.** 
		**Thank you for using our services.** 
		**Have a good day!**
	Lakshmi
		 And then?
		**Hello!** 
		**I'm Lakshmi from the postal guild here to deliver your mail.** 
		**Thank you for using our services.** 
		**Have a good day!**
	Lakshmi
		 And then?
		**Hello!** 
		**I'm Lakshmi from the postal guild here to deliver your mail.** 
		**Thank you for using our services.** 
		**Have a good day!**
	 Lakshmi
		 And lastly
		**Hello!** 
		**I'm Lakshmi from the postal guild here to deliver your mail.** 
		**Thank you for using our services.** 
		**Have a good day!****
	
**If player gets 4/4 correct**
	**Intern**
		Wow thanks! You're so good Lakshmi!
**If player gets 3/4 or less correct**
	**Intern**
		Emm. Thanks Lakshmi. All good?
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

### Quest 3, Scene 3: Practical Test - Intern Memory 

([[Intern Memory Brainstorming]])
Dialogue: {>>I made a modified version of this scene with a bit of gameplay added. You can see it in the intern memory brainstorming document link. Use what you like. 

Piles of boxes surround the intern. 

**Intern**: Come on Olavius, think. Where is that package? 

A gold package shines at the top of the mountain of boxes 

**Intern**: Are you kidding me! How am I going to get up there? 

As soon as the player reaches the top box with the parcel, the top few boxes fall and the intern FALLS to the ground. 

**Narrator**: The parcel crunches under your weight. It starts to ooze liquid. 

**Intern**: Greg is going to be so pissed. 

**Intern**: I'm not cut out to be a guild member...

Event - the intern hides suddenly behind her pile of boxes 

**Greg**: WHAT HAPPENED IN HERE?!

Event - Greg searches around 

**Greg**: GET WHATS HER NAME IN HERE STAT! 

**Intern**: I'll just hide here... For a minute. Anyway, I've got the whole night to rearrange the mail...


<<}{>>CL: awesome addition! Let's use yours<<}
{--**Intern**
    Dang-it... I dumped the mail again. Greg will be so pissed.
**Intern**
    How come I keep messing up everything... Even the simplest of tasks. 
**Intern**
    I'm not cut out to be a guild member... What was I thinking coming here? There are no more dolphins here anymore... (*link to [[Dolphin Bay Story]]* )
**Intern**
    Nobody even remembers my name...
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
    I'll just hide here... For a minute. Anyway, I've got the whole night to rearrange the mail...
**Event**
    Screen blacks out and the player is back in the guild room as Lakshmi. }
    --}
Piles of boxes surround the intern. 

**Intern**: Come on Olavius{>>good call for reminding player their name<<}, think. Where is that package? 

A gold package shines at the top of the mountain of boxes 

**Intern**: Are you kidding me! How am I going to get up there? 

As soon as the player reaches the top box with the parcel, the top few boxes fall and the intern FALLS to the ground. 

**Narrator**: The parcel crunches under your weight. It starts to ooze liquid. 

**Intern**: Greg is going to be so pissed. 

**Intern**: I'm not cut out to be a guild member...

Event - the intern hides suddenly behind her pile of boxes 

**Greg**: WHAT HAPPENED IN HERE?!

Event - Greg searches around 

**Greg**: GET WHATS HER NAME IN HERE STAT! 

**Intern**: I'll just hide here... For a minute. Anyway, I've got the whole night to rearrange the mail...

### Quest 3, Scene 3: Practical Test - Meeting Olavius

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
    No no...You did nothing wrong? Thanks for your help-
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
    Keep up the good work Olavius! I'm sure you'll be a full guild member in no time!
[If possible to implement it. Change the NPCs name to Olavius from now{>>Will do!<<} on.]
**Intern**
    Really? Do you believe that Lakshmi?
**Player's choice**
	**Without a doubt**
		Intern
			Oh... I don't know what to say... T-thanks Lakshmi! I'm sure you'll do great things!
	**Maybe with time**
		Intern
			Ah... haha. Yeah, I should probably get better at sorting mail first...
**Lakshmi**
    Well I better go back to Greg and tell him how I did. See you around!
**Journal Update**
    First mail delivered! Let's get back to Greg.
**Lakshmi**
    W-what should I do about my flashbacks though? It's more vivid than ever. 
**Lakshmi**
	I'll should probably talk to Greg about it. A problem for later.

**Interaction Intern again**
Intern
	Hey Lakshmi! It's good to see you around.
Intern
	Did you know the lake outlining the village is in the shape of a dolphin? It's well named!
Intern
	It was the reason I came here in the first place... I really like how cozy this village is! 
Intern
	I haven't found any dolphins though... Maybe I scared them off? I am pretty clumsy.

*Note: might need to give a chance for Lakshmi to follow-up about her flashback to Greg. Maybe future quest. Olavius should also get a side quest*
*Note 2: Open thread: Lakshmi memory abilities. [[Narrative Goals#Memories subplot]] Proper first memory tutorial with gameplay at a later time. Maybe with Olavius again.* 
### Quest 3, Scene 4: Practical Test - Graduation

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
    Hey Lakshmi! Congrats again on becoming a full member! 
Lakshmi
	Thanks!
Robert    
    I've got a whole batch of deliveries here for you to make. Good luck!
Lakshmi
    Thanks! 
