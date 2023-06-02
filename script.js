//global variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

function game() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', playRound);
    });
    winCondition();
}

game();

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    let choiceDisplay = document.querySelector('#player-selection');
    choiceDisplay.textContent = playerSelection;
    console.log(playerSelection);
    console.log(computerSelection);
    determineWinner();
}

function determineWinner (playerSelection, computerSelection) {
    let playerScoreboard = document.querySelector('#player-score');
    playerScoreboard.textContent = playerScore;
    let computerScoreboard = document.querySelector('#computer-score');
    computerScoreboard.textContent = playerScore;
    let result = document.querySelector('#result');

    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie! You chose ${playerSelection}. Current score: ${playerScore} | ${computerScore}`;
        return;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        return `You win! Rock crushes scissor! Current score: ${playerScore} | ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return `You win! Paper covers rock! Current score: ${playerScore} | ${computerScore}`;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        return `You win! Scissor cuts paper! Current score: ${playerScore} | ${computerScore}`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return `You lose. Paper covers rock. Current score: ${playerScore} | ${computerScore}`;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;
        return `You lose. Scissor cuts paper. Current score: ${playerScore} | ${computerScore}`;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        return `You lose. Rock crushes scissor. Current score: ${playerScore} | ${computerScore}`;
    } else {
        return 'Enter a valid move!'
    }
}

function winCondition() {
    playerScore = 0;
    computerScore = 0;
    if (playerScore == 5) {
        return `You won against a computer!`;
    } else if (computerScore == 5) {
        return `You lost against a computer. You suck!`;
    }
}

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let result = choice[Math.floor(Math.random()*choice.length)];
    let compSelect = document.querySelector('#computer-choice');
    return compSelect.textContent = result;
}