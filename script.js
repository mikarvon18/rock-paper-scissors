console.log("Hello!")
console.log(Math.floor(Math.random()*3))

function computerPlay(){
    var actions = ["rock", "paper", "scissors"]
    let selected = Math.floor(Math.random()*3)
    return actions[selected]
}

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return 2
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return 0
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return 1
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return 1
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return 0
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return 0
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return 1
    }
}

function game(playerSelection){

        
    let computerSelection = computerPlay()
    console.log(playerSelection, computerSelection)
    let outcome = playRound(playerSelection.toLowerCase(), computerSelection)
    const status = document.querySelector("#status")
    if (outcome === 0) {
        computerWins++
        status.textContent = "Computer won!"
    }
    else if (outcome === 1) {
        playerWins++
        status.textContent = "You win!"
    }
    else {
        ties++
        status.textContent = "Its a tie!"
    }
    
    
    const content = document.querySelector("#score");
    content.textContent = `Score: ${playerWins} - ${computerWins}`
    console.log(`Computer won ${computerWins} times, you won ${playerWins} times, ties: ${ties}`)
    if (playerWins === 5 || computerWins === 5){
        status.textContent = "Game over!"
        playerWins = 0
        computerWins = 0
        ties = 0
    } 
}
let playerWins = 0
let computerWins = 0
let ties = 0
const button = document.querySelectorAll('button');
button.forEach((button) => {
    button.addEventListener('click', () => {
        game(button.id);
    });
});



