function computerSelection () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
} //This function works properly, no further testing needed


let playerSelection = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log('Tie!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        console.log('1 point for you!');
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        console.log('1 point for your opponent!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        console.log('1 point for you!');
    } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        console.log('1 point for your opponent!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        console.log('1 point for you!');
    } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        console.log('1 point for your opponent!');
    }
}

const addScore = ['1 point for your opponent!', '1 point for you!', 'Tie!'];

let myScore = 0;
let theirScore = 0



const btns = document.getElementById("btns");

btns.addEventListener('click', (event) => {
  const isButton = event.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
})