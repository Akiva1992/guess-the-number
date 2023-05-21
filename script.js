console.log("Trial");

const game = (function () {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
  let counter = 0;

  // Cache Dom
  const submitBtn = document.getElementById("submit-btn");

  // Bind Events
  submitBtn.addEventListener("click", getGuess);

  function getGuess(e) {
    e.preventDefault();
    let guessInput = document.getElementById("guess-input").value;
    console.log("event lister working");
    console.log(guessInput);
    
  }

  //   gameLogic = () => {
  //     if (counter < 5) {
  //       if (userInput <= 0 || userInput > 10) {
  //         console.log("Your input must be between 0-10");
  //       } else if (userInput < secretNumber) {
  //         console.log(`${userInputf} is too low`);
  //         counter++;
  //       } else if (userInput > secretNumber) {
  //         console.log(`${userInput} is too High`);
  //         counter++;
  //       } else if (userInput === secretNumber) {
  //         console.log(`You got it!`);
  //       } else if (!Number.isInteger(userInput)) {
  //         console.log("Must input a number");
  //       }
  //     } else if (counter === 5) {
  //       console.log("Gmae Over");
  //     } else console.log("Good Job");
  //   };

  return {
    secretNumber,
    // users
  };
})();
