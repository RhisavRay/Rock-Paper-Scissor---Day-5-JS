const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("your-choice");
const resultDisplay = document.getElementById("result");
const choices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

choices.forEach(choice => choice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoice = userChoice[0].toUpperCase() + userChoice.slice(1)
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    victoryOrLoss(userChoice, computerChoice);
}))

const generateComputerChoice = () => {
    const rand = Math.floor(Math.random() * 3) + 1;
    if(rand === 1)
        computerChoice = "Rock";
    if(rand === 2)
        computerChoice = "Paper";
    if(rand === 3)
        computerChoice = "Scissors";

    computerChoiceDisplay.innerHTML = computerChoice;
}

const victoryOrLoss = (userChoice, computerChoice) => {
    if(userChoice === "Rock")
    {
        if(computerChoice === "Rock")
            result = "Tie";
        if(computerChoice === "Paper")
            result = "Loss";
        if(computerChoice === "Scissors")
            result = "Victory";
    }
    if(userChoice === "Paper")
    {
        if(computerChoice === "Rock")
            result = "Victory";
        if(computerChoice === "Paper")
            result = "Tie";
        if(computerChoice === "Scissors")
            result = "Loss";
    }
    if(userChoice === "Scissors")
    {
        if(computerChoice === "Rock")
            result = "Loss";
        if(computerChoice === "Paper")
            result = "Victory";
        if(computerChoice === "Scissors")
            result = "Tie";

    }

    resultDisplay.innerHTML = result;
}