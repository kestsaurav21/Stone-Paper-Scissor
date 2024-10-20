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

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";



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


function startGame() {
  const userChoice = getUserChoice(event);
  const computerChoice = getComputerChoice();
  // console.log("user: ",userChoice);
  // console.log("computer: ",computerChoice);

  const winner = gameResult(userChoice, computerChoice);

  beforeStart.style.display = "none";
  afterResult.style.display = "flex";


  if (winner === 0) {
    resultText.innerText = "TIE UP";
    playAgain.innerText = 'REPLAY';

    playAgain.addEventListener('click', function play() {
      afterResult.style.display = 'none';
      beforeStart.style.display = 'block';
    })

    nextBtn.style.display = 'none';
    rulesBtn.style.right = '60px'
    ruleBox.style.display = 'none';
   

  } else if (winner === 1) {
    userScore.innerText = parseInt(userScore.innerText) + 1;
    resultText.innerText = "YOU WIN AGAINST PC";
    nextBtn.style.display = 'block';
    rulesBtn.style.right = '220px'
    ruleBox.style.display = 'none';

    playAgain.addEventListener('click', function play() {
      afterResult.style.display = 'none';
      beforeStart.style.display = 'block';
    })

    nextBtn.addEventListener('click', () => {
      header.style.display = 'none';
      playground.style.display = 'none';
      resultpage.style.display = 'block';
      nextBtn.style.display = 'none';
      rulesBtn.style.right = '60px'
      resultpage.style.display = 'block';
    })

    playAgainBtn.addEventListener('click', () => {
      resultpage.style.display = 'none';
      header.style.display = 'flex';
      playground.style.display = 'block';
      beforeStart.style.display = 'block';
      afterResult.style.display = 'none';
    })

  } else {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    resultText.innerText = "YOU LOST AGAINST PC";

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

function handleRule() {
  document.getElementById("rules-container").style.display = "none";
  closeRule.style.display = "none";
}

function initialSetup() {
  rockChoice.addEventListener("click", startGame);
  paperChoice.addEventListener("click", startGame);
  scissorChoice.addEventListener("click", startGame);

  closeRule.addEventListener("click", handleRule);
  showrules.addEventListener("click", () => {
    document.getElementById("rules-container").style.display = "block";
    closeRule.style.display = "flex";
  });
}

initialSetup();
