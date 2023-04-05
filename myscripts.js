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
    let ComputerChoice = GetComputerChoice();
    let playerChoice = e.target.innerHTML.toLowerCase();
    let gameResults = document.querySelector('#results');
    console.log(ComputerChoice);
    console.log(playerChoice)
    
    
//go through each choice and the possible results//
    if (playerChoice === "rock"){
        let result;
        switch(ComputerChoice){
            case "rock":
                gameResults.innerHTML = "It's a draw!";
                
                break;
            case "paper":
                gameResults.innerHTML = "You lose! Paper beats Rock";
                break;
            case "scissors":
                gameResults.innerHTML = "You win! Rock beats Scissors";
                break;
        }
    }

    if (playerChoice === "scissors"){
        
        switch(ComputerChoice){
            case "scissors":
                gameResults.innerHTML = "It's a draw!";
                break;
            case "rock":
                gameResults.innerHTML = "You lose! Rock beats Scissors";
                break;
            case "paper":
                gameResults.innerHTML = "You win! Scissors beats Paper";
                break;
        }
    }

    if (playerChoice === "paper"){
        switch(ComputerChoice){
            case "paper":
                gameResults.innerHTML = "It's a draw!"
                break;
            case "scissors":
                gameResults.innerHTML = "You lose! Scissors beats Paper"
                break;
            case "rock":
                gameResults.innerHTML = "You win! Paper beats Rock"
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

