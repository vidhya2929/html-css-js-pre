let name ="hwina"
const age = 21;
var country = "India"


let text = "Hello"  //String
let num = 25; //number
let isStudent = true  //boolean
let fruits = ["apple","orange"];  //array
let user = {name: "hdf", age : 20}//object

function greet(){
  console.log("Hello!");
}
greet();

// with parameters
function greet(name){
  console.log("hello" +name);
}
greet("heri");

let agee =18;
if (agee>= 18){
  console.log("You can vote");
}
else{
  console.log("You ar too young");
}


// for loop
for(let i=1; i<5; i++){
  console.log(i);
}

// while loop

let i=1;
while(i<=3){
  console.log("Hi");
  i++;
}

function sayHi(){
  alert("Hi there!")
}

function changeText(){
  document.getElementById("demo").innerHTML = "Text changed!"
}

// setTimeout()
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

// setInterval()
setInterval(() =>{
  console.log("This repeats every second");
},1000);

function checkAge(){
  let age = document.getElementById("ageInput").value;
  if(age >= 18){
    alert("Eligible");
  }
  else{
    alert("Not eligible");
  }
}



// CallBack => a function is passed to another function as an argument
// Usesd heavily in event handling and async operations

function greetUser(name, callback){
  console.log("Hi " + name);
  callback();
}

function endMessage(){
  console.log("Have a nice day!");
}
greetUser("helen",endMessage);

//1. here greetUser takes a name and a callback function as  arguments
//2. It prints Hi helen
// 3.Then it calls the callback -> which is endMessage
// 4.endMessage() runs and prints Have a nice day!


// a function passed to another function to run later.


// CLOSURE
// When an inner function remembers variables from its outer function even after the outer function has finished

// A function that remembers its lexical(outer)scope, even after the outer function has finished

function counter(){
  let count = 0;
  return function(){
    count++;
    console.log(count);
  }
}

const inc = counter();
inc();
inc();


// inner() still has access to count even after outer() is done

// counter() outer function defines a local variable count = 0
//  it returns an inner function that increments and logs outs count.
// when counter() is called, inc stores that information.
// each time you call inc(),it remembers count value and increases it

// PROMISE
// promises are used for handling asynchronous tasks like API calls or delays
// A promise is an object that represents a value that may be available now.later, or never(error)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() =>{
    resolve("promise resolved!");
  }, 2000);
});

myPromise.then(result => {
  console.log(result);
});

// new promise is created .it runs a function with resolve and reject
// after 2 seconds it calls resolve,passing the string.
// .then waits for the promise to complete and logs the result

// Async / Await

// makes asynchronous code looks like synchronous
function getData(){
  return new Promise(resolve =>{
    setTimeout(() => resolve("Data received!"),1000);
  });
}
async function showData(){
  const data = await getData();
  console.log(data);
}
showData();
// getData() returns a promise that resolves after 1 second
// showData() is marked as async, so it can use await
// await getData() pauses until the promise finishes.
// After 1 sec,data gets the result and prints it


// Event Loop(Execution Order)
// The event loop is what allows javascript to be non-blocking
// Synchronous -> Microtasks -> Macrotasks
console.log("Start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve().then(() => {
  console.log("Promise");
});
console.log("End");

// logs "Start"
// Schedules setTimeout() - goes to macro-task queue
// schedules the promise -goes to micro-task queue
// Logs "End"
// Then micro-tasks run -> logs "Promise"
// Then macro-tasks -> logs "Timeout".

// Order : Synchronous -> Micrcotasks -> Macrotasks

// Shalllow Copy
// reference is shared

let obj1 = {name : "Hue"};
let obj2 = obj1;
obj2.name = "anna";
console.log(obj1.name);

// Debounce
function debounce(fun, delay){
  let timeout;
  return function(){
    clearTimeout(timeout);               //used to clear the timeout
    timeout = setTimeout(fun, delay);
  };
}
// debounce() returns a new function
// when called 
//  it clears any previous timer
//  Sets a new timeout to run "fun" after the delay
// if called again within delay -> timer is reset
// Used for typing search boxes,scroll events etc..


// HOISTING
// JS moves declarations to the top of the scope duting compilation
console.log(x);
var x = 5;
// JS moves var x to the top
// But the value assignment happens later
// so output is undefined

// THIS keyword
// refers to the object that is executing the current function

// depends on how the function is called
function showThis(){
  console.log(this);
  // yyyyyyyyyyyyyyuyyyyyyyyyyyyyyyyyyyyyyyyyyyyy
}
showThis();

// this inside a regular function refers to:
//  window object if not in strict mode
// undefined in strict mode

// map/ filter / reduce 

// map: transforms each value ->new array
// filter: keeps only values that match condition
// reduce: combines values into one result

let nums = [1,2,3,4];
 
nums.map(n => n*2)            //[2,4,6,8]
nums.filter(n => n%2 === 0)   //[2,4]
nums.reduce((a,b) => a+b);  //10



// ARROW FUNCIONS
// shorter syntax for writing functions

function add(a,b){
  return a+b;
}

// Arrow Function

const add = (a,b) => a+b;


// No function keyword
// No need for {} or return if it is a one-line expression
// Inherits this from the surrounding scope.
// Use in short logic,essepcially in callbacks

const person = {
  name: "Vidhya",
  sayHi: function (){
    console.log("Hi"+ this.name);
  },
  arrowHi: () => {
    console.log("Hi" +this.name);
  }
};

person.sayHi();
person.arrowHi();   //Hi undefined (because arrow functions don't have thier own `this`)

// this keyword
// this refers to the context in which the current code is executing
// depends on how the function is called ,not where it is written


// Global Scope
console.log(this); //window (in browser)

// Inside a regular function
function show(){
  console.log(this);
}
show();
// window in browser ,undefined in strict mode


// inside an object method
const userr = {
  name: "vidhya",
  sayHi(){
    console.log(this.name);
  }
};
userr.sayHi();
// ok


// Inside an arrow function

const use = {
  name: "Helene",
  sayHi: () => {
    console.log(this.name);
  }
};
use.sayHi();   //undefined      
// Arrow functions do not have thier own "this" -they inherit it from the parent scope.

// insetTimeout

const obj = {
  name : "huen",
  greet(){
    setTimeout(function (){
      console.log(this.name);
    },1000);
  }
};
// returns undefined

const fixedObj = {
  name : "hei",
  greet(){
    setTimeout(() =>{
      console.log(this.name);
    },1000);
  }
};
// Use arrow function inside "setTimeout" to keep this pointing to the object


// scope in JS
// scope defines where a variable is accessible

// Global Scope - variables declared outside any function
// Function Scope = variables declared with "var" inside functions
// Block Scope = variables declared with "let" or "const" inside {}

let global = "I'm global";

function test(){
  let local = "I'm local";
  console.log(global);
  console.log(local);
}
test();

console.log(local);  //error


// Call
// Used to manually dset the value of "this"
function sayHello(){
  console.log("Hi" + this.name);
}
const usere = {name:"hew"};
sayHello.call(usere);
// Hi Vidhya

// apply()
// like call,but with arguments as an array
function greet(msg, emoji){
  console.log(msg + " "+ this.name + " " + emoji);
}
greet.apply(user,["Hello"])
// Hello hew emoj


// Destructuring
// shorthand syntax to unpack values from arrays or objects into variables
const uuser = {name: "Sida", age: 21};
const {name, age} = user;
console.log(name);

// Array

const numss = [1,2,3];
const[a,b] = numss;
console.log(a); 

// Spread and Rest
// spread(...) - expands items
const arr =[1,2];
const newArray =[...arr,3,4];
// [1,2,3,4]

// rest(...) used to collect values into an array
function sum(...nums){
  return nums.reduce((a,b) => a+b);
}
sum(1,2,3);
// 6



