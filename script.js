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

game();

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Please choose your weapon: ', '').toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `It's a tie! You chose ${playerSelection}.`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        playerScore++;
        return `You win! Rock crushes scissor!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper covers rock!';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissor cuts paper!';
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You lose. Paper covers rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        computerScore++;
        return 'You lose. Scissor cuts paper.';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose. Rock crushes scissor.';
    } else {
        return 'Enter a valid move!'
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
    console.log(playRound());
}
}
