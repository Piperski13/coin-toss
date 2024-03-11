const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  loses: 0
};


function playGame(guess){

const randomNumber = Math.random();
const result = randomNumber < 0.5 ? 'heads' : 'tails';
console.log(guess === result ? 'You win!' : 'You lose!');
guess === result ? score.wins++ : score.loses++;
console.log(`Wins ${score.wins}, Loses ${score.loses}`);
localStorage.setItem('score',JSON.stringify(score));
}

function resetGame(){
  localStorage.removeItem(score);
  score.wins = 0;
  score.loses = 0;
  console.log(`Score reset\nWins ${score.wins}, Loses ${score.loses}`);
}