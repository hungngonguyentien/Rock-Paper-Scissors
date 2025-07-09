//ClassList
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let choices = ["rock", "paper", "scissors"];

let pScore = 0;
let cScore = 0;

function PlayGame(choice) {
    let computerChoice = computerPlay();
    let result;
    switch(choice) {
        case (choices[0]):
            if(computerChoice == "rock")
                result = "It's a tie!";
            else if (computerChoice == "paper")
                result = "You lose!";
            else 
                result = "You win!";
            break;
        case (choices[1]):
            if(computerChoice == "rock")
                result = "You win!";
            else if (computerChoice == "paper")
                result = "It's a tie!";
            else 
                result = "You lose!";
            break;
        case (choices[2]):
            if(computerChoice == "rock")
                result = "You lose!";
            else if (computerChoice == "paper")
                result = "You win!";
            else 
                result = "It's a tie!";
            break;
        default:
            console.error("Hmm");
            break;
    }
    playerDisplay.textContent = "PLAYER: " + choice;
    computerDisplay.textContent = "COMPUTER: " + computerChoice;
    resultDisplay.textContent = result;
    //Change the color of result text for effect
    resultDisplay.classList.remove("winColor", "loseColor");
    switch(result){
        case("You win!"):
            resultDisplay.classList.add("winColor");
            pScore++;
            playerScore.textContent = pScore;
            break;
        case("You lose!"):
            resultDisplay.classList.add("loseColor");
            cScore++;
            computerScore.textContent = cScore;
            break;
        default:
            break;
    }
}

function computerPlay() {
    return choices[Math.floor(Math.random()*3)];
}