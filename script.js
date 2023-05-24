const game = (function () {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  console.log(secretNumber);
  let counter = 0;
  let wrongGuesses = [];


  // Cache Dom
  const guessForm = document.getElementById("guess-form");
  const guessInput = document.getElementById("guess-input");
  const guessChart = document.querySelector("#guess-chart");
  const gameOverPopup = document.querySelector("#game-over-popup");
  const secretNumberCell = document.querySelector(".secret-number-cell");
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
    return guessInput
  }

    function gameLogic(guess) {
      if (guess<secretNumber || guess>secretNumber) {
        counter++;
        (counter === 5)? gameOver(): pushGuess(guess);
      } else if (guess === secretNumber) {
        console.log("You won")
        win()
      }
    };

    function win(){
      console.log("You won")
    }

    function gameOver(){
      console.log("Game Over")
      gameOverPopup.style.display = "block";
    }
    
    function renderGuesses(guess){
      let newCell = document.createElement("div");
      let newGuess = document.createElement("p");
      newCell.classList.add("guess-cell","cell")
      newGuess.classList.add("guess")
      newGuess.innerText= guess;
      newCell.append(newGuess)
      debugger
      wrongGuesses.forEach(number =>{
        if(number<secretNumber){
          // secretNumberCell.before(newCell);
          guessChart.insertBefore(newCell, secretNumberCell);
        }
        else if (number>secretNumber){
          // guessChart.appendChild(newCell);
          // secretNumberCell.after(newCell);
          guessChart.append(newCell);
        }
      })

    };

    function pushGuess(guess){
      if(!wrongGuesses.includes(guess)){
        wrongGuesses.push(guess);
        wrongGuesses.sort();
        renderGuesses(guess)
      } 
      console.log(wrongGuesses);
    };

    function newGame(){
      console.log("New Game")
    }

  return {

  };
})();
