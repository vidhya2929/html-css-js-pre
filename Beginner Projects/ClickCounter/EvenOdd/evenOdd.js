function EvenOdd(){
  const input = document.getElementById("evenodd").value;
  const result = document.getElementById("result");

  if(input % 2 === 0){
    result.textContent = `${input} is even number`;
  }
  else{
    result.textContent = `${input} is an odd number`;
  }

}

// 

// const input = document.getElementById("evenodd");
// const checkBtn = document.getElementById("checkBtn");
// const result = document.getElementById("result");

// checkBtn.addEventListener("click",()=>{
//   const num = parse(input.value);

//   if(isNaN(num){
// result.textContent = "Please enter a valid number";
// return;
// }
// if(num % 2 === 0){
// result.textContent = `${num} is Even.
// }
// else {
// result/textContent = ``&{num} is odd.
// 
// }
// 
// 
// 
// 
// 

