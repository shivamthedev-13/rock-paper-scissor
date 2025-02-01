const rockBtnEl = document.querySelector(".rock_btn");
const paperBtnEL = document.querySelector(".paper_btn");
const scissorBtnEL = document.querySelector(".scissor_btn");
const displayEl = document.querySelector("#display");
const scoreDisplayEl = document.querySelector("#score_display");
const resetBtnEl = document.querySelector(".reset_btn");
const winScoreEl = document.querySelector("#win_score");
const loseScoreEl = document.querySelector("#lose_score");
const tieScoreEl = document.querySelector("#tie_score");

const score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  looses: 0,
  ties: 0,
};

winScoreEl.textContent = score.wins;
loseScoreEl.textContent = score.looses;
tieScoreEl.textContent = score.ties;

resetBtnEl.onclick = function () {
  score.wins = 0;
  score.looses = 0;
  score.ties = 0;

  scoreDisplayEl.querySelector("#win_score").textContent = score.wins;
  scoreDisplayEl.querySelector("#lose_score").textContent = score.looses;
  scoreDisplayEl.querySelector("#tie_score").textContent = score.ties;

  localStorage.removeItem("score");
};

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
  updateScore(result);
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

function updateScore(result) {
  if (result === "You Win!") {
    score.wins++;
  } else if (result === "Computer Win!") {
    score.looses++;
  } else if (result === "Tie") {
    score.ties++;
  }

  localStorage.setItem("score", JSON.stringify(score));

  scoreDisplayEl.querySelector("#win_score").textContent = score.wins;
  scoreDisplayEl.querySelector("#lose_score").textContent = score.looses;
  scoreDisplayEl.querySelector("#tie_score").textContent = score.ties;
}
