const fire = document.getElementById('fire'); //rock
const grass = document.getElementById('grass'); //paper
const water = document.getElementById('water'); //scissors

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.pokemon-starters') 
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



function computerSelection () {
    let options = ['fire', 'grass', 'water'];
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
} //This function works properly, no further testing needed


//I want to figure out how to have the HTML buttons connect with this declaration. 
 let playerSelection = ['fire', 'grass', 'water'];


 //Once I have the above problem figured out, we can have it go through this parameter.
function playRound(playerSelection, computerSelection) {
        let computerPick = computerSelection();
        let results = '';




    if (playerSelection == computerSelection) {
        results = ('Try again! You and your can\'t pick the same pokémon.');
    } else if (playerSelection == 'fire' && computerSelection == 'water') {
        results = ('1 point for your rival! Water beats fire!');
    } else if (playerSelection == 'fire' && computerSelection == 'grass') {
        results = ('1 point for you! Fire beats grass!');
    } else if (playerSelection == 'grass' && computerSelection == 'fire') {
        results = ('1 point for your rival! Fire beats grass!');
    } else if (playerSelection == 'grass' && computerSelection == 'water') {
        results = ('1 point for you! Grass beats water!');
    } else if (playerSelection == 'water' && computerSelection == 'grass') {
        results = ('1 point for your rival! Grass beats water');
    } else if (playerSelection == 'water' && computerSelection == 'fire') {
        results = ('1 point for you! Water beats fire!');
    }
}




