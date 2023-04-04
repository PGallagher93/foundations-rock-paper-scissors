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
function playRound(e) {
    
    function GetComputerChoice(){ choices= ["rock", "paper", "scissors"];
        let randomIndex = Math.floor(Math.random() * 3);
        let choice = choices[randomIndex];
        return choice;}
    ComputerChoice = GetComputerChoice();
    console.log(ComputerChoice);
    let playerChoice = e.target.innerHTML.toLowerCase();
    console.log(playerChoice);
    
//go through each choice and the possible results//
    if (playerChoice === "rock"){
        let result;
        switch(ComputerChoice){
            case "rock":
                result = "It's a draw!";
                console.log(result);
                break;
            case "paper":
                result = "You lose! Paper beats Rock";
                console.log(result);
                break;
            case "scissors":
                result = "You win! Rock beats Scissors";
                console.log(result);
                break;
        }
    }

    if (playerChoice === "scissors"){
        
        switch(ComputerChoice){
            case "scissors":
                result = "It's a draw!";
                console.log(result);
                break;
            case "rock":
                 result = "You lose! Rock beats Scissors";
                 console.log(result);
                 break;
            case "paper":
                 result = "You win! Scissors beats Paper";
                 console.log(result);
                 break;
        }
    }

    if (playerChoice === "paper"){
        switch(ComputerChoice){
            case "paper":
                result = "It's a draw!"
                console.log(result);
                break;
            case "scissors":
                result = "You lose! Scissors beats Paper"
                console.log(result);
                break;
            case "rock":
                result = "You win! Paper beats Rock"
                console.log(result);
                break;
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
const buttons = document.querySelectorAll('.selection');
buttons.forEach((button) => {

button.addEventListener('click', playRound)})

