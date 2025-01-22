
const choices = ["Scissors","Spock","Paper","Lizard" ,"Rock"];
let isDraw = false;

// Rules 
var gameRuleBg = document.getElementById("gameRuleBg");
var rulesButton = document.getElementById("rulesButton");
var span = document.getElementById("close");
let ContainerBody = document.getElementById("ContainerBody");
let result = 0;

rulesButton.onclick = function() {
  gameRuleBg.style.display = "block";
}
span.onclick = function() {
  gameRuleBg.style.display = "none";
}


function userChoice(id) {
ContainerBody.innerHTML = `
<div class="choiceSection">
  <div class="header">
      <div>YOU PICKED</div>
      <div>THE HOUSE PICKED</div>
      </div>
  <div class="choices">
    <div class="userChoice">
    <div class="choiceAfterChoose" id="${id}" >
    <img class="iconafterChoose" src="images/icon-${id}.svg">
    </div>
</div>
<div class="ComputerChoice">
  <div class="beforComputerChoice"></div>
  </div>
  </div>
  </div>
`;

randomchoice = Math.floor((Math.random() *choices.length));
setTimeout(function () {
ContainerBody.innerHTML = `
      <div class="choiceSection">
          <div class="header"> 
              <div>YOU PICKED</div>
              <div>THE HOUSE PICKED</div>
          </div>
          <div class="choices">
              <div class="userChoice">
                  <div class="choiceAfterChoose" id="${id}">
                  <img class="iconafterChoose" src="images/icon-${id}.svg" >
                  </div>
              </div>
              <div class="ComputerChoice">
                  <div id="${choices[randomchoice]}" class="choiceAfterChoose">
                  <img class="iconafterChoose" src="images/icon-${choices[randomchoice]}.svg" >
                  </div>
              </div>
          </div>
        </div>
      `;
    }, 1000);
  
    playGame(id,randomchoice);


  }
  

function playGame  (id,randomchoice)
{
   isWin = false;
  isDraw = false;

  if (id === choices[randomchoice]) {
    isDraw = true;
  }
 else  if
  (id=="Scissors"&&(choices[randomchoice]==="Paper"||choices[randomchoice]==="Lizard") ||
    (id=="Paper"&&(choices[randomchoice]==="Spock"||choices[randomchoice]==="Rock"))||
    ( id=="Rock"&&(choices[randomchoice]==="Scissors"||choices[randomchoice]==="Lizard"))||
    (id=="Lizard"&&(choices[randomchoice]==="Spock"||choices[randomchoice]==="Paper"))||
  (id=="Spock"&&(choices[randomchoice]==="Scissors"||choices[randomchoice]==="Rock")) )
  {
  isWin=true;

setTimeout (document.getElementById("result").innerText=(++result),4000 )
}
  else{
        isWin =false
  }
    
  setTimeout(function () {
    ContainerBody.innerHTML = `
      <div class="choiceSectionwithResult">
        <div class="header"> 
            <div>YOU PICKED</div>
            <div>THE HOUSE PICKED</div>
        </div>
          <div class="choices">
            <div class="userChoice">
                <div class="choiceAfterChoose" id="${id}">
                <img class="iconafterChoose" src="images/icon-${id}.svg" >
                </div>
            </div>
              <div class= "center">
                  <div class=result> 
                  <span > ${isWin ? "YOU WIN" : isDraw?"IT'S A TIE":"YOU LOSE" }</span>
                  <button class=playagain  onclick="playAgain()">play again  </button>
                  </div> 
                  </div> 
                <div class="ComputerChoice">
                    <div id="${choices[randomchoice]}" class="choiceAfterChoose">
                    <img class="iconafterChoose" src="images/icon-${choices[randomchoice]}.svg">
                    </div>

                </div>
          </div>
    </div>`


    }, 2000);
    

}

function playAgain() {
    ContainerBody.innerHTML = `
            <div class="choice ScissorsPosition"  id="Scissors"onclick="userChoice(id)">
                      <img  class="icon"src="images/icon-scissors.svg" > 
                </div>
              <img  src="images/bg-pentagon.svg" alt="" >
                    <div class="choice SpockPosition" id="SpocK" onclick="userChoice(id)" >
                        <img class="icon" src="images/icon-spock.svg" >
                  </div>
                      <div class="choice PaperPosition"id="Paper" onclick="userChoice(id)">
                        <img class="icon" src="images/icon-paper.svg" >
                  </div>
                <div class="third">
                    <div class="choice LizardPosition"id="Lizard" onclick="userChoice(id)">
                        <img class="icon" src="images/icon-lizard.svg" >
                    </div>
                        <div class="choice RockPosition " id="Rock" onclick="userChoice(id)"> 
                        <img class="icon" src="images/icon-rock.svg" >
                    </div>
                </div>
    `;

  }
