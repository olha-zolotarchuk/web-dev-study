// https://leetcode.com/problems/palindrome-number/
// let num = 121;
// console.log(num);
// const reversedNum = Number(num.toString().split("").reverse().join(""));
// console.log(reversedNum);

// if (num === reversedNum) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// https://leetcode.com/problems/roman-to-integer/

// function romanToInt(s) {
//   const num = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let result = 0;
//   let test = 0;

//   for (let i = s.length - 1; i >= 0; i--) {
//     const number = num[s[i]];

//     if (number < test) {
//       result -= number;
//     } else {
//       result += number;
//     }
//    test = number;
//   }
//   return result;
// }
// romanToInt("");
// console.log(romanToInt("VI"));

// const symbol = ["I", "V", "X", " L", "C", "D", "M"];
// const value = [1,5,10,50,100,500,1000]
// console.log(symbol[1])
// console.log(value);
// const sym = num.forEach((element) => console.log((element.symbol)));
// const val = num.forEach((element) => (element.value));
// console.log(val);
// num.find((element) => console.log(element.symbol));

// https://leetcode.com/problems/valid-parentheses



  // const bracket= {
  //   "(": ")",
  //   "{": "}",
  //   "[": "]",
  // };




  for (let i = 0; i < 9; i++) {
    console.log(i);
    // more statements
  }

  function plusOne(digits) {
    // Loop through the digits array starting from the end
    for (let i = digits.length - 1; i >= 0; i--) {
      // Increment the current digit by one
      digits[i]++;

      // If the current digit is less than 10, we don't need to carry over to the next digit
      if (digits[i] < 10) {
        return digits;
      }
      // Otherwise, we need to carry over to the next digit and set the current digit to 0
      digits[i] = 0;
    }

    // If we have looped through the entire digits array and haven't returned, we need to add an extra digit to the beginning of the array
    digits.unshift(1);

    return digits;
  }