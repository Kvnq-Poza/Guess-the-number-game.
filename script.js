"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumberStyle = function (style) {
  document.querySelector(".number").style.width = style;
};
const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔️ No number!!";
    displayMessage("⛔️ No number!!");
  } // When player wins
  else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!!";
    displayMessage("🎉 Correct Number!!");
    displayNumber(secretNumber);
    // document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    displayNumberStyle("30rem");
    // document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
      score--;
      displayScore(score);
      // document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      displayScore(0);
      // document.querySelector(".score").textContent = 0;
    }
  }
  
});



document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  // document.querySelector(".score").textContent = score;
  displayNumber("?");
  // document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  // document.querySelector(".message").textContent = "Start guessing...";
  displayMessage("Start guessing...");
  displayNumberStyle("15rem");
  // document.querySelector(".number").style.width = "15rem";
  document.querySelector("body").style.backgroundColor = "#222";
});
