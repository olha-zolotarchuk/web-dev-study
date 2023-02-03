// Regular Expressions
// https://regexr.com/

// I want to live
// I want to give
// I've been a miner
// For a heart of gold
// It's these expressions
// I never give
// That keep me searching
// For a heart of gold
// And I'm getting old
// Keep me searching
// For a heart of gold
// And I'm getting old
// 867 - 5309




// let's look at character sets
// [enl]
// [^enl]
// [a-z]
// [A-Z]

//  there are flags
// We just talked about selecting lower case or capital case letters, and there's also a multi-line flag that we might use.

//numbers
//[0-9]
// . // all
// \w
// \W
// \d
// \D
// \s
// \S
// [\s\S] // select all

//let's look at anchors
// ^I  //multi-line
// d$ //end
// \.

//  capture group
// (old)
// (?:old)
// g(?=old)
// g(!=old)


// Quantifiers allow us to select many characters at once, and so let's specify some capital letters. 
// [A - Z]\w +
// [A-Z][a-z]*'*[a-z]*
// \d{3}
// \d{3,4}
// (hear)?t
// (hear)t

// h\w
// h\w+?     //  It is also used as a lazy selector.

// Let's look at alternation.
// (g|l)ive


// example

// (^\d{5}$)  // 10001

// (^\d{5})-?(\d{4}$)?  // 10001-1234

//  \s{2,}  // Kansas .........City

// (\+1)?[-. ]?(\d{3})?[-. ]?(\d{3})[-. ]?(\d{4})    
// 8675309
// 867-5309
// 867.5309
// 867 5309
// 555-867-5309
// +1 555 867 5309
