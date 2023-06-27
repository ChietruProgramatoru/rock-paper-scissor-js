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

function getPlayerChoice() {
    let playerInput = prompt("Rock, paper, scissors! What do you choose?");
    let playerInputLowercase = playerInput.toLowerCase();
    if (playerInputLowercase == "rock" || playerInputLowercase == "scissors" || playerInputLowercase == "paper") {
        return playerInputLowercase;
    }
    else {
        return "Pick rock, paper or scissors.";
    }
}

function playGame() {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    if (playerChoice == computerChoice) return "It's a tie!";
    if (playerChoice == "rock") {
        if (computerChoice == "paper") return "You lose...";
        if (computerChoice == "scissors") return "You win!";
    }
    if (playerChoice == "paper") {
        if (computerChoice == "scissors") return "You lose...";
        if (computerChoice == "rock") return "You win!";
    }
    if (playerChoice == "scissors") {
        if (computerChoice == "paper") return "You lose...";
        if (computerChoice == "rock") return "You win!";
    }
}
console.log(playGame());       