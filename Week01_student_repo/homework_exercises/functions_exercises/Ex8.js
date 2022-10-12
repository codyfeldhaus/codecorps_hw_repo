/*
Exercise 8
Complete the following function definition for isDivisibleBy3,
which takes in an integer num and returns true if it is divisible by 3 and false otherwise.
*/

function isDivisibleBy3(num) {
    return (num % 3 == 0);
}

//Test Cases
console.log(`True or False: 156 is divisible by 3? ${isDivisibleBy3(156)}`) //should be true

console.log(`True or False: 15422 is divisible by 3? ${isDivisibleBy3(15422)}`) //should be false

console.log(`True or False: -642 is divisible by 3? ${isDivisibleBy3(-642)}`) //should be true

console.log(`True or False: 8010001 is divisible by 3? ${isDivisibleBy3(8010001)}`) //should be false


