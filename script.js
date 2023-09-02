const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    victoryOrLoss(userChoice, computerChoice);
}))

const generateComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    if(rand === 1)
        computerChoice = "Rock";
    else if(rand === 2)
        computerChoice = "Paper";
    else
        computerChoice = "Scissors";

    computerChoiceDisplay.innerHTML = computerChoice;
}

const victoryOrLoss = (userChoice, computerChoice) => {
    
}