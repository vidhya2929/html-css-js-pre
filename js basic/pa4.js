// let numbers = [12,34,54,14,46,17,34];
// let target = 34;
// let count = 0;

// for(let i = 0; i< numbers.length;i++){
//   if(numbers[i] === target){
//     count++;
//   }
// }
// console.log(`${target} appears ${count} times.`);

let numbers = [12,32,34,54,65,65,34,65,34,65,65,31] ;
let target= 65;
let count = 0;

for(let i=0;i<numbers.length;i++){
  if(numbers[i] === target){
    count++
  }
}
console.log(`${target} appears ${count} times.`);