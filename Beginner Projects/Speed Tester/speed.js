const sentences = [
  "JavaScript is a fun and poerful language.",
  "Typing fast can help improve your productivity.",
  "Always remember to keep practicing daily.",
  "Front-end development is creative and logical."
];

const sentenceEl = document.getElementById("sentence");
const userInput = document.getElementById("userInput");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");

let startTime; //store the time in milliseconds when the user starts typing
let selectedSentence;  //stores the random sentence shown to the user.


startBtn.addEventListener("click",()=>{
  selectedSentence = sentences[Math.floor(Math.random() * sentences.length)];
  sentenceEl.textContent = selectedSentence;
  userInput.value = "";
  result.textContent = "";
  userInput.disabled = false;
  userInput.focus();
  startTime=Date.now();
userInput.addEventListener("blur", ()=> {
  const endTime = Date.now()
})
})