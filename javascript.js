
function computerSelection () {
        let options = ['Rock', 'Paper', 'Scissors'];
        let choices = options[Math.floor(Math.random() * options.length)];
        return choices;
} //This function works properly, no further testing needed


let playerSelection = ['Rock', 'Paper', 'Scissors'];

function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            console.log('Tie!');
        } else if (playerSelection== 'Rock' && computerSelection == 'Scissors') {
            console.log('You win!');
        } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
            console.log('You lose!');
        } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
            console.log('You win!');
        } else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
            console.log('You lose!');
        } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
            console.log('You win!');
        } else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
            console.log('You lose!');
        }
    }
