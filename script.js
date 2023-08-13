let choices = ["Rock", "Paper", "Scissors"];

const playerSelection = prompt("Pick a thing");
const computerSelection = getComputerChoice();


function getComputerChoice() {
    
    let computer = choices[(Math.floor(Math.random() * choices.length))];
    return computer;
}

function playRound(playerSelection, computer) {

    if (playerSelection.toLowerCase() === computer.toLowerCase() ) {
        console.log(`You tied ${playerSelection.toLowerCase()} to ${computer.toLowerCase()}`)
    }

}

playRound(playerSelection, computerSelection)