'use strict';

// Selectors for the two score elements
const score1El = document.querySelector('#score--0'); // Dom element for score 1
const score2El = document.getElementById('score--1'); // Dom element for score 2

score1El.textContent = 1;
score2El.textContent = 1;

const svg = document.querySelector('.svg');

document.querySelector('.svg').innerHTML = dice[5];
