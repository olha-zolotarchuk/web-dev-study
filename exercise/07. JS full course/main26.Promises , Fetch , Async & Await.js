// Promises / Fetch / Async & Await

//Callbacks
// Callbacks are just functions really that are passed to other functions as parameters. So they will call that function after they finish doing their other stuff.

function firstFunction(parameters, callback) {
  //do staff
  callback();
}

//AKA "callback hell"
// Well, promises are designed to get rid of this, but let's show you the problem and the reason people wanted to get rid of this, this could be called and is also known as callback Hell,

// firstFunction(para, function () {
//     //do staff
//     secondFunction(para, function () {
//         thirdFunction(para, function () {

//         });
//     });
// });

//  And you probably see this in some legacy code before promises existed because this was a common way of doing things, but it is also called callback hell. And promises are a way to get rid of that.
//  we won't be using those, but at least you understand why

// Promises
// have three states:  pending, fulfilled, rejected.

// Now promises will deliver async code. JavaScript is usually synchronous, meaning doing one thing at a time.
// So a promise could be pending while some other JavaScript code goes ahead and executes, uh, promise it can be working on it in other words. So you're actually executing two different, uh, blocks of code at once in that regard.
// And there is a promise object.

console.log(1);

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (!error) {
    resolve("Yes");
  } else {
    reject("No");
  }
});
console.log(myPromise);

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   var a = 0;
//   for (let i = 0; i < 100000000; i++) {
//     a = i + 1;
//   }
//   if (!error) {
//     resolve("Yes");
//   } else {
//     reject("No");
//   }
// });
// console.log(myPromise);

// myPromise
//   .then((r) => {
//     console.log(r);
//   })
//   .catch((e) => console.log(e));
// console.log(2);

// This is not actually returning the value. Like we would work with the value in our program.

//Thenables
myPromise
  .then((value) => {
    // console.log(value);
    return value + 1;
  })
  .then((newValue) => {
    console.log(newValue);
  })
  .catch((err) => {
    console.error(err);
  });

//   Fetch API
// Now, the Fetch API returns a promise on its own.
// We don't have to create a new promise, and I'll show you that here in just a minute. But this gives you an idea of promises and the Fetch API does return a promise.
//  Uh, another reason, and a big reason of course for using the Fetch API is requesting data from another server or another site out there on the web.
// how Fetch works is to use a timeout in JavaScript, and that is to delay the execution of some codes.

const myNextPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("myNextPromise resolved");
  }, 3000);
});

myNextPromise.then((value) => {
  console.log(value);
});

myPromise.then((value) => {
  console.log(value);
});

// pending states Promises
// and we need to do that with the Fetch api.

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);
// It is still kind of working on it. It's the where I said, go ahead you guys, I'll catch up.
// I've got some work to do. And so the rest of the code goes ahead, but uh, the promise is still working on it. So we attempted to log the user's value, essentially what would be returned from the promise while it was still working on it. And that's why we need to wait and we wait.

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // console.log(response); dont ready to use
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    data.forEach((user) => {
      //   console.log(user);
    });
  });
console.log(users);
// 6:28:09 And that is the main thing you kind of want to understand at first about how promises work and fetch returns a promise.

//  Async & Await;
// There are keywords kind of syntactic sugar that hides what's going on.
// It's another way of telling your code, wait for this to happen before I do this.
// But it lets us write the code in a much cleaner manner in how we're used to writing code without chaining these dibles.

// just using these keywords, async and a wait now to use the keyword a wait, it must be within an async function

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  return jsonUserData;
};
// myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  // console.log(data);

  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);

// workflow function

const getAllUserEmail = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();

  const userEmailArray = jsonUserData.map((user) => {
    return user.email;
  });

  // console.log(userEmailArray);
  // return userEmailArray;
  postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
  console.log(data);
};

getAllUserEmail();
// console.log(getAllUserEmail());

// 2nd parametr of Fetchis a object
// 6:46:32 And this example is going to expand on fetch because fetch can receive a second parameter. So second parameter of fetch.

// GET
const getDadJoke = async () => {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
      //   Accept: "text/plain",
    },
  });
  const jsonJokeData = await response.json();
  //   const textJokeData = await response.text();

  console.log(jsonJokeData);
  //   console.log(jsonJokeData.joke);
  //   console.log(textJokeData);
};
getDadJoke();

// POST
const jokeObject = {
  id: "CYvsHtWDAlb",
  joke: "Dad, I'm cold.Go stand in the corner, I hear it's 90 degrees.",
};
const postData = async (jokeObj) => {
  const response = await fetch("https://httpbin.org/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
    },
    body: JSON.stringify(jokeObj),
  });
  const jsonResponse = await response.json();

  console.log(jsonResponse.headers);
};
postData(jokeObject);

//
const requestJoke = async (firstName, lastName) => {
  const response = await fetch(
    `https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
  );

  const jsonResponse = await response.json();

  console.log(jsonResponse.value.joke);
};
requestJoke("Bruce", "Lee");


// abstract into functions

// maybe from a from
// 7:10:22 We would write individual functions for each of these things and abstracting, this of course lets us build a different request URL if we need to by getting different data. And of course we wouldn't always assign Bruce Lee as the name possibly.


const getDataFromFrom = () => {
  const requestObj = {
    firstName: "Bruce",
    lastName: "Lee",
    categories: ["nerdy"],
  };
  return requestObj;
};
// There's something else built into our program that would let us assign different names or pick different categories.

const buildRequestUrl = (requestData) => {
  return `https://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
};

const requestJoke1 = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

// And then we end up requesting the joke. And here is where we might work with the dom to actually post the joke to the page and instead we're just logging it to the console.


const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedural "workflow" function
//  And this procedural workflow function pulls it all together.
const processJokeRequest = async () => {
    const requestData = getDataFromFrom();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke1(requestUrl);
    console.log("finisshed");
}

processJokeRequest();

// And you can see that I just called the function right here instead of actually setting it up with some button in the dom to do so.
// But you need to remember, this function needs to be async because we're using a weight when we call the request joke function, and that request joke function is async, which is why we can use a weight with it and it's sane.
