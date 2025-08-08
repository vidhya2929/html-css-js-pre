// A year is a leap year if :
// It is divisible by 4, and not divisible by 100
// OR
// It is divisible by 400

let year = 2024;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
  console.log(year + "is a leap year.");
}
else{
  console.log(year+ "is not a leap year");
}
// Every 4th year is a leap year
// but years like 1700,1800,1900 are divivsible by 4 but not a leap year
// so we skip leap year every 100 years => year % 100 !==0
// but every 400years we make it a leap year
// 1600,2000,2400 are leap years.
//  year % 400 === 0