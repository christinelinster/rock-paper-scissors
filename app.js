function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return (choice);
}

//Global Variables
let pScore=0;
let cScore=0;

//Selectors
const roundResult = document.querySelector('#round-result');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');

roundResult.textContent = "click your choice to start game";

function playRound(playerSelection, computerSelection){
    if(playerSelection == "Rock"){
        if(computerSelection === "Rock"){
            displayScore(pScore, cScore);
            return("tie game!");
        }else if(computerSelection === "Paper"){
            cScore++;
            displayScore(pScore, cScore);
            return("you lose! paper beats rock.");
        }else{
            pScore++;
            displayScore(pScore, cScore);
            return("you win! rock beats scissors.");
        }
    }else if (playerSelection == "Paper"){
        if(computerSelection === "Paper"){
            displayScore(pScore, cScore);
            return("tie game!");
        }else if(computerSelection === "Rock"){
            pScore++;
            displayScore(pScore, cScore);
            return("you win! paper beats rock.");
        }else{
            cScore++;
            displayScore(pScore, cScore);
            return ("you lose! scissors beats paper.");
        }
    }else{
        if (computerSelection == "Scissors"){
            displayScore(pScore, cScore);
            return("tie game!");
        }else if(computerSelection === "Rock"){
            cScore++;
            displayScore(pScore, cScore);
            return("you lose! rock beats scissors.");
        }else {
            pScore++;
            displayScore(pScore, cScore);
            return ("you win! scissors beats paper.");
        }
    }
}

const selection = document.querySelectorAll('img');
selection.forEach((img) => {
    img.addEventListener("click", () => {
        if(pScore ===5 || cScore ===5){
            return;
        }
        img.classList.add("clicked");
        game(img.id);
    });

    img.addEventListener('transitionend', removeTransition)
});


function game(playerSelection){
    const results = playRound(playerSelection, getComputerChoice());
    if(pScore===5){
        roundResult.textContent = "congrats, you won!";
    }else if(cScore ===5){
        roundResult.textContent = "game over, you lost.";
    }else{
        roundResult.textContent = results;
    }
}

function displayScore(pScore, cScore){
    playerScore.textContent = `Player Score: ${pScore}`;
    computerScore.textContent = `Computer Score: ${cScore}`;
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('clicked');
}
  