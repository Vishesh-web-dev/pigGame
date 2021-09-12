const newGame = document.querySelector(".new-game");
const diceImg = document.querySelector(".diceImg");
const rollDice = document.querySelector(".roll-dice");
const hold = document.querySelector(".hold");
const currentScore = document.querySelectorAll(".currentScore"); // both player 1
const totalScore = document.querySelectorAll(".totalScore"); // both player 1
const box1 = document.querySelector(".player1");
const box2 = document.querySelector(".player2");

let currSum = 0;
let totalSum1 = 0;
let totalSum2 = 0;
let i = 1;

rollDice.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 1) {
    currSum = 0;
    currentScore[i - 1].textContent = currSum; // display
    diceImg.src = `./${dice}.png`;
    if (i == 1) {
      box1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      box2.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      i = 2;
      return;
    } else {
      box1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      box2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      i = 1;
      return;
    }
  }
  currSum = dice + currSum;
  currentScore[i - 1].textContent = currSum; //display
  diceImg.src = `./${dice}.png`;
  diceImg.classList.remove("hidden");
});

hold.addEventListener("click", function () {
  if (i == 1) {
    totalSum1 = totalSum1 + currSum;
    if (totalSum1 >= 100) {
      console.log("player one wins");
      newGamefunc();
    }
    currSum = 0;
    currentScore[i - 1].textContent = currSum; //display
    totalScore[i - 1].textContent = totalSum1; //display
    box1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    box2.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    i = 2;
  } else {
    totalSum2 = totalSum2 + currSum;
    if (totalSum2 >= 100) {
      console.log("player two wins");
      newGamefunc();
    }
    currSum = 0;
    currentScore[i - 1].textContent = currSum; //display
    totalScore[i - 1].textContent = totalSum2; //display
    box1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    box2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    i = 1;
  }
});
function newGamefunc() {
  i = 1;
  box1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  box2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

  currSum = 0;
  currentScore[0].textContent = currSum; //display
  currentScore[1].textContent = currSum; //display

  totalSum1 = 0;
  totalScore[0].textContent = totalSum1; //display

  totalSum2 = 0;
  totalScore[1].textContent = totalSum2; //display

  diceImg.classList.add("hidden");
}
newGame.addEventListener("click", newGamefunc);

// animation

const btns = document.querySelectorAll(".btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    if (window.screen.availWidth >= 800) {
      btns[i].style.transform = "translate(50%,4px)";
      setTimeout(() => {
        btns[i].style.transform = "translate(50%,0px)";
      }, 50);
    } else {
      btns[i].style.transform = "translate(0%,-12px)";
      setTimeout(() => {
        btns[i].style.transform = "translate(0%,-16px)";
      }, 50);
    }
  });
}
