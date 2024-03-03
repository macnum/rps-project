const handSigns = ["rock", "paper", "scissors"];
const selection = document.querySelector('.selection');

const  player = document.getElementById("user");
const  computer = document.getElementById("computer");
const  wins = document.querySelector('#win')
const played = document.querySelector("#played")
const total = document.querySelector("#total")
let count = 0;
let userCount = 0;
let computerCount = 0;

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
	played.textContent = `Played ${count}`;
	if(count === 5) {
		
		if(userCount === computerCount) {
			total.innerHTML = `A Tie -try again &#12551;`;

		}
		else if (userCount > computerCount) {
			total.innerHTML = `Who won: You won &#12951`;
		}
		else if (computerCount > userCount){
			total.innerHTML = `Who won: Computer wins &#128546`;
		}
		count = 0;
		userCount =0;
		computerCount =0;
		

	}
	
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
		count++;
		computerCount++;		
	}
	else if(userChoice === "rock" && computerChoice === "scissors" || 
		userChoice === "paper" && computerChoice === "rock" ||
		userChoice === "scissors" && computerChoice === "paper") {
			wins.textContent = "User wins";
			count++;
			userCount++
		}
	else {
		wins.textContent = "This is a draw";
		count++;
	}	

}