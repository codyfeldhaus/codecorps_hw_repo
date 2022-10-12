/*
Exercise 10
Define a function called findFactors that takes in a single parameter num, an integer, 
and returns an array containing all the numbers from 1 up to num that are factors of num. 
A number a is a factor of another number b if a goes into b evenly, i.e. there is no remainder 
when you divide b by a. 

You should make use of your isDivisible function from Exercise 9.
*/

//Copy your definition for isDivisible(x, y) from Ex. 9 here.
function isDivisbile(x, y) {
    if (x % y == 0) {
        return true;
    } else {
        return false;
    }
}

/*Your Code Here*/

function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (isDivisbile(num, i)) {
            factors.push(i);
        }
    }
    return factors
}

//Test Cases

console.log(`The factors of 72 are ${findFactors(72).join(", ")}`);

console.log(`The factors of 312 are ${findFactors(312).join(", ")}`);

console.log(`The factors of 125 are ${findFactors(125).join(", ")}`);

console.log(`The factors of 103 are ${findFactors(103).join(", ")}`);