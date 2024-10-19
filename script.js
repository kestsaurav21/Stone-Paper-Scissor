const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorChoice = document.getElementById("scissor");

const closeRule = document.getElementById("rules");
const showrules = document.getElementById("show-rules-btn");

const userScore = document.querySelector("#userScore");
const computerScore = document.querySelector("#computerScore");

const beforeStart = document.querySelector("#beforeStart");
const afterResult = document.querySelector("#afterResult");

const userSelection = document.querySelector("#userChoice");
const computerSelection = document.querySelector("#computerChoice");

const resultText = document.querySelector("#result-text");
const playAgain = document.querySelector("#playAgain");

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

// const RockDiv = `<div class="circle rock">
//                 <img src="/assests/rock-icon.png" alt="rock-icon">
//             </div>`;

// const ScissorDiv = `<div class="circle scissor">
//                 <img src="/assests/scissor-icon.png" alt="scissor-icon">
//             </div>`;

// const PaperDiv = `<div class="circle paper">
//                 <img src="/assests/paper-icon.png" alt="paper-icon">
//             </div>`;

// let userScore = 0;
// let computerScore = 0;

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

// function renderResultSelection(afterResult, userImage, computerImage) {
//   afterResult.insertBefore(userImage, resultText);

//   afterResult.insertBefore(computerImage, playAgain);
// }

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

    // renderResultSelection(
    //   afterResult,
    //   userChoice===ROCK ? RockDiv : userChoice===PAPER ? PaperDiv : ScissorDiv,
    //   computerChoice===ROCK ? RockDiv : computerChoice===PAPER ? PaperDiv : ScissorDiv
    // );

  } else if (winner === 1) {
    userScore.innerText = parseInt(userScore.innerText) + 1;
    resultText.innerText = "YOU WIN AGAINST PC";

    // renderResultSelection(
    //   afterResult,
    //   userChoice===ROCK ? RockDiv : userChoice===PAPER ? PaperDiv : ScissorDiv,
    //   computerChoice===ROCK ? RockDiv : computerChoice===PAPER ? PaperDiv : ScissorDiv
    // );
  } else {
    computerScore.innerText = parseInt(computerScore.innerText) + 1;
    resultText.innerText = "YOU LOST AGAINST PC";

    // renderResultSelection(
    //     afterResult,
    //     userChoice===ROCK ? RockDiv : userChoice===PAPER ? PaperDiv : ScissorDiv,
    //     computerChoice===ROCK ? RockDiv : computerChoice===PAPER ? PaperDiv : ScissorDiv
    // );
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
