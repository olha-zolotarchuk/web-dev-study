// Conditionals: If statements

// if (condition) {
//     //run come code
// } else {
//     // run some different code
// }

// let soup = "chicken noodle soup";
// let soup;
// let reply;
// if (soup) {
//     reply = `Heres your order of ${soup}`;
// } else {
//     reply = `Sory, were out of ${soup}`;
// };
// console.log(reply);

// let customerIsBanned = false;
// let soup = "chicken noodle soup";
// let crackers = true;
// let reply;
// if (customerIsBanned) {
//   reply = "No soup for you!";
// } else if (soup && crackers) {
//     reply = `Heres your order of ${soup} & crackers`;
// } else if (soup){
//     reply = `Heres your order of ${soup}`;
// } else {
//     reply = "Sorry, we are out of soup";
// };
// console.log(reply);

let testScore = 99;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else if (collegeStudent) {
  grade = "U";
} else {
  grade = "F";
}

if (testScore >= 90) {
    grade = "A";
} else {
    if (testScore >= 80) {
        grade = "B";
    } else {
        if (testScore >= 70) {
            grade = "C";
        }
    }
}
console.log(grade);
