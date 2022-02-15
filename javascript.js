
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



function computerSelection () {
    let options = ['Rock', 'Paper', 'Scissors'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
} //This function works properly, no further testing needed


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
