function getComputerChoice(){
    const computerChoice = Math.random();

    if(computerChoice<0.33){
        return "rock";
    } else if(computerChoice<0.66){
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice(){
    const humanChoice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    return humanChoice;
    
};

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Draw.");
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log("Human Wins!");
      humanScore++;
    } else {
      console.log("Computer Wins!");
      computerScore++;
    }
  
    console.log(`Human: ${humanScore} - Computer: ${computerScore}`);
  
  }

const human = getHumanChoice();
const computer = getComputerChoice();

//Repeat the game
for (let i = 0; i < 5; i++) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    playRound(human, computer);
  }

  console.log("End");
  console.log(`Final Result: - Human: ${humanScore} / Computer: ${computerScore}`);