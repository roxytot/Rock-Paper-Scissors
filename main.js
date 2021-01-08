//console.log("this is a test");

// TASK 1 
// let playerMove = "paper";
// let computerMove = "scissors";
// if (playerMove === "rock") {
//     if (computerMove === "rock") {
//         console.log('draw');
//     } else if (computerMove === "paper") {
//         console.log("lose");
//     } else {
//         console.log("win");
//     }
// } else if (playerMove === "paper") {
//     if (computerMove === "rock") {
//         console.log('win');
//     } else if (computerMove === "paper") {
//         console.log("draw");
//     } else {
//         console.log("lose");
//     }
// } else if (playerMove === "scissors") {
//     if (computerMove === "rock") {
//         console.log('lose');
//     } else if (computerMove === "paper") {
//         console.log("win");
//     } else {
//         console.log("draw");
//     }
// }

// TASK 2 - Function

// //results: 0 is draw, 1 is win, -1 is lose
// // player 1 is playerMove, player2 is computerMove
// function getWinner(player1, player2) {
//     if (player1 === "rock") {
//         if (player2 === "rock") {
//             return 0;
//         } else if (player2 === "paper") {
//             return -1;
//         } else {
//             return 1;
//         }
//     } else if (player1 === "paper") {
//         if (player2 === "rock") {
//             return 1;
//         } else if (player2 === "paper") {
//             return 0;
//         } else {
//             return -1;
//         }
//     } else if (player1 === "scissors") {
//         if (player2 === "rock") {
//             return -1;
//         } else if (player2 === "paper") {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }

// let result = getWinner("rock", "rock");
// console.log(`The result is ${result}`);

// TASK 3
//results: 0 is draw, 1 is win, -1 is lose
// player 1 is playerMove, player2 is computerMove
// function getWinner(player1, player2) {
//     if (player1 === "rock") {
//         if (player2 === "rock") {
//             return 0;
//         } else if (player2 === "paper") {
//             return -1;
//         } else {
//             return 1;
//         }
//     } else if (player1 === "paper") {
//         if (player2 === "rock") {
//             return 1;
//         } else if (player2 === "paper") {
//             return 0;
//         } else {
//             return -1;
//         }
//     } else if (player1 === "scissors") {
//         if (player2 === "rock") {
//             return -1;
//         } else if (player2 === "paper") {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }

// let answer = prompt("Enter your move");
// let result = getWinner(answer, "rock");
// alert(`The result is ${result}`);


// TASK 4
// function getWinner(player1, player2) {
//     if (player1 === "rock") {
//         if (player2 === "rock") {
//             return 0;
//         } else if (player2 === "paper") {
//             return -1;
//         } else {
//             return 1;
//         }
//     } else if (player1 === "paper") {
//         if (player2 === "rock") {
//             return 1;
//         } else if (player2 === "paper") {
//             return 0;
//         } else {
//             return -1;
//         }
//     } else if (player1 === "scissors") {
//         if (player2 === "rock") {
//             return -1;
//         } else if (player2 === "paper") {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }

// let moveComputer = ["scissors", "paper", "rock"]

// function randomMoveComp() {
//     let randNumber = Math.floor(Math.random() * 2); //selecting random integer number between 0 and 2
//     console.log(`Computer chose ${randNumber} from our array`); //printing random number to console
//     console.log(moveComputer[randNumber]); // print random answer (string)
//     return moveComputer[randNumber]; // return random answer
// }

// let answerPlayer1 = prompt("Enter your move");
// let answerRandComp = randomMoveComp();
// let result = getWinner(answerPlayer1, answerRandComp);
// alert(`The result is ${result}`);


// TASK 5
// function getWinner(player1, player2) {
//     if (player1 === "rock") {
//         if (player2 === "rock") {
//             return 0;
//         } else if (player2 === "paper") {
//             return -1;
//         } else {
//             return 1;
//         }
//     } else if (player1 === "paper") {
//         if (player2 === "rock") {
//             return 1;
//         } else if (player2 === "paper") {
//             return 0;
//         } else {
//             return -1;
//         }
//     } else if (player1 === "scissors") {
//         if (player2 === "rock") {
//             return -1;
//         } else if (player2 === "paper") {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }

// let moveComputer = ["scissors", "paper", "rock"]

// function randomMoveComp() {
//     let randNumber = Math.floor(Math.random() * 2); //selecting random integer number between 0 and 2
//     console.log(`Computer chose ${randNumber} from our array`); //printing random number to console
//     console.log(moveComputer[randNumber]); // print random answer (string)
//     return moveComputer[randNumber]; // return random answer
// }

// let confirmChoice = confirm("Do you want to play Rock-Paper-Scissors?");

// // This allow player to keep playing if answer is ok
// while (confirmChoice) {
//     let answerPlayer1 = prompt("Enter your move");
//     let answerRandComp = randomMoveComp();
//     let result = getWinner(answerPlayer1, answerRandComp);
//     alert(`The result is ${result}`);
//     let confirmChoice = confirm("Do you want to keep playing play?");
// }

// TASK 6
// function getWinner(player1, player2) {
//     if (player1 === "rock") {
//         if (player2 === "rock") {
//             return 0;
//         } else if (player2 === "paper") {
//             return -1;
//         } else {
//             return 1;
//         }
//     } else if (player1 === "paper") {
//         if (player2 === "rock") {
//             return 1;
//         } else if (player2 === "paper") {
//             return 0;
//         } else {
//             return -1;
//         }
//     } else if (player1 === "scissors") {
//         if (player2 === "rock") {
//             return -1;
//         } else if (player2 === "paper") {
//             return 1;
//         } else {
//             return 0;
//         }
//     }
// }

// let moveComputer = ["scissors", "paper", "rock"]

// function randomMoveComp() {
//     let randNumber = Math.floor(Math.random() * 2); //selecting random integer number between 0 and 2
//     console.log(`Computer chose ${randNumber} from our array`); //printing random number to console
//     console.log(moveComputer[randNumber]); // print random answer (string)
//     return moveComputer[randNumber]; // return random answer
// }

// let confirmChoice = confirm("Do you want to play Rock-Paper-Scissors?");
// console.log(confirmChoice);
// // This allow player to keep playing if answer is ok

// let countGames = 0;
// let countWins = 0;
// let countLosses = 0;
// let countDraws = 0;
// //let answerRanComp;
// // console logs for testing

// while (confirmChoice) {
//     let answerPlayer1 = prompt("Enter your move");
//     let answerRandComp = randomMoveComp();
//     console.log(`Comp answer is ${answerRandComp}`);
//     let result = getWinner(answerPlayer1, answerRandComp);
//     console.log(result);
//     countGames++;
//     console.log(countGames);
//     if (result === 0) {
//         countDraws++;
//     } else if (result === 1) {
//         countWins++;
//     } else if (result === -1) {
//         countLosses++;
//     }
//     console.log(`draws ${countDraws}, wins ${countWins}, losses ${countLosses}`);
//     alert(`The result is ${result} - You played ${countGames} time(s) - W:${countWins}|D:${countDraws}|L:${countLosses}`);
//     confirmChoice = confirm("Do you want to keep playing play?");
//     console.log(confirmChoice);
// } 


// TASK 7  - Refactor to HTML
function getWinner(player1, player2) {
    if (player1 === "rock") {
        if (player2 === "rock") {
            return 0;
        } else if (player2 === "paper") {
            return -1;
        } else {
            return 1;
        }
    } else if (player1 === "paper") {
        if (player2 === "rock") {
            return 1;
        } else if (player2 === "paper") {
            return 0;
        } else {
            return -1;
        }
    } else if (player1 === "scissors") {
        if (player2 === "rock") {
            return -1;
        } else if (player2 === "paper") {
            return 1;
        } else {
            return 0;
        }
    }
}

let moveComputer = ["scissors", "paper", "rock"]

function randomMoveComp() {
    let randNumber = Math.floor(Math.random() * 2); //selecting random integer number between 0 and 2
    console.log(`Computer chose ${randNumber} from our array`); //printing random number to console
    console.log(moveComputer[randNumber]); // print random answer (string)
    return moveComputer[randNumber]; // return random answer
}

let question = document.createElement("h1");
question.innerText = "Do you want to play Rock-Paper-Scissors?";
document.body.appendChild(question);

//let confirmChoice = confirm("Do you want to play Rock-Paper-Scissors?");
//console.log(confirmChoice);

// This allow player to keep playing if answer is ok

/*
let countGames = 0;
let countWins = 0;
let countLosses = 0;
let countDraws = 0;
//let answerRanComp;
// console logs for testing

while (confirmChoice) {
    let answerPlayer1 = prompt("Enter your move");
    let answerRandComp = randomMoveComp();
    console.log(`Comp answer is ${answerRandComp}`);
    let result = getWinner(answerPlayer1, answerRandComp);
    console.log(result);
    countGames++;
    console.log(countGames);
    if (result === 0) {
        countDraws++;
    } else if (result === 1) {
        countWins++;
    } else if (result === -1) {
        countLosses++;
    }
    console.log(`draws ${countDraws}, wins ${countWins}, losses ${countLosses}`);
    alert(`The result is ${result} - You played ${countGames} time(s) - W:${countWins}|D:${countDraws}|L:${countLosses}`);
    confirmChoice = confirm("Do you want to keep playing play?");
    console.log(confirmChoice);
} 

*/