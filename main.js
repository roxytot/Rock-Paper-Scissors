console.log("this is a test");

let playerMove = "paper";
let computerMove = "scissors";


// TASK 1 
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


function getWinner(player1, player2) {  //player2 computer
    if (player1 === "rock") {
        if (player2 === "rock") {
            console.log('draw');
        } else if (player2 === "paper") {
            console.log("lose");
        } else {
            console.log("win");
        }
    } else if (player1 === "paper") {
        if (player2 === "rock") {
            console.log('win');
        } else if (player2 === "paper") {
            console.log("draw");
        } else {
            console.log("lose");
        }
    } else if (player1 === "scissors") {
        if (player2 === "rock") {
            console.log('lose');
        } else if (player2 === "paper") {
            console.log("win");
        } else {
            console.log("draw");
        }
    }
}

getWinner(playerMove, computerMove);