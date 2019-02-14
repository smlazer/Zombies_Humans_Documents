function computerPlay() {
    var choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        picked = 'Zombies';
    } else if (choice === 1) {
        picked = 'Humans';
    } else if (choice === 2) {
        picked = 'Documents';
    }
    return picked;
}


function playRound(playerSelection, computerSelection) {
    let round;
    if (playerSelection == 'Zombies' && computerSelection == 'Documents' ||
        playerSelection == 'Humans' && computerSelection == 'Zombies' ||
        playerSelection == 'Documents' && computerSelection == 'Humans') {
        round = 'Alphamind wins, ' + computerSelection + ' beat ' + playerSelection;
    } else if (playerSelection == 'Documents' && computerSelection == 'Zombies' ||
        playerSelection == 'Zombies' && computerSelection == 'Humans' ||
        playerSelection == 'Humans' && computerSelection == 'Documents') {
        round = 'You win, ' + playerSelection + ' beat ' + computerSelection;
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
        let playerSelection = prompt("Zombies, Documents, or Humans?");
        let computerSelection = computerPlay();
        let gameResult = playRound(playerSelection, computerSelection);
        console.log(gameResult);
        console.log(updateGame(gameResult));
        i++;
    } while(i < 5);
 whoWon();
}