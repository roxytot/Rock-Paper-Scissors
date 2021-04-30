let countGames = 0;
let count = {
	win: 0,
	lose: 0,
	draw: 0,
};
let userChoice;
// let compChoice;
let playerName = "";
let moveComputer = ["rock", "paper", "scissors"];
let result = {
	win: "YOU WIN",
	lose: "YOU LOSE",
	draw: "IT'S a DRAW",
};
let userName = document.querySelector("#username");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let computer = document.querySelector("#choice");
let resultText = document.querySelector("#result");
let letters = /^[A-Za-z]+$/;
let valid = false;

function isUpperCaseAt(text) {
	if (text[0] === text[0].toUpperCase()) {
		return true;
	}
	else {
		return false;
	}
}

userName.addEventListener("input", () => {
	let usrName = userName.value;
	if (
		usrName.length <= 10 &&
		isUpperCaseAt(usrName) &&
		usrName.charAt(0).match(letters)
	) {
		valid = true;
	} else {
		valid = false;
	}
});

userName.addEventListener("keydown", function (event) {
	if (event.code === "Enter") {
		event.preventDefault();
		if (valid) {
			document.getElementById("start").click();
		} else
			alert(
				"Username must start with a capital and have maximum 10 characters!"
			);
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
	playerName = userName.value;
	document.getElementById("usr").innerHTML = "Hi, " + playerName + "!";
	document.getElementById("score").innerHTML =
		"Games won: " + count.win + " out of " + countGames;
	document.getElementsByClassName("welcome")[0].style.display = "none";
	document.getElementsByClassName("content")[0].style.display = "block";
}

function randomMoveComp() {
	let randNumber = Math.floor(Math.random() * 3);
	computer.innerText = ` ${moveComputer[randNumber]}`
	return moveComputer[randNumber];
}

function keepScoreGame() {
	let result = getWinner(userChoice, compChoice);
	countGames++;
	if (result === 0) {
		count.draw = count.draw + 1;
		resultText.innerText = "It's a draw. Try again";
		document.getElementById("score").innerHTML =
		"Games won: " + count.win + " out of " + countGames;
	} else if (result === 1) {
		count.win = count.win + 1;
		resultText.innerText = "You won! :)";
		document.getElementById("score").innerHTML =
		"Games won: " + count.win + " out of " + countGames;
	} else if (result === -1) {
		count.lose = count.lose + 1;
		resultText.innerText = "You lost :( ";
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

// let scoreBoard = document.createElement("h4");
// scoreBoard.innerText = `You have played ${countGames} times - draws ${count[2][1]}, wins ${count[0][1]}, losses ${count[1][1]}`;
// document.body.appendChild(scoreBoard);
