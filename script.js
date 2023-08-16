let choices = ["Rock", "Paper", "Scissors"];
let round = 1;
let playerScore = 0;
let computerScore = 0;

const myScore = document.createElement('div');
    container.appendChild(myScore);

const enemyScore = document.createElement('div');
    container.appendChild(enemyScore);

const div = document.createElement('div');
    container.appendChild(div);

function getComputerChoice() { 
    let computer = choices[(Math.floor(Math.random() * choices.length))];
    return computer;
}

function playRound(playerSelection, computer) {

    if (playerSelection.toLowerCase() === computer.toLowerCase() ) {
        div.textContent = `You tied ${playerSelection.toLowerCase()} to ${computer.toLowerCase()}`;
    } else if (playerSelection.toLowerCase() === "rock" && computer.toLowerCase() === "paper") {
        div.textContent = 'You lost! Paper beats rock.';
        computerScore = ++computerScore;
    } else if (playerSelection.toLowerCase() === "rock" && computer.toLowerCase() === "scissors") {
        div.textContent = 'You won! Rock beats scissors.';
        playerScore = ++playerScore;
    } else if (playerSelection.toLowerCase() === "paper" && computer.toLowerCase() === "scissors") {
        div.textContent = 'You lost! Scissors beats paper.';
        computerScore = ++computerScore;
    } else if (playerSelection.toLowerCase() === "paper" && computer.toLowerCase() === "rock") {
        div.textContent = 'You won! Paper beats rock.';
        playerScore = ++playerScore;
    } else if (playerSelection.toLowerCase() === "scissors" && computer.toLowerCase() === "rock") {
        div.textContent = 'You lost! Rock beats scissors.';
        computerScore = ++computerScore;
    } else if (playerSelection.toLowerCase() === "scissors" && computer.toLowerCase() === "paper") {
        div.textContent = 'You won! Scissors beats paper.';
        playerScore = ++playerScore;
    }
}

function rock() {
    playerSelection = choices[0]
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    myScore.textContent = "Player Score: " + +playerScore;
    enemyScore.textContent = "AI Score: " + +computerScore;
}

function paper() {
    playerSelection = choices[1]
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    myScore.textContent = "Player Score: " + +playerScore;
    enemyScore.textContent = "AI Score: " + +computerScore;
}

function scissors() {
    playerSelection = choices[2]
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    myScore.textContent = "Player Score: " + +playerScore;
    enemyScore.textContent = "AI Score: " + +computerScore;
}

function checkWin() {
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