
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');


rock.addEventListener('click', function(e) {
    console.log('Rock');
})

paper.addEventListener('click', function(e) {
    console.log('Paper');
})

scissors.addEventListener('click', function(e) {
    console.log('Scissors');
})

function computerPlay () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
}


//I want to figure out how to have the HTML buttons connect with this declaration. 
 let playerSelection = ['Rock', 'Paper', 'Scissors'];


 //Once I have the above problem figured out, we can have it go through this parameter.
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



let playerScore = 0;
let computerScore = 0;


/*
//Game tracking with the DOM
const container = document.querySelector('#btns');
const resultsDiv = document.createElement('div');
resultsDiv.style.marginTop = '50px'; //edited from 20px
container.appendChild(resultsDiv);

const playerWinText = document.createElement('p');
playerWinText.style.color = 'blue';
playerWinText.textContent = 'Player Win totals: ' + playerWin;
resultsDiv.appendChild(playerWinText);

const computerWinText = document.createElement('p');
computerWinText.style.color = 'blue';
computerWinText.textContent = 'Computer Win totals: ' + computerWin;
resultsDiv.appendChild(computerWinText);

const battleWinText = document.createElement('p'); //creates new P element
battleWinText.style.color = 'black'; //changes color of new p element to black
resultsDiv.appendChild(battleWinText);

const gameWinText = document.createElement('p');
gameWinText.style.color = 'green';
gameWinText.textContent = gameWinner;
resultsDiv.appendChild(gameWinText);

function game () {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = '';

    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className; //playerSelection is t
            const computerSelection = computerPlay ();
            battleWinText.textContent = (playRound(playerSelection, computerSelection));
            playerWinText.textContent = 'Player Win totals: ' + playerWin;
            compterWinText.textContent = 'Computer Win totals: ' + computerWin;
            endGame ();
        })
    })

*/