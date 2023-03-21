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
    else console.log("Invalid Player Choice");
    return playerSelection();
    
}
function playRound(playerSelection, getComputerChoice) {
    let playerChoice = playerSelection;
    let ComputerChoice = getComputerChoice;
    
//go through each choice and the possible results//
    if (playerChoice === "rock"){
        let result;
        switch(ComputerChoice){
            case "rock":
                result = "It's a draw!";
                return result;
            case "paper":
                result = "You lose! Paper beats Rock";
                return result;
            case "scissors":
                result = "You win! Rock beats Scissors";
                return result;
        }
    }

    if (playerChoice === "scissors"){
        
        switch(ComputerChoice){
            case "scissors":
                result = "It's a draw!";
                return result;
            case "rock":
                 result = "You lose! Rock beats Scissors";
                 return result;
            case "paper":
                 result = "You win! Scissors beats Paper";
                 return result;
        }
    }

    if (playerChoice === "paper"){
        switch(ComputerChoice){
            case "paper":
                result = "It's a draw!"
                return result;
            case "scissors":
                result = "You lose! Scissors beats Paper"
                return result;
            case "rock":
                result = "You win! Paper beats Rock"
                return result;
        }
    }

}

function game(){
    let win = 0;
    let loss = 0;
    for (let i = 0; i < 5;i++){
        let result = playRound(getComputerChoice(), playerSelection());
        
        console.log(result);

        if(result.slice(0,7 ) === "You win"){
            win += 1;
        }  else if (result.slice(0,8) === "You lose"){
            loss += 1;
        }
    }

    if (win > loss) {
        console.log("The child of Man is victorious!");
    } else if (loss > win) {
        console.log("The machines have beaten humanity today!")
    } else console.log("It is a tie!");


    
}

