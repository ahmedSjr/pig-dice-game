'use strict';

// Select elements using query selector
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
// Using get element by id
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
score0.textContent = 0;
score1.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Game functionality implementaion
//Roll Dice

btnRoll.addEventListener('click', function () {
  // 1.Generate a random number for the dice
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2.Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3.Check for rolled 1 true,
  if (dice !== 1) {
    currentScore += dice;
    //NOTE Change later
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch...next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
