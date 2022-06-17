const choice = ["rock", "paper", "scissors"]

function computerPlay() {
    var computerSelectionNumber = Math.floor(Math.random() * 3);
    return computerSelectionNumber;
}

function playerWins(computerSelectionNumber, playerSelectionNumber) {
    console.log(`You win! ${choice[playerSelectionNumber]} beats ${choice[computerSelectionNumber]}`)
}

function playerLoses(computerSelectionNumber, playerSelectionNumber) {
    console.log(`You lose! ${choice[playerSelectionNumber]} loses to ${choice[computerSelectionNumber]}`)
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
        console.log(`It's a draw! You both chose ${choice[playerSelectionNumber]}`)
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

function game() {
    for (let i = 0; i < 5; i++) {
        var playerSelection = prompt("Make a choice!").toLowerCase();
        playGame(playerSelection, computerPlay());
    }
}

game()