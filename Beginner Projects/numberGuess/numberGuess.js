const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessbtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");


let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
guessBtn.addEventListener("click", ()=>{
  const userGuess = Number(guessInput.value);

  if(!userGuess || userGuess < 1 || userGuess > 100){
    message.textContent = "please enter a number between 1 and 100";
    return;
  }
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if(userGuess=== secretNumber){
    message.textContent = `Correct! The number was ${secretNumber}.You guesssed it  in ${attempts} TimeRanges.`;
    guessBtn.disabled = true;
    guessInput.disabled = true;
  }
  else if(userGuess < secretNumber) {
    message.textContent = "Too low. Try again!";
  }
  else{
    message.textContent = "Too high. Try again!";
  }

  guessInput.value = "";
});