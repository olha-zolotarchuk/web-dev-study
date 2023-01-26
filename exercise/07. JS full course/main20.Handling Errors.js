// Handling Errors
// JavaScript errors and error handling

// variable = "Olha";
// console.log(variable);
// 1) reference aerial uh error because variable is not defined

// Object..create();
// 2) SyntaxError: Unexpected token '.'

// const variable = "Olha";
// variable = "OOO"
// 3) ReferenceError: Cannot access 'variable' before initializatio

// const makeError = () => {
//     try {
//         // const name = "Olha";
//         // name = "OOO"
//         throw new customError ("This is a custom error")
//     } catch (err) {
//         // console.table(err);
//         // console.warn(err);
//         // console.error(err);
//         console.error(err.name);
//         console.error(err.message);
//          console.error(err.stack);
//         // logTheError(err.stack);
//     }
// };
// makeError();

// function customError(message) {
//     this.message = message;
//     this.name = "customError";
//     this.stack = `${this.name}: ${this.message}`
// }

// generic error constractor
// Tri catch blocks can also include finally blocks. Finally blocks come at the end and they execute no matter what. So if an error is thrown, the finally block will still execute after the catch block, if no error is thrown, the finally block will still execute as well.

const makeError = () => {
  let i = 1;
  while (i <= 5) {
    try {
      if (i % 2 !== 0) {
        throw new Error("Odd number");
      }
        console.log("Even number")
    } catch (err) {
      console.error(err.stack);
    } finally {
      console.log("...finally");
      i++;
    }
  }
};
makeError();

//  Finally, we'll execute no matter what, whether there's an error or not.  Catch will only execute if there is an error and if there is an error in the tri block, any code following that error will not execute. Any code that remains in the tri block will not execute if an error happens before it reaches that code. So this line 48 only executed when we had an even number and that is how try-catch and finally work.
