
if ('some string' === 'another string') {
    console.log('the string are equal');
} else {
    console.log('the string are not equal')
}
// VM5953:4 the string are not equal
undefined
// if () {} else {}
const myExpression = (20 === 20) && (50 ===50);

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
    console.log ('the expression is true');
} else if (firstNumber > 0) {
    console.log('the is expression is false and the firstNumber is greater than 0');
} else {
    console.log('expression false, and firstNumber 0 or less')
}


if (jsExpression) { console.log('just a different formatting')};
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

const randomIndex = Math.floor(Math.random() * colors.length );

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

const randomIndex1 = Math.floor(Math.random() * colors1.length );

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
    const postAuthor= blogPosts[i].author;
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
