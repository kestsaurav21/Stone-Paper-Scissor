const rockChoice = document.getElementById('rock');
const paperChoice = document.getElementById('paper');
const scissorChoice = document.getElementById('scissor');

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

function getUserChoice(event){
    
    if(event.target.tagName==="DIV"){
        return event.target.id;
    }else{
        return event.target.parentNode.id;
    }
}

function getComputerChoice(){
    const computerChoices = [ROCK, PAPER, SCISSOR];

    const idx = Math.floor(Math.random() * 3);
    
    return computerChoices[idx];
}

function startGame(){

    const userChoice = getUserChoice(event);
    const computerChoice = getComputerChoice();
    // console.log("user: ",userChoice);
    // console.log("computer: ",computerChoice);
    

    const winner = gameResult(userChoice, computerChoice);

    console.log(winner);
    
}

function gameResult(user, computer){

    if(user == computer) return "TIE UP";


    if(
        (user === ROCK && computer === SCISSOR) ||
        (user === PAPER && computer === ROCK) ||
        (user === SCISSOR && computer === PAPER)
    ){
        return "YOU WIN AGAINST PC"
    }else{
        return "YOU LOST AGAINST PC"
    }

}


function initialSetup() {

    let userScore = 0;
    let computerScore = 0;


    document.getElementById('computerScore').innerText = computerScore;
    document.getElementById('userScore').innerText = userScore;

    rockChoice.addEventListener("click", startGame);
    paperChoice.addEventListener("click", startGame);
    scissorChoice.addEventListener("click", startGame);





}

initialSetup();