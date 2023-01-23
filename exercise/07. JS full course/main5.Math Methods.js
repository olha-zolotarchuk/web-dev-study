
// Math Methods and Propertise

// Propertise
console.log(Math.PI);

// Math Methods 

 //removed all the decimals from the value
console.log(Math.trunc(Math.PI)); 

// round
console.log(Math.round(Math.PI)); 
console.log(Math.round(3.4)); 
console.log(Math.round(3.5)); 

// rounds up

console.log(Math.ceil(3.3));
console.log(Math.ceil(3.1));

// rounds down

console.log(Math.floor(3.6));
console.log(Math.floor(Math.PI));

// argument: base number and exponent
console.log(Math.pow(2, 4));
console.log(Math.pow(2, 10));
console.log(Math.pow(5, 2));

console.log(Math.min(2, 5, 9));
console.log(Math.min(2, 0.5, 9));
console.log(Math.max(2, 5, 9));
console.log(Math.max(2, 9.2, 9));

// from 0 to 1 
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

// from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);  
console.log(Math.floor(Math.random() * 10) + 1);  
console.log(Math.floor(Math.random() * 10) + 1);  
console.log(Math.floor(Math.random() * 10) + 1);  

// // Choose Math.floor() NOT Math.ceil() for generating a random number from 1 to 10.
// Why ? Math.random() returne a range from o to 1 that includes 0 but not 1.
// Math.ceil(Math.random() * 10) has a chance of resulting in 0
// Math.floor(Math.random() * 10) + 1) is the way to go!