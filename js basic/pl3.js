// let number = 5;
// for(let i = 1; i <= 10; i++){
//   console.log(`${number} * ${i} = ${number * i}`);
//     // console.log(+number +"*" + i + "=" + number * i);
// }

function multiPlication(){
  const num = Number(document.getElementById("numberInput").value);
  const output = document.getElementById("tableOutput");
  output.textContent = "";

  for(let i = 1; i<=10; i++){
    output.textContent += `${num} * ${i} = ${num * i}\n`;
  }
}