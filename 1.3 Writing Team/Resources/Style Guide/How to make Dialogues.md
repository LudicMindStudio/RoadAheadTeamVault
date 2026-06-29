
A dialogue consists of a **dialogue chain** , **dialogue text** and **dialogue options**. 

**Dialogue chain** is the dialogue as a whole. Dialogue chains are named in upper camel case (eg.CamelCase), when you make a new dialogue chain all of the dialogue options including the root (first dialogue) will be stored in a folder matching the dialogue chain name. Be sure to have a folder labled dialogues in the scene you are working on. 

**Dialogue text** these are the chunks of text with a character name followed by whatever that character is saying 

**Dialogue Options** these are the options available to the player following the initial dialogue. They consist of a bundle_name and a display name. The bundle name is named automatically. Each number corresponds to a dialogue option, and underscores indicate the depth of nesting. (eg. SampleDialogue_1_2_3 - is the third option of the second option of the first dialogue option on the root dialogue). The display name is important. It is the text the player will see and potentially select if they like that option. See [[Writer's Index]] -> Style for more information on how to write dialogues. 
#### Steps to making a dialogue 

(1) Make a new dialogue chain in the scene outline, event script, interactable or character profile
(2) Name the dialogue chain something that meaningful describes the dialogue 
(3) Write your initial dialogue (in the dialogue root)
(4) Create new dialogue options to continue the dialogue (or leave blank to end the dialogue)
### How to make Dialogue Chains 

(1) Copy the following: |DIA|

(2) Type the name of the desired dialogue beside "|DIA|" in CamelCase
*Make sure the dialogue name does not have any space between the |DIA|* 

(3) Surround the name with [ ] double square brackets 

(4) Select the (+) button 
*The + button should appear besides the name if everything worked correctly*

*The dialogue will save to the nearest folder labeled "dialogues" so make sure you have one 

Example: 

(1) |DIA| 

(2) |DIA|TestDialogue 

(3) |DIA|[[Testdialogue3]]

### How to make Dialogue Options 

(1) type ctrl + p (be sure to be at the first available line under "options" or at the end of the last dialogue option made)
(2) select: Dialogue Plugin: Add Dialogue Option 
(3) Make sure the display name is correct 
(4) Type a meaningful display name 
(5) Press enter
(6) Select the (+) button 
*Do not select the (-> button) or a blank template will be made* (if this happens you must delete the blank template and the (+) button will reappear)

(1-2) ![[Pasted image 20260327102423.png]]

(3-4)
![[Pasted image 20260327103044.png]]

(5) 

**Options**
- |DIA|[[ExampleDialogue_1]] : Shop


