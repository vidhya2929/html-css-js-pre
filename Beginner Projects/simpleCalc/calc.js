function calculate(operator){
  const n1 = parseFloat(document.getElementById("num1").value);
  // parseFloat()=> used to convert a string to a number
  // const input = "42.5";
  // const number = parseFloat(input);
  // console.log(number); // 42.5 → a number, not a string

  const n2 = parseFloat(document.getElementById("num2").value);
  const result = document.getElementById("result");

  if(isNaN(n1)|| isNaN(n2)){
    result.textContent = "Please enter valid numbers.";
  }
  let output;

  switch(operator){
    case '+' :
      output = n1 +n2;
      break;
  case '-':
    output = n1-n2;
    break;
  case '*':
    output = n1 * n2;
    break;
  case '/':
    output = n1/n2;
    break;
  default:
    output = "Invalid Operation";
  }
  result.textContent =`Result : ${output}`;
}