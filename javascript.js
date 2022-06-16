function myTest() {
    document.getElementById("test").innerHTML = "This is a test!";
}
//You will want to increment the score after each round
let playerScore = 0;
let computerScore = 0;


/*
fire.addEventListener('click', function(e) {
    console.log('fire');
})
*/

document.getElementById('fire').addEventListener('click', playRound()); {
    alert('Hello bitch!');
};



grass.addEventListener('click', function(e) {
    console.log('grass');
})

water.addEventListener('click', function(e) {
    console.log('water');
})


const fireTest = document.getElementById('fire');
fireTest.addEventListener('click', myFire);
function myFire() {
    document.getElementById('fireDemo').innerHTML = 'You chose Charmander, a fire-type pokémon!';
}

const waterTest = document.getElementById('water');
waterTest.addEventListener('click', myWater);
function myWater() {
    document.getElementById('waterDemo').innerHTML = 'You chose Squirtle, a water-type pokémon!';
}

const grassTest = document.getElementById('grass');
grassTest.addEventListener('click', myGrass);
function myGrass() {
    document.getElementById('grassDemo').innerHTML = 'You chose Bulbasaur, a grass-type pokémon!';
}


let options = ['fire', 'grass', 'water'];
function computerPlay () {
    let choices = options[Math.floor(Math.random() * options.length)];
    return choices;
}

function playerPlay () {
    let options = ['fire', 'grass', 'water']
}


function playRound(playerPlay) {
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    if (playerSelection == computerSelection) {
        console.log ('Try again! You and your can\'t pick the same pokémon.');
    } else if (playerSelection == 'fire' && computerSelection == 'water') {
        console.log ('1 point for your rival! Water beats fire!');
    } else if (playerSelection == 'fire' && computerSelection == 'grass') {
        console.log ('1 point for you! Fire beats grass!');
    } else if (playerSelection == 'grass' && computerSelection == 'fire') {
        console.log ('1 point for your rival! Fire beats grass!');
    } else if (playerSelection == 'grass' && computerSelection == 'water') {
        console.log ('1 point for you! Grass beats water!');
    } else if (playerSelection == 'water' && computerSelection == 'grass') {
        console.log ('1 point for your rival! Grass beats water');
    } else if (playerSelection == 'water' && computerSelection == 'fire') {
        console.log ('1 point for you! Water beats fire!');
    }
}
