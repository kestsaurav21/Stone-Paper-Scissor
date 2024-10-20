const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");

const closeRule = document.getElementById("rules");
const rulesBtn = document.getElementById("show-rules-btn");
const ruleBox =  document.querySelector("#rule-box");

const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");

const beforeStart = document.querySelector("#beforeStart");
const afterResult = document.querySelector("#afterResult");

const resultText = document.querySelector("#result-text");
const playAgain = document.querySelector("#playAgain");
const nextBtn = document.querySelector("#next-btn")

const header = document.querySelector("header")
const playground = document.querySelector("#playground");
const resultpage = document.querySelector("#result-page");
const playAgainBtn = document.querySelector("#playAgainBtn");

const congratmsg = document.querySelector("#congrat-msg");
const resultmsg = document.querySelector("#result-msg");

const choiceOfUser = document.querySelector("#userChoice");
const choiceOfComputer = document.querySelector("#computerChoice")

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";


const ROCKCHOICE = `
                  <div class="circle rock" id="rock">
                    <img src="/assests/rock-icon.png" alt="rock-icon">
                  </div>`;
const PAPERCHOICE = `
                    <div class="circle paper" id="paper">
                      <img src="/assests/paper-icon.png" alt="paper-icon">
                    </div>`;

const SCISSORCHOICE = `
                      <div class="circle scissor" id="scissor">
                          <img src="/assests/scissor-icon.png" alt="scissor-icon" >
                      </div>`;





function getUserChoice(event) {
  if (event.target.tagName === "DIV") {
    return event.target.id;
  } else {
    return event.target.parentNode.id;
  }
}

function getComputerChoice() {
  const computerChoices = [ROCK, PAPER, SCISSOR];

  const idx = Math.floor(Math.random() * 3);

  return computerChoices[idx];
}

//----- Game Start ------

function startGame() {
  const userChoice = getUserChoice(event);
  const computerChoice = getComputerChoice();

  beforeStart.style.display = "none";
  afterResult.style.display = "flex";

  const winner = gameResult(userChoice, computerChoice);

  playAgain.addEventListener('click', function play() {
    afterResult.style.display = 'none';
    beforeStart.style.display = 'block';
  })

  closeRule.addEventListener("click", () => {
    ruleBox.style.display = 'none';
  });
  rulesBtn.addEventListener("click", () => {
    ruleBox.style.display = 'block';
  });






  if (winner === 0) {
    resultText.innerText = "TIE UP";
    playAgain.innerText = 'REPLAY';

    nextBtn.style.display = 'none';
    rulesBtn.style.right = '60px'
    ruleBox.style.display = 'none';
   

  } else if (winner === 1) {
    userScore.innerText = parseInt(userScore.innerText) + 1;
    resultText.innerText = "YOU WIN AGAINST PC";
    nextBtn.style.display = 'block';
    rulesBtn.style.right = '220px'
    ruleBox.style.display = 'none';
    playAgain.innerHTML = 'PLAY AGAIN'


    nextBtn.addEventListener('click', () => {
      header.style.display = 'none';
      playground.style.display = 'none';
      resultpage.style.display = 'block';
      nextBtn.style.display = 'none';
      rulesBtn.style.right = '60px'
      resultpage.style.display = 'block';
      if(parseInt(userScore.innerText) < parseInt(computerScore.innerText)){ 
        congratmsg.innerText = 'SORRY!!';
        resultmsg.innerText = 'YOU LOST THE GAME';
      }else{
        congratmsg.innerText = 'HURRY!!';
        resultmsg.innerText = 'YOU WON THE GAME';
      }
    })

    playAgainBtn.addEventListener('click', () => {
      resultpage.style.display = 'none';
      header.style.display = 'flex';
      playground.style.display = 'block';
      beforeStart.style.display = 'block';
      afterResult.style.display = 'none';
      userScore.innerText = '0';
      computerScore.innerText = '0';

    })

  } else {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    resultText.innerText = "YOU LOST AGAINST PC";
    playAgain.innerHTML = 'PLAY AGAIN'

    nextBtn.style.display = 'none';
    showrules.style.right = '60px';

    ruleBox.style.display = 'none';
    
    

  }
  
}

function gameResult(user, computer) {
  if (user == computer) return 0;
  if (
    (user === ROCK && computer === SCISSOR) ||
    (user === PAPER && computer === ROCK) ||
    (user === SCISSOR && computer === PAPER)
  ) {
    return 1;
  } else {
    return -1;
  }
}




// ------- Initial setup --------

function initialSetup() {
  rockChoice.addEventListener("click", startGame);
  paperChoice.addEventListener("click", startGame);
  scissorChoice.addEventListener("click", startGame);

  closeRule.addEventListener("click", () => {
    ruleBox.style.display = 'none';
  });
  rulesBtn.addEventListener("click", () => {
    ruleBox.style.display = 'block';
  });
}

initialSetup();
