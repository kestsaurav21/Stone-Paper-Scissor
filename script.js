//DOM Elements
const choices = document.querySelectorAll(".choice");

const closeRule = document.getElementById("close-rules");
const rulesBtn = document.getElementById("show-rules-btn");
const ruleBox = document.querySelector("#rule-box");

const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");

const beforeStart = document.querySelector("#beforeStart");
const afterResult = document.querySelector("#afterResult");

const resultText = document.querySelector("#result-text");
const playAgain = document.querySelector("#playAgain");
const nextBtn = document.querySelector("#next-btn");

const header = document.querySelector("header");
const playground = document.querySelector(".playground");
const resultpage = document.querySelector("#result-page");
const playAgainBtn = document.querySelector("#playAgainBtn");

const congratmsg = document.querySelector("#congrat-msg");
const resultmsg = document.querySelector("#result-msg");

const choiceOfUser = document.querySelector("#userChoice");
const choiceOfComputer = document.querySelector("#computerChoice");

//Game Constants
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const CHOICES = [ROCK, PAPER, SCISSOR];

//------------ Utility Functions ---------------

//Function to get User Choice
function getUserChoice(event) {
  if (event.target.tagName === "DIV") {
    return event.target.id;
  } else {
    return event.target.parentNode.id;
  }
}
//Function to get Computer Choice
const getComputerChoice = () =>  CHOICES[Math.floor(Math.random() * CHOICES.length)];

//Reset Function for UI
const resetUI = () => {
  choiceOfUser.style.outline = choiceOfUser.style.boxShadow = "none";
  choiceOfComputer.style.outline = choiceOfComputer.style.boxShadow = "none";
  
}
//Function to Reset the Game
const resetGame = () => {
  resultpage.style.display = "none";
  header.style.display = "flex";
  playground.style.display = "block";
  beforeStart.style.display = "block";
  afterResult.style.display = "none";
  userScore.innerText = "0";
  computerScore.innerText = "0";
}

//Function for Game Logic
function determineResult(user, computer) {
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

//Function to display the result of the game -> Result can have three result ( User Win / Computer Win / Tie)
function gameResult() {
    header.style.display = "none";
    playground.style.display = "none";
    resultpage.style.display = "block";
    nextBtn.style.display = "none";
    rulesBtn.style.right = "60px";
    resultpage.style.display = "block";
    if(parseInt(userScore.innerText) == parseInt(computerScore.innerText)){
      congratmsg.innerText = "TIE!!";
      resultmsg.innerText = "MATCH IS TIE";
    }
    else if (parseInt(userScore.innerText) < parseInt(computerScore.innerText)) {
      congratmsg.innerText = "SORRY!!";
      resultmsg.innerText = "YOU LOST THE GAME";
    } else {
      congratmsg.innerText = "HURRY!!";
      resultmsg.innerText = "YOU WON THE GAME";
    }
}

const updateUI = (choiceElement, choice, borderColor, imageSrc) => {
  choiceElement.style.border = `12px solid ${borderColor}`;
  choiceElement.innerHTML = `<img src="${imageSrc}" alt="${choice}-icon" >`;
}

// Display 
function displaySelection(userChoice, computerChoice) {
  const images = {
    rock: "/assests/rock-icon.png",
    paper: "/assests/paper-icon.png",
    scissor: "/assests/scissor-icon.png",
  }

  // if (userChoice === ROCK) {
  //   choiceOfUser.style.border = "12px solid #0074b6";
  //   choiceOfUser.innerHTML = `<img src="/assests/rock-icon.png" alt="rock-icon">`;
  // } else if (userChoice === PAPER) {
  //   choiceOfUser.style.border = "12px solid #ffa943";
  //   choiceOfUser.innerHTML = `<img src="/assests/paper-icon.png" alt="paper-icon">`;
  // } else {
  //   choiceOfUser.style.border = "12px solid #bd00ff";
  //   choiceOfUser.innerHTML = `<img src="/assests/scissor-icon.png" alt="scissor-icon" >`;
  // }

  updateUI(
    choiceOfUser, 
    userChoice,
    userChoice === ROCK ?  "#0074b6" : userChoice === PAPER ? "#ffa943" : "#bd00ff",
    images[userChoice]
  )

  updateUI(
    choiceOfComputer,
    computerChoice,
    computerChoice === ROCK ?  "#0074b6" : userChoice === PAPER ? "#ffa943" : "#bd00ff",
    images[computerChoice]
  )
}

//----- Game Start ------
function startGame() {
  const userChoice = getUserChoice(event);
  const computerChoice = getComputerChoice();

  beforeStart.style.display = "none";
  afterResult.style.display = "flex";

  const winner = determineResult(userChoice, computerChoice);

  playAgain.addEventListener("click", () => {
    afterResult.style.display = "none";
    beforeStart.style.display = "block";
    resetUI();

  });

  closeRule.addEventListener("click", () => {
    ruleBox.style.display = "none";
  });
  rulesBtn.addEventListener("click", () => {
    ruleBox.style.display = "block";
  });

  displaySelection(userChoice, computerChoice);

  if (winner === 0) {
    resultText.innerText = "TIE UP";
    playAgain.innerText = "REPLAY";
    nextBtn.style.display = "none";
    rulesBtn.style.right = "60px";
    ruleBox.style.display = "none";
  } else if (winner === 1) {
    userScore.innerText = parseInt(userScore.innerText) + 1;
    resultText.innerText = "YOU WIN AGAINST PC";
    nextBtn.style.display = "block";
    rulesBtn.style.right = "220px";
    ruleBox.style.display = "none";
    playAgain.innerHTML = "PLAY AGAIN";
    choiceOfUser.style.outline = "22px solid #279a27";
    choiceOfUser.style.boxShadow = "0 0 0 40px #33a62f, 0 0 0 55px #66b248";

  } else {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    resultText.innerText = "YOU LOST AGAINST PC";
    playAgain.innerHTML = "PLAY AGAIN";
    choiceOfComputer.style.outline = "22px solid #279a27";
    choiceOfComputer.style.boxShadow = "0 0 0 40px #33a62f, 0 0 0 55px #66b248";
    nextBtn.style.display = "none";
    rulesBtn.style.right = "60px";
    ruleBox.style.display = "none";
  }

  nextBtn.addEventListener("click", () => {
    gameResult();
  });

  playAgainBtn.addEventListener("click", () => {
    resetGame();
  });

}

// ------- Initial setup --------
function initialSetup() {

  choices.forEach( choice => choice.addEventListener("click", startGame));
  closeRule.addEventListener("click", () => (ruleBox.style.display ="none"));
  rulesBtn.addEventListener("click", () => (ruleBox.style.display = "block"));
  
}

initialSetup();
