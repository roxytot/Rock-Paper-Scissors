console.log("this is a test");

let playerMove = "rock";
let computerMove = "paper";

if (playerMove === "rock") {
    if (computerMove === "rock") {
        console.log('draw');
    } else if (computerMove === "paper") {
        console.log("lose");
    } else {
        console.log("win");
    }
} else if (playerMove === "paper") {
    if (computerMove === "rock") {
        console.log('win');
    } else if (computerMove === "paper") {
        console.log("draw");
    } else {
        console.log("lose");
    }
} else if (playerMove === "scisors") {
    if (computerMove === "rock") {
        console.log('win');
    } else if (computerMove === "paper") {
        console.log("draw");
    } else {
        console.log("lose");
    }
}
