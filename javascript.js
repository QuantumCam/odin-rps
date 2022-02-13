
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function playerSelection () {
rock.addEventListener('click', function(e) {
    console.log('rock');
})

paper.addEventListener('click', function(e) {
    console.log('paper');
})

scissors.addEventListener('click', function(e) {
    console.log('scissors');
})
}

function computerSelection () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
} //This function works properly, no further testing needed


// let playerSelection = ['Rock', 'Paper', 'Scissors'];

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



let myScore = 0;
let theirScore = 0;
