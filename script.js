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

function game(){
    let playerWins = 0
    let computerWins = 0
    let ties = 0
    for (let i = 0; i < 5; i++){
        
        let playerSelection = prompt("Please give your action")
        let computerSelection = computerPlay()
        console.log(playerSelection, computerSelection)
        let outcome = playRound(playerSelection.toLowerCase(), computerSelection)
        if (outcome === 0) {
            computerWins++
        }
        else if (outcome === 1) {
            playerWins++
        }
        else {
            ties++
        }
    }
    console.log(`Computer won ${computerWins} times, you won ${playerWins} times, ties: ${ties}`)
    
}
game()


