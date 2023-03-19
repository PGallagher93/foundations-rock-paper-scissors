function getComputerChoice() {
    choices= ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    let choice = choices[randomIndex];
    return choice;
}

function playerSelection(){
    let playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors"){
        return playerChoice;
    }
    else return console.log("Invalid Player Choice");
    
}
function playRound(playerSelection, getComputerChoice) {
    let playerChoice = playerSelection;
    let ComputerChoice = getComputerChoice;

    if (playerChoice === "rock"){
        switch(ComputerChoice){
            case "rock":
                console.log("It's a draw!")
                break;
            case "paper":
                console.log("You lose! Paper beats Rock")
                break;
            case "scissors":
                console.log("You win! Rock beats Scissors")
                break;
        }
    }

    if (playerChoice === "scissors"){
        switch(ComputerChoice){
            case "scissors":
                console.log("It's a draw!")
                break;
            case "rock":
                console.log("You lose! Rock beats Scissors")
                break;
            case "paper":
                console.log("You win! Scissors beats Paper")
                break;
        }
    }

    if (playerChoice === "paper"){
        switch(ComputerChoice){
            case "paper":
                console.log("It's a draw!")
                break;
            case "scissors":
                console.log("You lose! Scissors beats Paper")
                break;
            case "rock":
                console.log("You win! Paper beats Rock")
                break;
        }
    }

}