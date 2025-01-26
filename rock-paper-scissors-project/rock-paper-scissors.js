let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScorElement();

function playGame (playMove) {
const computerMove = pickComputerMove();
let result = '';
if (playMove === 'scissors') {
if(computerMove === 'Rock') {
  result = 'You lose.'
 } else if (computerMove === 'Paper') {
  result = 'You win.'
 } else if (computerMove === 'Scissors') {
  result = 'Tie'
  };  

}else if (playMove === 'paper') {
if(computerMove === 'Rock') {
result = 'You win.'
} else if (computerMove === 'Paper') {
result = 'Tie'
} else if (computerMove === 'Scissors') {
result = 'You lose.'
};

}else if (playMove === 'rock') {
if(computerMove === 'Rock') {
result = 'Tie'
} else if (computerMove === 'Paper') {
result = 'You lose.'
} else if (computerMove === 'Scissors') {
result = 'You win.'
};
}

if (result === 'You win.') {
score.wins +=1;
}else if (result === 'You lose.') {
score.losses +=1;
}else if (result === 'Tie') {
score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScorElement();


document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-moves').innerHTML = ` You pick 
<img class="emoji" src="rock-paper-scissors-img/${playMove}-emoji.png">
Computer pick
<img class="emoji" src="rock-paper-scissors-img/${computerMove}-emoji.png">`;
}


function updateScorElement () {
document.querySelector('.js-score').innerHTML = 
`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

}

function pickComputerMove() {
let computerMove = '';
const randomNumber = Math.random();
if (randomNumber >= 0 && randomNumber < 1/3) {
computerMove = 'Rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'Paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'Scissors';
}
return computerMove;
}