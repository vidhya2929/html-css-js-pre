// Using Includes()
let cars = ["bmw","audi","porsche","chevrolet","dodge","mercedes"]
let valueToCheck = "mitsubushi";

if(cars.includes(valueToCheck)){
  console.log(`${valueToCheck} exists in the array`);
}
else{
  console.log(`${valueToCheck} does not exist in the array`);
}

// using  a loop
let found = false;
for(let i=0; i< cars.length;i++){
  if(cars[i] === valueToCheck){
    found = true;
    break
  }
}
if(found){
  console.log(`${valueToCheck} exist in the array`)
}
else{
  console.log(`${valueToCheck} does not exist in the array`);
}

// Functions

function isValue(arr, value){
  return arr.includes(value);
}
let fruits = ["apple", "banana", "mango", "orange"];
let item = "mango";

if(isValue(fruits, item)){
  console.log(`${item} exists in the array.`);
}
else{
  console.log(`${item} does not exist in the array`);
}