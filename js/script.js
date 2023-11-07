//! Player & AI Pick Section
// AI pick generating
function aiPick() {
  randomNum = Math.floor(Math.random() * 3) + 1;

  if (randomNum === 1) {
    return "./img/paper.jpg";
  }

  if (randomNum === 2) {
    return "./img/rock.jpg";
  }

  if (randomNum === 3) {
    return "./img/scissors.jpg";
  }
}

// Player pick the papaer
const gamerEl = document.getElementById("chooseGamer");
const aiEl = document.getElementById("chooseAI");

const paperEl = document.getElementById("choosePaper");
paperEl.addEventListener("click", function () {
  const newSrc = "./img/paper.jpg";

  gamerEl.src = newSrc;
  aiEl.src = aiPick();
  disableOtherPick();
  startGame();
});

// Player pick the rock
const rockEl = document.getElementById("chooseRock");
rockEl.addEventListener("click", function () {
  const newSrc = "./img/rock.jpg";

  gamerEl.src = newSrc;
  aiEl.src = aiPick();
  disableOtherPick();
  startGame();
});

// Player pick the scissors
const scissorsEl = document.getElementById("chooseScissors");
scissorsEl.addEventListener("click", function () {
  const newSrc = "./img/scissors.jpg";

  gamerEl.src = newSrc;
  aiEl.src = aiPick();
  disableOtherPick();
  startGame();
});

let lapCounter = 1;
document.querySelector(".lapCounter").textContent = lapCounter;
//*** Reset Game ***
const newGameBtn = document.getElementById("newGame");
newGameBtn.addEventListener("click", function () {
  const defaultSrc = "./img/blank.jpg";

  gamerEl.src = defaultSrc;
  aiEl.src = defaultSrc;
  activateAllPick();
  result.textContent = "";
  finalResultEl.textContent = "";
  lapCounter++;
});

// Disable other pick
function disableOtherPick() {
  paperEl.classList.add("active-game");
  rockEl.classList.add("active-game");
  scissorsEl.classList.add("active-game");
}

// Activate picks
function activateAllPick() {
  paperEl.classList.remove("active-game");
  rockEl.classList.remove("active-game");
  scissorsEl.classList.remove("active-game");
}

//////////////////////////////////////

//! Game Section
//* AI pick check
function isItRockAi() {
  return aiEl.src === rockEl.src;
  //   if (aiEl.src === rockEl.src) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

function isItPaperAi() {
  return aiEl.src === paperEl.src;
  //   if (aiEl.src === paperEl.src) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

function isItScissorsAi() {
  return aiEl.src === scissorsEl.src;
  //   if (aiEl.src === scissorsEl.src) {
  //     return true;
  //   } else {
  //     return false;
  //   }
}

//* Player pick check
function isItRockPlayer() {
  return gamerEl.src === rockEl.src;
}

function isItPaperPlayer() {
  return gamerEl.src === paperEl.src;
}

function isItScissorsPlayer() {
  return gamerEl.src === scissorsEl.src;
}

//* Scores
const result = document.getElementById("resultMessage");
let playerScore = 0;
document.querySelector(".player-score").textContent = playerScore;
let aiScore = 0;
document.querySelector(".ai-score").textContent = aiScore;
function startGame() {
  if (isItRockPlayer() && isItRockAi()) {
    return (result.textContent = "Döntetlen");
  } else if (isItPaperPlayer() && isItPaperAi()) {
    return (result.textContent = "Döntetlen");
  } else if (isItScissorsPlayer() && isItScissorsAi()) {
    return (result.textContent = "Döntetlen");
  } else if (isItRockPlayer() && isItScissorsAi()) {
    playerScore++;
    result.textContent = "Győztél";
    updateScore();
  } else if (isItPaperPlayer() && isItRockAi()) {
    playerScore++;
    result.textContent = "Győztél";
    updateScore();
  } else if (isItScissorsPlayer() && isItPaperAi()) {
    playerScore++;
    result.textContent = "Győztél";
    updateScore();
  } else {
    aiScore++;
    result.textContent = "Vesztettél";
    updateScore();
  }
}

function updateScore() {
  document.querySelector(".player-score").textContent = playerScore;
  document.querySelector(".ai-score").textContent = aiScore;
  document.querySelector(".lapCounter").textContent = lapCounter;
}

//* Game End
const endGameBtn = document.getElementById("endGame");
const finalResultEl = document.querySelector(".finalResult");
endGameBtn.addEventListener("click", function () {
  if (playerScore > aiScore) {
    return (finalResultEl.textContent = "Nyertél!");
  } else if (playerScore < aiScore) {
    return (finalResultEl.textContent = "Vesztettél!");
  } else {
    return (finalResultEl.textContent = "Döntetlen");
  }
});
