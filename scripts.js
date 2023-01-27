var gameSelected = 1;
/*
  SELECTION MANAGEMENT FUNCTIONS
  - Used to show and hide specific elements
*/
  function clearAllButStory() {
    document.getElementById("storyDisplay").style.display = "block";
    document.getElementById("tipsCheatsDisplay").style.display = "none";
    document.getElementById("moveDisplay").style.display = "none";
  }

  function clearAllButTips() {
    document.getElementById("storyDisplay").style.display = "none";
    document.getElementById("tipsCheatsDisplay").style.display = "block";
    document.getElementById("moveDisplay").style.display = "none";
  }
  
  function clearAllButMoves() {
    document.getElementById("storyDisplay").style.display = "none";
    document.getElementById("tipsCheatsDisplay").style.display = "none";
    document.getElementById("moveDisplay").style.display = "block";
  }

/*
  GAME SELECTION
  - Make selected game info section visible
  - Hide unselected game info section
*/

function displayMK1() {
  gameSelected = 1;
  displayStory();
  document.getElementById("mk1").style.display = "block";
  document.getElementById("mk2").style.display = "none";
  document.getElementById("mk3").style.display = "none";
  }

function displayMK2() {
  gameSelected = 2;
  displayStory();
  document.getElementById("mk1").style.display = "none";
  document.getElementById("mk2").style.display = "block";
  document.getElementById("mk3").style.display = "none";
}

function displayMK3() {
  gameSelected = 3;
  displayStory();
  document.getElementById("mk1").style.display = "none";
  document.getElementById("mk2").style.display = "none";
  document.getElementById("mk3").style.display = "block";
  }

/*
   STORY SELECTION
   - Display Game Information based on gameSelected variable
   - This will be the default screen when different games are selected
*/

function displayStory() {

  clearAllButStory();

  if (gameSelected === 1) {
    document.getElementById("displayName").innerHTML = "Mortal Kombat";
    document.getElementById("storyDisplay").innerHTML = 
    "<h3>Goro</h3>"
    + "A 2,000 year old, half-human, dragon; Goro remains undefeated for the past 500 years. "
    + "He won the title of Grand Champion by defeating Kung Lao, a Shaolin fighting Monk. It was "
    + "during this period that the tournament fell into Shang Tsung's hands and was corrupted.";
  }

  if (gameSelected === 2) {
    document.getElementById("displayName").innerHTML = "Mortal Kombat II";
    document.getElementById("storyDisplay").innerHTML = 
    "500 years ago, Shang Tsung was banished to the Earth Realm. "
    + "With the aid of Goro, he was able to unbalance the furies and doom "
    + "the planet to a chaotic existence. <br> <br>"
    + "By seizing control of the Shaolin Tournament, he tried to tip the scales of "
    + "order towards chaos. Only seven warriors survived the battles and Shang Tsung's scheme "
    + "would come to a violent end at the hands of Liu Kang. <br> <br>"
    + "Facing execution for his failure and the apparent death of Goro, Tsung convinces "
    + "Shao Kahn to grant him a second chance. <br> <br>"
    + "Shang Tsung's new plan is to lure his enemies to compete in the Outworld where they will "
    + "meet certain death by Shao Kahn himself.";
  }

  if (gameSelected === 3) {
    document.getElementById("displayName").innerHTML = "Mortal Kombat 3";
    document.getElementById("storyDisplay").innerHTML =
    "For centuries, Earth has used Mortal Kombat to defend itself against the Outworld's emperor "
    + "Shao Kahn. But, Kahn becomes frustrated by failed attempts at taking Earth through tournament "
    + "battle. He enacts a plan which began 10,000 years ago. <br> <br>"
    + "During this time, Kahn had a queen. Her name was Sindel and her young death was unexpected. "
    + "Kahn's shadow priests, lead by Shang Tsung, make it so Sindel's spirit would some day be reborn: "
    + "Not on the Outworld but on the Earth Realm itself. <br> <br>"
    + "This unholy act gives Shao Kahn the power to step through the dimenstional gates and reclaim "
    + "his queen. Thus enabling him to finally seize the Earth Realm. <br> <br>"
    + "Upon breaching the portal into Earth, Shao Kahn slowly transforms the planet into a part "
    + "of the Outworld itself. <br> <br>"
    + "Kahns trips the earth of all human life: claiming every soul as his own. <br> <br>"
    + "But there are souls which Kahn cannot take. These souls belong to the warriors chosen to "
    + "represent Earth in a new Mortal Kombat. <br> <br>"
    + "The remaining humans are scattered through the planet. Shao Kahn sends an army of fierce "
    + "Outworld warriors to find and eliminate them."
    + "<h3>Sonya, Jax, and Kano</h3>"
    + "After the first tournament, Sonya Blade turned up missing. Jax then emarked on a rescue "
    + "mission into the Outworld. He found Sonya being held captive with her nemesis, Kano. "
    + "Kano then uses the chance to escape arrest."
    + "<h3>Sub-Zero and the Cyber-Assassins</h3>"
    + "The ultimate advancement in Lin Kuei Technology comes with the creation of the first "
    + "cyber-assassin. They begin converting their human ninjas into soulless machines. But, "
    + "Sub-Zero refuses to take part and is marked for death by his own clan."
    + "<h3>The Shaolin Monks</h3>"
    + "After winning the first Mortal Kombat and escaping from the Outworld, Liu Kang looks to the "
    + "future. He begins training a new generation of Shaolin alongside Kung Lao. But nothing could "
    + "prepare them for the unexpected Outworld invasion."
    + "<h3>The Words of Raiden</h3>"
    + "You have been chosen to represent Earth in Mortal Kombat. Be warned. Although your souls "
    + "are protected against Shao Kahn's evil; your lives are not. I cannot interfere any longer "
    + "as your Earth is now ruled by the Outworld Gods. <br> <br> These are the words of Raiden.";
  }
}

/*
   TIPS AND CHEATS SELECTION
   - Display Tips and Cheats based on gameSelected variable
*/

function displayTipsCheats() {

  clearAllButTips();

  if (gameSelected === 1) {
    document.getElementById("displayName").innerHTML = "Mortal Kombat";
    document.getElementById("tipsCheatsDisplay").innerHTML = 
    "<h3>The Pit</h3>" 
    + "<p>Mortal Kombat introduced the concept of 'Stage Fatalities,' which allow you to finish your "
    + "opponent in ways that interact with the environment.</p>"
    + "<p>While facing your opponent at The Pit stage, <strong>Uppercut</strong> <i>(Down + High Punch)</i> "
    + "your opponent when prompted to <strong>Finish Him / Her</strong>.</p>"
    + "<h3>Fight Reptile</h3>"
    + "<p>Reptile is the first hidden character to appear in the Mortal Kombat series. He is a green "
    + "ninja whose moveset is a combination of Sub-Zero and Scorpion. </p>"
    + "<p>In order to find and fight Reptile, the following conditions must be met:</p>"
    + "<ul>"
    + "<li>You must be fighting at The Pit stage</li>"
    + "<li>There must be sihouettees flying past the moon in the background</li>"
    + "<li>You cannot use the Block button for the duration of the match</li>"
    + "<li>You must get a Double Flawless victory</li>"
    + "<li>You must perform a Fatality <i>(Note: The Pit Fatality does not count)</i>"
    + "</ul>"
  }

  if (gameSelected === 2) {

    clearAllButTips();

    document.getElementById("displayName").innerHTML = "Mortal Kombat II";
    document.getElementById("tipsCheatsDisplay").innerHTML = 
    "<h3>Stage Fatalities</h3>" 
    + "<p>While fighting at the Dead Pool stage, you can perform a Stage Fatality<p> "
    + "<p><div class='moveName'>Dead Pool Stage Fatality:</div> <i>(Hold Low Punch + Low Kick)</i>, Uppercut Your Opponent <div class='distance'>(Close)</div></p>" 
    + "<p>Other Stage Fatalities requires character-specific button combinations"

  }

  if (gameSelected === 3) {
    
    clearAllButTips();
    
    document.getElementById("displayName").innerHTML = "Mortal Kombat II";
    document.getElementById("tipsCheatsDisplay").innerHTML = 
    "<h3>Stage Fatalities</h3>" 
    + "<p>MK 3 Info Here</p>";
  }
}

/*
MORTAL KOMBAT CHARACTER SELECT AREA
  - Change innerHTML of elements to display character-specific data
  - Hide Ending (To avoid ending staying visible when other characters are selected)
  - Hide elements not related to character move displays
*/

function mk1JohnnyCage() { // MORTAL KOMBAT 1 - JOHNNY CAGE
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Johnny Cage"; 
  document.getElementById("bio").innerHTML = 
  "A martial arts superstar trained by Great Masters from around the world, Cage "
  + "uses his talents on the big screenbox-office champ and star of such movies as "
  + "Dragon Fist and Dragon Fist II as well as the Award-Winning Sudden Violence.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Green Bolt:</div> Back, Forward, Low Punch <br>"
  + "<div class='moveName'>Shadow Kick:</div> Back, Forward, Low Kick <br>"
  + "<div class='moveName'>Low Blow:</div> Block + Low Punch<br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Decapitation: </div>Forward, Forward, Forward, High Punch <div class='distance'>(Close) </div>";
  document.getElementById("ending").innerHTML = 
  "Through the battles and life or dead situations faced during the tournament Johnny Cage learns "
  + "the true importance of his fighting skills. He also realizes the full potential of the tournament."
  + "He returns to Hollywood after defending his new title as grand champion. Cage goes on to film"
  + "'Mortal Kombat: The Movie' and its many successful sequels."; 
}

function mk1Kano() { // MORTAL KOMBAT 1 - KANO
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Kano"; 
  document.getElementById("bio").innerHTML = 
  "A Mercenary, Thug, Extortionist Thief - Kano lives a life of crime and injustice. "
  + "He is a devoted member of the Black Dragon, a dangerous group of cut-throat madmen "
  + "feared and respected throughout all of crime's Inner Circles.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Cannonball: </div><i>(Hold Block)</i> Forward, Down, Back, Up, Forward <i>(Release Block)</i> <br>"
  + "<div class='moveName'>Knife Throw: </div><i>(Hold Block)</i> Back, Forward <i>(Release Block)</i> <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Heart Rip:</div> Back, Down, Forward, Low Punch <div class='distance'>(Close)</div> <br>"
  + "<i>*</i> <div class='moveName'>Heart Rip:</div> Back, Back, Back, Low Punch <div class='distance'> (Close)</div> <br>"
  + "<i>* Sega Genesis only</i>"

  
  document.getElementById("ending").innerHTML = 
  "With the defeat of Goro and Shang Tsung, Kano will bring his own brand of treachery "
  + "to the tournament. His Black Dragon organization forms a monopoly over the contest "
  + "that bring shame and torment to all those involved. Their reign will end in anarchy "
  + "and death it will result in the final dismantling of the tournament and the battle "
  + "of the sans."; 
}

function mk1SubZero() { // MORTAL KOMBAT 1 - SUB ZERO
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Sub-Zero"; 
  document.getElementById("bio").innerHTML = 
  "The actual name or identity of this warrior is unknown. However, based on the "
  + "markings of his uniform, it is believed he belongs to the Lin Kuei, a legendary "
  + "clan of Chinese ninja.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Freeze:</div> Down, Forward, Low Punch <br>"
  + "<div class='moveName'>Slide:</div> Back + Low Punch + Low Kick + Block <br>"
  + "<i>*</i> <div class='moveName'>Slide:</div> Back + Low Kick + High Kick <br>"
  + "<i>* Sega Genesis only</i>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Head Rip:</div> Forward, Down, Forward, High Punch <div class='distance'>(Close)</div> <br>"
  + "<i>* Sub-Zero will perform a strong uppercut on Super Nintendo";
  document.getElementById("ending").innerHTML = 
  "After receiving the title of grand champion, Sub-Zero disappears back into "
  + "the shadows from which he came. His only goal in the tournament was the assassination "
  + "of Shang Tsung. He was paid a large some of money by one of Tsung's wealthy enemies. "
  + "With his mission accomplished Sub-Zero will collect his fortune and retire from his "
  + "dangerous profession."; 
}

function mk1SonyaBlade() { // MORTAL KOMBAT 1 - SONYA BLADE
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Sonya Blade"; 
  document.getElementById("bio").innerHTML = 
  "Sonya is a member of a top U.S. Special forces unit. Her team was hot on the "
  + "trail of Kano's Black Dragon organization. They followed them to an uncharted "
  + "island where they were ambushed by Shang Tsung's personal army.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Ring Toss:</div> Back, Back, Low Puch <br>"
  + "<div class='moveName'>Flying Punch:</div> Forward, Back, High Punch <br>"
  + "<div class='moveName'>Leg Grab:</div> Down + Block + Low Punch + Low Kick<br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Kiss of Death: </div>Forward, Forward, Back, Back, Block <div class='distance'> (Far)</div>";
  document.getElementById("ending").innerHTML = 
  "Captured by Shang Tsung Sonya's special unit was taken hostage-their only hope was the "
  + "tournament. Shang Tsung promised to release the entire team only if Sonya could win "
  + "the contest. Her victory not only released her unit-but also put an end to the Black "
  + "Dragon and Shang Tsung's powerful grip on the tournament."; 
}

function mk1Raiden() { // MORTAL KOMBAT 1 - RAIDEN
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Raiden"; 
  document.getElementById("bio").innerHTML = 
  "The name Raiden is actually that of a deity known as The Thunder God. It is rumored "
  + "he received a personal invitation by Shang Tsung himself and took the form of a "
  + "human to compete in the Tournament.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Teleport:</div> Down, Up<br>"
  + "<div class='moveName'>Lightning:</div> Down, Forward, Low Punch<br>"
  + "<div class='moveName'>Torpedo: </div> Back, Back, Forward";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Electrocution: </div> Forward, Back, Back, Back, High Punch <div class='distance'>(Close) </div>";
  document.getElementById("ending").innerHTML = 
  "Raiden's victory comes as no surprise to him. He was never impressed by Shang Tsung's "
  + "inferior sorcery, Goro's brute force, or the challenge of the other contestants. "
  + "He quickly becomes bored with his mortal competition and soon invites other gods to "
  + "participate on the contest. The ensuing battles rage on for years. And the wars result "
  + "in our world's final destruction. Have a nice day."; 
}

function mk1LiuKang() { // MORTAL KOMBAT 1 - LIU KANG
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Liu Kang"; 
  document.getElementById("bio").innerHTML = 
  "Once a member of the super secret White Lotus Society, Liu Kang left the "
  + "organization in order to represent Shaolin temples in the Tournament. "
  + "Kang is strong in his beliefs and despises Shang Tsung.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Fireball: </div>Forward, Forward, High Punch <br>"
  + "<div class='moveName'>Flying Kick: </div>Forward, Forward, High Kick <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Cartwheel Uppercut: </div> <i>(Hold Block)</i> Forward, Down, Back, Up, Forward <i>(Release Block)</i> <div class='distance'>(Half Screen) </div>";
  document.getElementById("ending").innerHTML = 
  "After defeating mighty Goro and putting an end to Shang Tsung's rule over the tournament, "
  + "Kang is able to return the contest to its rightfull hosts - The Shaolin temples. "
  + "Kang's heroics will always be remembered. He will continue the traditions of the "
  + "Shaolin temples and restore the true pride and respect of this once great tournament."; 
}

function mk1Scorpion() { // MORTAL KOMBAT 1 - SCORPION
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Scorpion"; 
  document.getElementById("bio").innerHTML = 
  "Like Sub-Zero, Scorpion's true name and origin are not known. He has shown "
  + "from time to time distrust and hatred towards Sub-Zero. Between Ninjas, "
  + "this is usually a sign of opposing clans.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Spear: </div> Back, Back, Low Punch <br>"
  + "<div class='moveName'>Teleport Punch: </div> Down, Back, High Punch <br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fire Breath: </div><i>(Hold Block)</i> Up, Up <i>(Release Block)</i> <div class='distance'>(Half Screen)</div>";
  document.getElementById("ending").innerHTML = 
  "Marked for death years ago by the Lin Kuei, Scorpion was murdered by Sub-Zero. "
  + "He left behind a wife and child in his former life but was allowed to return and "
  + "avenge his death. Even with Scorpion's triumph in the tournament and new title as "
  + "grand champion the price he paid was high. He can never again know his family and "
  + "must exist forever with his secret curse."; 
}

/*
MORTAL KOMBAT 2 CHARACTER SELECT AREA
  - Change innerHTML of elements to display character-specific data
  - Hide Ending (To avoid ending staying visible when other characters are selected)
  - Hide elements not related to character move displays
*/

function mk2LiuKang() { // MORTAL KOMBAT 2 - LIU KANG
  hideEnding();
  clearAllButMoves();
  
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
  clearAllButMoves();

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
  clearAllButMoves();

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
  clearAllButMoves();

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
  clearAllButMoves();

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
  clearAllButMoves();

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
  + "<div class='moveName'>Stage:</div> <i>(Hold Block)</i>, Down, Down, Up, <i>(Release Block)</i>, Down <br>"
  + "<i>* Note: Begin holding Low Punch before the round ends, then release after you'e promoted to Finish Him/Her";
  document.getElementById("ending").innerHTML = 
  "Shang Tsung not only turns against and defeats both Kintaro and Shao Kahn, he also takes over their rule of the Outworld. With Shao Kahn's armies at his command, he finally unbalances the Furies, and weakens the dimensional gates between the Outworld and the Earth Realm. Along with his elite group of sorcerers he uses this weakness to march a never-ending horde of demons onto the earth and doom its inhabitants to eternal darkness. Have a nice day."; 
}
  
function mk2Kitana() { // MORTAL KOMBAT 2 - KITANA
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Kitana"; 
  document.getElementById("bio").innerHTML = 
  "Her beauty hides her true role as personal assassin for Shao Kahn. Seen talking to an earth-realm warrior, her motives have come under suspicion by her twin sister Mileena. But only Kitana knows her own true intentions.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Fan Swipe:</div> Back + High Punch <br>"
  + "<div class='moveName'>Fan Throw:</div> Forward, Forward, High Punch + Low Punch <br>" 
  + "<div class='moveName'>Fan Lift:</div> Back, Back, Back, High Kick <br>"
  + "<div class='moveName'>Flying Punch:</div> Forward, Down, Back, High Punch<br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Decapitation:</div> Block, Block, Block, High Kick <div class='distance'>(Close)</div><br>"
  + "<div class='moveName'>Kiss of Death:</div> <i>(Hold Low Kick)</i> Forward, Forward, Down, Forward <i>(Release Low Kick)</i> <div class='distance'>(Close)</div> <br>"
  + "<div class='moveName'>Friendship:</div> <i>(Hold Block)</i> Down, Down, Down, Up, Low Kick <br>"
  + "<div class='moveName'>Babality:</div> Down, Down, Down, Low Kick<br>"
  + "<div class='moveName'>Stage:</div> Forward, Down, Forward, High Kick";
  document.getElementById("ending").innerHTML = 
  "As a result of her years of work as an assassin, Kitana has learned many secrets, especially about her past. She discovers that Mileena is not her twin but a grotesque clone created by Shang Tsung. She learns that her parents were former rulers of the Outworld overthrown by Shao Kahn. Determined to take back what is hers, she must defeat Kahn. She does so by entering the tournament. She reclaims her parents' castle and restores the Outworld to a realm of beauty."; 
}
  
function mk2Jax() { // MORTAL KOMBAT 2 - JAX
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Jax";  
  document.getElementById("bio").innerHTML = 
  "His real name is Major Jackson Briggs, leader of a top US special forces unit. After receiving a distress signal from Lt. Sonya Blade, Jax embarks on a rescue mission. One that leads him into a ghastly world where he believes that Sonya is still alive.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Energy Wave:</div> Forward, Down, Back, High Kick<br>"
  + "<div class='moveName'>Gotcha Grab:</div> Forward, Forward, Low Punch <i>(Keep Tapping Low Punch to Keep Punching)</i> <br>" 
  + "<div class='moveName'>Ground Pound:</div> <i>(Hold Low Kick)</i> 3 Seconds <i>(Release Low Kick)</i></div> <br>"
  + "<div class='moveName'>Back Breaker:</div> Block  <div class='distance'>(Next to Opponent in Air)</div><br>"
  + "<div class='moveName'>Body Slam:</div> Throw Opponent <i>(Using Low Punch, Close to Opponent) (Tap High Punch for Additional Slams)</i> ";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Arm Rip:</div> Block, Block, Block, Block, Low Punch <div class='distance'>(Sweep)</div>  <br>"
  + "<div class='moveName'>Head Smash:</div> <i>(Hold Low Punch)</i> Forward, Forward, Forward <i>(Release Low Punch)</i> <div class='distance'>(Close)</div> <br>"
  + "<div class='moveName'>Friendship:</div> <i>(Hold Block)</i> Down, Down, Up, Up, Low Kick <br>"
  + "<div class='moveName'>Babality:</div> <i>(Hold Block)</i> Down, Up, Down, Up, Low Kick <br>"
  + "<div class='moveName'>Stage: </div> <i>(Hold Block)</i> Up, Up, Down, Low Kick";
  document.getElementById("ending").innerHTML = 
  "Jax finds Sonya held captive alongside their arch enemy Kano. Her only chance of escape is by Jax entering Shao Kahn's contest. With fierce determination he catches the Outworld Warriors off guard and Wins the Tournament bringing Shao Kahn's rule to a crashing halt. During the Chaos that follows, Jax and Sonya escape through the dimensional gate from which they entered. Kano once again eludes capture but Jax and Sonya know they will cross paths with him in the future."; 
}
  
function mk2Mileena() { // MORTAL KOMBAT 2 - MILEENA
  hideEnding();
  clearAllButMoves();

  document.getElementById("displayName").innerHTML = "Mileena";  
  document.getElementById("bio").innerHTML = 
  "Serving as an assassin along with her twin sister Kitana, Mileena's dazzling appearances conceal her hideous intentions. At Shao Kahn's request she is asked to watch for her twin's suspected dissension. She must put a stop to it at any costs.";
  document.getElementById("specialMoves").innerHTML = 
  "<i>*</i> <div class='moveName'>Sai Throw:</div> <i>(Hold High Punch)</i> 2 Seconds <i>(Release High Punch)</i><br>"
  + "<div class='moveName'>Teleport Kick:</div> Forward, Forward, Low Kick <br>" 
  + "<div class='moveName'>Ground Roll:</div> Back, Back, Down, High Kick <br>"
  + "<i>* Can be done in air</i>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Chew Up and Spit Out:</div> <i>(Hold High Kick)</i> 3 Seconds <i>(Release High Kick) <div class='distance'>(Close)</div></i>  <br>"
  + "<div class='moveName'>Rapid Stab:</div> Forward, Back, Forward, Low Punch <div class='distance'>(Close)</div><br>"
  + "<div class='moveName'>Friendship:</div> Down, Down, Down, High Kick<br>"
  + "<div class='moveName'>Babality:</div> Down, Down, Down, Up, High Kick<br>"
  + "<div class='moveName'>Stage:</div> Forward, Down, Forward, Low Kick";
  document.getElementById("ending").innerHTML = 
  "Once thought to be Kitana's twin sister, Mileena is actually a grotesque clone created by Shang Tsung. With Shao Kahn's suspicions of Kitana's motives, Mileena seizes the opportunity to attack Kahn and his minions. Caught off guard, they are no match for Mileena's speed. She wins the tournament and together with her secret companion, Baraka, they rule the world as king and queen."; 
}
  
function mk2Baraka() { // MORTAL KOMBAT 2 - BARAKA
  hideEnding();
  clearAllButMoves();

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

function mk2Scorpion() { // MORTAL KOMBAT 2 - SCORPION
  hideEnding();
  clearAllButMoves(); 

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
    
function mk2Raiden() { // MORTAL KOMBAT 2 - RAIDEN
  hideEnding();
  clearAllButMoves(); 
 
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

/*
MORTAL KOMBAT 3 CHARACTER SELECT AREA
  - Change innerHTML of elements to display character-specific data
  - Hide Ending (To avoid ending staying visible when other characters are selected)
  - Hide elements not related to character move displays
*/

function mk3ShangTsung() { // MORTAL KOMBAT 3 - SHANG TSUNG
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Shang Tsung";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Sindel() { // MORTAL KOMBAT 3 - SINDEL
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Sindel";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Jax() { // MORTAL KOMBAT 3 - JAX
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Jax";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Kano() { // MORTAL KOMBAT 3 - KANO
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Kano";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3SonyaBlade() { // MORTAL KOMBAT 3 - SONYA BLADE
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Sonya Blade";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3LiuKang() { // MORTAL KOMBAT 3 - LIU KANG
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Liu Kang";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Stryker() { // MORTAL KOMBAT 3 - STRYKER
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Stryker";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3SubZero() { // MORTAL KOMBAT 3 - SUB-ZERO
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Sub-Zero";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Cyrax() { // MORTAL KOMBAT 3 - CYRAX
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Cyrax";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Sektor() { // MORTAL KOMBAT 3 - SEKTOR
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Sektor";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Nightwolf() { // MORTAL KOMBAT 3 - NIGHTWOLF
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Nightwolf";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Sheeva() { // MORTAL KOMBAT 3 - SHEEVA
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Sheeva";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3KungLao() { // MORTAL KOMBAT 3 - KUNG LAO
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Kung Lao";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Kabal() { // MORTAL KOMBAT 3 - KABAL
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Kabal";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3Smoke() { // MORTAL KOMBAT 3 - SMOKE
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Smoke";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
  + "Stage: ";
  document.getElementById("ending").innerHTML = 
  "Ending"; 
}

function mk3ShangTsung() { // MORTAL KOMBAT 3 - SHANG TSUNG
  hideEnding();
  clearAllButMoves(); 

  document.getElementById("displayName").innerHTML = "Shang Tsung";
  document.getElementById("bio").innerHTML = 
  "story";
  document.getElementById("specialMoves").innerHTML = 
  "MOVE1 <br>"
  + "MOVE 2 <br>" ;
  document.getElementById("finishingMoves").innerHTML = 
  "FATALITY1 <br>"
  + "FATALITY2 <br>",
  + "Friendship: <br>"
  + "Babality: <br>"
  + "Animality: <br>"
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
