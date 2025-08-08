let string = "hello this is Mitsubushi";
let newString = string.replace("Mitsubushi", "Porsche");
console.log(newString);

// split() and join
let text = "I want a Porsche";
let newText = text.split("Porsche").join("BMW");
// split() breaks the string wherever "Porsche" appears, and create an array
// join() joins all parts using "BMW"
console.log(newText);