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

// i love you!

for (let i = 0; i != 7; i = Math.round(Math.random() * 10)) {
  console.log(i);
}

const arr = [];
for (let i = 0; i <= 20; i += 2) {
  arr.unshift(i);
}
console.log(arr);

// 1 2 3 4
// 5 6 7 8
// 9 10 11 12
// 13 14 15 16

const a = [[], [], [], []];
for (let j = 0; j < 4; j++) {
  for (let i = 0; i < 4; i++) {
    a[j].push(i + j * 4 + 1);
  }

  // for (let i = 5; i <= 8; i++) {
  //   a[1].push(i);
  // }

  // for (let i = 9; i <= 12; i++) {
  //   a[2].push(i);
  // }

  // for (let i = 13; i <= 16; i++) {
  //   a[3].push(i);
  // }
}
console.log(a);

const b = [[], [], [], []];

for (let i = 1; i <= 16; i++) {
  b[Math.ceil(i / 4) - 1].push(i);
}
console.log(b);

for (let j = 3; j >= 0; j--) {
  for (let i = 3; i >= 0; i--) {
    console.log(b[j][i]);
  }
}
