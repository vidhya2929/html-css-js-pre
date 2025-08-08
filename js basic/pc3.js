let d = 10;
let e = 20;
let f = 2;
if(d>=e && e >= f){
  console.log("The largest number is :" +a);
}else if(e >= d && d>=f){
  console.log("The largest number is :"+b);
}
else{
  console.log("the largest number is :"+c);
}

// without &&
let a = 25;
let b = 40;
let c = 15;

if(a >= b){
  if(a>c){
    console.log("The largest number is :" , a);
  }
  else{
    console.log("The largest number is :",c);
  }
}
else{
  if(b >= c){
    console.log("the largest number is :", b);
  }
  else
  {
    console.log("The largest number is :",c);
  }
}

// Prompt 
 let n1 = prompt("Enter the first number");
 let n2 = prompt("Enter the second number");
 let n3 = prompt("ENter third number");

 if(n1 > n2){
    if(n1>n3){
      console.log(" n1 is the largest number");
      alert("n1 is the largest number");
    }
    else{
        console.log("n3 is largest number")
    }
 }
else{
    if(n2>n3){
      console.log("n2 is largest");
    }
    else{
      console.log("n3 is largest number");
    }
  }