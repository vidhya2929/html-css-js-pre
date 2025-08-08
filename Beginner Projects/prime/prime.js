const input = document.getElementById("primeInput");
const btn = document.getElementById("checkBtn");
const result = document.getElementById("result");

function isPrime(num){
  if(num <= 1) return false;
  if(num === 2) return true;

  for(let i = 2; i <=Math.sqrt(num); i++){
    if(num % i === 0)return false;
  }
  return true;
}
  checkBtn.addEventListener("click", ()=>{
  const value = Number(input.value);

  if(input.value === ""){
    result.texContent = "Please enter a number";
    return;
  }
  if(isPrime(value)){
    result.textContent = `${value} is a prime number`;
  }
  else{
    result.textContent = `${value} is not a prime number`
  }
})