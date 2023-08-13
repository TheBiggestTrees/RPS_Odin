let choices = ["Rock", "Paper", "Scissors"];
let round = 1;
let playerScore = 0;
let computerScore = 0;

const computerSelection = getComputerChoice();


function getComputerChoice() {
    
    let computer = choices[(Math.floor(Math.random() * choices.length))];
    return computer;
}

function playRound(playerSelection, computer) {

    if (playerSelection.toLowerCase() === computer.toLowerCase() ) {
        console.log(`You tied ${playerSelection.toLowerCase()} to ${computer.toLowerCase()}`)
    } else if (playerSelection.toLowerCase() === "rock" && computer.toLowerCase() === "paper") {
        console.log('You lost! Paper beats rock.')
    } else if (playerSelection.toLowerCase() === "rock" && computer.toLowerCase() === "scissors") {
        console.log('You won! Rock beats scissors.')
    } else if (playerSelection.toLowerCase() === "paper" && computer.toLowerCase() === "scissors") {
        console.log('You lost! Scissors beats paper.')
    } else if (playerSelection.toLowerCase() === "paper" && computer.toLowerCase() === "rock") {
        console.log('You won! Paper beats rock.')
    } else if (playerSelection.toLowerCase() === "scissors" && computer.toLowerCase() === "rock") {
        console.log('You lost! Rock beats scissors.')
    } else if (playerSelection.toLowerCase() === "scissors" && computer.toLowerCase() === "paper") {
        console.log('You won! Scissors beats paper.')
    }
}

function game() {

    for (round = 1; round <= 5; ++round) {
        playerSelection = prompt("Lets go")
        playRound(playerSelection, computerSelection);
    }

}

game()