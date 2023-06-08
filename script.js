//global variables
let playerSelection;
let computerSelection;
let choiceDisplay = document.querySelector('#player-selection');
let playerScoreboard = document.querySelector('#player-score');
let computerScoreboard = document.querySelector('#computer-score');
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
    playerSelection = e.currentTarget.value;
    computerSelection = getComputerChoice();
    choiceDisplay.innerHTML = playerSelection;
    const winner = determineWinner(playerSelection, computerSelection);
    playerScoreboard.textContent = `Player: ${scoreboard.player}`;
    computerScoreboard.textContent = `Computer: ${scoreboard.computer}`;
    console.log(playerSelection);
    console.log(computerSelection);
    console.log(scoreboard.player);
    console.log(scoreboard.computer);
    winCondition();
}

function determineWinner (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result.textContent = `It's a tie!`;
        return;
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Scissor') {
        scoreboard.player++;
        result.textContent = `You win! Rock crushes scissor!`;
        return;
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        scoreboard.player++;
        result.textContent = `You win! Paper covers rock!`;
        return;
    } else if (playerSelection === 'Scissor' && computerSelection === 'Paper') {
        scoreboard.player++;
        result.textContent = `You win! Scissor cuts paper!`;
        return;
    } 
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
        scoreboard.computer++;
        result.textContent = `You lose. Paper covers rock.`;
        return;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissor') {
        scoreboard.computer++;
        result.textContent = `You lose. Scissor cuts paper.`;
        return;
    } else if (playerSelection === 'Scissor' && computerSelection === 'Rock') {
        scoreboard.computer++;
        result.textContent = `You lose. Rock crushes scissor.`;
        return;
    } else {
        result.textContent = `Something went wrong. Please refresh the page.`;
        return;
    }
}

function winCondition() {
    endGame();
    if (scoreboard.player === 5) {
        result.textContent = `You won against a computer!`;
        return;
    } else if (scoreboard.computer === 5) {
        result.textContent = `You lost against a computer. You suck!`;
        return;
    }
}

function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissor'];
    let result = choice[Math.floor(Math.random()*choice.length)];
    let compSelect = document.querySelector('#computer-choice');
    return compSelect.textContent = result;
}

function endGame() {
    if (scoreboard.player == 5) {
        result.textContent = '';
        playerScoreboard.textContent = `Player: 0`;
        computerScoreboard.textContent = `Computer: 0`;
        scoreboard.player = 0;
        scoreboard.computer = 0;
        choiceDisplay.textContent = ``
        let compSelect = document.querySelector('#computer-choice');
        compSelect.textContent = ``
        alert ('You won against a computer! Play again?');
    } else if (scoreboard.computer == 5){
        result.textContent = ``;
        playerScoreboard.textContent = `Player: 0`;
        computerScoreboard.textContent = `Computer: 0`;
        scoreboard.player = 0;
        scoreboard.computer = 0;
        choiceDisplay.textContent = ``
        let compSelect = document.querySelector('#computer-choice');
        compSelect.textContent = ``
        alert ('You lost against a computer. Play again?')
    }
}