function computerPlay() {
    // let choices = Array("rock", "paper", "scissors");
    const choices = new Array("rock", "paper", "scissors");
    var random = choices[Math.floor(Math.random()*choices.length)];
    return random; 
}

let score = 0;

function playRound(playerSelection, computerSelection) {
    let entry = prompt("Please enter rock, paper or scissors");
    let selection = entry.toLowerCase();
    let computer = computerPlay();
    console.log("comp: "+computer);
    console.log("player: "+selection);

    if (selection == computer) {
        console.log("Draw! "+computer+" is equal to "+selection);
    }
    //ROCK
    else if(selection == "rock" && computer == "paper") {
        console.log("You Lose! Paper beats Rock");
    }
    else if(selection == "rock" && computer == "scissors") {
        console.log("You Win! Rock beats Scissors");
        score++;
    }
    //PAPER
    else if(selection == "paper" && computer == "rock") {
        console.log("You Win! Paper beats Rock");
        score++;
    }
    else if(selection == "paper" && computer == "scissors") {
        console.log("You Lose! Scissors beats Paper");
    }
    //SCISSORS
    else if(selection == "scissors" && computer == "rock") {
        console.log("You Lose! Rock beats Scissors");
    }
    else if(selection == "scissors" && computer == "paper") {
        console.log("You Win! Scissors beats Paper");
        score++;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        
     }
     console.log("Game Over! You scored: " +score);
}


window.onload = (event) => {
    computerPlay();
    game();
};

