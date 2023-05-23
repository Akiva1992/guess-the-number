const game = (function () {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let counter = 0;

  // Cache Dom
  const guessForm = document.getElementById("guess-form");
  const guessInput = document.getElementById("guess-input");

  
  // Bind Events
  guessForm.addEventListener("submit", playTurn);

  
  function playTurn(e){
    e.preventDefault();
    let guess = getGuess();
    gameLogic(guess);
    
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
        (counter === 5)? console.log("Gmae Over"):console.log("Try Again");
      } else if (guess > secretNumber) {
        console.log(`${guess} is too High`);
        counter++;
        (counter === 5)? console.log("Gmae Over"):console.log("Try Again");
      } else if (guess === secretNumber) {
        console.log(`You got it!`);
      }
    };

    function win(){

    }

    function gameOver(){

    }    

  return {

  };
})();
