// let width = 12;
// let height = 2;

// let area = width*height;
// console.log(" area of the rectangle is " + area);


let width = prompt("Enter the width of the rectangle");
let height = prompt("Enter the height of the rectangle");

width = Number(width);
height = Number(height);

let area = width * height;
console.log("area of the rectangle is "+ area);
alert("area of rectangle is " +area);
// prompt() shows a popup asking for user input.
// Input is received as a string, so we use Number() to convert it to a number.
// Then we multiply wid *hei