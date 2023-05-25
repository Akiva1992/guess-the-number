const game = (function () {
  let secretNumber = Math.floor(Math.random() * 10) + 1;
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
  const error = document.querySelector(".error");
  const helpTxtContainer = document.querySelector(".help-txt-container");
  const secretCellContainer = document.querySelector(".secret-cell-container");

  // Bind Events
  // guessForm.addEventListener("submit", playTurn);
  guessForm.addEventListener("submit", formCheckValidety);
  guessInput.addEventListener("input", inputCheckValidety);
  newGameBtns.forEach((btn) => btn.addEventListener("click", newGame));

  function formCheckValidety(e) {
    if (!guessInput.validity.valid) {
      e.preventDefault();
      showError();
    } else {
      e.preventDefault();
      playTurn();
    }
  }

  function inputCheckValidety() {
    if (guessInput.validity.valid) {
      error.textContent = "";
      error.style.display = "none";
    } else {
      showError();
    }
  }

  function showError() {
    if (guessInput.validity.valueMissing) {
      error.textContent = "⋰ You must input a Number.";
      error.style.display = "block";
      guessForm.reset();
    } else if (guessInput.validity.rangeOverflow) {
      error.textContent = "";
      error.textContent = "⋰ Number must be smaller than 11";
      error.style.display = "block";
      guessForm.reset();
    } else if (guessInput.validity.rangeUnderflow) {
      error.textContent = "";
      error.textContent = "⋰ Number must be bigger than 0";
      error.style.display = "block";
      guessForm.reset();
    }
  }

  // Game Functions.
  function playTurn() {
    helpTxtContainer.style.display = "none";
    if (counter < 5) {
      let guess = getGuess();
      gameLogic(guess);
    }
    guessForm.reset();
  }

  function gameLogic(guess) {
    if (guess < secretNumber || guess > secretNumber) {
      counter++;
      counter === 5 ? gameOver(guess) : pushGuess(guess);
    } else if (guess == secretNumber) {
      win(guess);
    }
  }

  function renderGuesses() {
    removeCells();
    wrongGuesses.forEach((number) => {
      if (number < secretNumber) {
        let newCell = createElements(number);
        guessChart.insertBefore(newCell, secretCellContainer);
      } else if (number > secretNumber) {
        let newCell = createElements(number);
        guessChart.append(newCell);
      }
    });
  }

  function gameOver(guess) {
    pushGuess(guess);
    gameOverPopup.style.display = "flex";
  }

  function win(guess) {
    secretNumberCell.innerText = guess;
    secretNumberCell.classList.add("jump");
    winPopup.style.display = "flex";
  }

  // Utility Functions.
  function getGuess() {
    let guessInput = Number(document.getElementById("guess-input").value);
    return guessInput;
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

  function pushGuess(guess) {
    if (!wrongGuesses.includes(guess)) {
      wrongGuesses.push(Number(guess));
      wrongGuesses.sort(sortNumbers);
      renderGuesses();
    } else {
      let existingCell = document.getElementById(guess);
      existingCell.classList.add("jump");
    }
  }

  function sortNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (b > a) {
      return -1;
    } else {
      return 0;
    }
  }

  function removeCells() {
    const cells = Array.from(document.querySelectorAll(".guess-cell"));
    cells.forEach((cell) => cell.remove());
  }

  function newGame() {
    location.reload();
  }
})();
