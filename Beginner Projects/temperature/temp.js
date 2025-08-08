function convertTemp(){
  const input = parseFloat(document.getElementById("tempp").value);
  const result = document.getElementById("result");
  if(isNaN(input)){
    result.textContent = "please enter a valid number";
    return;
  }
  const fahrenheit = (input * 9/5) + 32;
  result.textContent = `${input} deg celsius is ${fahrenheit.toFixed(2)}degF`
}