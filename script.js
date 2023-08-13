let choices = ["Rock", "Paper", "Scissors"];
let round = 1;
let playerScore = 0;
let computerScore = 0;




function getComputerChoice() {
    
    let computer = choices[(Math.floor(Math.random() * choices.length))];
    return computer;
}

function playRound(playerSelection, computer) {

    if (playerSelection.toLowerCase() === computer.toLowerCase() ) {
        console.log(`You tied ${playerSelection.toLowerCase()} to ${computer.toLowerCase()}`);
    } else if (playerSelection.toLowerCase() === "rock" && computer.toLowerCase() === "paper") {
        console.log('You lost! Paper beats rock.');
        computerScore = ++computerScore;
    } else if (playerSelection.toLowerCase() === "rock" && computer.toLowerCase() === "scissors") {
        console.log('You won! Rock beats scissors.');
        playerScore = ++playerScore;
    } else if (playerSelection.toLowerCase() === "paper" && computer.toLowerCase() === "scissors") {
        console.log('You lost! Scissors beats paper.');
        computerScore = ++computerScore;
    } else if (playerSelection.toLowerCase() === "paper" && computer.toLowerCase() === "rock") {
        console.log('You won! Paper beats rock.');
        playerScore = ++playerScore;
    } else if (playerSelection.toLowerCase() === "scissors" && computer.toLowerCase() === "rock") {
        console.log('You lost! Rock beats scissors.');
        computerScore = ++computerScore;
    } else if (playerSelection.toLowerCase() === "scissors" && computer.toLowerCase() === "paper") {
        console.log('You won! Scissors beats paper.');
        playerScore = ++playerScore;
    }
}

function game() {

    for (round = 1; round <= 5; ++round) {
        playerSelection = prompt("Lets play Rock, Paper, Scissors!");
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log("Player Score: " + +playerScore);
        console.log("AI Score: " + +computerScore);
    }

    if (playerScore === computerScore) {
        console.log("It was a draw");
        console.log("Player Score: " + +playerScore);
        console.log("AI Score: " + +computerScore);
    } else if (playerScore > computerScore) {
        console.log("You won the game!");
        console.log("Player Score: " + +playerScore);
        console.log("AI Score: " + +computerScore);
    } else if (playerScore < computerScore) {
        console.log("Oh sheesh. Better luck next time.");
        console.log("Player Score: " + +playerScore);
        console.log("AI Score: " + +computerScore);
    }

}

game()