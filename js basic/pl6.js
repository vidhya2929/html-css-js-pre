function findFactorial(){
  const input = Number(document.getElementById("InputNumber").value);
  const output = document.getElementById("factorial");
  let factorial = 1;
  for(let i=1; i<=input;i++){
    factorial *= i;
  }
  output.textContent = factorial;
}