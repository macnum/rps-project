const handSigns = ["rock", "paper", "scissors"];
const selection = document.querySelector('.selection');

const  player = document.getElementById("user");
const  computer = document.getElementById("computer");
const  wins = document.querySelector('#win')


function getRandomNUmber () {
	return Math.floor(Math.random() * 3)
}


function getComputerChoice() {
	const choice = handSigns[getRandomNUmber()];
	return choice;

}




selection.addEventListener('click' ,(e) => {
	let user = e.target.id;	
	checkSelection(getComputerChoice(), user);
	
})

function checkSelection(computerChoice , userChoice) {
	console.log(computerChoice , "co") 
	console.log(userChoice)
	player.textContent = `Player: ${userChoice}`;
	computer.textContent = `Computer: ${computerChoice}`;
	if(computerChoice === "rock" && userChoice === "scissors" || 
	computerChoice === "paper" && userChoice === "rock" ||
	computerChoice === "scissors" && userChoice === "paper") {
		wins.textContent = "Computer wins";
		
	}
	else if(userChoice === "rock" && computerChoice === "scissors" || 
		userChoice === "paper" && computerChoice === "rock" ||
		userChoice === "scissors" && computerChoice === "paper") {
			wins.textContent = "User wins";
		}
	else {
		wins.textContent = "This is a draw";
	}	

}