let handSigns = ["Rock", "Paper", "Scissors"];

const  p = document.getElementById("para");
const  player = document.getElementById("player");
const  computer = document.getElementById("computer");
function getRandomNUmber () {
	return Math.floor(Math.random() * 3)
}

function getComputerChoice() {
	const choice = handSigns[getRandomNUmber()];

	return choice;

}



function getUserChoice() {
	let userInput = +(prompt("Enter a number btw 0 and 2: Assuming rock is 0, paper is 1, and scissors is 2"));
	if(userInput === 0) {
		return handSigns[0]
	}
	if (userInput === 1){
		return handSigns[1];
	}
	if(userInput === 2) {
		return handSigns[2];
	}
}

function game(computerSelection, playerSelection) {
	
	let result = compareChoice(computerSelection, playerSelection);
	player.textContent += playerSelection + " ";
	computer.textContent += computerSelection+ " ";
	para.textContent += result + " ";
	
}



function compareChoice(computerChoice, userChoice) {
	
	//draw
	if(computerChoice === userChoice ) {
		return ("A draw");
	}
	//for computer wins
	else if( computerChoice === "Rock" && userChoice === "Scissors"){
		return ("Computer wins");
	}
	else if( computerChoice === "Paper" && userChoice === "Rock"){
		return ("Computer wins")
	}
	else if( computerChoice === "Scissors" && userChoice === "Paper"){
		return ("Computer wins")
	}

	// for user wins

	else if( userChoice === "Rock" && computerChoice === "Scissors"){
		return ("User wins")
	}
	else if( userChoice === "Paper" && computerChoice === "Rock"){
		return ("User wins")
	}
	else if( userChoice === "Scissors" && computerChoice === "Paper"){
		return ("User wins")
	}
}



function playGame() {
		
		for(let i = 0; i  < 5;i++) {

			game(getComputerChoice(), getUserChoice())
		}
		
}

playGame();
