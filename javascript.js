const fire = document.getElementById('fire'); //rock
const grass = document.getElementById('grass'); //paper
const water = document.getElementById('water'); //scissors


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
    if (playerSelection == computerSelection) {
        console.log('Tie!');
    } else if (playerSelection == 'fire' && computerSelection == 'water') {
        console.log('1 point for you!');
    } else if (playerSelection == 'fire' && computerSelection == 'grass') {
        console.log('1 point for your opponent!');
    } else if (playerSelection == 'grass' && computerSelection == 'fire') {
        console.log('1 point for you!');
    } else if (playerSelection == 'grass' && computerSelection == 'water') {
        console.log('1 point for your opponent!');
    } else if (playerSelection == 'water' && computerSelection == 'grass') {
        console.log('1 point for you!');
    } else if (playerSelection == 'water' && computerSelection == 'fire') {
        console.log('1 point for your opponent!');
    }
}



let playerScore = 0;
let computerScore = 0;
