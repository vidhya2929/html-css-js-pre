function MinOfThree(a,b,c){
  return Math.min(a,b,c);
}
console.log(MinOfThree(23,76,12));

// without min function
function findMin(a,b,c){
  let min;
  if(a<=b && a<=c){
    min = a;
  }
  else if(b <= a && b <= c){
    min = b;
  }
  else{
    min = c;
  }
  return min;
}