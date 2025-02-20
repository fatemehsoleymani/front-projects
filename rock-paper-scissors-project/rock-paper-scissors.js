let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScorElement();

let isAutoPlaying = false;
let intervalID;

function autoPlay() {

  if (!isAutoPlaying) {
    intervalID = setInterval(function() {
      const playMove = pickComputerMove();
      playGame(playMove);
    }, 1000);
    document.querySelector('.js-auto-play').innerHTML = 'Stop the game';
    isAutoPlaying = true;
  }else {
    clearInterval(intervalID);
    document.querySelector('.js-auto-play').innerHTML = 'Auto Play';
    isAutoPlaying = false;
  }
  
}

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-auto-play').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  }
});

function playGame (playMove) {
const computerMove = pickComputerMove();
let result = '';
if (playMove === 'scissors') {
if(computerMove === 'rock') {
  result = 'You lose.'
 } else if (computerMove === 'paper') {
  result = 'You win.'
 } else if (computerMove === 'scissors') {
  result = 'Tie'
  };  

}else if (playMove === 'paper') {
if(computerMove === 'rock') {
result = 'You win.'
} else if (computerMove === 'paper') {
result = 'Tie'
} else if (computerMove === 'scissors') {
result = 'You lose.'
};

}else if (playMove === 'rock') {
if(computerMove === 'rock') {
result = 'Tie'
} else if (computerMove === 'paper') {
result = 'You lose.'
} else if (computerMove === 'scissors') {
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
computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber < 1) {
    computerMove = 'scissors';
}
return computerMove;
}