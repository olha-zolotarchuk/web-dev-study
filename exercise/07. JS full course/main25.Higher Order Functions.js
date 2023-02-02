// Higher Order Functions

// Higher order functions or a higher order function is a function that does at least one of the following:
//  - It takes one or more functions as an argument which is synonymous with parameter 
//  - or it returns a function as the result.


// It doesn't have to do both. So we're going to look at several functions today in JavaScript that are higher order functions

// And let's start with the easiest one first and probably the one that I use the most often.

import { posts } from "./main25.posts.js";

// forEach();

posts.forEach(posts => {
    console.log(posts);
});
console.clear();

// And we didn't need to define the iterator as we start with a four loop or we didn't need to increment that iterator. And I often do this with HTML collections when I'm selecting elements from the dom or node lists when I'm selecting nodes from the dom with a query selector.
// And then also just in an array if I don't need that iterator, if I don't need to uh, say define a number and refer to that each time the loop iterates, I can just use four each on an array and then we can carry out whatever we want to with this anonymous function inside the four, each loop.

// filter();

const filterPosts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filterPosts);

// So this is a way to filter. Results are filtered data that we get, and this higher order function is very useful.
// That is way better than writing all the code that it would require manually to filter without this option being available.

// map();
const mappedPosts = filterPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts)

//reduce();
const reducePostValue = mappedPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducePostValue);

// So we've used each one of these higher order functions as we've worked through this. The only one we really didn't apply that I did demonstrate is for each, but I do probably use for each more often than any of the others instead of using a four loop because it is so easy to just use for each on an array or an HTML collection or a node list and do something to each item within that array.
