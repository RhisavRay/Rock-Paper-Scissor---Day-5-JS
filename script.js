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
    else if(rand === 2)
        computerChoice = "Paper";
    else
        computerChoice = "Scissors";

    computerChoiceDisplay.innerHTML = computerChoice;
}

const victoryOrLoss = (userChoice, computerChoice) => {
    if(userChoice === "Rock")
    {
        if(computerChoice = "Rock")
            result = "Tie";
        else if(computerChoice = "Paper")
            result = "Loss";
        else
            result = "Victory";
    }
    else if(userChoice === "Paper")
    {
        if(computerChoice = "Rock")
            result = "Victory";
        else if(computerChoice = "Paper")
            result = "Tie";
        else
            result = "Loss";
    }
    else
    {
        if(computerChoice = "Rock")
            result = "Loss";
        else if(computerChoice = "Paper")
            result = "Victory";
        else
            result = "Tie";
    }

    resultDisplay.innerHTML = result;
}