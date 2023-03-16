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

function romanToInt(s) {
  const num = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
    console.log(num[s[i]]);
  }
}
romanToInt("VIII");

// const symbol = ["I", "V", "X", " L", "C", "D", "M"];
// const value = [1,5,10,50,100,500,1000]
// console.log(symbol[1])
// console.log(value);
// const sym = num.forEach((element) => console.log((element.symbol)));
// const val = num.forEach((element) => (element.value));
// console.log(val);
// num.find((element) => console.log(element.symbol));

// https://leetcode.com/problems/longest-common-prefix/description/
