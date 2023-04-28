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

// https://leetcode.com/problems/search-insert-position/

// function searchInsert(nums, target) {
//   let index = 0;
//   let index2 = nums.length + 1;

//    console.log(index);
//    console.log(index2);
//   while (index <= index2) {
//     console.log(index);
//        console.log(index2)
//   }
// }

// function searchInsert(nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] >= target) {
//       return i;
//     }
//   }
//   return nums.length;
// }

// const nums = [1, 3, 5, 6];
// const target = 5;
// let result = searchInsert(nums, target);

// console.log(result);

// https://leetcode.com/problems/climbing-stairs/

// let n = 2;

// function climbStairs(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return (n - 1) + (n - 2);
//   }
// }

// console.log(climbStairs(n));

// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// const haystack = "hello";
// const needle = "ll";

// console.log(haystack.indexOf(needle))

// function strStr (haystack, needle) {

//     return haystack.indexOf(needle);
// };
// console.log(strStr(haystack, needle));

// https://leetcode.com/problems/length-of-last-word/

// const s = "   fly me   to   the moonff   ";

// const a = s.trimEnd();

// // console.log(s.length);
// // console.log(a.length)

// // let length = 0;

// function lengthOfLastWord(a) {
//   for (let i = a.length - 1; i >= 0; i--) {
//     // console.log(a[i]);

//     if (a[i] == " ") {
//         // console.log(i);
//        return a.length -i - 1
//     }
//   }
//    return a.length
// }
// // console.log(a)

// console.log(lengthOfLastWord(a));

// https://leetcode.com/problems/plus-one/

// const digits = [9];

// function plusOne(digits) {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     digits[i]++;

//     if (digits[i] > 9) {
//       digits[i]=0;
//     } else {
//       return digits;
//     }
//   }
//   digits.unshift(1);
//   return digits;
// }
// console.log(plusOne(digits));

// https://leetcode.com/problems/valid-parentheses

// const bracket= {
//   "(": ")",
//   "{": "}",
//   "[": "]",
// };

// const s = "()";

// // console.log(s)

// function isValid(s) {

//   for (let i = 0; i < 9; i++) {
//     console.log(s[i]);

//     if (s >  )
//     // console.log(s.length)
//   }
// }
// console.log(isValid(s))

// https://leetcode.com/problems/longest-common-prefix/

// const strs = ["flower", "flow", "flight"];

// // console.log(strs)
// // console.log(strs.toString());

// function longestCommonPrefix(strs) {
//   let run = true;
//   let r = "";
//   for (let i = 0; run; i++) {
//     // console.log(strs[i]);

//     for (let j = 0; j < strs.length; j++) {
//       // console.log(strs[j]);
//       // console.log(strs[j][i]);
//       // console.log(strs[i][j]);
//       // console.log(strs[0][j]);
//       // console.log(strs[0][i]);
//       // a;
//       // console.log(a)

//       if (strs[j].length <= i || strs[j][i] !== strs[0][i]) {
//         run = false;
//         // console.log(strs[j]);
//         // console.log(strs[j][i]);
//         // console.log(strs[0][i]);
//         break
//       }
//       // break;
//     }
//     if (run) {
//       r += strs[0][i];
//     }
//     //  break;
//   }
//   return r;
// }
// console.log(longestCommonPrefix(strs));

// https://leetcode.com/problems/valid-palindrome/

// grep -E '^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$' file.txt

// https://leetcode.com/problems/valid-palindrome/

// const s = "race a car";

// function isPalindrome(s) {
//   const completeSentence = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const palindrome = completeSentence.split("").reverse().join("");
//   console.log(completeSentence);
//   console.log(palindrome);
//   if (completeSentence === palindrome) {
//     return true;
//   } else {
//     return false
//   }
// }
// console.log(isPalindrome(s));

// https://leetcode.com/problems/single-number/

// nums = [4, 1, 2, 1, 2];
// let r = {};
// function singleNumber(nums) {
//   let r = {};
//   //  console.log(r);
//   for (let i = 0; i < nums.length; i++) {
//     console.log(r);
//     // console.log(r[nums[i]]);
//     if (r[nums[i]]) {
//       // console.log(r[nums[i]]);
//       delete r[nums[i]];
//     } else {
//       r[nums[i]] = true;
//       // console.log(r);
//       // console.log(r[nums[i]]);
//     }
//   }
//   return Object.keys(r)[0];
// }
// console.log(singleNumber(nums));

// nums = [4, 1, 2, 1, 2];
// let r = 0;
// function singleNumber(nums) {
//   for (let i = 0; i < nums.length; i++) {
//     // console.log(nums[i])
//     // console.log(i);
//     r ^= nums[i];
//   }
//   return r;
// }
// console.log(singleNumber(nums));

// https://leetcode.com/problems/majority-element/

// nums = [2, 2, 1, 1, 1, 2, 2, 5, 5, 5, 5, 5, 5, 5, 5];
// function majorityElement(nums) {
//   let r = {};
//   for (let i = 0; i < nums.length; i++) {
//     //  console.log(r);
//     if (r[nums[i]]) {
//       r[nums[i]]++;
//       // console.log(r[nums[i]]);
//     } else {
//       r[nums[i]] = 1;
//     }
//     // console.log(r);
//   }
//   console.log(r);

//   let maxCount = 0;
//   let majority = null;

//   for (let key in r) {
//     if (r[key] > maxCount) {
//       maxCount = r[key];
//       majority = key;
//     }
//   }
//   return majority;
// }
// console.log(majorityElement(nums));

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// const prices = [7, 1, 5, 3, 6, 4];
// const prices = [7, 6, 4, 3, 1];
const prices = [2, 4, 1];

// function maxProfit(prices) {
//   let minPrice = prices[0];
//   let maxPrice = prices[0];
//   let minIndex = 0;
//   let maxIndex = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//       minIndex = i;
//     } else if (prices[i] > maxPrice) {
//       maxPrice = prices[i];
//       maxIndex = i;
//     } else if (maxIndex < minIndex) {
//       maxPrice = prices[i];
//       maxIndex = i;
//     }
//   }

//   if (maxIndex > minIndex) {
//     profit = maxPrice - minPrice;
//   } else {
//     return profit = 0;
//   }
//   console.log(profit);

//   console.log(minPrice);
//   console.log(minIndex);
//   console.log(maxIndex);
//   console.log(maxPrice);
//   // return profit;
//   return [
//     { price: minPrice, index: minIndex },
//     { price: maxPrice, index: maxIndex },
//   ];
// }

// function maxProfit(prices) {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     // } else {
//     //   maxProfit = Math.max(maxProfit, prices[i] - minPrice);
//     // }
//   } else if (prices[i] - minPrice > maxProfit) {
//     maxProfit = prices[i] - minPrice
//    }
//   }

//   return maxProfit;
// }
// console.log(maxProfit(prices));

// https://leetcode.com/problems/valid-anagram/

// const s = "anagram";
// const t = "nagaram";

// function isAnagram(s, t) {
//   if (s.length !== t.length) {
//     return false;
//   }

//   let a = s.split("").sort().join("");
//   let b = t.split("").sort().join("");
//   console.log(a);
//   console.log(b);
//   return a === b;
// }
// console.log(isAnagram(s, t));

// https://leetcode.com/problems/palindrome-linked-list/

const head = [1, 2, 2, 1];

function isPalindrom(head) {
  const num = head;
  let a = num.join("");
  let b = num.reverse("").join("");
  console.log(a);
  console.log(b);

  if (a === b) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrom(head));
