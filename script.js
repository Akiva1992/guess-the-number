const game = (function () {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let counter = 0;

  // Cache Dom
  const guessForm = document.getElementById("guess-form");
  const guessInput = document.getElementById("guess-input");
  const guessChart = document.querySelector("#guess-chart");
  const gameOverPopup = document.querySelector("#game-over-popup");
  const winPopup = document.querySelector("#win-popup");
  const newGameBtns = Array.from(document.querySelectorAll(".new-game-btn"));

  // Bind Events
  guessForm.addEventListener("submit", playTurn);
  newGameBtns.forEach(btn => btn.addEventListener("click", newGame)); 

  
  function playTurn(e){
    e.preventDefault();
    if (counter<5){
      let guess = getGuess();
      gameLogic(guess);
    }
    
    guessForm.reset();
  }

  function getGuess() {
    let guessInput = document.getElementById("guess-input").value;
    console.log("event lister working");
    console.log(guessInput);
    return guessInput
  }

    function gameLogic(guess) {
      if (guess < secretNumber) {
        console.log(`${guess} is too low`);
        counter++;
        (counter === 5)? gameOver(): newTurn();
      } else if (guess > secretNumber) {
        console.log(`${guess} is too High`);
        counter++;
        (counter === 5)? gameOver():newTurn();
      } else if (guess === secretNumber) {
        win()
      }
    };

    function win(){

    }

    function gameOver(){
      console.log("Game Over")
    }
    
    function newTurn(){
    }

    function newGame(){
      console.log("New Game")

    }

  return {

  };
})();
