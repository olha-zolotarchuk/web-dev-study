
if ('some string' === 'another string') {
    console.log('the string are equal');
} else {
    console.log('the string are not equal')
}
// VM5953:4 the string are not equal
undefined
// if () {} else {}
const myExpression = (20 === 20) && (50 === 50);

/**/

const firstNumber = 20;
const secondNumber = 10;
const jsExpression = firstNumber > secondNumber;

if (jsExpression) {
    console.log('this is expression is true');
}


if (jsExpression) {
    console.log('this is expression is true');
} else {
    console.log('this is expression is false');
}


if (jsExpression) {
    console.log('the expression is true');
} else if (firstNumber > 0) {
    console.log('the is expression is false and the firstNumber is greater than 0');
} else {
    console.log('expression false, and firstNumber 0 or less')
}


if (jsExpression) { console.log('just a different formatting') };
// VM7821:6 this is expression is true
// VM7821:11 this is expression is true
// VM7821:18 the expression is true
// VM7821:26 just a different formatting


/**/

// let firstNumber = 2;
// let secondNumber = 10;
// const jsExpression = firstNumber > secondNumber;
// undefined
// if (jsExpression) {
//     console.log ('the expression is true');
// } else if (firstNumber > 0) {
//     console.log('the is expression is false and the firstNumber is greater than 0');
// } else {
//     console.log('expression false, and firstNumber 0 or less')
// }
// VM8059:4 the is expression is false and the firstNumber is greater than 0

// let firstNumber = 2;
// let secondNumber = 10;
// const jsExpression = firstNumber > secondNumber;
// undefined
// if (jsExpression) {
//     console.log ('the expression is true');
// } else if (firstNumber > 3) {
//     console.log('the is expression is false and the firstNumber is greater than 0');
// } else {
//     console.log('expression false, and firstNumber 0 or less')
// }
// VM8132:6 expression false, and firstNumber 0 or less


/**/


const colors = ['orange', 'green', 'yellow', 'purple', 'blue'];

const randomIndex = Math.floor(Math.random() * colors.length);

const randomColor = colors[randomIndex];

if (randomColor === 'orange') {
    console.log('the color is orange');
} else if (randomColor === 'green') {
    console.log('the color is green');
} else if (randomColor === 'yellow') {
    console.log('the color is yellow');
} else if (randomColor === 'purple') {
    console.log('the color is purple');
} else if (randomColor === 'blue') {
    console.log('the color is blue');
} else {
    console.log('no color found');
}
// VM9800:8 the color is orange

/**/

const colors1 = ['orange', 'green', 'yellow', 'purple', 'blue'];

const randomIndex1 = Math.floor(Math.random() * colors1.length);

const randomColor1 = colors1[randomIndex1];

switch (randomColor1) {
    case 'orange':
        console.log('the color is orange');
        break;
    case 'green':
        console.log('the color is green');
        break;
    case 'yellow':
        console.log('the color is yellow');
        break;
    case 'purple':
        console.log('the color is purple');
        break;
    case 'blue':
        console.log('the color is blue');
        break;
    default:
        console.log('no color found');
}
// VM10750:21 the color is blue

/**/

const blogPosts = [
    {
        title: 'What is JavaScript?',
        author: 'Zach  Gollwitzer',
        publishDate: 'Dec 20, 2020',
        content: 'some post content here'
    },
    {
        title: 'How do Arrays work?',
        author: 'Zach  Gollwitzer',
        publishDate: 'Jan 1, 2021',
        content: 'some post content here'
    },
    {
        title: 'How long does it take to learn coding?',
        author: 'Zach  Gollwitzer',
        publishDate: 'Jan 20, 2021',
        content: 'some post content here'
    }
]
undefined
for (let i = 0; i < blogPosts.length; i++) {
    const postTitle = blogPosts[i].title;
    const postAuthor = blogPosts[i].author;
    const postDate = blogPosts[i].publishDate;
    const postContent = blogPosts[i].content;


    console.log(postTitle);
    console.log(postAuthor);
    console.log(postDate);
    console.log(postContent);
}
// VM2089:8 What is JavaScript?
// VM2089:9 Zach  Gollwitzer
// VM2089:10 Dec 20, 2020
// VM2089:11 some post content here
// VM2089:8 How do Arrays work?
// VM2089:9 Zach  Gollwitzer
// VM2089:10 Jan 1, 2021
// VM2089:11 some post content here
// VM2089:8 How long does it take to learn coding?
// VM2089:9 Zach  Gollwitzer
// VM2089:10 Jan 20, 2021
// VM2089:11 some post content here
// undefined


/**/

for (let i = 0; i < 100; i++) {
    console.log(i);
}

/**/

const arr = ['eifoiefe', 'ksjbefj', 'iehfwoif', 'efwwef', 20, 20, 40, 50];
undefined
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        console.log(arr[i]);
    }
}
// 2VM1244:3 20
// VM1244:3 40
// VM1244:3 50

/**/

function myFuction() {
    concole.log('helllo world, this is my first function');
}
undefined
const myVar = 20;
undefined
typeof myFuction
'function'
myFuction()


    /**/

    (function anotherFunction() {
        console.log('hello');
    })();
// VM2459:2 hello


/**/

function myFunction(param1, param2) {
    console.log(param1);
    console.log(param2);
}
undefined
myFunction();
// VM3254:2 undefined
// VM3254:3 undefined
undefined
myFunction(20, 'some string');
// VM3254:2 20
// VM3254:3 some string

/**/


function myFunction() {
    console.log('some string');
}
undefined
const anotherFunction = function () {
    console.log('another thing');
}
undefined
typeof anotherFunction
'function'
myFunction();
// VM4711:2 some string
undefined
anotherFunction();
// VM4726:2 another thing
undefined

/**/


const arrowFunction = () => {
    console.log('i am an arrow function');
}
undefined
arrowFunction();
// VM382:2 i am an arrow function
undefined

/**/

const myFunction = () => {
    console.log('something');
}
undefined
const result = myFunction();
// VM663:2 something
undefined
result
undefined

/**/

const returnFunction = () => {
    const a = 20;
    return a;
}
undefined
// const result = returnFunction();
undefined
result
20
const returnFunction2 = () => {
    const a = 20;
    return a < 30; //true 
}
undefined
const result2 = returnFunction2();
undefined
result2
true


/**/

const myFunction = () => {
    let myNumber = 20;
    return myNumber;
    myNumber = 50;
}
undefined
myFunction();
20

/**/

const myNumber = 20;
undefined
let myfunction1 = () => {
    if (myNumber < 50) {
        return 'returned the functiion early';
    }

    return 40;
}
undefined
myfunction1();
'returned the functiion early'
let myfunction = () => {
    if (myNumber < 50) {
        return 'returned the functiion early';
    }
    return 50;
    return 40;
}
undefined
myfunction1();
'returned the functiion early'

/**/

function myFunction() {
    return 20;
}
undefined
myFunction();
20
const aliasVariable = myFunction;
undefined
aliasVariable();
20
const myObj = {
    prop1: 50,
    prop2: myFunction
}
undefined
myObj.prop2();
20

/**/

const myString = 'zach';
undefined
myString.replace('h', 'k');
'zack'
myString
'zach'
const newName = myString.replace('h', 'k');
undefined
newName
'zack'
myString.toUpperCase();

/**/

let str = 'hello world';
undefined
const result1 = str.toUpperCase().split(" ");
undefined
result1
(2) ['HELLO', 'WORLD']
result1.indexOf("WOLD");
-1
str;
'hello world'
const step1 = str.toUpperCase();
undefined
const step2 = step1.split(" ");
undefined
step2
// (2) ['HELLO', 'WORLD']0: "HELLO"1: "WORLD"length: 2[[Prototype]]: Array(0)
const stepp3 = step2.indexOf("WORLD");
undefined
stepp3
1

/**/


