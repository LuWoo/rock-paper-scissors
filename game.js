const choice = ["rock", "paper", "scissors"];
var scores = [0,0]; //[Player, Computer]

function computerPlay() {
    var computerSelectionNumber = Math.floor(Math.random() * 3);
    return computerSelectionNumber;
}

function playerWins(computerSelectionNumber, playerSelectionNumber) {
    score("player");
    outcomeText(`You win! ${choice[playerSelectionNumber]} beats ${choice[computerSelectionNumber]}`)
}

function playerLoses(computerSelectionNumber, playerSelectionNumber) {
    score("comp");
    outcomeText(`You lose! ${choice[playerSelectionNumber]} loses to ${choice[computerSelectionNumber]}`)
}

function score(winner) {
    if (winner=="comp") {
        scores[1]+=1;
    }
    else if (winner=="player") {
        scores[0]+=1;
    }
    else {
        return
    }
    const scoresParagraph = document.querySelector('#scores');
    scoresText = `You: ${scores[0]}     Computer: ${scores[1]}`;
    scoresParagraph.textContent = scoresText;
    if (scores.some(el => el > 4)) {
        const final = document.querySelector('#final-result');
        final.textContent = `The winner is: ${winner}!`;
        scores = [0,0]
    }
}

function outcomeText(textToShow) {
    const outcomeParagraph = document.querySelector('#outcome');

    outcomeParagraph.textContent = textToShow;
}

function playGame(playerSelection, computerSelectionNumber) {
    var playerSelectionNumber
    if (playerSelection == "rock") {
        playerSelectionNumber = 0;
    } else if (playerSelection == "paper") {
        playerSelectionNumber = 1;
    } else if (playerSelection == "scissors") {
        playerSelectionNumber = 2;
    }

    if (playerSelectionNumber == computerSelectionNumber) {
        outcomeText(`It's a draw! You both chose ${choice[playerSelectionNumber]}`)
    } else if (playerSelectionNumber == 0) {
        if (computerSelectionNumber == 1) {
            playerLoses(computerSelectionNumber, playerSelectionNumber)
        } else if (computerSelectionNumber == 2) {
            playerWins(computerSelectionNumber, playerSelectionNumber)
        }
    } else if (playerSelectionNumber == 1) {
        if (computerSelectionNumber == 2) {
            playerLoses(computerSelectionNumber, playerSelectionNumber)
        } else if (computerSelectionNumber == 0) {
            playerWins(computerSelectionNumber, playerSelectionNumber)
        }
    } else if (playerSelectionNumber == 2) {
        if (computerSelectionNumber == 0) {
            playerLoses(computerSelectionNumber, playerSelectionNumber)
        } else if (computerSelectionNumber == 1) {
            playerWins(computerSelectionNumber, playerSelectionNumber)
        }
    }

}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id, computerPlay());
    })
})