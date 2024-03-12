const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0
};


function playGame(guess){

const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads' : 'tails';
if(guess === result){
  document.querySelector('.js-outcome').innerHTML = 'You win!';
}
else{
  document.querySelector('.js-outcome').innerHTML = 'You lose!';
}
guess === result ? score.wins++ : score.loses++;
scoreFunction();
localStorage.setItem('score',JSON.stringify(score));
}

function resetGame(){
  localStorage.removeItem(score);
  score.wins = 0;
  score.loses = 0;
  scoreFunction();
  document.querySelector('.js-outcome').innerHTML = 'Press the button to start the game';
}

// document.querySelector('.js-outcome').innerHTML= 

function scoreFunction(){
  document.querySelector('.js-score').innerHTML= `Wins ${score.wins}, Loses ${score.loses}`;
}