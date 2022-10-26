// const numberVariable = 0;
undefined
numberVariable ++;
// VM2033:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:16
// (anonymous) @ VM2033:1
numberVariable++;
// VM2051:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:15
// (anonymous) @ VM2051:1
let numberVariable = 0;
// VM2136:1 Uncaught SyntaxError: Identifier 'numberVariable' has already been declared
let numberVariable1 = 0;
undefined
numberVariable1++;
0
numberVariable1++;
1
numberVariable1++;
2
numberVariable1++;
3
numberVariable1++;
4
console.log(numberVariable1);
5

/**/


const firstNumber = 20;
undefined
// const secondNumber = '20';
undefined
// const result = firstNumber === secondNumber;
undefined
console.log(result);
// VM2482:1 false
undefined
console.log(result);
// VM2487:1 false
undefined
const secondNumber = '20';
undefined
const result = firstNumber == secondNumber;
undefined
console.log(result);
// VM2504:1 true
undefined

/**/


const exression = !(((100 % 50 < 100 / 50) && 300 + 5 === 305));
undefined
exression
false
const expression1 = 100 % 50;
undefined
const expression2 = 100 / 50;
undefined
const expression3 = expression1 < expression2;
undefined
const expression4 = expression3 && 300 + 5 === 305;
undefined
const expression5 = !expression4;
undefined
console.log(expression5);
false

/**/

const myObj = {
    prop1: 'first value',
    prop2: 20
};
undefined
const myArray = [40, 50, 2];
undefined
const result1 = myObj.prop2 === (myArray[0] / myArray[2]);
undefined
result1
true

/**/


const myObj1 = {
    nestedObject1: {
      price: 100,
      quantity: 5
    },
    nestedObject2: {
      price: 150,
      quantity: 2
    }
  };
  undefined
  const myArray1 = [myObj1.nestedObject1, myObj1.nestedObject2];
  undefined
  const result2 = (myArray1[0].price * myArray1[0].quantity) > (myArray1[1].price * myArray1[1].quantity); 
  undefined
  result
  true
  myArray[0].price
  100
  myArray[0].quantity
  5
  myArray[1].price
  150
  myArray[1].quantity
  2
  myArray[0].price * myArray[0].quantity
  500
  myArray[1].price * myArray[1].quantity
  300