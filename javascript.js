function myTest() {
    document.getElementById("test").innerHTML = "This is a test!";
}
//You will want to increment the score after each round
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.pokemon-starters') //puts these buttons in an array
console.log(buttons);


fire.addEventListener('click', function(e) {
    console.log('fire');
})


grass.addEventListener('click', function(e) {
    console.log('grass');
})

water.addEventListener('click', function(e) {
    console.log('water');
})


 // let playerSelection = ['fire', 'grass', 'water'];


function computerPlay () {
    let options = ['fire', 'grass', 'water'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Try again! You and your can\'t pick the same pokémon.';
    } else if (playerSelection == 'fire' && computerSelection == 'water') {
        return '1 point for your rival! Water beats fire!';
    } else if (playerSelection == 'fire' && computerSelection == 'grass') {
        return '1 point for you! Fire beats grass!';
    } else if (playerSelection == 'grass' && computerSelection == 'fire') {
        return '1 point for your rival! Fire beats grass!';
    } else if (playerSelection == 'grass' && computerSelection == 'water') {
        return '1 point for you! Grass beats water!';
    } else if (playerSelection == 'water' && computerSelection == 'grass') {
        return '1 point for your rival! Grass beats water';
    } else if (playerSelection == 'water' && computerSelection == 'fire') {
        return '1 point for you! Water beats fire!';
    }
}

let playerSelection = 'fire';
let computerSelection = computerPlay();
const areEqual = playerSelection.toLowerCase() === computerSelection.toLowerCase(); //Should make them case insensitive
console.log(areEqual);


