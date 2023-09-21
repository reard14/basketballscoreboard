const homeBtnAddOne = document.querySelector('[data-action="home-addOne"]');
const homeBtnAddTwo = document.querySelector('[data-action="home-addTwo"]');
const homeBtnAddThree = document.querySelector('[data-action="home-addThree"]');
const guestBtnAddOne = document.querySelector('[data-action="guest-addOne"]');
const guestBtnAddTwo = document.querySelector('[data-action="guest-addTwo"]');
const guestBtnAddThree = document.querySelector(
	'[data-action="guest-addThree"]'
);
const newGameButton = document.querySelector('[data-action="new-game"]');
const teamAScoreDisplay = document.querySelector('#teamA .score');
const teamBScoreDisplay = document.querySelector('#teamB .score');
const homeContainer = document.querySelector('#teamA');
const guestContainer = document.querySelector('#teamB');

// Define variables to store team scores
let teamAScore = 0;
let teamBScore = 0;

// Function to update team scores and display
function updateScore(team, increment) {
	if (team === 'teamA') {
		teamAScore += increment;
		teamAScoreDisplay.textContent = teamAScore;
	} else if (team === 'teamB') {
		teamBScore += increment;
		teamBScoreDisplay.textContent = teamBScore;
	}

	// Call a function to check for the winner or tie and update the display
	updateDisplay();
}

// Function to check for the winner or tie and update the display
function updateDisplay() {
	// Highlight the winning team or indicate a tie
	if (teamBScore === teamAScore) {
		// It's a tie
		homeContainer.classList.remove('highlight');
		guestContainer.classList.remove('highlight');
		homeContainer.classList.add('equal');
		guestContainer.classList.add('equal');
	}
	if (teamAScore && teamAScore > teamBScore) {
		homeContainer.classList.remove('equal');
		guestContainer.classList.remove('equal');
		guestContainer.classList.remove('highlight');
		homeContainer.classList.add('highlight');
	} else if (teamBScore > teamAScore) {
		homeContainer.classList.remove('equal');
		guestContainer.classList.remove('equal');
		homeContainer.classList.remove('highlight');
		guestContainer.classList.add('highlight');
	}
}

// Function to start a new game
function startNewGame() {
	teamAScore = 0;
	teamBScore = 0;
	teamAScoreDisplay.textContent = '0';
	teamBScoreDisplay.textContent = '0';

	// Clear winner/tie highlight
	homeContainer.classList.remove('highlight');
	guestContainer.classList.remove('highlight');
	homeContainer.classList.remove('equal');
	guestContainer.classList.remove('equal');
}

// Event listeners for button clicks
homeBtnAddOne.addEventListener('click', function () {
	updateScore('teamA', 1);
});

homeBtnAddTwo.addEventListener('click', function () {
	updateScore('teamA', 2);
});

homeBtnAddThree.addEventListener('click', function () {
	updateScore('teamA', 3);
});

guestBtnAddOne.addEventListener('click', function () {
	updateScore('teamB', 1);
});

guestBtnAddTwo.addEventListener('click', function () {
	updateScore('teamB', 2);
});

guestBtnAddThree.addEventListener('click', function () {
	updateScore('teamB', 3);
});

// Event listener for the "New Game" button
newGameButton.addEventListener('click', function () {
	startNewGame();
});
