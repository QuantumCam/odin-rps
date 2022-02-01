function game(choice) {
    function computerSelection {
            let options = ['Fire', 'Water', 'Grass']; // Fire = Rock, Water = Paper, Grass = Scissors
            let choices = options[Math.floor(Math.random() * options.length)];
            return choices
        }

    function playRound (playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
          console.log ('Tie!');
        } else if (playerSelection > computerSelection) {
          console.log ('You win!');
        } else {
          console.log ('You lose!');
        }
      }
}