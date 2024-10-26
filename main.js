// This is my current age
const myAge = 25;

// This calculates the first 2 years of a dog's life (10.5 years each)
let earlyYears = 2;
earlyYears *= 10.5;

// This is to account for the first 2 years of a dog's life (myAge - 2)
laterYears = myAge - 2;

// This calculates every year after the first 2
laterYears *= 4;

// This converts my age into dog years
const myAgeInDogYears = earlyYears + laterYears;

// returns string as lowercase (TERAN becomes teran)
myName = `TERAN`.toLowerCase();



console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
