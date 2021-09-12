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

//roll dice
rollDice.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6) + 1;
  // dice show
  diceImg.classList.remove("hidden");
  diceImg.src = `./${dice}.png`;

  if (dice === 1) {
    currSum = 0;
    currentScore[i - 1].textContent = currSum; // display current score as 0
    //switch player
    if (i == 1) {
      box1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      box2.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      i = 2;
    } else {
      box1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
      box2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
      i = 1;
    }
  } else {
    currSum = dice + currSum;
    currentScore[i - 1].textContent = currSum; //display current score
  }
});

//hold
hold.addEventListener("click", function () {
  if (i == 1) {
    totalSum1 = totalSum1 + currSum;
    //if player 1 wins
    if (totalSum1 >= 100) {
        window.open('win1.html','_self');      
    }
    currSum = 0;
    currentScore[i - 1].textContent = currSum; //display current sum as 0 (player 1)
    totalScore[i - 1].textContent = totalSum1; //display total sum (player 1)
    box1.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    box2.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    i = 2;
  } else {
      //if player 2 wins
    totalSum2 = totalSum2 + currSum;
    if (totalSum2 >= 100) {
        window.open('win2.html','_self');
    }
    currSum = 0;
    currentScore[i - 1].textContent = currSum; //display current sum as 0(player 2)
    totalScore[i - 1].textContent = totalSum2; //display total sum (player 2)
    box1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
    box2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    i = 1;
  }
});

//new game
function newGamefunc() {
  i = 1;
  box1.style.backgroundColor = "rgba(255, 255, 255, 0.6)";
  box2.style.backgroundColor = "rgba(255, 255, 255, 0.3)";

  currSum = 0;
  currentScore[0].textContent = currSum; //0(player 1 current score)
  currentScore[1].textContent = currSum; //0(player 2 current score)

  totalSum1 = 0;
  totalScore[0].textContent = totalSum1; //0(player 1 total score)

  totalSum2 = 0;
  totalScore[1].textContent = totalSum2; //0(player 2 total score)

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
