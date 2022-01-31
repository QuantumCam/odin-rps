function game(choice) {
    function playRound(playerSelection, computerSelection) {
        function playerSelection(choice) {
            return choice
            //make sure this is case-insensitive
        }

        function computerSelection {
            let options = ['Rock', 'Paper', 'Scissors'];
            let choices = options[Math.floor(Math.random() * options.length)]
            return choices
        }
    }

    function results {
        //should return the results of the game
        if (playerSelection == computerSelection) {
            //Tie
        } else if (playerSelection(rock)) {
            if (computerSelection(scissors)) {
                //You win
            } else {
                //You lose
            }
        } else if (playerSelection(paper)) {
            if (computerSelection(rock)) {
                //You win
            } else {
                //You lose
            }
        } else if (playerSelection(scissors)) {
            if (computerSelection(paper)) {
                //You win
            } else {
                //You lose
            }
        }
        return results
    }
}