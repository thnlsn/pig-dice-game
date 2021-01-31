'use strict';

// Selectors for the two score elements
const score1El = document.querySelector('#score--0'); // Dom element for score 1
const score2El = document.getElementById('score--1'); // Dom element for score 2

score1El.textContent = 0; // Initialize scores as 0
score2El.textContent = 0; // Initialize scores as 0

const svg = document.querySelector('.svg');
document.querySelector('.svg').innerHTML = dice[5];
