var gameSelected = 1;
var sound = 1;

/* 
  AUDIO FUNCTIONS
  - Will be used to acknowledge specific actions 
  - Will be called in later functions depending on whether
    or not the user has Audio enabled  
*/

function soundOn() {
  sound = 1;
  var audioEnabled = document.getElementById("audioEnabled");
  document.getElementById("soundOn").disabled = true;
  document.getElementById("soundOff").disabled = false;
  audioEnabled.play();
}

function soundOff() {
  sound = 0;
  document.getElementById("soundOn").disabled = false;
  document.getElementById("soundOff").disabled = true;
}

/*
  SELECTION MANAGEMENT FUNCTIONS
  - Used to show and hide specific elements
*/
  function clearAllButStory() {
    document.getElementById("storyDisplay").style.display = "block";
    document.getElementById("tipsCheatsDisplay").style.display = "none";
    document.getElementById("characterDetails").style.display = "none";
    document.getElementById("characterStory").style.display = "none";
    document.getElementById("moveDisplay").style.display = "none";
  }

  function clearAllButTips() {
    document.getElementById("storyDisplay").style.display = "none";
    document.getElementById("tipsCheatsDisplay").style.display = "block";
    document.getElementById("characterDetails").style.display = "none";
    document.getElementById("characterStory").style.display = "none";
    document.getElementById("moveDisplay").style.display = "none";
  }
  
  function clearAllButMoves() {
    document.getElementById("storyDisplay").style.display = "none";
    document.getElementById("tipsCheatsDisplay").style.display = "none";
    document.getElementById("characterDetails").style.display = "grid";
    document.getElementById("characterStory").style.display = "block";
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

  if (gameSelected === 1) { /* Mortal Kombat Story Section*/
    document.getElementById("displayName").innerHTML = "Mortal Kombat";
    document.getElementById("storyDisplay").innerHTML = 
    "<h3>Goro</h3>"
    + "<p>A 2,000 year old, half-human, dragon; Goro remains undefeated for the"
    + " past 500 years. He won the title of Grand Champion by defeating Kung"
    + " Lao, a Shaolin fighting Monk. It was during this period that the "
    + " tournament fell into Shang Tsung's hands and was corrupted.</p>";
  }

  if (gameSelected === 2) { /* Mortal Kombat II Story Section */
    document.getElementById("displayName").innerHTML = "Mortal Kombat II";
    document.getElementById("storyDisplay").innerHTML = 
    "<p>500 years ago, Shang Tsung was banished to the Earth Realm. "
    + "With the aid of Goro, he was able to unbalance the furies and doom "
    + "the planet to a chaotic existence.</p>"
    + "<p>By seizing control of the Shaolin Tournament, he tried to tip the"
    + " scales of order towards chaos. Only seven warriors survived the"
    + " battles and Shang Tsung's scheme would come to a violent end at the"
    + " hands of Liu Kang.</p>"
    + "<p>Facing execution for his failure and the apparent death of Goro," 
    + "Tsung convinces Shao Kahn to grant him a second chance.</p>"
    + "<p>Shang Tsung's new plan is to lure his enemies to compete in the" 
    + " Outworld where they will meet certain death by Shao Kahn himself.</p>";
  }

  if (gameSelected === 3) { /* Mortal Kombat 3 Story Section */
    document.getElementById("displayName").innerHTML = "Mortal Kombat 3";
    document.getElementById("storyDisplay").innerHTML =
    "<p>For centuries, Earth has used Mortal Kombat to defend itself against" 
    + "the Outworld's emperor Shao Kahn. But, Kahn becomes frustrated by failed"
    + " attempts at taking Earth through tournament battle. He enacts a plan"
    + " which began 10,000 years ago.</p>"
    + "<p>During this time, Kahn had a queen. Her name was Sindel and her young"
    + "death was unexpected. Kahn's shadow priests, lead by Shang Tsung, make"
    + " it so Sindel's spirit would some day be reborn: Not on the Outworld"
    + " but on the Earth Realm itself.</p>"
    + "<p>This unholy act gives Shao Kahn the power to step through the" 
    + " dimenstional gates and reclaim his queen. Thus enabling him to finally"
    + " seize the Earth Realm.</p>"
    + "<p>Upon breaching the portal into Earth, Shao Kahn slowly transforms"
    + " the planet into a part of the Outworld itself.</p>"
    + "<p>Kahns trips the earth of all human life: claiming every soul as his" 
    + " own.</p>"
    + "<p>But there are souls which Kahn cannot take. These souls belong to the"
    + "warriors chosen to represent Earth in a new Mortal Kombat.</p>"
    + "<p>The remaining humans are scattered through the planet. Shao Kahn"
    + "sends an army of fierce Outworld warriors to find and eliminate them.</p>"
    /* Mortal Kombat 3 Sonya, Jax, and Kano */
    + "<h3>Sonya, Jax, and Kano</h3>"
    + "<p>After the first tournament, Sonya Blade turned up missing. Jax then"
    + " emarked on a rescue mission into the Outworld. He found Sonya being held"
    + "captive with her nemesis, Kano.</p>"
    + "<p>Kano then uses the chance to escape arrest.</p>"
    /* Mortal Kombat 3 Story Section: Sub-Zero, Cyrax, and Sektor */
    + "<h3>Sub-Zero and the Cyber-Assassins</h3>"
    + "<p>The ultimate advancement in Lin Kuei Technology comes with the creation"
    + " of the first cyber-assassin. They begin converting their human ninjas"
    + " into soulless machines. But, Sub-Zero refuses to take part and is"
    + "marked for death by his own clan.</p>"
    /* Mortal Kombat 3 Story Section: Liu Kang and Kung Lao */
    + "<h3>The Shaolin Monks</h3>"
    + "<p>After winning the first Mortal Kombat and escaping from the Outworld,"
    + " Liu Kang looks to the future. He begins training a new generation of"
    + " Shaolin alongside Kung Lao. But nothing could prepare them for the"
    + " unexpected Outworld invasion.</p>"
    /* Mortal Kombat 3 Story Section: Raiden's Intro */
    + "<h3>The Words of Raiden</h3>"
    + "<p>You have been chosen to represent Earth in Mortal Kombat. Be warned."
    + "Although your souls are protected against Shao Kahn's evil; your lives"
    + " are not. I cannot interfere any longer as your Earth is now ruled by"
    + " the Outworld Gods.</p> <p>These are the words of Raiden.</p>";
  }
}

/*
   TIPS AND CHEATS SELECTION
   - Display Tips and Cheats based on gameSelected variable
*/

function displayTipsCheats() {

  clearAllButTips();

  if (gameSelected === 1) { /* Mortal Kombat 1 Tips and Cheats Section */
    document.getElementById("displayName").innerHTML = "Mortal Kombat";
    document.getElementById("tipsCheatsDisplay").innerHTML = 
    /* Pit Fatality */
    "<h3>The Pit</h3>" 
    + "<p>Mortal Kombat introduced the concept of 'Stage Fatalities,' which"
    + " allow you to finish your opponent in ways that interact with the</p>"
    + "<p>While facing your opponent at The Pit stage, <strong>Uppercut"
    + "</strong> <i>(Down + High Punch)</i> your opponent when prompted to"
    + " <strong>Finish Him / Her</strong>.</p>"
    /* Find and Fight Repitle */
    + "<h3>Fight Reptile</h3>"
    + "<p>Reptile is the first hidden character to appear in the Mortal Kombat"
    + " series. He is a green ninja whose moveset is a combination of Sub-Zero"
    + " and Scorpion.</p>"
    + "<p>In order to find and fight Reptile, the following conditions must be"
    + "met:</p>"
    + "<ul>"
    + "<li>You must be fighting at The Pit stage</li>"
    + "<li>A sihouettee must fly past the moon in the background</li>"
    + "<li>You cannot use the Block button for the duration of the match</li>"
    + "<li>You must get a Double Flawless victory</li>"
    + "<li>You must perform a Fatality"
    + " <i>(Note: The Pit Fatality does not count)</i>"
    + "</ul>"
  }

  if (gameSelected === 2) { /* Mortal Kombat II Tips and Cheats Section */

    clearAllButTips();

    document.getElementById("displayName").innerHTML = "Mortal Kombat II";
    document.getElementById("tipsCheatsDisplay").innerHTML = 
    "<h3>Stage Fatalities</h3>" 
    + "<p>While fighting at the Dead Pool stage, you can perform a Stage"
    + " Fatality<p> "
    + "<p><div class='moveName'>Dead Pool Stage Fatality:</div> <i>(Hold"
    + " Low Punch + Low Kick)</i>, Uppercut Your Opponent "
    + "<div class='distance'>(Close)</div></p>" 
    + "<p>Other Stage Fatalities requires character-specific button" 
    + " combinations</p>";
  }

  if (gameSelected === 3) { /* Morta Kombat 3 Tips and Cheats Section */
    
    clearAllButTips();
    
    document.getElementById("displayName").innerHTML = "Mortal Kombat 3";
    document.getElementById("tipsCheatsDisplay").innerHTML = 
    "<h3>Stage Fatalities</h3>" 
    + "<p>MK 3 Info Here</p>";
  }
}

/*
MORTAL KOMBAT CHARACTER SELECT AREA
  - Change innerHTML of elements to display character-specific data
  - Hide Ending (To avoid ending staying visible when other characters are 
    selected)
  - Hide elements not related to character move displays
*/

function mk1JohnnyCage() { // MORTAL KOMBAT 1 - JOHNNY CAGE
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var johnnycage1 = document.getElementById("johnnycage1");
    johnnycage1.play();
  }

  document.getElementById("displayName").innerHTML = "Johnny Cage"; 
  document.getElementById("characterStance").src = "images/mk1/johnnycage.gif";
  document.getElementById("bio").innerHTML = 
  "<p>A martial arts superstar trained by Great Masters from around the world,"
  + " Cage uses his talents on the big screenbox-office champ and star of such"
  + " movies as Dragon Fist and Dragon Fist II as well as the Award-Winning"
  + " Sudden Violence.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Green Bolt</div><br>"
  + "Back, Forward, Low Punch <br><br>"
  + "<div class='moveName'>Shadow Kick</div><br>"
  + "Back, Forward, Low Kick <br><br>"
  + "<div class='moveName'>Low Blow</div><br>"
  + "Block + Low Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Decapitation</div><br>"
  + "Forward, Forward, Forward, High Punch <div class='distance'>(Close)</div>";
  document.getElementById("ending").innerHTML = 
  "<p>Through the battles and life or dead situations faced during the tournament"
  + " Johnny Cage learns the true importance of his fighting skills. He also"
  + " realizes the full potential of the tournament. He returns to Hollywood"
  + " after defending his new title as grand champion. Cage goes on to film"
  + "'Mortal Kombat: The Movie' and its many successful sequels.</p>"; 
}

function mk1Kano() { // MORTAL KOMBAT 1 - KANO
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var kano1 = document.getElementById("kano1");
    kano1.play();
  }

  document.getElementById("displayName").innerHTML = "Kano"; 
    document.getElementById("characterStance").src = "images/mk1/kano.gif";
  document.getElementById("bio").innerHTML = 
  "<p>A Mercenary, Thug, Extortionist Thief - Kano lives a life of crime and"
  + "injustice. He is a devoted member of the Black Dragon, a dangerous group"
  + " of cut-throat madmen feared and respected throughout all of crime's"
  + " Inner Circles.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Cannonball</div><br>"
  + "<i>(Hold Block)</i> Forward, Down, Back, Up, Forward <i>(Release Block)"
  + "</i><br><br>"
  + "<div class='moveName'>Knife Throw</div><br>"
  + "<i>(Hold Block)</i> Back, Forward <i>(Release Block)</i>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Heart Rip</div> <br>"
  + "Back, Down, Forward, Low Punch <div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Fatality: Heart Rip</div> <i>(Sega Genesis)</i><br>"
  + "Back, Back, Back, Low Punch <div class='distance'>(Close)</div>"
  document.getElementById("ending").innerHTML = 
  "<p>With the defeat of Goro and Shang Tsung, Kano will bring his own brand of"
  + " treachery to the tournament. His Black Dragon organization forms a"
  + " monopoly over the contest that bring shame and torment to all those"
  + " involved. Their reign will end in anarchy and death it will result"
  + " in the final dismantling of the tournament and the battle of the sans.</p>"; 
}

function mk1SubZero() { // MORTAL KOMBAT 1 - SUB ZERO
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var subzero1 = document.getElementById("subzero1");
    subzero1.play();
  }

  document.getElementById("displayName").innerHTML = "Sub-Zero"; 
  document.getElementById("characterStance").src = "images/mk1/subzero.gif";
  document.getElementById("bio").innerHTML = 
  "<p>The actual name or identity of this warrior is unknown. However, based on"
  + " the markings of his uniform, it is believed he belongs to the Lin Kuei,"
  + "a legendary clan of Chinese ninja.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Freeze</div><br>"
  + "Down, Forward, Low Punch<br><br>"
  + "<div class='moveName'>Slide</div><br>"
  + "Back + Low Punch + Low Kick + Block<br><br>"
  + "<div class='moveName'>Slide</div><br>"
  + "Back + Low Kick + High Kick";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Head Rip</div><br>"
  + "Forward, Down, Forward, High Punch <div class='distance'>(Close)</div><br>"
  + "<i>Sub-Zero will perform a strong uppercut on Super Nintendo<br>"
  + "The Blood Code is required for Sega Genesis and Sega GameGear</i>";
  document.getElementById("ending").innerHTML = 
  "<p>After receiving the title of grand champion, Sub-Zero disappears back"
  + " into the shadows from which he came. His only goal in the tournament"
  + " was the assassination of Shang Tsung. He was paid a large some of"
  + " money by one of Tsung's wealthy enemies. With his mission accomplished"
  + " Sub-Zero will collect his fortune and retire from his dangerous "
  + " profession.</p>"; 
}

function mk1SonyaBlade() { // MORTAL KOMBAT 1 - SONYA BLADE
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var sonyablade1 = document.getElementById("sonyablade1");
    sonyablade1.play();
  }

  document.getElementById("displayName").innerHTML = "Sonya Blade"; 
  document.getElementById("characterStance").src = "images/mk1/sonyablade.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Sonya is a member of a top U.S. Special forces unit. Her team was hot on"
  + " the trail of Kano's Black Dragon organization. They followed them to an"
  + " uncharted island where they were ambushed by Shang Tsung's personal"
  + " army.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Ring Toss</div><br>"
  + "Back, Back, Low Puch<br><br>"
  + "<div class='moveName'>Flying Punch</div><br>"
  + "Forward, Back, High Punch<br><br>"
  + "<div class='moveName'>Leg Grab</div><br>" 
  + "Down + Block + Low Punch + Low Kick";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Kiss of Death</div><br>"
  + "Forward, Forward, Back, Back, Block <div class='distance'>(Far)</div>";
  document.getElementById("ending").innerHTML = 
  "<p>Captured by Shang Tsung Sonya's special unit was taken hostage-their" 
  + " only hope was the tournament. Shang Tsung promised to release the entire"
  + " team only if Sonya could win the contest. Her victory not only released"
  + "her unit-but also put an end to the Black Dragon and Shang Tsung's"
  + " powerful grip on the tournament.</p>"; 
}

function mk1Raiden() { // MORTAL KOMBAT 1 - RAIDEN
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var raiden1 = document.getElementById("raiden1");
    raiden1.play();
  }

  document.getElementById("displayName").innerHTML = "Raiden"; 
  document.getElementById("characterStance").src = "images/mk1/raiden.gif";
  document.getElementById("bio").innerHTML = 
  "<p>The name Raiden is actually that of a deity known as The Thunder God."
  + "It is rumored he received a personal invitation by Shang Tsung himself"
  + " and took the form of a human to compete in the Tournament.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Teleport</div><br>" 
  + "Down, Up<br><br>"
  + "<div class='moveName'>Lightning</div><br>" 
  + "Down, Forward, Low Punch<br><br>"
  + "<div class='moveName'>Torpedo</div><br>" 
  + "Back, Back, Forward";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Electrocution</div><br>" 
  + "Forward, Back, Back, Back, High Punch <div class='distance'>(Close)</div>";
  document.getElementById("ending").innerHTML = 
  "<p>Raiden's victory comes as no surprise to him. He was never impressed by"
  + " Shang Tsung's inferior sorcery, Goro's brute force, or the challenge of"
  + " the other contestants. He quickly becomes bored with his mortal"
  + " competition and soon invites other gods to participate on the contest." 
  + "The ensuing battles rage on for years. And the wars result in our world's"
  + "final destruction. Have a nice day.</p>"; 
}

function mk1LiuKang() { // MORTAL KOMBAT 1 - LIU KANG
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var liukang1 = document.getElementById("liukang1");
    liukang1.play();
  }

  document.getElementById("displayName").innerHTML = "Liu Kang"; 
  document.getElementById("characterStance").src = "images/mk1/liukang.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Once a member of the super secret White Lotus Society, Liu Kang left the"
  + "organization in order to represent Shaolin temples in the Tournament."
  + "Kang is strong in his beliefs and despises Shang Tsung.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Fireball</div><br>"
  + "Forward, Forward, High Punch<br><br>"
  + "<div class='moveName'>Flying Kick</div><br>"
  + "Forward, Forward, High Kick";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Cartwheel Uppercut</div><br>"
  + "Forward, Down, Back, Up, Forward <div class='distance'>(Half Screen)"
  + "</div><br>"
  + "<i>Block can be held to avoid jumping</i>";
  document.getElementById("ending").innerHTML = 
  "<p>After defeating mighty Goro and putting an end to Shang Tsung's rule over" 
  + "the tournament, Kang is able to return the contest to its rightfull hosts"
  + " - The Shaolin temples. Kang's heroics will always be remembered. He will"
  + " continue the traditions of the Shaolin temples and restore the true pride"
  + " and respect of this once great tournament.</p>"; 
}

function mk1Scorpion() { // MORTAL KOMBAT 1 - SCORPION
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var scorpion1 = document.getElementById("scorpion1");
    scorpion1.play();
  }

  document.getElementById("displayName").innerHTML = "Scorpion"; 
  document.getElementById("characterStance").src = "images/mk1/scorpion.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Like Sub-Zero, Scorpion's true name and origin are not known. He has"
  + "shown from time to time distrust and hatred towards Sub-Zero. Between"
  + "Ninjas, this is usually a sign of opposing clans.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Spear</div><br>"
  + "Back, Back, Low Punch<br><br>"
  + "<div class='moveName'>Teleport Punch</div><br>" 
  + "Down, Back, High Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality: Fire Breath</div><br>"
  + "Up, Up <div class='distance'>(Half Screen)</div><br>"
  + "<i>Block can be held to avoid jumping</i>";
  document.getElementById("ending").innerHTML = 
  "Marked for death years ago by the Lin Kuei, Scorpion was murdered by"
  + "<p>Sub-Zero. He left behind a wife and child in his former life but was"
  + " allowed to return and avenge his death. Even with Scorpion's triumph"
  + " in the tournament and new title as grand champion the price he paid was"
  + " high. He can never again know his family and must exist forever with his"
  + " secret curse.</p>"; 
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

  if (sound === 1) {
    var liukang2 = document.getElementById("liukang2");
    liukang2.play();
  }
  
  document.getElementById("displayName").innerHTML = "Liu Kang";
  document.getElementById("characterStance").src = "images/mk2/liukang.gif";
  document.getElementById("bio").innerHTML = 
  "<p>After winning the Shaolin Tournament from Shang Tsung's clutches Kang"
  + "returns to his temples. He discovers his sacred home in ruins, his"
  + " Shaolin brothers killed in a vicious battle with a horde of Outworld"
  + "warriors. Now he travels into the Dark Realm to seek revenge.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Low Fireball</div><br>" 
  + "Forward, Forward, Low Punch <br><br>"
  + "<div class='moveName'>High Fireball</div><br>"
  + "Forward, Forward, High Punch<br>"
  + "<i>Can be done in air</i><br><br>"
  + "<div class='moveName'>Flying Kick</div><br>"
  + "Forward, Forward, High Kick<br><br>" 
  + "<div class='moveName'>Bicycle Kick</div><br>" 
  + "Hold Low Kick <i>(3 seconds)</i>, Release";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Dragon Morph</div><br>" 
  + "Down, Forward, Back, Back, High Kick <div class='distance'>(Close)</div>"
  + "<br><br>"
  + "<div class='moveName'>Fatality 2: Cartwheel Uppercut</div><br>"
  + "Rotate D-Pad Away Counter-Clockwise <div class='distance'>(Half Screen)"
  + "</div><br>"
  + "<i>Block can be held to avoid jumping</i><br><br>"
  + "<div class='moveName'>Friendship</div><br>"
  + "Forward, Back, Back, Back, Low Kick<br><br>" 
  + "<div class='moveName'>Babality</div><br>"
  + "Down, Down, Forward, Back, Low Kick<br><br>" 
  + "<div class='moveName'>Stage</div><br>" 
  + "Back, Forward, Forward, Low Kick";
  document.getElementById("ending").innerHTML = 
  "<p>With his Shaolin temple in ruins, Liu Kang journeys into the Outworld,"
  + "enters Shao Kahn's tournament and unleashes a fury that does not end"
  + " until the defeat of Shao Kahn. Liu Kang then returns to the seclusion"
  + " of his Shaolin temple. He pays his respects to his lost brothers and"
  + " finally realizes that the events which have taken place were all"
  + " fulfillment of his destiny.</p>";
}

function mk2KungLao() { // MORTAL KOMBAT 2 - KUNG LAO
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var kunglao2 = document.getElementById("kunglao2");
    kunglao2.play();
  }

  document.getElementById("displayName").innerHTML = "Kung Lao"; 
  document.getElementById("characterStance").src = "images/mk2/kunglao.gif";
  document.getElementById("bio").innerHTML = 
  "<p>A former Shaolin Monk and a member of the White Lotus society, he is the"
  + " last descendant of the Great Kung Lao who was defeated by Goro 500 years"
  + " ago. Realizing the danger of the Outworld menace he joins Liu Kang in"
  + " entering Shao Kahn's contest.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Teleport</div><br>" 
  + "Down, Up <br>"
  + "<i>Press Punch or Kick in air to add a strike<br><br></i>" 
  + "<div class='moveName'>Diving Kick</div><br>" 
  + "Down + High Kick <br>"
  + "<i>Can be used with Teleport</i><br><br>"
  + "<div class='moveName'>Hat Throw</div><br>"
  + "Back, Forward, Low Punch<br>" 
  + "<i>Can be directed using Up or Down</i><br><br>"
  + "<div class='moveName'>Whirlwind Spin</div><br>" 
  + "Up, Up, Low Kick <br>"
  + "<i>Block can be held to avoid jumping</i>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Vertical Hat Slice</div><br>" 
  + "Forward, Forward, Forward, Low Kick <div class='distance'>(Sweep)</div>"
  + "<br><br>"
  + "<div class='moveName'>Fatality 2: Decapitation</div><br>"
  + "<i>(Hold Low Punch)</i> Back, Forward <i>(Release Low Punch)</i>"
  + "<div class='distance'>(Full Screen)</div><br>"
  + "<i>Use Up and Down to direct the hat. Aim for the neck.<br><br></i>"
  + "<div class='moveName'>Friendship</div><br>"
  + "Back, Back, Back, Down, High Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>"
  + "Back, Back, Forward, Forward, High Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>"
  + "Forward, Forward, Forward, High Punch";
  document.getElementById("ending").innerHTML = 
  "<p>A former Shaolin Monk alongside Liu Kang, Kung Lao also grieves the loss"
  + " of their Shaolin brothers. He realizes that his ultimate fate lies within"
  + " the dark realm of the Outworld. He defeats his Outworld opponents until"
  + " he emerges the supreme champion. With his strength and spirit in complete"
  + " alignment he finally avenges the death of his great ancestor. Although"
  + " his greatest challenges lie ahead...</p>"; 
}

function mk2JohnnyCage() { // MORTAL KOMBAT 2 - JOHNNY CAGE
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var johnnycage2 = document.getElementById("johnnycage2");
    johnnycage2.play();
  }

  document.getElementById("displayName").innerHTML = "Johnny Cage"; 
  document.getElementById("characterStance").src = "images/mk2/johnnycage.gif";
  document.getElementById("bio").innerHTML = 
  "<p>After Shang Tsung's tournament, the martial arts superstar disappears."
  + " He follows Liu Kang into the Outworld. There he will compete in a twisted"
  + " tournament which holds the balance of earth's existence- as well as a"
  + " script for another blockbuster movie.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Shadow Kick</div><br>"
  + "Back, Forward, Low Kick <br><br>"
  + "<div class='moveName'>Low Green Bolt</div><br>"
  + "Back, Down, Forward, Low Punch <br><br>" 
  + "<div class='moveName'>High Green Bold</div><br>" 
  + "Forward, Down, Back, High Punch<br><br>"
  + "<div class='moveName'>Low Blow</div><br>"
  + "Block + Low Punch <br><br>"
  + "<div class='moveName'>Shadow Uppercut<br></div>" 
  + "Back, Down, Back, High Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Torso Rip</div><br>" 
  + "Down, Down, Forward, Forward, High Punch <div class='distance'>(Close)"
  + "</div><br><br>"
  + "<i>*</i> <div class='moveName'>Fatality 2: Uppercut</div><br>"
  + "Forward, Forward, Down, Up <div class='distance'>(Close)</div><br>"
  + "<i>Note: Press Down + Low Punch + Low Kick + Block to knock the opponent's"
  + "head off 3 times<br><br></i>"
  + "<div class='moveName'>Friendship</div><br>" 
  + "Down, Down, Down, Down, High Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>" 
  + "Back, Back, Back, High Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>" 
  + "Down, Down, Down, High Kick";
  document.getElementById("ending").innerHTML = 
  "<p>After disappearing from the set of his latest movie, Cage finally"
  + " resurfaces. He used all his knowledge and experiences as a fighter"
  + " to end the Outworld menace. Now heralded as a true hero, Cage receives the"
  + " respect he rightfully deserves. He also gets his inspiration for the sequel"
  + " to his blockbuster movie Mortal Kombat. MK II is released and quickly"
  + " becomes the greatest motion picture event of all time. Cage realizes that"
  + " MK III is inevitable.</p>"; 
}

function mk2Reptile() { // MORTAL KOMBAT 2 - REPTILE 
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var reptile2 = document.getElementById("reptile2");
    reptile2.play();
  }

  document.getElementById("displayName").innerHTML = "Reptile";  
  document.getElementById("characterStance").src = "images/mk2/reptile.gif";
  document.getElementById("bio").innerHTML = 
  "<p>As Shang Tsung's personal protector the elusive Reptile lurks in the shadows"
  + " stopping all those who would do his master harm. His human form is"
  + " believed to disguise a horrid reptilian creature whose race was thought"
  + " extinct millions of years ago.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Acid Spit</div><br>" 
  + "Forward, Forward, High Punch<br><br>"
  + "<div class='moveName'>Force Ball</div><br>"
  + "Back, Back, High Punch + Low Punch<br><br>" 
  + "<div class='moveName'>Slide</div><br>"
  + "Back + Low Punch + Low Kick + Block<br><br>"
  + "<div class='moveName'>Invisibility</div><br>" 
  + "<i>(Hold Block)</i> Up, Up, Down, High Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Decapitation</div><br>" 
  + "Back, Back, Down, Low Punch <div class='distance'>(Full Screen)</div>"
  + "<br><br>"
  + "<div class='moveName'>Fatality 2: Torso Rip</div><br>" 
  + "Forward, Forward, Down, High Kick <div class='distance'>(Close)</div><br>"
  + "<i>(Must Be Invisible)</i><br><br>"
  + "<div class='moveName'>Friendship</div><br>" 
  + "Back, Back, Down, Low Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>"
  + "Down, Back, Back, Low Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>" 
  + "Down, Down, Forward, Forward, Block";
  document.getElementById("ending").innerHTML = 
  "<p>Reptile has always loyally served as Shang Tsung's protector. While"
  + " maintaining a very low profile in the first tournament he discovered"
  + " Tsung's plot to force the remaining members of his near extinct race"
  + " into slavery under Shao Kahn's rule. Reptile then devises a plan of his"
  + " own. He enters the Outworld tournament, defeats Shao Kahn and turns"
  + " against Shang Tsung, ending his master's scheme. Now his race can" 
  + " live on in their own peaceful existence.</p>"; 
}

function mk2SubZero() { // MORTAL KOMBAT 2 - SUB ZERO 
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var subzero2 = document.getElementById("subzero2");
    subzero2.play();
  }

  document.getElementById("displayName").innerHTML = "Sub Zero"; 
  document.getElementById("characterStance").src = "images/mk2/subzero.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>Thought to have been killed in the Shaolin Tournament, Sub-Zero"
  + " mysteriously returns. It is believed he travelled into the Outworld to"
  + " again attempt to assassinate Shang Tsung. To do so he must fight his"
  + " way through Shao Kahn's tournament.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Freeze</div><br>" 
  + "Down, Forward, Low Punch<br><br>"
  + "<div class='moveName'>Ground Freeze</div><br>"
  + "Down, Back, Low Kick<br><br>" 
  + "<div class='moveName'>Slide</div><br>" 
  + "Back + Low Punch + Low Kick + Block";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Ice Shatter</div><br>" 
  + "<strong>First:</strong> Forward, Forward, Down, High Kick"
  + " <div class='distance'>(Sweep)</div><br>" 
  + "<strong>Then:</strong> Forward, Down, Forward, Forward, High Punch"
  + " <div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Fatalit 2: Ice Grenade</div>"
  + "<br><i>(Hold Low Punch)</i> Back, Back, Down, Forward <i>(Release"
  + " Low Punch)</i> "
  + "<div class='distance'>(Full Screen)</div><br><br>"
  + "<div class='moveName'>Friendship</div><br>" 
  + "Back, Back, Down, High Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>" 
  + "Down, Back, Back, High Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>" 
  + "Down, Forward, Forward Block";
  document.getElementById("ending").innerHTML = 
  "<p>When Sub-Zero failed to return from the Shaolin tournament and rumor of"
  + " Shang Tsung's survival reached the Lin Kuei clan, they immediately sent"
  + " another assassin to complete the task. This new warrior is actually the"
  + " younger brother of the original Sub-Zero. He enters the outworld contest"
  + " and accomplishes his task. He learns of Scorpion's foul vendetta against"
  + " his brother but will never know why his life was spared. Perhaps a third"
  + " tournament is in his future?</p>"; 
}

function mk2ShangTsung() { // MORTAL KOMBAT 2 - SHANG TSUNG
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var shangtsung2 = document.getElementById("shangtsung2");
    shangtsung2.play();
  }

  document.getElementById("displayName").innerHTML = "Shang Tsung"; 
  document.getElementById("characterStance").src = "images/mk2/shangtsung.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>After losing control of the Shaolin Tournament, Tsung promises his ruler"
  + " Shao Kahn to shape events that will lure the earth warriors to compete"
  + " in his own contest. Convinced of this plan, Shao Kahn restores Tsung's"
  + " youth and allows him to live.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>One Flaming Skull</div><br>"
  + "Back, Back, High Punch <br><br>"
  + "<div class='moveName'>Two Flaming Skuls</div><br>"
  + "Back, Back, Forward, Forward, High Punch<br><br>" 
  + "<div class='moveName'>Three Flaming Skulls</div><br>" 
  + "Back, Back, Forward, Forward, High Punch"
  + "<h3>Morphs</h3>" /* Shang Tsung's Morph Section */
  + "<div class='moveName'>Liu Kang</div><br>"
  + "Back, Forward, Forward, Block<br><br>" 
  + "<div class='moveName'>Kung Lao</div><br>"
  + "Back, Down, Back, High Kick<br><br>"
  + "<div class='moveName'>Johnny Cage</div><br>"
  + "Back, Back, Down, Low Punch<br><br>"
  + "<div class='moveName'>Reptile</div><br>"
  + "<i>(Hold Block)</i> Up, Down, High Punch<br><br>" 
  + "<div class='moveName'>Sub-Zero</div><br>"
  + "Forward, Down, Forward, High Punch<br><br>"
  + "<div class='moveName'>Kitana</div><br>"
  + "Block, Block, Block<br><br>"
  + "<div class='moveName'>Jax</div><br>"
  + "Down, Forward, Back, High Kick<br><br>" 
  + "<div class='moveName'>Mileena</div><br>"
  + "Hold High Punch <i>(2 Seconds)</i>, Release<br><br>"
  + "<div class='moveName'>Baraka</div><br>"
  + "Down, Down, Low Kick<br><br>"
  + "<div class='moveName'>Scorpion</div><br>"
  + "<i>(Hold Block)</i> Up, Up<br><br>" 
  + "<div class='moveName'>Raiden</div><br>"
  + "Down, Back, Forward, Low Kick<br><br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Possession</div><br>"
  + "Hold High Kick <i>(2 Seconds)</i>, Release <div class='distance'>(Sweep)"
  + "</div><br><br>"
  + "<div class='moveName'>Fatality 2: Soul Steal:</div><br>"
  + "<i>(Hold Block)</i> Up, Down, Up, Low Kick <div class='distance'>(Close)"
  + "</div><br><br>"
  + "<div class='moveName'>Fatality 3: Kintaro Morph</div><br>" 
  + "Low Punch (30 Seconds), Release Low Punch <div class='distance'>(Sweep)"
  + "</div><br>"
  + "<i>* You can begin holding Low Punch before the round ends</i><br><br>"
  + "<div class='moveName'>Friendship</div><br>" 
  + "Back, Back, Down, Forward, High Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>"
  + "Back, Forward, Down, High Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>" 
  + "<i>(Hold Block)</i>, Down, Down, Up, <i>(Release Block)</i>, Down";
  document.getElementById("ending").innerHTML = 
  "<p>Shang Tsung not only turns against and defeats both Kintaro and Shao"
  + " Kahn, he also takes over their rule of the Outworld. With Shao Kahn's"
  + "armies at his command, he finally unbalances the Furies, and weakens the"
  + "dimensional gates between the Outworld and the Earth Realm. Along with"
  + " his elite group of sorcerers he uses this weakness to march a"
  + "never-ending horde of demons onto the earth and doom its inhabitants to"
  + "eternal darkness. Have a nice day.</p>"; 
}
  
function mk2Kitana() { // MORTAL KOMBAT 2 - KITANA
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var kitana2 = document.getElementById("kitana2");
    kitana2.play();
  }

  document.getElementById("displayName").innerHTML = "Kitana";
  document.getElementById("characterStance").src = "images/mk2/kitana.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>Her beauty hides her true role as personal assassin for Shao Kahn. Seen"
  + " talking to an earth-realm warrior, her motives have come under suspicion"
  + " by her twin sister Mileena. But only Kitana knows her own true"
  + " intentions.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Fan Swipe</div><br>" 
  + "Back + High Punch<br><br>"
  + "<div class='moveName'>Fan Throw</div><br>" 
  + "Forward, Forward, High Punch + Low Punch<br><br>" 
  + "<div class='moveName'>Fan Lift</div><br>" 
  + "Back, Back, Back, High Kick<br><br>"
  + "<div class='moveName'>Flying Punch</div><br>" 
  + "Forward, Down, Back, High Punch";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Decapitation</div><br>"
  + "Block, Block, Block, High Kick <div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Fatality 2: Kiss of Death</div><br>" 
  + "<i>(Hold Low Kick)</i> Forward, Forward, Down, Forward <i>(Release Low" 
  + "Kick)</i> "
  + "<div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Friendship</div><br>" 
  + "<i>(Hold Block)</i> Down, Down, Down, Up, Low Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>" 
  + "Down, Down, Down, Low Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>"
  + "Forward, Down, Forward, High Kick";
  document.getElementById("ending").innerHTML = 
  "As a result of her years of work as an assassin, Kitana has learned many"
  + " secrets, especially about her past. She discovers that Mileena is not her"
  + " twin but a grotesque clone created by Shang Tsung. She learns that her" 
  + " parents were former rulers of the Outworld overthrown by Shao Kahn."
  + " Determined to take back what is hers, she must defeat Kahn. She does so by"
  + " entering the tournament. She reclaims her parents' castle and restores the"
  + " Outworld to a realm of beauty."; 
}
  
function mk2Jax() { // MORTAL KOMBAT 2 - JAX
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var jax2 = document.getElementById("jax2");
    jax2.play();
  }

  document.getElementById("displayName").innerHTML = "Jax";  
  document.getElementById("characterStance").src = "images/mk2/jax.gif";
  document.getElementById("bio").innerHTML = 
  "<p>His real name is Major Jackson Briggs, leader of a top US special forces" 
  + " unit. After receiving a distress signal from Lt. Sonya Blade, Jax embarks"
  + " on a rescue mission. One that leads him into a ghastly world where he"
  + " believes that Sonya is still alive.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Energy Wave</div><br>" 
  + "Forward, Down, Back, High Kick<br><br>"
  + "<div class='moveName'>Gotcha Grab</div><br>" 
  + "Forward, Forward, Low Punch <i>(Keep Tapping Low Punch to Keep Punching)"
  + "</i><br><br>" 
  + "<div class='moveName'>Ground Pound</div><br>" 
  + "<i>(Hold Low Kick)</i> 3 Seconds <i>(Release Low Kick)</i></div><br><br>"
  + "<div class='moveName'>Back Breaker</div><br>" 
  + "Block  <div class='distance'>(Next to Opponent in Air)</div><br><br>"
  + "<div class='moveName'>Body Slam</div><br>" 
  + "Throw Opponent <i>(Using Low Punch, Close to Opponent) (Tap High Punch"
  + "for Additional Slams)</i>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Arm Rip</div><br>" 
  + "Block, Block, Block, Block, Low Punch <div class='distance'>(Sweep)</div>"
  + "<br><br>"
  + "<div class='moveName'>Fatality 2: Head Smash</div><br>" 
  + "<i>(Hold Low Punch)</i> Forward, Forward, Forward <i>(Release Low Punch)"
  + "</i> <div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Friendship</div><br>"
  + "<i>(Hold Block)</i>Down, Down, Up, Up, Low Kick<br><br><br>"
  + "<div class='moveName'>Babality</div><br>"
  + "<i>(Hold Block)</i>Down, Up, Down, Up, Low Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>" 
  + "<i>(Hold Block)</i>Up, Up, Down, Low Kick";
  document.getElementById("ending").innerHTML = 
  "<p>Jax finds Sonya held captive alongside their arch enemy Kano. Her only"
  + " chance of escape is by Jax entering Shao Kahn's contest. With fierce"
  + " determination he catches the Outworld Warriors off guard and Wins the"
  + " Tournament bringing Shao Kahn's rule to a crashing halt. During the Chaos"
  + " that follows, Jax and Sonya escape through the dimensional gate from which"
  + " they entered. Kano once again eludes capture but Jax and Sonya know they"
  + " will cross paths with him in the future.</p>"; 
}
  
function mk2Mileena() { // MORTAL KOMBAT 2 - MILEENA
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var mileena2 = document.getElementById("mileena2");
    mileena2.play();
  }

  document.getElementById("displayName").innerHTML = "Mileena";  
  document.getElementById("characterStance").src = "images/mk2/mileena.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Serving as an assassin along with her twin sister Kitana, Mileena's"
  + " dazzling appearances conceal her hideous intentions. At Shao Kahn's"
  + " request she is asked to watch for her twin's suspected dissension. She"
  + " must put a stop to it at any costs.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Sai Throw</div><br>"
  + "<i>(Hold High Punch)</i> 2 Seconds <i>(Release High Punch)</i><br>"
  + "<i>Can be done in air</i><br><br>"
  + "<div class='moveName'>Teleport Kick</div><br>" 
  + "Forward, Forward, Low Kick<br><br>" 
  + "<div class='moveName'>Ground Roll</div><br>"
  + "Back, Back, Down, High Kick";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Chew Up and Spit Out</div><br>" 
  + "<i>(Hold High Kick)</i> 3 Seconds <i>(Release High Kick)"
  + " <div class='distance'>(Close)</div></i><br><br>"
  + "<div class='moveName'>Fatality 2: Rapid Stab</div><br>" 
  + "Forward, Back, Forward, Low Punch <div class='distance'>(Close)</div>"
  + "<br><br>"
  + "<div class='moveName'>Friendship</div><br>"
  + "Down, Down, Down, High Kick<br><br>"
  + "<div class='moveName'>Babality</div><br>"
  + "Down, Down, Down, Up, High Kick<br><br>"
  + "<div class='moveName'>Stage</div><br>" 
  + "Forward, Down, Forward, Low Kick";
  document.getElementById("ending").innerHTML = 
  "<p>Once thought to be Kitana's twin sister, Mileena is actually a grotesque"
  + " clone created by Shang Tsung. With Shao Kahn's suspicions of Kitana's"
  + " motives, Mileena seizes the opportunity to attack Kahn and his minions."
  + " Caught off guard, they are no match for Mileena's speed. She wins the"
  + " tournament and together with her secret companion, Baraka, they rule the"
  + " world as king and queen.</p>"; 
}
  
function mk2Baraka() { // MORTAL KOMBAT 2 - BARAKA
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var baraka2 = document.getElementById("baraka2");
    baraka2.play();
  }

  document.getElementById("displayName").innerHTML = "Baraka";  
  document.getElementById("characterStance").src = "images/mk2/baraka.gif";
  document.getElementById("bio").innerHTML = 
  "<p>He led the attack against Liu Kang's Shaolin temples. Baraka belongs to"
  + " a nomadic race of mutants living in the wastelands of the Outworld. His"
  + " fighting skills gained the attention of Shao Kahn who recruited him into"
  + " his army.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Blade Spark:</div> <br>"
  + "Down, Back, High Punch <br><br>"
  + "<div class='moveName'>Blade Fury:</div> <br>" 
  + "Back, Back, Back, Low Punch <br>"
  + "<i>(Keep Tapping Low Punch to Swipe Longer)</i> <br><br>" 
  + "<div class='moveName'>Blade Swipe:</div> <br>"
  + "Back + High Punch <br><br>"
  + "<div class='moveName'>Double Kick:</div> <br>"
  + "High Kick, High Kick <div class='distance'>(Close)</div><br><br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Blade Decapitation</div><br>"
  + "Back, Back, Back, Back, High Punch <div class='distance'>(Close)</div><br>"
  + "<i>Hold Down immediately and the opponent will slide down the blades</i>"
  + "<br><br>"
  + "<div class='moveName'>Ftality 2: Blade Lift</div><br>"
  + "Back, Forward, Down, Forward, Low Punch <div class='distance'>(Close)</div>"
  + "<br><br>"
  + "<div class='moveName'>Friendship:</div><br>"
  + "Up, Forward, Forward, High Kick <br><br>"
  + "<div class='moveName'>Babality:</div><br>"
  + "Forward, Forward, Forward, High Kick<br><br>"
  + "<div class='moveName'>Stage:</div><br>"
  + "Forward, Forward, Down, High Kick";
  document.getElementById("ending").innerHTML = 
  "<p>Known for his unpredictable actions and wild fits of anger, Baraka goes"
  + " on a rampage. After defeating the earth warriors, he attacks Shang Tsung"
  + ", Kintaro and finally Shao Kahn himself. After defeating Shao Kahn,"
  + " Baraka's race of mutants rise from the wastelands and rebel against what"
  + " is left of Kahn's army. They eventually win, and the Outworld comes under"
  + " the rule of king Baraka.</p>"; 
}

function mk2Scorpion() { // MORTAL KOMBAT 2 - SCORPION
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var scorpion2 = document.getElementById("scorpion2");
    scorpion2.play();
  }

  document.getElementById("displayName").innerHTML = "Scorpion";  
  document.getElementById("characterStance").src = "images/mk2/scorpion.gif";
  document.getElementById("bio").innerHTML = 
  "<p>The hell-spawned spectre rises from the pits. After learning of"
  + " Sub-Zero's return, he again stalks the ninja assassin - following"
  + " him into the dark realm of the Outworld where he continues his own"
  + " unholy mission.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Spear</div> <br>"
  + "Back, Back, Low Punch<br><br>" 
  + "<div class='moveName'>Teleport Punch</div> <br>" 
  + "Down, Back, High Punch<br><br>" 
  + "<div class='moveName'>Air Throw</div> <br>" 
  + "Block<br>" 
  + "<i>Next to your opponent while in the air</i><br><br>"
  + "<div class='moveName'>Body Scissor Leg Sweep</div><br>" 
  + "Forward, Down, Back, Low Kick";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Fire Breath</div> <br>"
  + "Up, Up, High Punch <div class='distance'>(Sweep)</div><br>"
  + "<i>Press Down, Down, Up, Up, High Punch to add 'Toasty!'</i><br>"
  + "<i>Block can be used to avoid jumping</i><br><br>"
  + "<div class='moveName'>Fatality 2: Spear Slice</div> <br>"
  + "<i>(Hold High Punch)</i> Down, Forward, Forward, Forward"
  + " <i>(Release High Punch)</i>"
  + "<div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Friendship</div> <br>"
  + "Back, Back, Down, High Kick<br><br>" 
  + "<div class='moveName'>Babality</div> <br>"
  + "Down, Back, Back, High Kick<br><br>" 
  + "<div class='moveName'>Stage</div> <br>"
  + "Down, Forward, Forward, Block<br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>Upon learning of Sub-Zero's reappearance, Scorpion enters Shao Kahn's"
  + " tournament. He witnesses Sub-Zero spare the life of an opponent and"
  + " realises that this is not the same Sub-Zero who murdered him so long"
  + " ago. He lets the ninja live and goes on to defeat the Outworlders in"
  + " their unholy contest. With the defeat of Shao Kahn, he discovers a"
  + " new purpose for his existence. He becomes the guardian of the new"
  + " Sub-Zero to atone for murdering his older brother.</p>"; 
}
    
function mk2Raiden() { // MORTAL KOMBAT 2 - RAIDEN
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var raiden2 = document.getElementById("raiden2");
    raiden2.play();
  }

  document.getElementById("displayName").innerHTML = "Raiden";  
  document.getElementById("characterStance").src = "images/mk2/raiden.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Watching events unfold from high above, the thunder god realises the"
  + " grim intentions of Shao Kahn. After warning the remaining members of"
  + " the Shaolin Tournament, Raiden soon disappears. He is believed to"
  + " have ventured into the Outworld alone.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Lightning Toss</div><br>"
  + "Down, Forward, Low Punch<br><br>" 
  + "<div class='moveName'>Torpedo</div><br>" 
  + "Back, Back, Forward<br><br>" 
  + "<div class='moveName'>Teleport</div><br>" 
  + "Down, Up<br>" 
  + "<i>Can be done in air</i><br><br>"
  + "<div class='moveName'>Shock</div><br>" 
  + "<i>(Hold High Punch)</i> 5 Seconds </i>(Release High Punch)<br>" 
  + "<i>Keep tapping High Punch to prolong the move</i>"
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Electrocution</div> <br>"
  + "<i>(Hold Low Kick)</i> 3 Seconds <i>(Release Low Kick)</i>, Tap Kick +"
  + " Block repeatedly"
  + "<div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Fatality 2: Explosive Uppercut</div> <br>"
  + "<i>(Hold High Punch)</i> 5 Seconds <i>(Release High Punch)</i> <div "
  + "class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Friendship</div><br>"
  + "Down, Back, Forward, High Kick<br><br>" 
  + "<div class='moveName'>Babality</div><br>"
  + "Down, Down, Up, High Kick<br><br>" 
  + "<div class='moveName'>Stage</div><br>"
  + "Up, Up, Up, High Punch<br><br>";
  document.getElementById("ending").innerHTML = 
  "<p>Familiar with Shang Tsung's lies and Shao Kahn's brutality, Raiden"
  + " accepts their challenge to compete in an Outworld tournament. He is"
  + " well aware of their scheme to unbalance the furies and invade the"
  + " earth realm. Raiden vows to use all his might to end their treachery."
  + " By winning the tournament, Raiden destroys Shao Kahn and all his"
  + " minions. He also destroys the dimensional gates which would have been"
  + " their passageway to the earth realm.</p>"; 
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

  if (sound === 1) {
    var shangtsung3 = document.getElementById("shangtsung3");
    shangtsung3.play();
  }

  document.getElementById("displayName").innerHTML = "Shang Tsung";  
  document.getElementById("characterStance").src = "images/mk3/shangtsung.gif";
  document.getElementById("bio").innerHTML = 
  "Tsung is Shao Kahn's lead sorcerer. He once fell out of favor with his"
  + " emperor after failing to win the Earth Realm through tournament battle."
  + " But the ever scheming Shang Tsung is instrumental Kahn's conquest of"
  + " Earth He has now been granted more power than ever.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Flaming Skull</div> <br>"
  + "Back, Back, High Punch<br><br>" 
  + "<div class='moveName'>Two Flaming Skulls</div> <br>" 
  + "Back, Back, Forward, High Punch<br><br>" 
  + "<div class='moveName'>Three Flaming Skulls</div> <br>" 
  + "Back, Back, Forward, Forward, High Punch<br><br>" 
  + "<div class='moveName'>Ground Flaming Skulls</div> <br>" 
  + "Forward, Back, Back, Low Kick" 
  + "<h3>Morphs</h3>" /* Shang Tsung's Morph Section */
  + "<div class='moveName'>Sindel</div> <br>"
  + "Back, Down, Back, Low Kick <br><br>" 
  + "<div class='moveName'>Jax</div> <br>" 
  + "Forward, Forward, Down, Low Punch <br><br>" 
  + "<div class='moveName'>Kano</div> <br>" 
  + "Back, Forward, Block <br><br>" 
  + "<div class='moveName'>Sonya Blade</div> <br>" 
  + "Down + Run + Low Punch + Block <br><br>" 
  + "<div class='moveName'>Liu Kang</div> <br>" 
  + "Rotate D-Pad Counter Clockwise <br><br>" 
  + "<div class='moveName'>Stryker</div> <br>" 
  + "Forward, Forward, High Kick <br><br>" 
  + "<div class='moveName'>Sub-Zero</div> <br>" 
  + "Forward, Down, Forward, High Punch <br><br>" 
  + "<div class='moveName'>Cyrax</div> <br>" 
  + "Block, Block, Block <br><br>" 
  + "<div class='moveName'>Sektor</div> <br>" 
  + "Down, Forward, Back, Run <br><br>" 
  + "<div class='moveName'>Nightwolf</div> <br>" 
  + "Up, Up <br><br>" 
  + "<div class='moveName'>Sheeva</div> <br>" 
  + "Forward, Down, Forward, Low Kick <br><br>" 
  + "<div class='moveName'>Kung Lao</div> <br>" 
  + "Run, Run, Block, Run <br><br>" 
  + "<div class='moveName'>Kabal</div> <br>" 
  + "Low Punch, Block, High Kick <br><br>" 
  + "<div class='moveName'>Smoke</div> <br>" 
  + "Forward, Forward, Low Punch" 
  + "<h3>Combos</h3>" /* Shang Tsung's Combos */
  + "<div class='moveName'>4 Hits</div> <br>"
  + "High Punch, High Punch, Low Punch, Back + High Kick <br><br>" 
  + "<div class='moveName'>5 Hits</div> <br>" 
  + "Low Kick, High Punch, High Punch, Low Punch, Back + High Kick" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>Fatality 1: Soul Sucker</div> <br>"
  + "<i>(Hold Low Punch)</i> Run, Block, Run, Block <i>(Release Low Punch)</i> "
  + "<div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Fatality 2: Bed of Spikes</div> <br>"
  + "<i>(Hold Low Punch)</i> Down, Forward, Forward, Down <i>(Release Low"
  + " Punch)</i>"
  + "<div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Animality</div> <br>"
  + "<i>(Hold High Punch)</i> Run, Run, Run <i>(Release High Punch)</i> "
  + "<div class='distance'>(Close)</div><br><br>"
  + "<div class='moveName'>Friendship</div> <br>"
  + "Low Kick, Run, Run, Down <br><br>" 
  + "<div class='moveName'>Babality</div> <br>"
  + "Run, Run, Run, Low Kick <br><br>" 
  + "<div class='moveName'>Stage</div> <br>"
  + "Up, Up, Back, Low Punch";
  document.getElementById("ending").innerHTML = 
  "<p>When Shao Kahn overtakes the Earth, he needs Shang Tsung to help locate"
  + " the surviving humans.Granted new powers, Tsung soon discovers his dark"
  + " emperor's true plan: as soon as the remaining warriors are disposed of,"
  + " Kahn will take Tsung's own soul. After learning this, Tsung turns on"
  + " his master. He catches Motaro off guard and then defeats Shao Kahn. But"
  + " before the Earth can return to normal, Tsung takes all the souls as his"
  + " own. He will forever rule the Earth with his own brand of evil.</p>"; 
}

function mk3Sindel() { // MORTAL KOMBAT 3 - SINDEL
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var sindel3 = document.getElementById("sindel3");
    sindel3.play();
  }

  document.getElementById("displayName").innerHTML = "Sindel"; 
  document.getElementById("characterStance").src = "images/mk3/sindel.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>Sindel once ruled the Outworld at Shao Kahn's side as queen. Now 10,000"
  + " years later after her untimely death, she is reborn on Earth with evil"
  + " intentions. Sindel is the key to Kahn's occupation of Earth.";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Fireball</div> <br>"
  + "Forward, Forward, Low Punch<br><br>" 
  + "<div class='moveName'>Air Fireball</div> <br>" 
  + "Down, Forward, Low Kick <i>(In Air)</i> <br><br>" 
  + "<div class='moveName'>Sonic Scream</div> <br>" 
  + "Forward, Forward, Forward, High Punch <br><br>" 
  + "<div class='moveName'>Levitate</div> <br>" 
  + "Back, Back, Forward, High Kick<br>"
  + "<i>Press Block to Land</i><br><br>" 
  + "<h3>Combos</h3>" /* Sindel's Combos */
  + "<div class='moveName'>3 Hits</div> <br>" 
  + "High Punch, High Punch, Down + High Punch <br><br>" 
  + "<div class='moveName'>4 Hits</div> <br>" 
  + "High Punch, High Punch, High Punch, Down + High Punch <br><br>" 
  + "<div class='moveName'>5 Hits</div> <br>" 
  + "High Punch, High Punch, High Punch, Low Punch, High Kick <br><br>"
  + "<div class='moveName'>4 Hits</div> <br>" 
  + "High Punch, High Punch, Low Punch, High Kick <br><br>" 
  + "<div class='moveName'>3 Hits</div> <br>" 
  + "High Kick, High Kick, Back + High Kick" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY: Hair Spin</div> <br>"
  + "Run, Run, Block, Run, Block <div class='distance'>(Sweep)</div>"
  + "<br><br>"
  + "<div class='moveName'>FATALITY: Super Sonic Scream</div> <br>"
  + "Run, Block, Block, Run + Block <div class='distance'>(Close)</div>"
  + "<br><br>"
  + "<div class='moveName'>Animality</div> <br>"
  + "Forward, Forward, Up, High Punch <div class='distance'>(Close)</div>"
  + "<br><br>" 
  + "<div class='moveName'>Friendship</div> <br>"
  + "Run, Run, Run, Run, Run, Up <br><br>" 
  + "<div class='moveName'>Babality</div> <br>"
  + "Run, Run, Run, Up <br><br>" 
  + "<div class='moveName'>Stage</div> <br>"
  + "Down, Down, Down, Low Punch";
  document.getElementById("ending").innerHTML = 
  "<p>Sindel receives visions of her true past and turns against Shao Kahn. She"
  + " discovers that her true king was named Jerrod. They once had a daughter"
  + " named Kitana and ruled a realm called Edenia, before Kahn took it away in"
  + " their own Mortal Kombat. He uses Sindel as a pawn in his quest for Earth"
  + " and took Kitana as his own daughter. But in defeating Shao Kahn, Sindel"
  + " frees the Earth. In doing so, she also liberates Edenia and assures a"
  + " reunion with her 10,000 year old daughter - Kitana.</p>"; 
}

function mk3Jax() { // MORTAL KOMBAT 3 - JAX
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var jax3 = document.getElementById("jax3");
    jax3.play();
  }

  document.getElementById("displayName").innerHTML = "Jax";  
  document.getElementById("characterStance").src = "images/mk3/jax.gif";
  document.getElementById("bio").innerHTML = 
  "<p>After failing to convince his superiors of the coming Outworld invasion,"
  + "Jax prepares to covertly for the future battle with Kahn's minions. He"
  + " fits both arms with indestructible bionic implants. This is a war Jax is"
  + " prepared to win.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Missle</div> <br>"
  + "Back, Forward, High Punch <br><br>" 
  + "<div class='moveName'>Double Missil</div> <br>" 
  + "Forward, Forward, Back, Back, High Punch <br><br>" 
  + "<div class='moveName'>Gotcha Grab</div> <br>" 
  + "Forward, Forward, Low Punch <br>"
  + "<i>Keep Pressing Low Punch to Add Punches</i><br><br>" 
  + "<div class='moveName'>Dash Punch</div> <br>" 
  + "Forward, Forward, Low Kick <br><br>" 
  + "<div class='moveName'>Ground Pound</div> <br>" 
  + "<i>(Hold Low Punch)</i> 3 Seconds <i>(Release Low Punch)</i><br><br>" 
  + "<div class='moveName'>Body Slam</div> <br>" 
  + "Throw, then tap High Punch repeatedly to add Slams <br><br>" 
  + "<div class='moveName'>Back Breaker</div> <br>" 
  + "Block <i>(While in air near opponent)</i> <br><br>" 
  + "<h3>Combos</h3>" /* Jax's Combos */
  + "<div class='moveName'>3 Hits</div> <br>" 
  + "High Kick, High Kick, Back + High Kick <br><br>" 
  + "<div class='moveName'>5 Hits</div> <br>" 
  + "High Punch, High Punch, Block, Low Punch, Back + High Punch <br><br>" 
  + "<div class='moveName'>7 Hits</div> <br>" 
  + "High Kick, High Kick, Down + High Punch, High Punch, Block, Low Punch,"
  + " Back + High Punch <br><br>";
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "<i>(Hold Block)</i> Up, Down, Forward, Up <i>(Release Block)</i>"
  + "<div class='distance'> (Close)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "Run, Block, Run, Run, Low Kick" 
  + "<div class='distance'> (Full Screen)</div><br><br>"
  + "<div class='moveName'>Animality</div> <br>"
  + "<i>(Hold Low Punch)</i> Forward, Forward, Down, Forward <i>(Release Low" 
  + " Punch)</i> <div class='distance'>(Close)</div><br><br>" 
  + "<div class='moveName'>Friendship</div> <br>"
  + "Low Kick, Run, Run, Low Kick <br><br>" 
  + "<div class='moveName'>Babality</div> <br>"
  + "Down, Down, Down, Low Kick <br><br>" 
  + "<div class='moveName'>Stage</div> <br>"
  + "Down, Forward, Down, Low Punch <br><br>";
  document.getElementById("ending").innerHTML = 
  "<p>The second time Jax battles the forces of Shao Kahn he comes prepared."
  + " Thought to be the strongest man on Earth, he has no problem proving it:"
  + " First by beating Kahn's armies and then by defeating the Emperor himself." 
  + " When the world reverts back to normal, Jax and Sonya start the Outerworld"
  + " Investigation Agency. Jax runs the exploratory division which learns to"
  + " open portals through science rather than magic. He leads the first"
  + " expedition into a mysterious new realm.</p>"; 
}

function mk3Kano() { // MORTAL KOMBAT 3 - KANO
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var kano3 = document.getElementById("kano3");
    kano3.play();
  }

  document.getElementById("displayName").innerHTML = "Kano"; 
  document.getElementById("characterStance").src = "images/mk3/kano.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>Kano was thought to have been killed in the first tournament. Instead,"
  + " he is found alive in the Outworld where he again escapes capture by"
  + " Sonya. Before the actual Outworld invasion, Kano convinces Kahn to"
  + " spare his soul. Kahn needs someone to teach his warriors how to use"
  + " Earth's weapons... Kano is the man to do it.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Knife Throw</div> <br>"
  + "Down, Back, High Punch <br><br>" 
  + "<div class='moveName'>Knife Uppercut</div> <br>" 
  + "Down, Forward, High Punch <br><br>" 
  + "<div class='moveName'>Cannonball</div> <br>" 
  + "<i>(Hold Low Kick)</i> 3 Seconds <i>(Release Low Kick)</i> <br><br>" 
  + "<div class='moveName'>Strangle</div> <br>" 
  + "Down, Forward, Low Punch <br><br>" 
  + "<div class='moveName'>Air Throw</div> <br>" 
  + "Block <i>(While in air near opponent) <br><br>" 
  + "<h3>Combo</h3>" /* Kano's Combos */
  + "<div class='moveName'>4 Hits</div> <br>" 
  + "High Punch, High Punch, Down + Low Punch, Down + High Punch <br><br>" 
  + "<div class='moveName'>3 Hits</div> <br>" 
  + "High Punch, High Punch, Back + Low Punch <br><br>" 
  + "<div class='moveName'>2 Hits</div> <br>" 
  + "Low Kick, Low Punch <br><br>"
  + "<div class='moveName'>3 Hits</div> <br>" 
  + "Low Kick, Down + Low Punch + Down + High Punch <br><br>" 
  + "<div class='moveName'>4 Hits</div> <br>" 
  + "High Kick, High Kick, Low Kick, Back + High Kick <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
/*
Fatality 1: Hold LP, F, D, D, F, release LP (close)
Fatality 2: LP, BL, BL, HK (sweep)
Animality: Hold HP, BL, BL, BL, release HP (close)
Babality: F, F, D, D, LK
Friendship: LK, R, R, HK (outside sweep)
Stage: Up, Up, B, LK
*/
  "<div class='moveName'>FATALITY</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>When Shao Kahn lets Kano live he fails to realize the resourcefulness"
  + " of the scheming human. Kano lures Kahn's armies away on a false mission:"
  + " then nukes them using a stolen weapon. He fights the remaining warriors"
  + " and finally defeats Kahn himself. Kano's true intention is to take over"
  + " the souls which Kahn once possessed. But Kano is unable to control the"
  + " spirits as they escape and attack him. Rumored to have suffered a violent"
  + " death, Kano was ignorant of the fact that he saved the world he tried to"
  + " conquer.</p>"; 
}

function mk3LiuKang() { // MORTAL KOMBAT 3 - LIU KANG
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var liukang3 = document.getElementById("liukang3");
    liukang3.play();
  }

  document.getElementById("displayName").innerHTML = "Liu Kang";  
  document.getElementById("characterStance").src = "images/mk3/liukang.gif";
  document.getElementById("bio").innerHTML = 
  "<p>After the Outworld invasion, Liu Kang finds himself the prime target of"
  + " Kahn's extermination squads. He is the Shaolin Champion and has thwarted"
  + " Kahn's schemes in the past. Of all the humans, Kang poses the greatest"
  + " threat to Shao Kahn's rule.</p>";
  document.getElementById("specialMoves").innerHTML = 
  /*
High Fireball: F, F, HP - can be done in air too
Low Fireball: F, F, LP
Flying Kick: F, F, HK
Bicycle Kick: Hold LK for 3 seconds, then release
LK, LK, HK, LK (25%)
HP, LK, LK, HK, B+ HK (28%)
HP, HP, BL, LK, LK, HK, B + LK (36%)
Jump Kick, High Fireball, Flying Kick (28%)
  */
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Liu Kang's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  /*
Fatality 1: F, F, D, D, LK
Fatality 2: hold BL, Up, D, Up, Up, release BL, BL + R
Animality: D, D, Up (sweep)
Babality: D, D, D, HK
Friendship: R, R, R, D + R
Stage: R, BL, BL, LK
  */
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Liu Kang's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("ending").innerHTML = 
  "<p>After thwarting Shao Kahn in the past, Liu Kang finds himself the prime"
  + " target of Shao Kahn's extermination squads. But Kang is the reigning Mortal"
  + " Kombat champion and proves it by easily defeating Kahn's minions. But it's"
  + " the apparent death of his friend Kung Lao that enrages Kang and enables him"
  + " to find the strength to defeat Shao Kahn. Then, before the portal closes,"
  + " Liu Kang is greeted by Princess Kitana and thanked for saving the Earth and"
  + " the Outworld.</p>"; 
}

function mk3SonyaBlade() { // MORTAL KOMBAT 3 - SONYA BLADE
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var sonyablade3 = document.getElementById("sonyablade3");
    sonyablade3.play();
  }

  document.getElementById("displayName").innerHTML = "Sonya Blade";
  document.getElementById("characterStance").src = "images/mk3/sonyablade.gif";  
  document.getElementById("bio").innerHTML = 
  "<p>Sonya disappears in the first tournament, but is later rescued by Jax."
  + " After returning to Earth, she and Jax try to warn the U.S government"
  + " of the looming Outworld menace. Lacking proof, they watch helplessly"
  + " as Shao Kahn begins his invasion.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Energy Rings</div> <br>"
  + "Down, Left, Low Punch <br><br>" 
  + "<div class='moveName'>Flying Punch</div> <br>" 
  + "Forward, Back, High Punch <br><br>" 
  + "<div class='moveName'>Leg Grab</div> <br>" 
  + "Down + Low Punch + Block <br><br>" 
  + "<div class='moveName'>Diagonal Bicycle Kick</div> <br>" 
  + "Back, Back, Down, High Kick <br><br>" 
  + "<h3>Combos</h3>" /* Sonya Blade's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>Sonya defeats her arch-enemy Kano high atop a skyscraper near Shao Kahn's"
  + " fortress. She then comes face to face with the emperor himself. In an"
  + " incredible display of courage, Sonya wins. When the world returns to its"
  + " normal state, Sonya has no trouble convincing her superiors to form the"
  + " Outerworld Investigation Agency, devoted to protecting the Earth against"
  + " possible future invasions from other realms.</p>"; 
}

function mk3Stryker() { // MORTAL KOMBAT 3 - STRYKER
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var stryker3 = document.getElementById("stryker3");
    stryker3.play();
  }

  document.getElementById("displayName").innerHTML = "Stryker";
  document.getElementById("characterStance").src = "images/mk3/stryker.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>When the Outworld portal opens over a large city in North America, panic"
  + " and chaos rage out of control. Kurtis Stryker was the leader of the Riot"
  + " Control Brigade when Shao Kahn began taking souls. He finds himself the"
  + "lone survivor of a city once populated by millions.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>High Grenade</div> <br>"
  + "Down, Back, High Punch <br><br>" 
  + "<div class='moveName'>Low Grenade</div> <br>" 
  + "Down, Back, Low Punch <br><br>" 
  + "<div class='moveName'>Baton Throw</div> <br>" 
  + "Forward, Forward, High Kick <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "Forward, Back, Low Punch <br><br>"  
  + "<h3>Combos</h3>" /* Stryker's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>Ignorant of why his soul was spared from the Outworld invasion, Stryker"
  + " receives a vision from Raiden. He is instructed to travel west. He"
  + " eventually meets the rest of Earth's warriors and learns the true meaning"
  + " of his survival. He travels back to the city he swore to protect. Kahn is"
  + " unfamiliar with this new kombatant and is caught off guard. Stryker"
  + " defeats the warlord and saves the entire planet. The chaos that consumed"
  + " the city in the hours before the invasion are gone.</p>"; 
}

function mk3SubZero() { // MORTAL KOMBAT 3 - SUB-ZERO
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var subzero3 = document.getElementById("subzero3");
    subzero3.play();
  }

  document.getElementById("displayName").innerHTML = "Sub-Zero"; 
  document.getElementById("characterStance").src = "images/mk3/subzero.gif"; 
  document.getElementById("bio").innerHTML = 
  "<p>The ninja returns- unmasked. Betrayed by his own clan, the Lin Kuei, he"
  + " broke sacred codes of honor by leaving his clan and is marked for death."
  + " But unlike the ninja of old, his pursuers comes as machines. He must not"
  + " only defend himself against the Outworld menace, but he must also elude"
  + " his soulless assassins.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Deep Freeze</div> <br>"
  + "Down, Forward, Low Punch <br><br>" 
  + "<div class='moveName'>Ice Clone</div> <br>" 
  + "Down, Back, Low Punch <br>"
  + "<i>(Can Be Done In Air)</i><br><br>" 
  + "<div class='moveName'>Slide</div> <br>" 
  + "Back + Low Punch + Low Kick + Block <br><br>" 
  + "<div class='moveName'>Ice Shower (Front)</div> <br>" 
  + "Down, Forward, Back, High Punch <br><br>" 
  + "<div class='moveName'>Ice Shower (Over)</div> <br>" 
  + "Down, Forward, High Punch <br><br>" 
  + "<div class='moveName'>Ice Shower (Behind)</div> <br>" 
  + "Down, Back, Foward, High Punch <br><br>" 
  + "<h3>Combos</h3>" /* Sub-Zero's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>In vicious battle, Sub-Zero faces Cyrax and Sektor: but not alone. He"
  + " finds his third Lin Kuei assassin - the elusive Smoke. Before automation,"
  + " Smoke and Sub-Zero were allies. Sub-Zero helps Smoke recall his past and" 
  + " gains him as an ally once again. Sub-Zero defeats his cyborg assassins with"
  + " the help of Smoke and finds it takes all of his own inner strengths to"
  + " defeat Kahn and his Outworld minions. The former ninja once again disappears"
  + " into the shadows, his legacy known only by a select few.</p>"; 
}

function mk3Cyrax() { // MORTAL KOMBAT 3 - CYRAX
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var cyrax3 = document.getElementById("cyrax3");
    cyrax3.play();
  }

  document.getElementById("displayName").innerHTML = "Cyrax";  
  document.getElementById("characterStance").src = "images/mk3/cyrax.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Cyrax is unit LK-4D4, The second of three prototype Cybernetic Ninjas"
  + " built by the Lin Kuei. Like his counterparts, his last program is to"
  + " find and terminate the rouge ninja Sub-Zero. Without a soul, Cyrax goes"
  + " undetected by Shao Kahn and remains a possible threat against his"
  + " occupation of Earth.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Cyrax's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>Cyrax is captured by Sub-Zero and reprogrammed with new orders: to destroy"
  + " Shao Kahn. With Kahn unable to detect his assassin's souless presence,"
  + " Cyrax delivers a successful sneak attack. However, after eliminating Kahn"
  + " and saving Earth, Cyrax awaits new orders from his Lin Kuei headquarters."
  + " The orders never come and Cyrax malfunctions. He ends up stranded in the"
  + " middle of a vast desert, blindly heading toward his base.</p>"; 
}

function mk3Sektor() { // MORTAL KOMBAT 3 - SEKTOR
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var sektor3 = document.getElementById("sektor3");
    sektor3.play();
  }

  document.getElementById("displayName").innerHTML = "Sektor";  
  document.getElementById("characterStance").src = "images/mk3/sektor.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Sektor is actually the code name for unit LK-9T9. He was the first of"
  + " three prototype cybernetic ninjas built by the Lin Kuei. Sektor was once"
  + " a human assassin trained by the by the Lin Kuei. He volunteered for"
  + " automation because of his loyalty to the Outworld invasion because he has"
  + " no soul to take.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Sektor's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>After eventually terminating Sub-Zero, Sektor is attacked by Shao Kahn's"
  + " army. Unfamiliar with the Outworld warriors, Sektor fights back. He targets"
  + " Kahn and all Outworld beings as threats to the Lin Kuei. Kahn's minions are"
  + " no match for Sektor, who fights his way into the fortress. Once inside,"
  + " Sektor initiates his self-destruct sequence. The resulting explosion is so"
  + " massive that it closes the portal and returns Earth back to normal.</p>"; 
}

function mk3Nightwolf() { // MORTAL KOMBAT 3 - NIGHTWOLF
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var nightwolf3 = document.getElementById("nightwolf3");
    nightwolf3.play();
  }

  document.getElementById("displayName").innerHTML = "Nightwolf";  
  document.getElementById("characterStance").src = "images/mk3/nightwolf.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Nightwolf works as a historian and preserver of his peoples culture. When"
  + " Kahn's portal opens over North America, Nightwolf uses the magic of his"
  + " Shamen to protect his tribes sacred land. This area becomes a vital threat"
  + " to Kahn's occupation of Earth.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Nightwolf's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>Nightwolf helps the other Earth warriors escape to his sacred land. Once"
  + " there, they regroup and plan a form of attack against Shao Kahn's"
  + " invasion. Nightwolf has trained hard for this battle. Finally, he faces"
  + " Shao Kahn and emerges victorious. When the Earth returns to its normal"
  + " state, Nightwolf peacefully regains his land his Native-American people"
  + " lost over many years. They establish their own proud nation and soon"
  + " become the great leaders of Earth.</p>"; 
}

function mk3Sheeva() { // MORTAL KOMBAT 3 - SHEEVA
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var sheeva3 = document.getElementById("sheeva3");
    sheeva3.play();
  }

  document.getElementById("displayName").innerHTML = "Sheeva";  
  document.getElementById("characterStance").src = "images/mk3/sheeva.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Sheeva was hand picked by Shao Kahn to serve as Sindel's personal"
  + " protector. She becomes suspicious of Shao Kahn's loyalty toward her race"
  + " of Shokan when he places Motaro as the head of his extermination squads."
  + " On the Outworld, Motaro's race of Centurions is the natural enemy of the"
  + " Shokan.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Sheeva's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>While Sheeva serves her master on Earth, her race of Shokan are being"
  + " punished on the Outworld. Kahn now favors Motaro's race of centaurs and"
  + " aids them in defeating the Shokan. After learning of these events, Sheeva"
  + " turns on her master. She defeats Motaro and in a rage brings down Kahn."
  + " In freeing the Earth, she also frees the Outworld. She then returns home"
  + " and works to restore the pride and respect of her race.</p>"; 
}

function mk3KungLao() { // MORTAL KOMBAT 3 - KUNG LAO
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var kunglao3 = document.getElementById("kunglao3");
    kunglao3.play();
  }

  document.getElementById("displayName").innerHTML = "Kung Lao";  
  document.getElementById("characterStance").src = "images/mk3/kunglao.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Kung Lao's plan to reform the White Lotus Society comes to a halt when"
  + " Shao Kahn's invasion takes the Earth by storm. As a chosen warrior, Kung"
  + " Lao must use his greatest fighting skills to bring down Shao Kahn's reign"
  + " of terror.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Kung Lao's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>When Shao Kahn invades Earth, Kung Lao must scrap his plans of reuniting the"
  + " White Lotus Society. He instead must focus on the new tournament. He seeks"
  + " Liu Kang and together they battle Kahn's forces fearlessly. Using the"
  + " knowledge he obtained as a Shaolin monk he fights in the name of his great"
  + " ancestor - the original Kung Lao. He emerges victorious but suffers from"
  + " injuries during battle with Kahn. Believed to have passed away, Kung Lao"
  + " joins his ancestors in a new life.</p>"; 
}

function mk3Kabal() { // MORTAL KOMBAT 3 - KABAL
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var kabal3 = document.getElementById("kabal3");
    kabal3.play();
  }

  document.getElementById("displayName").innerHTML = "Kabal";  
  document.getElementById("characterStance").src = "images/mk3/kabal.gif";
  document.getElementById("bio").innerHTML = 
  "<p>As a chosen warrior, his identity is a mystery to all. It is believed he"
  + " is a survivor of a attack by Shao Kahn's extermination squads. As a"
  + " result, he is viciously scarred, kept alive by artificial respirators and"
  + " a rage for ending Shao Kahn's conquest.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>MOVE</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<h3>Combos</h3>" /* Kabal's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>After returning from near death, Kabal swears revenge against his attackers."
  + " He fights alongside the other Earth warriors. When he defeats Motaro and"
  + " the mighty Shao Kahn he proves that he truly is the chosen one. Before the"
  + " invasion, Kabal lived a life of crime. He was once a member of the Black"
  + " Dragon along with Kano. Now Kabal devotes his life to fighting injustice."
  + " He will give crime's inner circles a new reason to fear.</p>"; 
}

function mk3Smoke() { // MORTAL KOMBAT 3 - SMOKE
  hideEnding();
  clearAllButMoves();

  if (sound === 1) {
    var smoke3 = document.getElementById("smoke3");
    smoke3.play();
  }

  document.getElementById("displayName").innerHTML = "Smoke";  
  document.getElementById("characterStance").src = "images/mk3/smoke.gif";
  document.getElementById("bio").innerHTML = 
  "<p>Smoke, unit LK-7T2, is the third prototype cyber-ninja built by the Lin"
  + " Kuei. He tried to escape the automation process with Sub-Zero but was"
  + " captured. His memories were stripped away, leaving behind an emotionless"
  + " killer. However, Sub-Zero believes that within this machine is a human"
  + " soul trying to escape.</p>";
  document.getElementById("specialMoves").innerHTML = 
  "<div class='moveName'>Spear Throw</div> <br>"
  + "Back, Back, Low Punch <br><br>" 
  + "<div class='moveName'>Teleport Uppercut</div> <br>" 
  + "Forward, Forward, Low Kick <br><br>" 
  + "<div class='moveName'>Air Throw</div> <br>" 
  + "Block <i>(While in air near opponent)</i> <br><br>" 
  + "<div class='moveName'>Invisibility</div> <br>" 
  + "Up, Up, Run <br><br>"  
  + "<h3>Combos</h3>" /* Smoke's Combos */
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>MOVE</div> <br>" 
  + "BUTTONENTRY <br><br>" 
  document.getElementById("finishingMoves").innerHTML = 
  "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>FATALITY:</div> <br>"
  + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
  + "<div class='moveName'>Animality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Friendship:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Babality:</div> <br>"
  + "BUTTONENTRY <br><br>" 
  + "<div class='moveName'>Stage:</div> <br>"
  + "BUTTONENTRY <br><br>" ;
  document.getElementById("ending").innerHTML = 
  "<p>Smoke was once a friend and ally of Sub-Zero when they both tried to escape"
  + " from being turned into machines by their ninja clan. But Smoke is captured"
  + " and transformed into a cyborg with a mission to find and kill his own"
  + " partner. But Smoke soon finds himself being persued by Shao Khan's minions."
  + " He learns he still has a soul and his true mission is the destruction of"
  + " the Outworld invaders. He defeats Kahn and saves the world, but is forever"
  + " trapped in his artificial body.</p>"; 
}

function showEnding() {
  document.getElementById("ending").style.display = "block";
}

function hideEnding() {
    document.getElementById("ending").style.display = "none";
}