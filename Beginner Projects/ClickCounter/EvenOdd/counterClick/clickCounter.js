const countDisplay = document.getElementById("count");
const incBtn = document.getElementById("incrementBtn");
const reset = document.getElementById("resetBtn");
let count = 0;

incBtn.addEventListener("click",()=>{
  count++;
  countDisplay.textContent = count;

});

resetBtn.addEventListener("click", ()=>{
  count = 0;
  countDisplay.textContent = count;
});

