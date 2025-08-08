let a = 25;
if(a % 2 === 0){
  console.log(a+" is even");
}
else{
  console.log(a+" is odd");
}

// Function
function isEven(num){
  return num % 2 === 0;
  // returns a true or false
}
let number = 8;
console.log(isEven(number) ? "Even" : "odd");

// Ternary Opeator
let numb = 7;
let result = (number % 2 === 0) ? "Even":"Odd";
console.log(result);

// Bitwise AND operator
let num = 9;
if((num & 1) === 0){
  // every number in binary end with-:
  // 0-> if it is even
  // 1-> if it is odd
  console.log("Even");
}
else{
  console.log("odd");
}
