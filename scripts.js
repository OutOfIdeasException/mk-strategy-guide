/*
  GAME SELECTION
  - Make selected game info section visible
  - Hide unselected game info section
*/

function displayMK1() {
  document.getElementById("mk1").style.display = "block";
  document.getElementById("mk2").style.display = "none";
  document.getElementById("mk3").style.display = "none";
  }

function displayMK2() {
  document.getElementById("mk1").style.display = "none";
  document.getElementById("mk2").style.display = "block";
  document.getElementById("mk3").style.display = "none";
}

function displayMK3() {
  document.getElementById("mk1").style.display = "none";
  document.getElementById("mk2").style.display = "none";
  document.getElementById("mk3").style.display = "block";
  }

/*
MORTAL KOMBAT 2 CHARACTER SELECT AREA
  - Change innerHTML of elements to display character-specific data
  - Hide Ending (To avoid ending staying visible when other characters are selected)
*/

function mk2LiuKang() { // MORTAL KOMBAT 2 - LIU KANG
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";  
  document.getElementById("displayName").innerHTML = "Liu Kang";
  document.getElementById("bio").innerHTML = 
  "After winning the Shaolin Tournament from Shang Tsung's clutches Kang returns to his temples. He discovers his sacred home in ruins, his Shaolin brothers killed in a vicious battle with a horde of Outworld warriors. Now he travels into the Dark Realm to seek revenge.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Low Fireball:</div> Forward, Forward, Low Punch <br>"
  + "<div class='moveName'>High Fireball:</div> Forward, Forward, High Punch <br>"
  + "<div class='moveName'>Flying Kick:</div> Forward, Forward, High Kick <br>" 
  + "<div class='moveName'>Bicycle Kick:</div> Hold Low Kick <i>(3 seconds)</i>, Release";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Dragon Morph:</div> Down, Forward, Back, Back, High Kick <div class='distance'>(Close)</div> <br>"
  + "<div class='moveName'>Cartwheel Uppercut:</div> <i>(Hold Block)</i> Rotate D-Pad Away Counter-Clockwise <div class='distance'>(Half Screen)</div> <br>" 
  + "<div class='moveName'>Friendship:</div> Forward, Back, Back, Back, Low Kick <br>" 
  + "<div class='moveName'>Babality:</div>Down, Down, Forward, Back, Low Kick <br>" 
  + "<div class='moveName'>Stage:</div> Back, Forward, Forward, Low Kick";
  document.getElementById("ending").innerHTML = 
  "With his Shaolin temple in ruins, Liu Kang journeys into the Outworld, enters Shao Kahn's tournament and unleashes a fury that does not end until the defeat of Shao Kahn. Liu Kang then returns to the seclusion of his Shaolin temple. He pays his respects to his lost brothers and finally realizes that the events which have taken place were all fulfillment of his destiny.";
}

function mk2KungLao() { // MORTAL KOMBAT 2 - KUNG LAO
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Kung Lao"; 
  document.getElementById("bio").innerHTML = 
  "A former Shaolin Monk and a member of the White Lotus society, he is the last descendant of the Great Kung Lao who was defeated by Goro 500 years ago. Realizing the danger of the Outworld menace he joins Liu Kang in entering Shao Kahn's contest.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Teleport:</div> Down, Up <br>" 
  + "<div class='moveName'>Diving Kick:</div> Down + High Kick <br>"
  + "<i>*</i> <div class='moveName'>Hat Throw:</div> Back, Forward, Low Punch <br>" 
  + "<div class='moveName'>Whirlwind Spin:</div> (Hold Block) Up, Up, Low Kick <br>"
  + "<i>* Note: Hat Throw can be directed with up or down</i>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Vertical Hat Slice:</div> Forward, Forward, Forward, Low Kick <div class='distance'>(Sweep)</div> <br>"
  + "<div class='moveName'>Decapitation:</div> <i>(Hold Low Punch)</i> Back, Forward <i>(Release Low Punch) (Direct Hat with Up)</i> <div class='distance'>(Full Screen)</div> <br>"
  + "<div class='moveName'>Friendship:</div> Back, Back, Back, Down, High Kick<br>"
  + "<div class='moveName'>Babality:</div> Back, Back, Forward, Forward, High Kick<br>"
  + "<div class='moveName'>Stage:</div> Forward, Forward, Forward, High Punch";
  document.getElementById("ending").innerHTML = 
  "A former Shaolin Monk alongside Liu Kang, Kung Lao also grieves the loss of their Shaolin brothers. He realizes that his ultimate fate lies within the dark realm of the Outworld. He defeats his Outworld opponents until he emerges the supreme champion. With his strength and spirit in complete alignment he finally avenges the death of his great ancestor. Although his greatest challenges lie ahead..."; 
}

function mk2JohnnyCage() { // MORTAL KOMBAT 2 - JOHNNY CAGE
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Johnny Cage"; 
  document.getElementById("bio").innerHTML = 
  "After Shang Tsung's tournament, the martial arts superstar disappears. He follows Liu Kang into the Outworld. There he will compete in a twisted tournament which holds the balance of earth's existence- as well as a script for another blockbuster movie.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Shadow Kick:</div> Back, Forward, Low Kick <br>"
  + "<div class='moveName'>Low Green Bolt:</div> Back, Down, Forward, Low Punch <br>" 
  + "<div class='moveName'>High Green Bold:</div> Forward, Down, Back, High Punch <br>"
  + "<div class='moveName'>Low Blow:</div> Block + Low Punch <br>"
  + "<div class='moveName'>Shadow Uppercut:</div> Back, Down, Back, High Punch <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Torso Rip:</div> Down, Down, Forward, Forward, High Punch <div class='distance'>(Close)</div> <br>"
  + "<i>*</i> <div class='moveName'>Uppercut:</div> Forward, Forward, Down, Up <div class='distance'>(Close)</div> <br>"
  + "<div class='moveName'>Friendship:</div> Down, Down, Down, Down, High Kick <br>"
  + "<div class='moveName'>Babality:</div> Back, Back, Back, High Kick <br>"
  + "<div class='moveName'>Stage:</div> Down, Down, Down, High Kick <br>"
  + "<i>* Note: Press Down + Low Punch + Low Kick + Block to knock the opponent's head off 3 times</i>";
  document.getElementById("ending").innerHTML = 
  "After disappearing from the set of his latest movie, Cage finally resurfaces. He used all his knowledge and experiences as a fighter to end the Outworld menace. Now heralded as a true hero, Cage receives the respect he rightfully deserves. He also gets his inspiration for the sequel to his blockbuster movie Mortal Kombat. MK II is released and quickly becomes the greatest motion picture event of all time. Cage realizes that MK III is inevitable."; 
}

function mk2Reptile() { // MORTAL KOMBAT 2 - REPTILE 
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Reptile";  
  document.getElementById("bio").innerHTML = 
  "As Shang Tsung's personal protector the elusive Reptile lurks in the shadows stopping all those who would do his master harm. His human form is believed to disguise a horrid reptilian creature whose race was thought extinct millions of years ago.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Acid Spit:</div> Forward, Forward, High Punch <br>"
  + "<div class='moveName'>Force Ball:</div> Back, Back, High Punch + Low Punch <br>" 
  + "<div class='moveName'>Slide:</div> Back + Low Punch + Low Kick + Block <br>"
  + "<div class='moveName'>Invisibility:</div> (Hold Block) Up, Up, Down, High Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Decapitation:</div> Back, Back, Down, Low Punch <div class='distance'>(Full Screen)</div><br>"
  + "<div class='moveName'>Torso Rip:</div> Forward, Forward, Down, High Kick <i>(Must Be Invisible)</i> <div class='distance'>(Close)</div> <br>"
  + "<div class='moveName'>Friendship:</div> Back, Back, Down, Low Kick <br>"
  + "<div class='moveName'>Babality:</div> Down, Back, Back, Low Kick <br>"
  + "<div class='moveName'>Stage:</div> Down, Down, Forward, Forward, Block";
  document.getElementById("ending").innerHTML = 
  "Reptile has always loyally served as Shang Tsung's protector. While maintaining a very low profile in the first tournament he discovered Tsung's plot to force the remaining members of his near extinct race into slavery under Shao Kahn's rule. Reptile then devises a plan of his own. He enters the Outworld tournament, defeats Shao Kahn and turns against Shang Tsung, ending his master's scheme. Now his race can live on in their own peaceful existence."; 
}

function mk2SubZero() { // MORTAL KOMBAT 2 - SUB ZERO 
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Sub Zero";  
  document.getElementById("bio").innerHTML = 
  "Thought to have been killed in the Shaolin Tournament, Sub-Zero mysteriously returns. It is believed he travelled into the Outworld to again attempt to assassinate Shang Tsung. To do so he must fight his way through Shao Kahn's tournament.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Freeze:</div> Down, Forward, Low Punch <br>"
  + "<div class='moveName'>Ground Freeze:</div> Down, Back, Low Kick <br>" 
  + "<div class='moveName'>Slide:</div> Back + Low Punch + Low Kick + Block <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Ice Shatter:</div> Forward, Forward, Down, High Kick <div class='distance'>(Sweep)</div>, then Forward, Down, Forward, Forward, High Punch <div class='distance'>(Close)</div> <br>"
  + "<div class='moveName'>Ice Grenade:</div> <i>(Hold Low Punch)</i> Back, Back, Down, Forward <i>(Release Low Punch)</i> <div class='distance'>(Full Screen)</div> <br>"
  + "<div class='moveName'>Friendship:</div> Back, Back, Down, High Kick<br>"
  + "<div class='moveName'>Babality:</div> Down, Back, Back, High Kick <br>"
  + "<div class='moveName'>Stage:</div> Down, Forward, Forward Block";
  document.getElementById("ending").innerHTML = 
  "When Sub-Zero failed to return from the Shaolin tournament and rumor of Shang Tsung's survival reached the Lin Kuei clan, they immediately sent another assassin to complete the task. This new warrior is actually the younger brother of the original Sub-Zero. He enters the outworld contest and accomplishes his task. He learns of Scorpion's foul vendetta against his brother but will never know why his life was spared. Perhaps a third tournament is in his future?"; 
}

function mk2ShangTsung() { // MORTAL KOMBAT 2 - SHANG TSUNG
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Shang Tsung";  
  document.getElementById("bio").innerHTML = 
  "After losing control of the Shaolin Tournament, Tsung promises his ruler Shao Kahn to shape events that will lure the earth warriors to compete in his own contest. Convinced of this plan, Shao Kahn restores Tsung's youth and allows him to live.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>One Flaming Skull:</div> Back, Back, High Punch <br>"
  + "<div class='moveName'>Two Flaming Skuls:</div> Back, Back, Forward, Forward, High Punch <br>" 
  + "<div class='moveName'>Three Flaming Skulls</div> Back, Back, Forward, Forward, High Punch <br>"
  + "<div class='moveName'>Liu Kang Morph:</div> Back, Forward, Forward, Block <br>" 
  + "<div class='moveName'>Kung Lao Morph:</div> Back, Down, Back, High Kick<br>"
  + "<div class='moveName'>Johnny Cage Morph:</div> Back, Back, Down, Low Punch<br>"
  + "<div class='moveName'>Reptile Morph:</div> <i>(Hold Block)</i> Up, Down, High Punch <br>" 
  + "<div class='moveName'>Sub Zero Morph:</div> Forward, Down, Forward, High Punch<br>"
  + "<div class='moveName'>Kitana Morph:</div> Block, Block, Block<br>"
  + "<div class='moveName'>Jax Morph:</div> Down, Forward, Back, High Kick<br>" 
  + "<div class='moveName'>Mileena Morph:</div> Hold High Punch <i>(2 Seconds)</i>, Release<br>"
  + "<div class='moveName'>Baraka Morph:</div> Down, Down, Low Kick<br>"
  + "<div class='moveName'>Scorpion Morph:</div> <i>(Hold Block)</i> Up, Up <br>" 
  + "<div class='moveName'>Raiden Morph:</div> Down, Back, Forward, Low Kick <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Possession:</div> Hold High Kick <i>(2 Seconds)</i>, Release <div class='distance'>(Sweep) </div><br>"
  + "<div class='moveName'>Soul Steal:</div><i>(Hold Block)</i> Up, Down, Up, Low Kick <div class='distance'>(Close)</div><br>"
  + "<i>*</i> <div class='moveName'>Kintaro Morph:</div> Low Punch (30 Seconds), Release Low Punch <div class='distance'>(Sweep)</div><br>"
  + "<div class='moveName'>Friendship:</div> Back, Back, Down, Forward, High Kick<br>"
  + "<div class='moveName'>Babality:</div> Back, Forward, Down, High Kick<br>"
  + "<div class='moveName'>Stage:</div> <i>(Hold Block)</i>, Down, Down, Up, <i>(Release Block)</i>, Down</div> <br>"
  + "<i>* Note: Begin holding Low Punch before the round ends, then release after you'e promoted to Finish Him/Her";
  document.getElementById("ending").innerHTML = 
  "Shang Tsung not only turns against and defeats both Kintaro and Shao Kahn, he also takes over their rule of the Outworld. With Shao Kahn's armies at his command, he finally unbalances the Furies, and weakens the dimensional gates between the Outworld and the Earth Realm. Along with his elite group of sorcerers he uses this weakness to march a never-ending horde of demons onto the earth and doom its inhabitants to eternal darkness. Have a nice day."; 
}
  
function mk2Kitana() {
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Kitana"; 
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" 
  + "MOVE 3 <br>"
  + "MOVE 4 <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}
  
function mk2Jax() {
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Jax";  
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" 
  + "MOVE 3 <br>"
  + "MOVE 4 <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}
  
function mk2Mileena() {
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Mileena";  
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" 
  + "MOVE 3 <br>"
  + "MOVE 4 <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}
  
function mk2Baraka() {
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Baraka";  
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" 
  + "MOVE 3 <br>"
  + "MOVE 4 <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk2Scorpion() {
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Scorpion";  
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" 
  + "MOVE 3 <br>"
  + "MOVE 4 <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}
    
function mk2Raiden() {
  hideEnding();
  document.getElementById("moveDisplay").style.display = "block"; 
  document.getElementById("displayName").innerHTML = "Raiden";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" 
  + "MOVE 3 <br>"
  + "MOVE 4 <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function showEnding() {
  document.getElementById("ending").style.display = "block";
}

function hideEnding() {
    document.getElementById("ending").style.display = "none";
  }