'use strict';

let currentScore0 = document.getElementById('current--0');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let currentScore1 = document.getElementById('current--1');
let dice = document.querySelector('.dice');
let diceRoll;
document.querySelector('.dice').classList.add('hidden');
//Resetting of game when clicked on new game
document.querySelector('.btn--new').addEventListener('click', function () {
  document.getElementById('name--1').textContent = 'Player 2';
  document.getElementById('name--0').textContent = 'Player 1';

  //Making all buttons visible

  document.querySelector('.player--0').classList.remove('player--winner');

  document.querySelector('.btn--roll').classList.remove('hidden');
  document.querySelector('.btn--hold').classList.remove('hidden');

  //1.All current scores and scores set to zero
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  score0.textContent = currentScore0.textContent;
  score1.textContent = currentScore1.textContent;
  //2.image of dice should go away
  document.querySelector('.dice').classList.add('hidden');
  //3. Player 1 becomes the active player
  document.querySelector('.player--0').classList.remove('player--winner');
  document.querySelector('.player--1').classList.remove('player--winner');

  document.querySelector('.player--0').classList.add('player--active');
  document.querySelector('.player--1').classList.remove('player--active');
});

//Rolling Dice functionality
document.querySelector('.btn--roll').addEventListener('click', function () {
  //1.Random number between 1 and 6 to be generated
  diceRoll = Math.trunc(Math.random() * 6) + 1;
  //2.Making diceRoll number figure to be displayed
  document.querySelector('.dice').classList.remove('hidden');
  dice.src = `dice-${diceRoll}.png`;
  //Adding diceroll number to active player's current score
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    currentScore0.textContent = Number(currentScore0.textContent) + diceRoll;
  } else if (
    document.querySelector('.player--0').classList.contains('player--active') &&
    diceRoll === 6
  ) {
    currentScore0.textContent = Number(currentScore0.textContent) - 2;
  } else {
    //it means player 2 is active player.
    currentScore1.textContent = Number(currentScore1.textContent) + diceRoll;
  }

  //If dice rolls 1
  if (diceRoll == 1) {
    //Setting score and currentscore of active player to zero
    if (
      document.querySelector('.player--0').classList.contains('player--active')
    ) {
      currentScore0.textContent = 0;
      score0.textContent = 0;
    } else {
      //it means if player 2 is active player.
      currentScore1.textContent = 0;
      score1.textContent = 0;
    }
    //Switching player
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  //current score of active player becomes score of active player
  if (
    document.querySelector('.player--0').classList.contains('player--active')
  ) {
    score0.textContent =
      Number(score0.textContent) + Number(currentScore0.textContent);
    currentScore0.textContent = 0;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
    if (score0.textContent >= 20) {
      document.querySelector('.player--0').classList.add('player--winner');

      document.querySelector('.btn--roll').classList.add('hidden');
      document.querySelector('.btn--hold').classList.add('hidden');
      document.querySelector('.dice').classList.add('hidden');
      document.getElementById('name--0').textContent = 'Player 1 wins';
    }
  } else {
    //it means if player 2 is active player.
    score1.textContent =
      Number(score1.textContent) + Number(currentScore1.textContent);
    currentScore1.textContent = 0;
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
    if (score1.textContent >= 20) {
      //it means if player 2 is active player
      document.querySelector('.player--1').classList.add('player--winner');

      document.querySelector('.btn--roll').classList.add('hidden');
      document.querySelector('.btn--hold').classList.add('hidden');
      document.querySelector('.dice').classList.add('hidden');
      document.getElementById('name--1').textContent = 'Player 2 wins';
    }
  }
});
