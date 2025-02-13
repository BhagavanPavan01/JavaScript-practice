let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100); // Fixed typo

function checkGuess() {
    let guessedNumber = parseInt(userInput.value);

    if (isNaN(guessedNumber)) {
        gameResult.textContent = "Please enter a valid number!";
        gameResult.style.backgroundColor = "#e74c3c"; // Red for error
    } else if (guessedNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again";
        gameResult.style.backgroundColor = "#1e217c"; // Fixed semicolon
    } else if (guessedNumber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again";
        gameResult.style.backgroundColor = "#f39c12"; // Orange for hint
    } else {
        gameResult.textContent = "Congratulations! You guessed it right!";
        gameResult.style.backgroundColor = "#2ecc71"; // Green for success
    }
}
