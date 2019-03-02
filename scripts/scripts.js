let playerScore = 0;
let computerScore = 0;

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

var computerSelection = computerPlay();

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

function updateGame(result) {
    if (result.includes('Alphamind')) {
        computerScore++;
    } else if (result.includes('You')) {
        playerScore++;
    }

  return 'You have ' + playerScore + ' wins. Alphamind has ' + computerScore + '.';
}


const btns = document.querySelectorAll('#btn');
const results = document.querySelector('#container')

for (let i = 0; i < btn.length; i++) {
    btns[i].addEventListener('click', game);
}

const score = document.createElement('p');
const current = document.createElement('p');
const final = document.createElement('p');

function game(e) {
    let playerSelection = e.target.innerText;
    let result = playRound(playerSelection, computerPlay());
    let scores = updateGame(result);
    current.textContent = result;
    score.textContent = scores;
    results.appendChild(current);
    results.appendChild(score);

    if (computerScore == 5) {
        final.textContent = "Alphamind beat you. Just like it would at SC2.";
        results.appendChild(final);
        for (let i = 0; i < btn.length; i++) {
            btns[i].disabled = true;
        }
    }
    else if (playerScore == 5) {
        final.textContent = "Very nice. You beat Alphamind.";
        results.appendChild(final);
        for (let i = 0; i < btn.length; i++) {
            btns[i].disabled = true;
        }
    }
}
