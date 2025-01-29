const rockBtnEl = document.querySelector(".rock_btn");
const paperBtnEL = document.querySelector(".paper_btn");
const scissorBtnEL = document.querySelector(".scissor_btn");
const displayEl = document.querySelector("#display");

rockBtnEl.onclick = function () {
  startGame("Rock");
};

paperBtnEL.onclick = function () {
  startGame("Paper");
};

scissorBtnEL.onclick = function () {
  startGame("Scissor");
};

function startGame(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);
  displayResult(result, userChoice, computerChoice);
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "Rock";
  } else if (randomNum === 1) {
    return "Paper";
  } else if (randomNum === 2) {
    return "Scissor";
  }
}

function getResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "Tie";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissor") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissor" && computerChoice === "Paper")
  ) {
    return "You Win!";
  } else {
    return "Computer Win!";
  }
}

function displayResult(result, userChoice, computerChoice) {
  const resultText = `You chose ${userChoice}, Computer Chose ${computerChoice}, ${result}`;
  displayEl.textContent = resultText;
}
