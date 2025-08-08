let num1 = 4;
let num2 =2;
let temp = num1;

num1 = num2;
num2= temp;

console.log(num1);
console.log(num2);

// Without using a 3rd variable
 let a = 10;
 let b = 20;

 a=a+b;  // a=30
 b = a-b; //b=10
 a= a-b; //a=20

 console.log("a = ", a);
 console.log("b=", b);