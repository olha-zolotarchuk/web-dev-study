// Loops

// let myNumber = 50;
// while (myNumber < 50) {
//   console.log(myNumber);
//   // myNumber = myNumber + 1;
//   myNumber++;
// }

// while (myNumber < 50) {
//   myNumber++;
//   console.log(myNumber);
// }

// while (myNumber < 50) {
//   myNumber += 2;
//   console.log(myNumber);
// }

// Don't create an endless loop 
// and that is because it will just kind of go on forever until you run out of memory

// do {
//   myNumber += 2;
//   console.log(myNumber);
// } while (myNumber < 50) 

// Now, the main thing to remember with a do while loop, really the only difference is it's going to do this at least one time. 

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// }

// for (let i = 0; i <= 10;) {
//     console.log(i);
//     i++;
// }

// So you define the counter variable and sometimes you'll see it named counter, and then you put the condition and then you increment.

let nameo = "Olha"
// for (let i = 0; i < nameo.length; i++) {
//   console.log(nameo.charAt(i));
// }

let counter = 0;
let myLetter;
// while (true) {
//     myLetter = nameo[counter];
//     console.log(myLetter);
//     if (myLetter === "h") break;
//     counter++;
// }

while (counter <=3 ) {
  myLetter = nameo[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
  if (myLetter === "h") break;
  counter++;
}
console.log(counter);

