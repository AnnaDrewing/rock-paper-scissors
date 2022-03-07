const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice; 
let computerChoice;
let result;

possibleChoices.forEach(choice => choice.addEventListener('click', (e) => {
cleanSlate();
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
displayImages();
setTimeout(getResult, 800);
}));

function generateComputerChoice() {
	const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
	
	if (randomNumber === 1) {
		computerChoice = 'rock';
	}
	if (randomNumber === 2) {
		computerChoice = 'scissors';
	}
	if (randomNumber === 3) {
		computerChoice = 'paper';
	}
	computerChoiceDisplay.innerHTML = computerChoice;
}
function displayImages() {
	setVs();
	setTimeout(getUserImg, 400);
	setTimeout(getComputerImg, 600);
}

function getUserImg() {
	if (userChoice == 'rock'){
		document.getElementById('firstImg').setAttribute('src', 'images/rock.png');
	}
	if (userChoice == 'paper'){
		document.getElementById('firstImg').setAttribute('src', 'images/paper.png');
	}
	if (userChoice == 'scissors'){
		document.getElementById('firstImg').setAttribute('src', 'images/scissors.png');
	}
}

function getComputerImg() {
	if (computerChoice == 'rock'){
		document.getElementById('secondImg').setAttribute('src', 'images/rock.png');
	}
	if (computerChoice== 'paper'){
		document.getElementById('secondImg').setAttribute('src', 'images/paper.png');
	}
	if (computerChoice == 'scissors'){
		document.getElementById('secondImg').setAttribute('src', 'images/scissors.png');
	}
}

function setVs() {
	document.getElementById('vs').textContent = 'vs';
}
function getResult() {
	if (computerChoice == userChoice) {
		result = 'It\'s a draw'; 
	}
	if (computerChoice == 'rock' && userChoice == 'paper') {
		result = 'You won'; 
	}
	if (computerChoice == 'rock' && userChoice == 'scissors') {
		result = 'You lost'; 
	}
	if (computerChoice == 'paper' && userChoice == 'rock') {
		result = 'You lost'; 
	}
	if (computerChoice == 'paper' && userChoice == 'scissors') {
		result = 'You won';
	}
	if (computerChoice == 'scissors' && userChoice == 'paper') {
		result = 'You lost'; 
	}
	if (computerChoice == 'scissors' && userChoice == 'rock') {
		result = 'You won';
	}
	resultDisplay.innerHTML = result;
	setAnimation();
}

function setAnimation() {
	if (resultDisplay.textContent == 'You won') {
		console.log('Won');
		resultDisplay.style.animation = "winningAnim 2s ease-in";
		resultDisplay.style.animationPlayState = "running";
		resultDisplay.style.color = "green";
	}
	if (resultDisplay.textContent == 'You lost') {
		console.log('Lost');
		resultDisplay.style.animation = "losingAnim 2s ease-out";
		resultDisplay.style.animationPlayState = "running";
		resultDisplay.style.color = "red";
	}
	if (resultDisplay.textContent == 'It\'s a draw') {
		console.log('Draw');
		resultDisplay.style.animation = "drawAnim 2s linear";
		resultDisplay.style.color = "black";
	}
}

function cleanSlate() {
	document.getElementById('firstImg').setAttribute('src', 'images/blank.png');
	document.getElementById('secondImg').setAttribute('src', 'images/blank.png');
	userChoiceDisplay.textContent = '';
	computerChoiceDisplay.textContent = '';
	document.getElementById('vs').textContent = '';
	resultDisplay.textContent = '';
	resultDisplay.style.animationPlayState = "paused";
}