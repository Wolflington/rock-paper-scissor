function getComputerChoice() {
    let button = document.querySelectorAll('button');
    button.forEach((btn) => {
        btn.addEventListener('click', () => {
            let compSelect = document.querySelector('#computer-choice');
            compSelect.textContent = result;
            console.log(result);
        });
    });
    let choice = ['rock', 'paper', 'scissor'];
    let result = choice[Math.floor(Math.random()*choice.length)];
}
//global variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

game();
// playRound();

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    let rockBtn = document.querySelector('#rock');
    rockBtn.addEventListener('click', () => {
        playerSelection = document.getElementById('rock').value;
        document.getElementById('player-selection').textContent = playerSelection;
        console.log(playerSelection);
    });

    let paperBtn = document.querySelector('#paper');
    paperBtn.addEventListener('click', () => {
        playerSelection = document.getElementById('paper').value;
        document.getElementById('player-selection').textContent = playerSelection ;
        console.log(playerSelection);
    });

    let scissorBtn = document.querySelector('#scissor');
    scissorBtn.addEventListener('click', () => {
        playerSelection = document.getElementById('scissor').value;
        document.getElementById('player-selection').textContent = playerSelection ;
        console.log(playerSelection);
    });


    if (playerSelection === computerSelection) {
        return `It's a tie! You chose ${playerSelection}. Current score: ${playerScore} | ${computerScore}`;
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
    if (playerScore == 5) {
        playerScore = 0;
        return `You won against a computer!`;
    } else if (computerScore == 5) {
        computerScore = 0;
        return `You lost against a computer. You suck!`;
    }
}

function game() {
    let buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.addEventListener('click', playRound);
    });
    winCondition();
}