let array = [12,34,103,53,23,2];
// console.log(...array);
console.log(Math.max(...array));

// OR

let numbers = [23,45,67,12,89,34];
let largest = numbers[0];
for(let i = 1; i < numbers.length; i++){
  if(numbers[i] > largest){
    largest = number[i];
  }
}
console.log("the largest number is", largest);