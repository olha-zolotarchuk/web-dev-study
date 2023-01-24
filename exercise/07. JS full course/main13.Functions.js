// Functions

// Methods = biilt-in Functions
// "Olha".toLowerCase();
// Math.random();

// Function Declaration Syntax

// function sum() {
//   return 2 + 2;
// }
// console.log(sum());

// function suma(num1, num2) {
//   return num1 + num2;
// }
// console.log(suma(2, 4));

// function suma(num1, num2) {
//   console.log(num1);
//   console.log(num2);
//   return num1 + num2;
// }
// console.log(suma(2));

function suma(num1, num2) {
  if (num2 === undefined) {
    return num1 + num1;
  }
  return num1 + num2;
}
console.log(suma(5));

function getUserNameFromEmail(email) {
  return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("plecnj1@emmail.com"));

//anonymous functions
// const getUserNameFromEmail = function (email) {
//   return email.slice(0, email.indexOf("@"));
// }
// console.log(getUserNameFromEmail("plecnj1@emmail.com"));

// arrow functions
const getUserNameFromEmail1 = (email) => {
  return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail1("arrowFunctions@emmail.com"));

const toProperCase = (nameo) => {
    return nameo.charAt(0).toUpperCase() + nameo.slice(1).toLowerCase();
};
console.log(toProperCase("oLhA"))

// Functions provide reusable code and that is the main thing to take away.
// We can define blocks of code and call them when we need them.
