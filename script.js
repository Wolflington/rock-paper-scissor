function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissor'];
    let result = choice[Math.floor( Math.random()*choice.length )];
    return result;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt('Please choose your weapon: ', '');
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        return `It's a tie! You chose ${playerSelection}.`;
    } 
    else if (playerSelection === 'rock' && computerSelection === 'scissor') {
        return `You win! Rock crushes scissor!`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You win! Paper covers rock!';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        return 'You win! Scissor cuts paper!';
    } 
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper covers rock.';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor') {
        return 'You lose. Scissor cuts paper.';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        return 'You lose. Rock crushes scissor.';
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
    
    let win = 3;
    if (playerSelection === win)
        console.log("You are the winner!");
    } else {
        console.log("Bot is the winner!");
    }
    playRound();
}