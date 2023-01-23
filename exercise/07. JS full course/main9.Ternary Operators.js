// Ternary Operators

//syntax
//condition  ? ifTrue : ifFalse

let soup = "Soup";

// let response = soup ? "Yes" : "Sorry";
// console.log(response);

let isBanned = false;

let soupAccess = isBanned ? "Sory" : soup ? "Yes" : "Sorry,today";
console.log(soupAccess);

let testScore = 60;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";

console.log(`My tesst ${myGrade}`);
