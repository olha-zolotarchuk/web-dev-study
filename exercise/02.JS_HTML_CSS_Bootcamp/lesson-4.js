const arr = [1, 2, 3];
undefined
arr.reverse();
// (3) [3, 2, 1]0: 31: 22: 1length: 3[[Prototype]]: Array(0)
str.split("");
// (5) ['h', 'e', 'l', 'l', 'o']0: "h"1: "e"2: "l"3: "l"4: "o"length: 5[[Prototype]]: Array(0)
str.split("").join()
'h,e,l,l,o'


/**/

function solution(str){
    const arr = str.split("");
   const reversed = arr.reverse();
   const finalAnswer = reversed.join("");
   
   return finalAnswer;
 }

 function solution(str){

    return str.split("").reverse().join("");
  }

  /**/

  function evenOrOdd(number) {
    if (number % 2 === 0) {
  return 'Even';
    } else {
      return 'Odd';
   }
  }

  /**/

  function getCount(str) {
    let vowelsCount = 0;
    
    const arr = str.split("");
    
    for (let i= 0; i < arr.length; i++) {
       switch (arr[i]) {
           case 'a':
           vowelsCount++;
           break;
           case 'e':
           vowelsCount++;
           break;
           case 'i':
           vowelsCount++;
           break;
           case 'o':
           vowelsCount++;
           break;
           case 'u':
           vowelsCount++;
       }
  }
    
    return vowelCount;
  }


  /**/

  function greet(name){
    if(name === "Johnny"){
      return "Hello, my love!";
    } else {
      return "Hello, " + name + "!";
    }
  }



  /**/
function isDiv (n,x,y) {
  const result1 = n/x;
  const result2 = n/y;
    
  if (result1 % 1  === 0 && result2 % 1 === 0 ){
    return true;
    }else{
      return false;
    }
  }


  /**/
  
  function makeNegative(num) {
    if (num < 0){
    return num;
      } else {
        return num *-1;
      }
    }



  /**/

  

