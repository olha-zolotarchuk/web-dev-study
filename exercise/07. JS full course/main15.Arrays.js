// Arrays
// Arrays are a data structure in JavaScript

const myArray = [];

// add elements to an Array
myArray[0] = "Olha";
myArray[1] = 1011;
myArray[2] = false;

// refer to an array
console.log(myArray);

//lenght property
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length - 1]);
console.log(myArray[myArray.length - 2]);
console.log(myArray[1]);

//  add more data to Array
// after Array
myArray.push("school");
console.log(myArray);

//  remove something from our array

myArray.pop();
console.log(myArray);

// const lastItem = myArray.pop();
// console.log(lastItem);

// before Array
myArray.unshift(42);
console.log(myArray);

//remove 1
myArray.shift();
console.log(myArray);

// const firstItem = myArray.shift();
// console.log(firstItem);
console.log(myArray);

console.log(myArray[1]);
console.log(myArray[2]);

// remove middle
//do not use
// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);

//use
//delete
// myArray.splice(1, 1)
// console.log(myArray);
// console.log(myArray[1]);

//replace
myArray.splice(1, 1, 42);
console.log(myArray);
console.log(myArray[1]);

myArray.splice(1, 0, 30);
console.log(myArray);
console.log(myArray[1]);

//array methods
const myArray1 = ["A", "B", "C", "D", "E", "F"];
console.log(myArray1);

const newArray = myArray1.slice(2, 5);
console.log(newArray);

myArray1.reverse();
console.log(myArray1);

const newString = myArray1.join();
console.log(newString);

const newArray1 = newString.split(",");
console.log(newArray1);

const A = [1, 2];
const B = [3, 4];
// const newArray2 = A.concat(B);
// console.log(newArray2);

// spread operator інший метод конкатинації
const newArray2 = [...A, ...B];
console.log(newArray2);
// без крапок то 2 масива в масиві
const newArray3 = [A, B];
console.log(newArray3);

//  nested array
const eguipShelfA = ["baseball", "football", "volleyball"];
const eguipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweet tops", "sweat pants", "hoodies"];

console.log(eguipShelfA);
//or
console.log(eguipShelfB);

console.log(eguipShelfA[1]);
console.log(eguipShelfB[0]);

const eguipDept = [eguipShelfA, eguipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(eguipDept[0][1]);
console.log(clothesDept[1][0]);

const sportStore = [eguipDept, clothesDept];
console.log(sportStore);

console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);