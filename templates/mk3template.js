function mk3Character() { // MORTAL KOMBAT 3 - CHARACTER
    hideEnding();
    clearAllButMoves();
  
    document.getElementById("displayName").innerHTML = "";  
    document.getElementById("bio").innerHTML = 
    "story";
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
    + "BUTTONENTRY" 
    + "<h3>Combos</h3>"
    + "<div class='moveName'>MOVE</div> <br>"
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>MOVE</div> <br>" 
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>MOVE</div> <br>" 
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>MOVE</div> <br>" 
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>MOVE</div> <br>" 
    + "BUTTONENTRY" 
    document.getElementById("finishingMoves").innerHTML = 
    "<div class='moveName'>Fatality 1: </div> <br>"
    + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
    + "<div class='moveName'>Fatality 2: </div> <br>"
    + "BUTTONENTRY <div class='distance'>(DISTANCE)</div><br><br>"
    + "<div class='moveName'>Animality</div> <br>"
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>Friendship</div> <br>"
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>Babality</div> <br>"
    + "BUTTONENTRY <br><br>" 
    + "<div class='moveName'>Stage</div> <br>"
    + "BUTTONENTRY <br><br>";
    document.getElementById("ending").innerHTML = 
    "Ending"; 
}