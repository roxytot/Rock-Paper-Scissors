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
    let randNumber = Math.floor(Math.random() * 2)
    return randNumber;
    console.log
}

let answerPlayer1 = prompt("Enter your move");
let answerRandComp = randomMoveComp;
let result = getWinner(answerPlayer1, answerRandComp);
alert(`The result is ${result}`);