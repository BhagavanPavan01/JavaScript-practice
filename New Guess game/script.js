let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100); 
console.log (randomNumber)

function checkGuess(){
    let guessdNumber = parseInt(userInput.value);


    if (guessdNumber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "blue";
    }
    else if (guessdNumber < randomNumber){
        gameResult.textContent = "Too Low! Try Again";
        gameResult.style.backgroundColor = "red";
    }
    else if (guessdNumber === randomNumber) {
        gameResult.textContent = "Congratulations! Your Guess is Right";
        gameResult.style.backgroundColor = "green"; 
    }
    else{
        gameResult.textContent = "Enter Valid Input";
        gameResult.style.backgroundColor = "red"; 
    }
}

  