let choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const myScore = document.createElement('div');
    container.appendChild(myScore);

const enemyScore = document.createElement('div');
    container.appendChild(enemyScore);

const div = document.createElement('div');
    container.appendChild(div);

const rockS = document.querySelector('[class=rock]')
const paperS = document.querySelector('[class=paper]')
const scissorsS = document.querySelector('[class=scissors]')

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
    if (computerScore >= 5) {
        checkWin();
    } else if (playerScore >= 5) {
        checkWin();
    };
}

function paper() {
    playerSelection = choices[1]
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    myScore.textContent = "Player Score: " + +playerScore;
    enemyScore.textContent = "AI Score: " + +computerScore;
    if (computerScore >= 5) {
        checkWin();
    } else if (playerScore >= 5) {
        checkWin();
    };
}

function scissors() {
    playerSelection = choices[2]
    let computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    myScore.textContent = "Player Score: " + +playerScore;
    enemyScore.textContent = "AI Score: " + +computerScore;
    if (computerScore >= 5) {
        checkWin();
    } else if (playerScore >= 5) {
        checkWin();
    };
}

function checkWin() {
    if (playerScore === computerScore) {
        div.textContent = "It was a draw, refresh to play again!";
        rockS.disabled = true;
        paperS.disabled = true;
        scissorsS.disabled = true;
    } else if (playerScore > computerScore) {
        div.textContent = "You won the game, refresh to play again!";
        rockS.disabled = true;
        paperS.disabled = true;
        scissorsS.disabled = true;

    } else if (playerScore < computerScore) {
        div.textContent = "Oh sheesh. Better luck next time, refresh to play again!";
        rockS.disabled = true;
        paperS.disabled = true;
        scissorsS.disabled = true;

    }
}