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
Lakshmi, Grandpa Dan, Greg. Intern (NAME??). [[Guild Receptionist (Robert)]], [[Lakshmi (MC)]], [[Old Character Bios]], experienced guild member

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
	* ==COMMENT FROM ARKANA==: I think it would be interesting to have other students doing their exam but they are finishing before her because she's late. It would give more life to the guild hall too if multiple people are doing their exam. We could have all of them getting up and walking around too doing their practical exam which doesn't have to be the same as Lakshmi. Maybe having at least 2 other students.

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
        His fingers really are blessed. The crust is the best part! Huh... Is it... maple syrup sour bread? Wow it’s not even my birthday. I should thank him later.*
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
    Optional path: Parallax map of the whole world. Villages are hidden by the fog but you can see bits and pieces. The closest and the least veiled is Dolphin Bay, but that's because it's the closest one, not because it's less affected by the fog. Grandpa Dan is sitting at the lone bench. [Player can come back to look at the villages as they are unveiled by the fog, with game progression]
    `If variable is true` Interact with Grandpa Dan
    **Lakshmi** 
        *Wow. How beautiful.*
    **Grandpa Dan**
        *That is…*
	*…one way to put it.*
    **Lakshmi**
        *How come?*
    **Grandpa Dan**
        *I say the world looks pretty miserable with the fog.*
    **Lakshmi**
         *Maybe. ==I do not have many memories left of the times before the fog...== And while the cataclysm does sound like an intense period of time... I cannot help but love the world. I want to see all of it.*
    **Grandpa Dan**
        *...*
    There is a silent pause during the cutscene, with the wind blowing. The interaction ends on this awkward note.
     `If variable is true` Interact with Grandpa Dan again
     **Grandpa Dan**
        *Hurry up to the Guild Hall! Greg is waiting for you.*
**Event**
    `If variable is true` Lakshmi walks down the path towards Dolphin Bay
**Lakshmi**
    ==*Brr. The forest gives me the creeps. Now I did hear kids in the village say there are monsters lurking there...== No! Lakshmi get a hold of yourself! These are kid's tales, nothing more.* 
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
    
#### Lakshmi does her exam (Corina)
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
    *Brr... She is getting scarier than Greg.*
**Event**
    Lakshmi goes to the back of the guild hall. 
**Intern** 
    Lakshmi overhears the intern speaking to themselves behind a wall. Cannot interact with them yet.
    *Dammit! Where are those shipment boxes? I'm going to get in trouble again… The guild work is too much. *
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
        _Yes Lakshmi I'm sorry for what I am about to say… You've been progressing too quickly and I believe you are ready to graduate!
**Lakshmi**
    *Are you kidding me? I've been dreaming of this day!* *Although... I expected a bit of a heads up so I could sleep a bit more… *
**Greg**
    *Ah well, you leave much to be desired in terms of discipline. But no matter, you are young. You will learn.*
**Lakshmi**
    *Is this a challenge? If so, I accept!*
**Greg**
    _(?) A challenge? Who said anything about a challenge? You'll start with just a few written questions. Go over to the classroom, take a seat and I'll be over in a minute with your exam._
**Lakshmi**
    *Eugh... At least it beats pulling  out weeds all afternoon.*
**Event**
    . Player goes towards the classroom. Sits at a desk.
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
**(WIP) Event** [Quizz] p.s. it can look like a paper on screen, where the player will click on the right answer. If the player picks the correct option (in bold) then a doodle will appear next to the paper.
 **Lakshmi** 
 _Ok, bring it on, question 1!_
        1) The fog affecting our world is most receptive to what human aspect?
            1) Hunger
                1) _It was hunger that makes the fog appear right? Im hungry just thinking about it._
            2) Emotion 
		*Strong emotion sublimes the fog - is what Greg would say, right?*
            3) Speech
		*While Greg recommended against screaming if I ever get lost in the foggy woods… is this what makes the fog appear?*
        2) What's the primary goal of our influential guild located in every village?,?
            1) Fortune
               _Fortune. All economy collapsed after the calamity, so the guild tries to create jobs in the new world._ 
            2) Adventure
	*Adventure. It is pretty much the only way to travel between villages now! That excites me the most.*
            3) Communication
	*All manner of modern technology collapsed after the cataclysm… of course it's the only way people communicate nowadays if you live in different villages.*
        3) What do children learn in school?
	1) Farming
	*Most folks farm to sustain the village.While I love picking apples in the Fall… I most certainly hate picking out weeds all year long. Guess who has to do that most often.*
	2) Mithochondira is the powerhouse of the cell.
	*I certainly didn’t find biology exciting in school when I was young. I find it even more useless nowadays. But that’s what you learn in schools right?*
	3) There are no schools anymore, 
	*That makes sense too. There aren't enough students to fill in a school in villages anymore… but they still learn somehow. Seems like a trick question to me. But whatever, it’s the process of elimination.*
        3) ~~What types of government did the survivors of the fog create for their new cities?
            1) Community Driven
                1) _Us post fog people have community values! A lot of strength was gained by coming together as communities against the fog._
            2) Monarch 
            3) Anarchy~~
==COMMENT==
C:Is this question a bit too hard for young folks?
A:Good point!! The goal of the question is to make the player understand that our characters value community in this postapocalyptic world. I'm not sure what we could change it to tho...

**Lakshmi**
	*Wait, that's it? Is this a joke?*
**Event**
    Journal updated: Quizz done. Time to see Greg for some explanation.
**Lakshmi**
    _Ok Greg, I've finished the test. Do you really think three questions are enough to test someone’s deep understanding of the world? _
**Greg**
	*Now, now, don’t get too cocky. Let’s see how you did first.*
    `If variable is true` (All answers are correct.)
        _Great job Lakshmi! You've got all correct. 
    `If variable is true` (One question or more are wrong.)	
	_Hmmm.... You did alright Lakshmi but I've seen you do better._
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
	*It was less about how much you know about the world, and more about how you react to unpredictable and stressful situations. Today’s quizz was out of nowhere, and yet you challenged it face first. It’s fine not to know all the answers.
	*I won’t lie to you Lakshmi, postal workers face challenges where pure enthusiasm won’t be enough. When that happens, don't forget you can take a step back and ask for help.*
**Lakshmi**
    _…_
**Greg**
    `        _Hum. Very well, let’s move on to the next part._
**Lakshmi**
    _I'll try my best Greg, bring it on!_    
    
#### Lakshmi speaks to the intern (enter first memory) (Arkana) -> to modify

==COMMENT==
C: After much thinking on whether to keep the grasshopper’s flashback… I thought the Intern’s memory serves the same purpose as the grasshopper’s flashback. They both introduce the empathy theme of the game. But the memory also introduces Lakshmi’s special abilities. The grasshopper memory introduces her dad but Im still not 100percent sure if she even clearly remembers her parents and/or if she has fond memories of them. Hmm. What do you think? I like the candidness of the grasshopper memory but idk if its the right place for it… because I also like the idea for Lakshmi to wake up without a flashback so she can appear like a blank slate to the players. We can chat more about it.

A:I like the idea of having Lakshmi as a blank slate too. I feel like the flashback is a bit confusing. Maybe we could see what people said in the focus group about that part

**Greg**
    _Alright! Now it's time for the... Practical test! Youl’l deliver a little message for the new intern. Deliver this to the new intern. They should be in the storage room on the right of reception. Make sure to deliver it like you've been taught. Treat this note like you would a real postal delivery.__
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
        _Wow, really? You’re so lucky. I'll receive your mail then._
**Lakshmi**
    _Ok! Well then, I'm Lakshmi from the postal guild here to deliver your mail! Thank you for using our services and have a good day! 
        Wow thanks again!_ 
            _(...)_
**Intern**
    `If variable is true`
        _Hey are you okay?_ 
**Lakshmi**
        _Yes, just a little excited! Oh no not this again._
==COMMENT==
C: I love the comedic tone here! This does raise a question though. Is it something Lakshmi hides from others or will she go to Greg to tell of her experience. How long did she have those abilities, etc. etc. We might not have an answer for this sprint but it would be nice to have a temporary decision so we are consistent. What do yuou think?

A:Yes I was wondering the same thing. Also, what is her awareness about her ability. I will ask the question during the meeting on Friday

**Event**
    Screen blacks out and the player is now in a different room as the intern. 
    
**Intern**
    `If variable is true`
        _Dammit... I messed up again... How come I keep messing up everything... Even the simplest of tasks... I'm not cut out to be a guild member, what was I thinking coming here. I can't do anything right.. (...)_
**Greg**
    `If variable is true`
        _Hello? Anybody in here? Where did that new intern go?_
**Intern**
    `If variable is true`
        _(...) Well I can at least minimize their dissapointment... Back to it..._
==COMMENT==
C: If I can suggest: give an example of an action, it might sound more emotionally strong than describing it. E.g. I can at least hide here so he doesn’t see me like this. Its the same info but easier to empathize with I think. But this is totally hard, and I am be guilty of this too! So if you agree with what I have to say, please feel free to leave me suggestions too! Another pair of eyes help a ton.

**Event**
    Screen blacks out and the player is back in the guild room as Lakshmi. 
**Intern**
    `If variable is true`
        _Lakshmi!? Are you ok?_
**Lakshmi**
    _Ah... Yeah I'm ok sorry... (?) (Argh... I gotta get better at that)_
**Intern**
    `If variable is true`
        _Ok phew. I thought I did something wrong again._
**Lakshmi**
    _No no! You did nothing wrong! In fact, thank you for being such a good practice delivery! I feel so much more prepared to be a guild worker and it's all thanks to you._
**Intern**
    `If variable is true`
        _(<3) Oh geez, well no problem then!_
**Lakshmi**
    _Keep up the good work and I'm sure you'll be a full guild member soon too!_
==COMMENT==
C: So the choices are great. But Im also thinking… of addressing her memory entering abilities. If we decide for her to keep that moment to herself, its totally fine. Im just thinking it can be great if she can think about it… so for ex. she feels the need to journal it and make a small resumé of what happened and how she feels about the intern… what do you think?
**Intern**
    `If variable is true`
        _Really? Do you really believe that?_
**Lakshmi**
    1) _Absolutely_
    2) _Well..._
        1) _Well. Maybe one day. Theres hope for anyone._
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
        _I saw, well done Lakshmi. I'm very proud. I am also happy to say... Welcome in, Lakshmi you are now a full guild member. I hope to see more great things from you._
**Lakshmi**
    _(!) All right! Awesome! This is so awesome Greg! can we have a party!?_
**Greg**
    `If variable is true`
        _Maybe we'll set one up for later tonight. or now I'm putting you straight to work._
**Lakshmi**
    _Ok then, bring it on!_
**Greg**
    `If variable is true`
        _Go up to the front desk. The receptionist will have some deliveries for you to make._
==COMMENT==
C:Wasnt there an experienced guild member in Obsidian…? I distantly recall him being the one positioned in Dolphin Bay and thats who you go see for mail… I may be wrong…
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
	
			


#### Miscelaneous Side Quests Wrap-Up

1. Find Leo the dog

2. Thank Grandpa Dan for making your favourite bread 

3. (WIP) Can talk to kids about the tales of monsters in the forest.

4. Journalling (note. To wrap up some loose ends of the plot and to get Lakshmi’s perspective of the world. It would be nice for her to have spots to sit down and write a sentence or two about what she has just experienced. Very thematic for mental health and emotion processing and also memories.)

To keep in mind:
-  **Now I did hear kids in the village say there are monsters lurking there.** -> kids could mention it later 