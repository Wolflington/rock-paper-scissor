function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let result = choice[Math.floor( Math.random()*choice.length )];
    return result;
}
//global variables
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

// game();
playRound();

function playRound(playerSelection, computerSelection) {
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
    console.log(playerSelection );
    });

    let scissorBtn = document.querySelector('#scissor');
    scissorBtn.addEventListener('click', () => {
    playerSelection = document.getElementById('scissor').value;
    document.getElementById('player-selection').textContent = playerSelection ;
    console.log(playerSelection );
    });

    computerSelection = getComputerChoice();
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
    if (playerScore >= 5) {
        return `You won against a computer!`;
    } else if (computerScore >= 5) {
        return `You lost against a computer. You suck!`;
    }
}

// function game() {
//     const i = 0;
//     while (i < 10){
//         if (playerScore >= 5) {
//             console.log(winCondition());
//             return playerScore;
//         } else if (computerScore >= 5) {
//             console.log(winCondition());
//             return computerScore;
//         }
//         console.log(playRound());
//     }
// }