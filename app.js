function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return (choice);
}

//Global Variables
let pScore=0;
let cScore=0;

//DOM Methods
const roundResult = document.querySelector('#round-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');


function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if(playerChoice == "Rock"){
        if(computerSelection === "Rock"){
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("Tie game!");
        }else if(computerSelection === "Paper"){
            cScore++;
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("You lose! Paper beats Rock.");
        }else{
            pScore++;
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("You win! Rock beats Scissors.");
        }
    }else if (playerChoice == "Paper"){
        if(computerSelection === "Paper"){
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("Tie game!");
        }else if(computerSelection === "Rock"){
            pScore++;
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("You win! Paper beats Rock.");
        }else{
            cScore++;
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return ("You lose! Scissors beats Paper.");
        }
    }else{
        if (computerSelection == "Scissors"){
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("Tie game!");
        }else if(computerSelection === "Rock"){
            cScore++;
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return("You lose! Rock beats Scissors.");
        }else {
            pScore++;
            playerScore.textContent = `Player Score: ${pScore}`;
            computerScore.textContent = `Computer Score: ${cScore}`;
            return ("You win! Scissors beats Paper.");
        }
    }
}

//SOMETHING IS WRONG WITH THIS PART OF THE CODE, PLAYS MULTIPLE INSTEAD OF ONE ROUND AND WAITING FOR USER CHOICE - MIGHT BE BEACUSE OF BUBBLING

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if(pScore ===5 || cScore ===5){
            return;
        }
        game(button.id);
    });
});


function game(playerSelection){
    const results = playRound(playerSelection, getComputerChoice());
    if(pScore===5){
        roundResult.textContent = "Game over! You won.";
    }else if(cScore ===5){
        roundResult.textContent = "Game over! You lost.";
    }else{
        roundResult.textContent = results;
    }
}