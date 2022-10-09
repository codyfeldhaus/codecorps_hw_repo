/*
Exercise 6
Complete the following function definition for temperatureConverter.
It should take in one parameter, a STRING temp, which represents a temperature in  either degrees Celsius or Fahrenheit.
Ex. inputs: '28C', '102.5F', '-6C', etc.
Based on the unit of the input, the function should convert the temperature to the OTHER unit (C to F, F to C).
Ex. outputs: '82.4F', '38.9C', '21.2F', etc.
Make use of the previously defined celsiusToFahrenheit and fahrenheitToCelsius functions rather than rewriting the conversions.
*/

/*Copy fahrenheitToCelsius function definition from class here*/

/*Copy celsiusToFahrenheit function definition from Exercise 5 here*/

function temperatureConverter(temp) {
    /*Your Code Here*/
}

//Test Cases
console.log(`28C is equal to ${temperatureConverter('28C')}`);  //Should be 82.4F

console.log(`102.5F is equal to ${temperatureConverter('102.F')}`);  //Should be 38.9C

console.log(`-6C is equal to ${temperatureConverter('-6C')}`);  //Should be 21.2F


