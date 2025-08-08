const fruits = ["Apple","Mango","Orange","Banana"];
function isIncludes(){
  const input = document.getElementById("include").value.toLowerCase();
  const result =document.getElementById("result");

  const lowerFruits = fruits.map(fruit => fruit.toLowerCase());

  if(lowerFruits.includes(input)){
    result.textContent = `${input} exists in the array`;
  }
  else{
    result.textContent = `${input} does not exists in the array`;
  }

}
inputElement.value = "";