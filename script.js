'use strict';

// Selectors for DOM elements
const score0El = document.getElementById('score--0'); // DOM element for score 0
const score1El = document.getElementById('score--1'); // DOM element for score 1
const dieEl = document.querySelector('.svg'); // DOM element for die SVG (not path)
const current0El = document.getElementById('current--0'); // DOM element for current 0
const current1El = document.getElementById('current--1'); // DOM element for current 1

// Starting conditions
score0El.textContent = 0; // Initialize scores as 0
score1El.textContent = 0; // Initialize scores as 0

// Persisting state
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Functions for buttons
const roll = (active) => {
  // Generate random number
  const result = Math.trunc(Math.random() * 6); // Random # 0-5
  dieEl.innerHTML = dice[result]; // Use that number to search array and set the SVG

  // Check if die is 0 (1 on the SVG)
  if (result === 0) {
    // Set currentScore to 0
    currentScore = 0;
    // Switch active player
  } else {
    // Add roll to current
    currentScore += result + 1;
    current0El.textContent = currentScore;
  }
};

const reset = () => {
  dieEl.innerHTML = null;
};

// Event listeners for buttons
const newGameBtn = document
  .querySelector('.controls__new-game')
  .addEventListener('click', reset);
const rollBtn = document
  .querySelector('.controls__roll-dice')
  .addEventListener('click', roll);
/* const holdBtn = document
  .querySelector('.controls__hold')
  .addEventListener('click', hold); */
