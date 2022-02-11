function computerSelection () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
} 


let playerSelection = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return '1 point for you!';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return '1 point for your opponent!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return '1 point for you!';
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return '1 point for your opponent!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return '1 point for you!';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return '1 point for your opponent!';
    }
}

const addScore = ['1 point for your opponent!', '1 point for you!', 'Tie!'];

let myScore = 0;
let theirScore = 0


/*
const btns = document.getElementById("btns");

btns.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
})
*/


var myRock = document.getElementByID('rock');
myElem.onclick = function() {
	//do stuff
}

var myPaper = document.getElementByID('paper');
myElem.onclick = function() {
	//do stuff
}

var myScissors = document.getElementByID('scissors');
myElem.onclick = function() {
	//do stuff
}