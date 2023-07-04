function getComputerChoice() {
    let computerNumber = Math.random() * 3;
    if (computerNumber < 1) {
        return "rock";
    }
    if (computerNumber < 2 && computerNumber > 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// function getPlayerChoice() {
//     let playerInput = prompt("Rock, paper, scissors! What do you choose?");
//     let playerInputLowercase = playerInput.toLowerCase();
//     if (playerInputLowercase == "rock" || playerInputLowercase == "scissors" || playerInputLowercase == "paper") {
//         return playerInputLowercase;
//     }
//     else {
//         return "Pick rock, paper or scissors.";
//     }
// }

function playRound() {
    let computerChoice = getComputerChoice();
    if (playerScore >= 5) return `You win! Good job!!!`;
    if (computerScore >= 5) return 'You lost to the PC. Kys';
    if (playerChoice == computerChoice) return `It's a tie! Score is ${playerScore} - ${computerScore}`;
    if (playerChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1;
            return `You lose... Score is ${playerScore} - ${computerScore}`;
        }
        if (computerChoice == "scissors") {
            playerScore += 1;
            return `You win! Score is ${playerScore} - ${computerScore}`;
        }
    }
    if (playerChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1;
            return `You lose... Score is ${playerScore} - ${computerScore}`;
        }
        if (computerChoice == "rock") {
            playerScore += 1;
            return `You win! Score is ${playerScore} - ${computerScore}`;
        }
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            playerScore += 1;
            return `You lose... Score is ${playerScore} - ${computerScore}`;
        }
        if (computerChoice == "rock") {
            computerScore += 1;
            return `You win! Score is ${playerScore} - ${computerScore}`;
        }
    }
}

// function game() {
//     for (var i = 0; i < 5; i++) {
//         console.log(playRound());
//     }
//     if (playerScore == computerScore) return "It's a tie! Better luck next time!";
//     if (playerScore > computerScore) return "You won the game of Rock, paper, scissors!!!";
//     else return "You lost to the computer, sorry";
// }
const score = document.querySelector('#score');
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerChoice = 'rock';
    score.innerHTML = playRound();
});
const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerChoice = 'paper';
    score.innerHTML = playRound();
});
const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerChoice = 'scissors';
    score.innerHTML = playRound();
});

var playerChoice = 0;
var playerScore = 0;
var computerScore = 0; 