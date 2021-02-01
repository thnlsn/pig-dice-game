'use strict';

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// Selectors for DOM elements
const score0El = document.getElementById('score--0'); // DOM element for score 0
const score1El = document.getElementById('score--1'); // DOM element for score 1
const dieEl = document.querySelector('.svg'); // DOM element for die SVG (not path)
const current0El = document.getElementById('current--0'); // DOM element for current 0
const current1El = document.getElementById('current--1'); // DOM element for current 1
const background = document.querySelector('.active-player'); // Background

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// Starting conditions
score0El.textContent = 0; // Initialize scores as 0
score1El.textContent = 0; // Initialize scores as 0

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// Persisting state
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// Functions for buttons
const switchPlayers = () => {
  // Remove the current background class and the white background from active player
  background.classList.remove(`active-player--${activePlayer}`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');

  // Switch active player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Add the new background class and the white background to new active player
  background.classList.add(`active-player--${activePlayer}`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle('player--active');
};

const roll = () => {
  if (playing) {
    // Generate random number
    const result = Math.trunc(Math.random() * 6); // Random # 0-5
    dieEl.innerHTML = dice[result]; // Use that number to search array and set the SVG

    // Check if die is 0 (1 on the SVG) but only if the game is not over
    if (result === 0) {
      // Set currentScore to 0
      currentScore = 0;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
      // Switch active player
      switchPlayers();
    } else {
      // Add roll to currently active players score
      currentScore += result + 1;
      document.getElementById(
        `current--${activePlayer}`
      ).textContent = currentScore;
    }
  }
};

const hold = () => {
  // Set the score of the current player to whatever currentScore is
  scores[activePlayer] += currentScore;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];

  // Set currentScore to 0
  currentScore = 0;
  document.getElementById(
    `current--${activePlayer}`
  ).textContent = currentScore;

  if (scores[activePlayer] >= 10) {
    // activePlayer wins game!
    playing = false; // End the game so the buttons don't work anymore
    dieEl.innerHTML = null;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
  } else {
    // Switch players
    switchPlayers();
  }
};

const reset = () => {
  playing = true;
  dieEl.innerHTML = null;
  scores[0] = 0;
  scores[1] = 0;
  currentScore = 0;

  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  current0El.textContent = currentScore;
  current1El.textContent = currentScore;

  // If it is the second players turn when reset, switch players
  if (activePlayer !== 0) {
    switchPlayers();
  }
};

//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
// Event listeners for buttons
const newGameBtn = document
  .querySelector('.controls__new-game')
  .addEventListener('click', reset);
const rollBtn = document
  .querySelector('.controls__roll-dice')
  .addEventListener('click', roll);
const holdBtn = document
  .querySelector('.controls__hold')
  .addEventListener('click', hold);
