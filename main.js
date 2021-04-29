let countGames = 0;
let count = {
	win: 0,
	lose: 0,
	draw: 0,
};
let userChoice;
let compChoice;
let playerName = "";
let moveComputer = ["rock", "paper", "scissors"];
let result = {
	win: "YOU WIN",
	lose: "YOU LOSE",
	draw: "IT'S a DRAW",
};
let startBtn = document.getElementById("username");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let gameResult = document.querySelector("#result");
const list = document.querySelectorAll("li");

startBtn.addEventListener("keydown", function (event) {
	if (event.code === "Enter") {
		event.preventDefault();
		document.getElementById("start").click();
	}
});

rockButton.addEventListener("click", () => {
	userChoice = "rock";
	compChoice = randomMoveComp();
	keepScoreGame();
});

paperButton.addEventListener("click", () => {
	userChoice = "paper";
	compChoice = randomMoveComp();
	keepScoreGame();
});

scissorsButton.addEventListener("click", () => {
	userChoice = "scissors";
	compChoice = randomMoveComp();
	keepScoreGame();
});

function startGame() {
	document.getElementsByClassName("name")[0].style.display = "block";
	playerName = startBtn.value;
	document.getElementById("usr").innerHTML = "Hi, " + playerName + "!";
	document.getElementById("score").innerHTML =
		"Games won: " + count.win + " out of " + countGames;
	document.getElementsByClassName("welcome")[0].style.display = "none";
	document.getElementsByClassName("content")[0].style.display = "block";
}

// compText = document.querySelector(".computer");
// countText = document.querySelector(".count");

// compText.innerText += ` ${compChoice}`;
// countText.innerText += ` ${countGames}`;

function randomMoveComp() {
	let randNumber = Math.floor(Math.random() * 3);
	console.log(`Computer chose ${randNumber}, i.e. ${moveComputer[randNumber]}`);
	return moveComputer[randNumber];
}

function keepScoreGame() {
	console.log(userChoice);
	let result = getWinner(userChoice, compChoice);
	console.log(`answer1 ${userChoice}`);
	countGames++;
	console.log(count.win);
	console.log(count.lose);
	console.log(count.draw);
	if (result === 0) {
		count.draw += 1;
		list[2].innerText = count.draw;
		document.getElementById("score").innerHTML =
			"Games won: " + count.win + " out of " + countGames;
	} else if (result === 1) {
		count.win += 1;
		list[0].innerText = count.win;
		document.getElementById("score").innerHTML =
			"Games won: " + count.win + " out of " + countGames;
	} else if (result === -1) {
		count.lose += 1;
		list[1].innerText = count.lose;
		document.getElementById("score").innerHTML =
			"Games won: " + count.win + " out of " + countGames;
	}
	console.log(result);
}

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

// let letters = /^[A-Za-z]+$/;
// let valid = false;

// function isUpperCaseAt(text, position) {
// 	return true;
// }

// let scoreBoard = document.createElement("h4");
// scoreBoard.innerText = `You have played ${countGames} times - draws ${count[2][1]}, wins ${count[0][1]}, losses ${count[1][1]}`;
// document.body.appendChild(scoreBoard);

// let userName = document.querySelector("#username");
// console.log(userName.value);
// userName.addEventListener("input", () => {
// 	let usrName = userName.innerText;
// 	if (
// 		usrName.length <= 10 &&
// 		isUpperCaseAt(usrName, 0) &&
// 		usrName.charAt(0).match(letters)
// 	) {
// 		valid = true;
// 	}
// });
