let count = {
	win: 0,
	lose: 0,
	draw: 0,
};
let countGames = 0;
let userChoice;
let playerName = "";
let letters = /^[A-Za-z]+$/;
let valid = false;
let moveComputer = ["rock", "paper", "scissors"];
let userName = document.querySelector("#username");
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");
let computer = document.querySelector("#choice");
let resultText = document.querySelector("#result");

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
				"Username must start with a capital letter and contain no more than 10 characters!"
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
	document.getElementsByClassName("user-details")[0].style.display = "flex";
	playerName = userName.value;
	document.getElementById("usr").innerHTML = "Hi, " + playerName + "!";
	document.getElementById("score").innerHTML =
		"Games won: " + count.win + " out of " + countGames;
	document.getElementsByClassName("welcome")[0].style.display = "none";
	document.getElementsByClassName("content")[0].style.display = "flex";
}

function randomMoveComp() {
	let randNumber = Math.floor(Math.random() * 3);
	computer.innerText = ` ${moveComputer[randNumber]}`;
	document.getElementById("choice").style.color = "#fba746";
	return moveComputer[randNumber];
}

function keepScoreGame() {
	let result = getWinner(userChoice, compChoice);
	countGames++;
	if (result === 0) {
		count.draw = count.draw + 1;
		resultText.innerText = "It's a draw.";
		document.getElementById("score").innerHTML =
			"Games won: " + count.win + " out of " + countGames;
	} else if (result === 1) {
		count.win = count.win + 1;
		resultText.innerText = "You won! :)";
		document.getElementById("score").innerHTML =
			"Games won: " + count.win + " out of " + countGames;
	} else if (result === -1) {
		count.lose = count.lose + 1;
		resultText.innerText = "You lost :(. Try again! ";
		document.getElementById("score").innerHTML =
			"Games won: " + count.win + " out of " + countGames;
	}
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

function isUpperCaseAt(text) {
	if (text[0] === text[0].toUpperCase()) {
		return true;
	} else {
		return false;
	}
}

function resetGame() {
	count = {
		win: 0,
		lose: 0,
		draw: 0,
	};
	countGames= 0;
	userName.value = "";
	computer.innerText = "";
	document.getElementsByClassName("user-details")[0].style.display = "none";
	document.getElementsByClassName("welcome")[0].style.display = "block";
	document.getElementsByClassName("content")[0].style.display = "none";
}
