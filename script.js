let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".buttons button");
const resultDiv = document.querySelector(".results");
const playerCounter = document.querySelector(".playercounter");
const computerCounter = document.querySelector(".computercounter");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const humanChoice = button.textContent.trim().toLowerCase();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  });
});

function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) return "rock";
  if (random < 0.66) return "paper";
  return "scissors";
}

function playRound(humanChoice, computerChoice) {
  console.log(`Player chose: ${humanChoice}, Computer chose: ${computerChoice}`);

  if (humanScore >= 5 || computerScore >= 5) return;

  let roundResult = "";

  if (humanChoice === computerChoice) {
    roundResult = `Draw! You both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    roundResult = `You Win! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    roundResult = `You Lose! ${computerChoice} beats ${humanChoice}.`;
  }

  playerCounter.textContent = `Player: ${humanScore}`;
  computerCounter.textContent = `Computer: ${computerScore}`;
  resultDiv.textContent = roundResult;

  if (humanScore === 5 || computerScore === 5) {
    setTimeout(() => {
      resultDiv.textContent += humanScore === 5
        ? " 🎉 You won the game!"
        : " 💻 Computer won the game!";
      showRestartButton();
    }, 300);
  }
}


function showRestartButton() {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play Again";
  restartBtn.style.marginTop = "20px";
  restartBtn.style.padding = "10px 20px";
  restartBtn.style.fontSize = "1rem";
  restartBtn.style.cursor = "pointer";
  restartBtn.style.borderRadius = "8px";
  restartBtn.style.border = "none";
  restartBtn.style.background = "#1c1c1e";
  restartBtn.style.color = "#fff";

  resultDiv.appendChild(document.createElement("br"));
  resultDiv.appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    playerCounter.textContent = `Player: 0`;
    computerCounter.textContent = `Computer: 0`;
    resultDiv.textContent = "";
  });
}
