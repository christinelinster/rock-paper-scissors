function getComputerChoice(){
    let choices = ["Rock", "Paper", "Scissors"];
    let choice = choices[Math.floor(Math.random()*3)];
    return (choice);
}

function playRound(playerSelection, computerSelection){
    let playerChoice = playerSelection.slice(0,1).toUpperCase() + playerSelection.slice(1).toLowerCase();
    console.log(playerChoice);
    if(playerChoice == "Rock"){
        if(computerSelection === "Rock"){
            return("Tie game!");
        }else if(computerSelection === "Paper"){
            return("You lose! Paper beats Rock.");
        }else{
            return("You win! Rock beats Scissors.");
        }
    }else if (playerChoice == "Paper"){
        if(computerSelection === "Paper"){
            return("Tie game!");
        }else if(computerSelection === "Rock"){
            return("You win! Paper beats Rock.");
        }else{
            return ("You lose! Scissors beats Paper.");
        }
    }else{
        if (computerSelection == "Scissors"){
            return("Tie game!");
        }else if(computerSelection === "Rock"){
            return("You lose! Rock beats Scissors.");
        }else {
            return ("You win! Scissors beats Paper.");
        }
    }
}

function game(){
    // for(let i=0; i<5; i++){ 
        let userChoice = prompt("Select Rock, Paper, or Scissors.");
        console.log(playRound(userChoice, getComputerChoice()));
    // }
}
