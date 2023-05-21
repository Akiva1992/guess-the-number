# guess-the-number

## A similar but a bit simpler assignment which will help you to practice and understand these concepts better:

This assignment is about creating a simple "Guess the Number" game using HTML, CSS, and JavaScript, and organizing your project with Git. Here's a detailed outline of the tasks:

1. **Project Setup:** Start by setting up your project with separate HTML, CSS, and JavaScript files. Make sure to initialize a Git repository in your project folder and commit your changes frequently.

2. **Object Creation:** You will need to create a Game object that contains the game logic and status (like the guessed number, the number of attempts, etc.). You can also create a Player object if you wish to extend this game for multiple players in the future.

3. **Code Organization:** Try to encapsulate your code within modules or factories to avoid global scope pollution. For instance, if you only ever need ONE of something (like the Game), use a module. If you need multiples of something (like Players), create them with factories.

4. **HTML and Rendering:** Set up your HTML and create a JavaScript function that will render the game status to the webpage. This status could include the range of the possible number, the number of attempts the player has made, and hints for the player (like "Too High" or "Too Low").

5. **Interaction with the Game:** Build the functions that allow players to make a guess, and tie it to the DOM, letting players submit their guess through an input field in your webpage. Don't forget the logic that keeps players from making invalid guesses (like non-numeric or out-of-range guesses).

6. **End Game Logic:** Build the logic that checks for when the game is over! This should happen when the player guesses the correct number, or after a certain number of incorrect guesses.

7. **Interface Cleanup:** Clean up the interface to include an input field for players to enter their guesses, a button to submit their guess, a button to start/restart the game, and a display element that shows the game status to the player. You can also add a feature that allows players to choose the difficulty level, which could determine the range of the possible number.

8. **Optional - AI player:** If you're feeling ambitious, create an AI player that can guess the number. Start with a simple AI that makes a random legal guess. Later, you can implement a smarter AI that uses some strategy to make the guesses.

Remember to always think carefully about where each bit of logic should reside. Each piece of functionality should be able to fit in the game or player objects. Spend some time brainstorming here; it will make your life much easier later!