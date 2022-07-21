// Need array of rock paper and scissors
//fuction to generate random 
// user input
//comparision function that displays answer


function getComputerChoice () {
    let choiceArray = [
        "rock",
        "paper",
        "scissors"
    ]
    
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}

const computerSelection = getComputerChoice();

const playerSelection = prompt("Please enter your choice between rock paper and scissors").toLowerCase();

let yourScore = 0;
let compScore = 0;


function playRound (computerSelection, playerSelection) {
    for (i = 0; i<1; i++) {
        if (computerSelection === "rock" && playerSelection === "rock") {
            return alert("Tie Game! Rock versus Rock ");
        }
        else if (computerSelection === "rock" && playerSelection === "paper") {
            return alert("You Win! Paper beats Rock ");
            return yourScore ++;
        }
        else if (computerSelection === "rock" && playerSelection === "scissors") {
            return alert("You Lose! Rock beats Scissors ");
            return compScore++;
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
            return alert("You Lose! Paper beats Rock ");
            return compScore++;
        }
        else if (computerSelection === "paper" && playerSelection === "paper") {
            return alert("Tie Game! Paper versus Paper");
        }
        else if (computerSelection === "paper" && playerSelection === "scissors") {
            return alert("You Win! Scissors beats Paper ");
            return yourScore++;
        }
        else if (computerSelection === "scissors" && playerSelection === "rock") {
            return alert("You Win! Rock beats Scissors ");
            return yourScore++;
        }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            return alert("You Lose! Scissors beats Paper ");
            return compScore++;
        }
        else if (computerSelection === "scissors" && playerSelection === "scissors") {
            return alert("Tie Game! Scissors versus Scissors ");
        }
        else {
            return alert("Invalid kkkInput");
        } return;
    }
 }

alert(playRound(computerSelection,playerSelection));
console.log(compScore, yourScore);

function game () {

    
    for (let i = 0; i < 5; i++) {
        playRound(computerSelection, playerSelection);
        return console.log(yourScore, compScore);
    

    }
    
}

;

