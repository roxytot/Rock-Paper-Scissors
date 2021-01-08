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
function getWinner(player1, player2) {  //player2 computer
    if (player1 === "rock") {
        if (player2 === "rock") {
            console.log('draw');
            return 0;
        } else if (player2 === "paper") {
            return -1;
            console.log("lose");
        } else {
            return 1;
            console.log("win");
        }
    } else if (player1 === "paper") {
        if (player2 === "rock") {
            return 1;
            console.log('win');
        } else if (player2 === "paper") {
            return 0;
            console.log("draw");
        } else {
            return -1;
            console.log("lose");
        }
    } else if (player1 === "scissors") {
        if (player2 === "rock") {
            return -1;
            console.log('lose');
        } else if (player2 === "paper") {
            return 1;
            console.log("win");
        } else {
            return 0;
            console.log("draw");
        }
    }
}

let result = getWinner("rock", "rock");
getWinner();
console.log(`The result is ${result}`);