function getComputerChoice(){
    if(Math.random() < 0.5){
        return "rock"
    } else if(Math.random() > 0.5 && Math.random() < 0.7){
        return "paper"
    } else{
        return "scissors"
    }
}

function getHumanChoice(){
    let humanChoice = prompt("Enter your choice: ")
    return humanChoice
}

function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice){
        let caseInsensitiveHC = humanChoice.toLowerCase()
        if(caseInsensitiveHC === "rock" && computerChoice === "paper"){
            computerScore += 1;
            console.log("You lose! Paper beats Rock")
        } else if(caseInsensitiveHC === "rock" && computerChoice === "scissors"){
            humanScore += 1;
            console.log("You win! Rock beats rockScissors")
        } else if(caseInsensitiveHC === "paper" && computerChoice === "scissors"){
            computerScore += 1;
            console.log("You lose! Scissors beats Paper!")
        } else if(caseInsensitiveHC === "paper" && computerChoice === "rock"){
            humanScore += 1;
            console.log("You win! Paper beats Rock!")
        } else if(caseInsensitiveHC === "scissors" && computerChoice === "rock") {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors!")
        } else if(caseInsensitiveHC === "scissors" && computerChoice === "paper"){
            humanScore += 1;
            console.log("You win! Scissors beats paper!")
        } else {
            console.log("It's equal!")
        }
    }

    for(let i = 0; i < 5; i++){
        playRound(getHumanChoice(), getComputerChoice())
        console.log(`Current score: Human ${humanScore}   Computer ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("Congrats! You win the whole game!");
    } else if (humanScore < computerScore) {
        console.log("You lose the whole game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame()