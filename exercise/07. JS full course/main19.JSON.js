// JSON
//J S O N is used to send and receive data.
// Let's take a look at J S O N and that stands for JavaScript Object Notation
// J s O is a text format and it is completely language independent and that means J S O N is used not just in JavaScript, but it's used to send and receive data in many languages
//We're usually sending data between, say, a web app and a server, for example. 

const myObj = {
    name: "Olha",
    hobbies: ["eat", "sleep", "code"],
    hello: function () {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);

//  J S O N does not send functions
console.log(typeof sendJSON);
console.log(sendJSON.name); //undefined

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);