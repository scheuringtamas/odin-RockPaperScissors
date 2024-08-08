let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
  if (Math.random() < 0.5) {
    return "rock";
  } else if (Math.random() > 0.5 && Math.random() < 0.7) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice: ");
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  let caseInsensitiveHC = humanChoice.toLowerCase();

  if (caseInsensitiveHC === "rock" && computerChoice === "paper") {
    computerScore += 1;
    return `You lose! Paper beats Rock ${computerScore}`;
  } else if (caseInsensitiveHC === "rock" && computerChoice === "scissors") {
    humanScore += 1;
    return "You win! Rock beats Scissors";
  } else if (caseInsensitiveHC === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    return "You lose! Scissors beats Paper!";
  } else if (caseInsensitiveHC === "paper" && computerChoice === "rock") {
    humanScore += 1;
    return "You win! Paper beats Rock!";
  } else if (caseInsensitiveHC === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    return "You lose! Rock beats Scissors!";
  } else if (caseInsensitiveHC === "scissors" && computerChoice === "paper") {
    humanScore += 1;
    return "You win! Scissors beats paper!";
  } else {
    return "It's equal!";
  }
}

const buttons = document.querySelectorAll("button");

const container = document.querySelector("#container");
const content1 = document.createElement("div");
const content2 = document.createElement("div");
const content3 = document.createElement("div");
const content4 = document.createElement("div");

container.appendChild(content1);
container.appendChild(content2);
container.appendChild(content3);
container.appendChild(content4);

let clickCount = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    clickCount++;
    content1.textContent = playRound(button.id, getComputerChoice());
    content2.textContent = `Your score is: ${humanScore}`;
    content4.textContent = `Round: ${clickCount}`;

    if (clickCount === 5) {
      if (humanScore > computerScore) {
        content3.textContent = "Congrats! You win the whole game!";
      } else if (humanScore < computerScore) {
        content3.textContent = "You lose the whole game!";
      } else {
        content3.textContent = "It's a tie!";
      }
      clickCount = 0;
      humanScore = 0;
      computerScore = 0;
      clickCount = 0;
    }
  });
});

setupEventListeners();
