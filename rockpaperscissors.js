

const btnOptions = document.querySelectorAll('div.btnOptions button');
const displayResults= document.querySelector('.displayResults');
const userScore = document.querySelector('#userScore');
const comScore = document.querySelector('#comScore');
const newGameBtn = document.querySelector('#reset');

/*const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors'); */

const playerSelection = "";



// button to reset game
newGameBtn.addEventListener('click', () => location.reload());

//check below


function getComputerChoice () {
    let choiceArray = [
        "rock",
        "paper",
        "scissors"
    ]
    
    let choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    return choice;
}

function endGame () {
    btnOptions.forEach( elem => {
        elem.disabled = true;
    })

}


let yourScore = 0;
let compScore = 0;


function playRound (playerSelection) {
    const computerSelection = getComputerChoice();

    for (i = 0; i<1; i++) {
        if (computerSelection === "rock" && playerSelection === "rock") {
            displayResults.textContent = "Tie Game! Rock versus Rock";
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "rock" && playerSelection === "paper") {
            displayResults.textContent = "You Win! Paper beats Rock";
            yourScore ++;
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "rock" && playerSelection === "scissors") {
            displayResults.textContent = "You Lose! Rock beats Scissors";
            compScore++;
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "paper" && playerSelection === "rock") {
            displayResults.textContent = "You Lose! Paper beats Rock";
            compScore++;
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "paper" && playerSelection === "paper") {
            displayResults.textContent = "Tie Game! Paper versus Paper";
            userScore.textContent = `${yourScore}`;
            return comScore.textContent = `${compScore}`;
        }
        else if (computerSelection === "paper" && playerSelection === "scissors") {
            displayResults.textContent ="You Win! Scissors beats Paper";
            yourScore++;
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "scissors" && playerSelection === "rock") {
            displayResults.textContent ="You Win! Rock beats Scissors";
            yourScore++;
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "scissors" && playerSelection === "paper") {
            displayResults.textContent = "You Lose! Scissors beats Paper";
            compScore++;
            userScore.textContent = `${yourScore}`;
            comScore.textContent = `${compScore}`;

            if (yourScore == 5) {
                displayResults.textContent = "YOU WIN!!!";
                endGame();
            }else if(comScore == 5) {
                displayResults.textContent = "YOU LOSE!!!";
                endGame();
            }else { return }
        }
        else if (computerSelection === "scissors" && playerSelection === "scissors") {
            displayResults.textContent = "Tie Game! Scissors versus Scissors";
            userScore.textContent = `${yourScore}`;
            return comScore.textContent = `${compScore}`;
        }
            
    } console.log(yourScore, compScore);
 }


btnOptions.forEach( button => {
    button.addEventListener('click', function () {
        playRound(button.value);
    })
})

