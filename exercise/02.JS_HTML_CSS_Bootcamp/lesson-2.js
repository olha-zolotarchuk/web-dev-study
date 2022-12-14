const valueWillNotchange = 20;
undefined
valueWillNotchange = 30;
// VM199:1 Uncaught TypeError: Assignment to constant variable.
//     at <anonymous>:1:20
// (anonymous) @ VM199:1
let WillChange = 20;
undefined
WillChange = 30;


/**/

const myString = 'hello world'; 
undefined
// const myString = "hello world";
// undefined
const myNumber = 30;
undefined
const myBoollean  = true;
undefined

/**/

const myArray = [1, 2, 3, 4];
undefined
const secondArray = ['string1', 'string2'];
undefined
myArray[0];
1
const myObj = {
    property1: 'some value',
}
undefined
myObj.property1;
'some value'
myObj['property1'];
'some value'

/**/

20 + 10;
30
50 - 20;
30
20 / 2;
10
2*2;
4
const result = 20 + 50 / 2;
undefined
result;
45

/**/

100 % 50;
0
100 % 77;
23
8**2;
64
8*2;
16
100 % 35;
30
100 % 25;
0
100 % 45
10

/**/

const staringNumber = 0;
undefined
staringNumber
0
let staringNumber1 = 0;
undefined
staringNumber1++;
0
staringNumber1;
1
staringNumber1++;
1
staringNumber1++;
2
staringNumber1
3
staringNumber1++;
3
staringNumber1++;
4
staringNumber1 = 12;
12
staringNumber1++;
12
staringNumber1++;
13
staringNumber1++;
14
staringNumber1++;
15
staringNumber1 = staringNumber1 + 1;
17
staringNumber1
17
staringNumber1 = staringNumber1 + 1;
18

/**/

let staringNumber12 = 4;
undefined
staringNumber12--;
4
staringNumber12--;
3
staringNumber12--;
2

/**/

let x1 = 10
undefined
x1
10
x1 = x + 5;
15
x1
15

/**/

let x = 10;
undefined
x+=5;
15
x
15
x+=5;
20
x-=5
15
x*=2
30
x/=3;
10

/**/

x = 10;
10
x = x + 5;
15
x+=5;

/**/

20 === 20;
true
20 == 20;
true
20 == '20'
true
 20 === '20'
false

/**/

const stringValue = '20';
undefined
typeof stringValue;
'string'
Number(stringValue);
20
const numberValue = 20;
undefined
stringValue == numberValue;
true
stringValue === numberValue;
false
Number(stringValue) === numberValue;
true

/**/

const stringValue1 = '20';
undefined
typeof stringValue1;
'string'
Number(stringValue1);
20
const numberValue1 = 20;
undefined
stringValue1 == numberValue1;
true
stringValue1=== numberValue1;
false
Number(stringValue1) === numberValue1;
true
const resultVariable = stringValue1 == numberValue1;
undefined
resultVariable
true

/**/

const numberValue2 = 20;
undefined
const stringValue2 = '20';
undefined
numberValue   !== stringValue;
true
numberValue   != stringValue;
false
'hello world' === 'hello world'
true
true === true;
true
const myObj2 = {
    property1: 'some value',
    property2: 20
};
undefined
const myArray2 = [1, 2, 3, 4, 5];
undefined
myArray2 === myArray2;
true
const secondArray2 = [1, 2, 3, 4, 5];
undefined
myArray2 === secondArray2;
false
myObj2 === myObj2;
true
const anotherObj2 = {
    property1: 'some value',
    property2: 20
};
undefined
myObj2 === anotherObj2;
false
myObj2 == anotherObj2;
false
myArray2 == secondArray2;
false

/**/

const result1 = 20 === 20 ? 'values match' : 'values do not match';
undefined
result1;
'values match'
let rsultVariable;
undefined
if (20 === 20) {
    resultVariable = 'values match';
} else {
    resultVariable = 'values do not match';
}
'values match'
resultVariable
'values match'
const result2 = 20 === 21 ? 'values match' : 'values do not match';
undefined
result2
'values do not match'

/**/

20 === 20 && 10 === 10;
true
20 === 20 && 10 === 12;
false
20 === 20 || 10 === 10;
true
false
20 === 18 || 10 === 12;
false
!(20 ===20);
false

/**/

const isUserLoggedIn = true;
undefined
const doesUserHavePermissions = false;
undefined
const canUserPerformAction = isUserLoggedIn && doesUserHavePermissions;
undefined
canUserPerformAction
false

/**/

const  result3 = !(((40 / 20) === 2 && true) || ('yes' === 'no'));
undefined
result3
false
const step1 = 40 / 20;
undefined
const step21 = step1 === 2;
undefined
step21
true
const step3 = step21 && true;
undefined
step3
true
const step4 =  'yes' === 'no';
undefined
step4
false
const step5 = step3 || step4;
undefined
step5
true
const step6 = !step5;
undefined
step6
false

/**/

const result5 = (() => {
    return 20;
})();
undefined
result
20