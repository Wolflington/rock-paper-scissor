//global variables
let playerSelection;
let computerSelection;
let result = document.querySelector('#result');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const scoreboard = {
    player: 0,
    computer: 0
};

function game() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', playRound);
    });
}

game();

function playRound(e) {
    playerSelection = e.target.id;
    computerSelection = getComputerChoice();
    let choiceDisplay = document.querySelector('#player-selection');
    choiceDisplay.textContent = playerSelection;
    const winner = determineWinner(playerSelection, computerSelection);
    let playerScoreboard = document.querySelector('#player-score');
    playerScoreboard.textContent = `Player: ${scoreboard.player}`;
    let computerScoreboard = document.querySelector('#computer-score');
    computerScoreboard.textContent = `Computer: ${scoreboard.computer}`;
    console.log(scoreboard.player);
    console.log(scoreboard.computer);
    winCondition();
}

function determineWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie!`;
        return;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        scoreboard.player++;
        result.textContent = `You win! Rock crushes scissor!`;
        return;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        scoreboard.player++;
        result.textContent = `You win! Paper covers rock!`;
        return;
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        scoreboard.player;
        result.textContent = `You win! Scissor cuts paper!`;
        return;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        scoreboard.computer++;
        result.textContent = `You lose. Paper covers rock.`;
        return;
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        scoreboard.computer++;
        result.textContent = `You lose. Scissor cuts paper.`;
        return;
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        scoreboard.computer++;
        result.textContent = `You lose. Rock crushes scissor.`;
        return;
    } else {
        result.textContent = `Something went wrong. Please refresh the page.`;
        return;
    }
}

function winCondition() {
    if (scoreboard.player == 5) {
        result.textContent = `You won against a computer!`;
        return;
    } else if (scoreboard.computer == 5) {
        result.textContent = `You lost against a computer. You suck!`;
        return;
    }
}

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let result = choice[Math.floor(Math.random()*choice.length)];
    let compSelect = document.querySelector('#computer-choice');
    return compSelect.textContent = result;
}