
// Numbers

const myNumber = 42;
console.log(myNumber);

const myFloat = 42.0151;
console.log(myFloat);

const myString = "42.123kiuk";
console.log(myString);

console.log(myNumber === myFloat);

console.log(myNumber === myString);

console.log(myString + 3);

console.log(Number(myString) + 3);

console.log(Number(myString) === myNumber);

console.log(Number("Olha"));

console.log(Number(true));
console.log(Number(false));

// Number Methods

// The number.isInterger() method determines whether the passed value is an integer.

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));

console.log(Number.parseFloat(myNumber));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myString));

// The Number.parseFloat() method parses an argument (the value passed to it, also known as an) and returns a floating point number.
// If a number cannot be parsed, it returns nan, which stands for not a number.
    
console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myNumber));

// The tofixed() method also rounds up if removing trailing decimals. Also note, this method returns string data and not number data.

console.log(Number.parseFloat(myString).toFixed(2));
console.log(myFloat.toFixed(2));

// The Number.parseInt method parses an argument and returns an integer.Like the parse float method the parseInt method removes non-numeric characters and converts other data types to the number data type.

console.log(Number.parseInt(myFloat));
console.log(Number.parseInt(myString));

//  The toString method returns a string representing the number data.

console.log(myFloat.toString());
console.log(typeof myFloat.toString());
console.log(typeof Number.parseFloat(myString));

// Chaining = using several methods chained together

console.log(Number.parseFloat("4. 237abc").toFixed(2).toString());

console.log(Number.isNaN("Olha"));
console.log(isNaN("Olha"));