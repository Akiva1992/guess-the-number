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
  newGameBtns.forEach((btn) => btn.addEventListener("click", newGame));

  function playTurn(e) {
    e.preventDefault();
    if (counter < 5) {
      let guess = getGuess();
      gameLogic(guess);
    }
    guessForm.reset();
  }

  function getGuess() {
    let guessInput = document.getElementById("guess-input").value;
    return guessInput;
  }

  function gameLogic(guess) {
    if (guess < secretNumber || guess > secretNumber) {
      counter++;
      counter === 5 ? gameOver(guess) : pushGuess(guess);
    } else if (guess == secretNumber) {
      win(guess);
    }
  }

  function win(guess) {
    secretNumberCell.innerText=guess
    secretNumberCell.classList.add("jump")
    winPopup.style.display="block";
  }

  function gameOver(guess) {
    console.log("Game Over");
    pushGuess(guess);
    gameOverPopup.style.display = "block";
  }

  function renderGuesses(guess) {
    removeCells();
    wrongGuesses.forEach((number) => {
      if (number < secretNumber) {
        let newCell = createElements(number);
        guessChart.insertBefore(newCell, secretNumberCell);
      } else if (number > secretNumber) {
        let newCell = createElements(number);
        guessChart.append(newCell);
      }
    });
  }

  function pushGuess(guess) {
    if (!wrongGuesses.includes(guess)) {
      wrongGuesses.push(guess);
      wrongGuesses.sort();
      renderGuesses(guess);
    }else {
      // const existingCells = document.querySelector("[data-number=guess]")
      let existingCell = document.getElementById(guess);
      existingCell.classList.add("jump")
    }
  }

  function newGame() {
    location.reload()
  }

  function removeCells() {
    const cells = Array.from(document.querySelectorAll(".guess-cell"));
    console.log(cells);
    cells.forEach((cell) => cell.remove());
  }

  function createElements(number) {
    let newCell = document.createElement("div");
    newCell.classList.add("guess-cell", "cell", number);
    newCell.setAttribute("id", number);

    let newGuess = document.createElement("p");
    newGuess.classList.add("guess");
    newGuess.innerText = number;

    newCell.append(newGuess);
    return newCell;
  }

  return {};
})();
