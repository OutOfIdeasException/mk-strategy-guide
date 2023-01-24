
function displayMK2() {
  document.getElementById("mk2").style.display = "block";
}

/*
MORTAL KOMBAT 2 CHARACTER SELECT AREA
*/

function mk2LiuKang() { // MORTAL KOMBAT 2 - LIU KANG
  document.getElementById("moveDisplay").style.display = "block";  
  document.getElementById("displayName").innerHTML = "Liu Kang";
  document.getElementById("bio").innerHTML = 
  "After winning the Shaolin Tournament from Shang Tsung's clutches Kang returns to his temples. He discovers his sacred home in ruins, his Shaolin brothers killed in a vicious battle with a horde of Outworld warriors. Now he travels into the Dark Realm to seek revenge.";
  document.getElementById("specialMoves").innerHTML = 
  "Low Fireball: Forward, Forward, Low Punch <br>"
  + "High Fireball: Forward, Forward, High Punch <br>"
  + "Flying Kick: Forward, Forward, High Kick <br>" 
  + "Bicycle Kick: Hold Low Kick (3 seconds), Release";
  document.getElementById("finishingMoves").innerHTML = 
  "Dragon Morph: Down, Forward, Back, Back, High Kick (Close) <br>"
  + "Cartwheel Uppercut: (Hold Block) Rotate D-Pad Away Counter-Clockwise (Half Screen) <br>" 
  + "Friendship: Forward, Back, Back, Back, Low Kick <br>" 
  + "Babality: Down, Down, Forward, Back, Low Kick <br>" 
  + "Stage: Back, Forward, Forward, Low Kick";
  document.getElementById("ending").innerHTML = 
  "With his Shaolin temple in ruins, Liu Kang journeys into the Outworld, enters Shao Kahn's tournament and unleashes a fury that does not end until the defeat of Shao Kahn. Liu Kang then returns to the seclusion of his Shaolin temple. He pays his respects to his lost brothers and finally realizes that the events which have taken place were all fulfillment of his destiny.";
}

function mk2KungLao() { // MORTAL KOMBAT 2 - KUNG LAO
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Kung Lao"; 
  document.getElementById("bio").innerHTML = 
  "A former Shaolin Monk and a member of the White Lotus society, he is the last descendant of the Great Kung Lao who was defeated by Goro 500 years ago. Realizing the danger of the Outworld menace he joins Liu Kang in entering Shao Kahn's contest.";
  document.getElementById("specialMoves").innerHTML = 
  "Teleport: Down, Up <br> Diving Kick: Down + High Kick <br>"
  + "Hat Throw: Back, Forward, Low Punch <br>" 
  + "Whirlwind Spin: (Hold Block) Up, Up, Low Kick <br>"
  + "* Note: Hat Throw can be directed with up or down";
  document.getElementById("finishingMoves").innerHTML = 
  "Vertical Hat Slice: Forward, Forward, Forward, Low Kick (Sweep) <br>"
  + "Decapitation: (Hold Low Punch) Back, Forward (Release Low Punch) (Direct Hat with Up) <br>"
  + "Friendship: Back, Back, Back, Down, High Kick<br>"
  + "Babality: Back, Back, Forward, Forward, High Kick<br>"
  + "Stage: Forward, Forward, Forward, High Punch";
  document.getElementById("ending").innerHTML = 
  "A former Shaolin Monk alongside Liu Kang, Kung Lao also grieves the loss of their Shaolin brothers. He realizes that his ultimate fate lies within the dark realm of the Outworld. He defeats his Outworld opponents until he emerges the supreme champion. With his strength and spirit in complete alignment he finally avenges the death of his great ancestor. Although his greatest challenges lie ahead..."; 
}

function mk2JohnnyCage() {
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Johnny Cage"; 
  document.getElementById("bio").innerHTML = 
  "After Shang Tsung's tournament, the martial arts superstar disappears. He follows Liu Kang into the Outworld. There he will compete in a twisted tournament which holds the balance of earth's existence- as well as a script for another blockbuster movie.";
  document.getElementById("specialMoves").innerHTML = 
  "Shadow Kick: Back, Forward, Low Kick <br>"
  + "Low Green Bolt: Back, Down, Forward, Low Punch <br>" 
  + "High Green Bold: Forward, Down, Back, High Punch <br>"
  + "Low Blow: Block + Low Punch <br>"
  + "Shadow Uppercut: Back, Down, Back, High Punch <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "Torso Rip: Down, Down, Forward, Forward, High Punch (Close) <br>"
  + "Uppercut: Forward, Forward, Down, Up (Close) <br>"
  + "Friendship: Down, Down, Down, Down, High Kick <br>"
  + "Babality: Back, Back, Back, High Kick <br>"
  + "Stage: Down, Down, Down, High Kick";
  document.getElementById("ending").innerHTML = 
  "After disappearing from the set of his latest movie, Cage finally resurfaces. He used all his knowledge and experiences as a fighter to end the Outworld menace. Now heralded as a true hero, Cage receives the respect he rightfully deserves. He also gets his inspiration for the sequel to his blockbuster movie Mortal Kombat. MK II is released and quickly becomes the greatest motion picture event of all time. Cage realizes that MK III is inevitable."; 
}

function mk2Reptile() {
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Reptile";  
  document.getElementById("bio").innerHTML = 
  "As Shang Tsung's personal protector the elusive Reptile lurks in the shadows stopping all those who would do his master harm. His human form is believed to disguise a horrid reptilian creature whose race was thought extinct millions of years ago.";
  document.getElementById("specialMoves").innerHTML = 
  "Acid Spit: Forward, Forward, High Punch <br>"
  + "Force Ball: Back, Back, High Punch + Low Punch <br>" 
  + "Slide: Back + Low Punch + Low Kick + Block <br>"
  + "Invisibility: (Hold Block) Up, Up, Down, High Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "Decapitation: Back, Back, Down, Low Punch (Full Screen)<br>"
  + "Torso Rip: Forward, Forward, Down, High Kick (Close) (Must Be Invisible) <br>"
  + "Friendship: Back, Back, Down, Low Kick <br>"
  + "Babality: Down, Back, Back, Low Kick <br>"
  + "Stage: Down, Down, Forward, Forward, Block";
  document.getElementById("ending").innerHTML = 
  "Reptile has always loyally served as Shang Tsung's protector. While maintaining a very low profile in the first tournament he discovered Tsung's plot to force the remaining members of his near extinct race into slavery under Shao Kahn's rule. Reptile then devises a plan of his own. He enters the Outworld tournament, defeats Shao Kahn and turns against Shang Tsung, ending his master's scheme. Now his race can live on in their own peaceful existence."; 
}

function mk2SubZero() {
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Sub Zero";  
  document.getElementById("bio").innerHTML = 
  "Thought to have been killed in the Shaolin Tournament, Sub-Zero mysteriously returns. It is believed he travelled into the Outworld to again attempt to assassinate Shang Tsung. To do so he must fight his way through Shao Kahn's tournament.";
  document.getElementById("specialMoves").innerHTML = 
  "Freeze: Down, Forward, Low Punch <br>"
  + "Ground Freeze: Down, Back, Low Kick <br>" 
  + "Slide: Back + Low Punch + Low Kick + Block <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "Ice Shatter: Forward, Forward, Down, High Kick (Sweep), then Forward, Down, Forward, Forward, High Punch (Close) <br>"
  + "Ice Grenade: (Hold Low Punch) Back, Back, Down, Forward (Release Low Punch) (Full Screen) <br>"
  + "Friendship: Back, Back, Down, High Kick<br>"
  + "Babality: Down, Back, Back, High Kick <br>"
  + "Stage: Down, Forward, Forward Block";
  document.getElementById("ending").innerHTML = 
  "When Sub-Zero failed to return from the Shaolin tournament and rumor of Shang Tsung's survival reached the Lin Kuei clan, they immediately sent another assassin to complete the task. This new warrior is actually the younger brother of the original Sub-Zero. He enters the outworld contest and accomplishes his task. He learns of Scorpion's foul vendetta against his brother but will never know why his life was spared. Perhaps a third tournament is in his future?"; 
}

function mk2ShangTsung() {
  document.getElementById("moveDisplay").style.display = "block";
  document.getElementById("displayName").innerHTML = "Shang Tsung";  
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
  
function mk2Kitana() {
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