function computerPlay() {
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        picked = 'Rock';
    } else if (choice === 1) {
        picked = 'Scissors';
    } else if (choice === 2) {
        picked = 'Paper';
    }
    return picked;
}


function playRound(playerSelection, computerSelection) {
    let round;
    if (playerSelection == 'Rock' && computerSelection == 'Paper' ||
        playerSelection == 'Scissors' && computerSelection == 'Rock' ||
        playerSelection == 'Paper' && computerSelection == 'Scissors') {
        round = 'Alphamind wins, ' + computerSelection + ' beats ' + playerSelection;
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock' ||
        playerSelection == 'Rock' && computerSelection == 'Scissors' ||
        playerSelection == 'Scissors' && computerSelection == 'Paper') {
        round = 'You win, ' + playerSelection + ' beats ' + computerSelection;
    } else if (playerSelection === computerSelection) {
        round = 'Tie'
    } else {
        round = 'Broken'
    } return round;
}

let playerScore = 0;
let computerScore = 0;

function updateGame(gameResult) {
    if (gameResult.includes('Alphamind')) {
        computerScore++;
    } else if (gameResult.includes('You')) {
        playerScore++;
    }
    return 'You have' + playerScore + ' wins. Alphamind has ' + computerScore;
}

function whoWon() {
    let winner;
    if (computerScore > playerScore) {
        winner = "Alphamind beat you. Just like it would at SC2.";
    } else if (playerScore > computerScore) {
        winner = "Very nice. You beat Alphamind.";
    } else { winner = "Tie ball game. "}return console.log("" + winner + ' You won ' + playerScore + ' and Alphamind won ' + computerScore);
}
function game() {
    let i = 0;
    checkplayerSelection:
    do {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = computerPlay();
        let gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);
        console.log(updateGame(gameResult));
        i++;
    } while(i < 5);
 whoWon();
}