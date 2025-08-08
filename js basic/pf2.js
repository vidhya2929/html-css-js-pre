function isPrime(num){
  if(num <= 1)
    return false;
  for(i=2;i<=num-1;i++){
    // for(i=1; i<=Math.sqrt(num);i++)
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
console.log(isPrime(5));