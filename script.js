var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var increase = document.querySelector("#firstToUp");
var decrease = document.querySelector("#firstToDown");
var resetButton = document.querySelector("#reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var firstTo = 5;
var firstToDisplay = document.querySelector("#firstTo");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var gameOverDisplay = document.querySelector("#gameOverDisplay");

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  p1Display.classList.remove("winner");
  p2Display.classList.remove("winner");
  gameOverDisplay.textContent = "";
}

p1Button.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    p1Display.textContent = p1Score;
    if (p1Score === firstTo){
      p1Display.classList.add("winner");
      gameOver = true;
      gameOverDisplay.textContent = "Game Over";
    }
  }
});

p2Button.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    p2Display.textContent = p2Score;
    if (p2Score === firstTo){
      p2Display.classList.add("winner");
      gameOver = true;
      gameOverDisplay.textContent = "Game Over";
    }
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

increase.addEventListener("click", function(){
  firstTo++;
  firstToDisplay.textContent = firstTo;
});

decrease.addEventListener("click", function(){
  firstTo--;
  firstToDisplay.textContent = firstTo;
  if (firstTo === p1Score || firstTo === p2Score){
    gameOver === true;
    gameOverDisplay.textContent = "Game Over";
    if (p1Score > p2Score){
      p1Display.classList.add("winner");
    }
    else if (p2Score > p1Score){
      p2Display.classList.add("winner");
    }
  }
});
