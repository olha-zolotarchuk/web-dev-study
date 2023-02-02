// Web Storage API

// Not part of the DOM - refers to the Window API
// Avaible to JS via the global variable: window

// we do not have to type window. It is implied:

// window.alert("ok!");
// alert("ok!");

// window.alert(window.location);
// alert(location);

const myArray = ["eat", "sleep", "code"];
const myObj = {
    name: "Olha",
    hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};


myObj.logName();

// So when we go to store something, and let's use session storage first.
// Now for session storage, uh, it only keeps it the data during the session.
// And that is while we're on the website or possibly logged into a website.
// And once we close out of the browser and close our session, that data is no longer stored.
// Local storage will store persistent data and it will continue to store that data in the browser, but not attached to the open tab or the even the open browser.
// So we can reopen our browser, go back to the same website and retrieve that data.
// That would be persistent data. And we're going to store persistent data in the local storage.



// Alright, this is session storage.

// sessionStorage.setItem("mysessionStore", myObj);
// const mySessionData = sessionStorage.getItem("mysessionStore");
// console.log(mySessionData)

sessionStorage.setItem("mysessionStore", myArray);
const mySessionData = sessionStorage.getItem("mysessionStore");
console.log(mySessionData);
console.log(typeof mySessionData);

//  And all of that is because that is how session storage and local storage in the web storage API work, they only store string data. And if it's not string data, it will attempt to convert it to string data.
// And that should sound familiar because that is much like working with J S O N. And so that makes using the web storage API with J S O N an ideal way of storing data

sessionStorage.setItem("mysessionStore", JSON.stringify(myObj));
const mySessionData1 = JSON.parse(sessionStorage.getItem("mysessionStore"));
console.log(mySessionData1);

sessionStorage.setItem("mysessionStore", JSON.stringify(myArray));
const mySessionData2 = JSON.parse(sessionStorage.getItem("mysessionStore"));
console.log(mySessionData2);

// And so using JSON stringy. And JSON pars as we use local storage or session storage, just the web storage API in general. That is what helps us get back and actually keep the data that we want to keep. So we store it as a string, but then we can retrieve it and it can turn back into the array or the object that we need it to be. Of course, JSON does lose methods at through the conversion through string offi, so it does not keep methods in an object that we may have. 



// local storage.
// And this is really my persistent data, if you will, because this data, uh, will stay even when we close the website and relaunch.

localStorage.setItem("mylocalStore", JSON.stringify(myArray));
// localStorage.removeItem("mylocalStore");
// localStorage.clear();
const key = localStorage.key(0);

const key1 = localStorage.length;
const mylocalData3 = JSON.parse(localStorage.getItem("mylocalStore"));


// console.log(mylocalData3);
console.log(key);
console.log(key1);


// So we'll pull this back up. We've gone over the GI item method. The set item method.
// Actually, we set the item first and then we retrieve the item with GI item. We could remove the item, we could clear all items, we can specify the key to get the, or we can specify the index position in local storage to get the key return.
// And we can also use the length property to find out how many different keys are in the local storage for that particular site or web app.
// And I keep saying local storage. It's either local storage or session storage.


// . But under local storage, we still have the local store, we still have the data even after I closed the browser and reopened it.
// Even after we have left a website and maybe we don't revisit it for a few days, we come back and there the data is, again, this might work in a web application for to-do list or a high score in a game, and of course many other options.
// But these are some projects we might want to consider as beginners and we move forward with our local and session storage.