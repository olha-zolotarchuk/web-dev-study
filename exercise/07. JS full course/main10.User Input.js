// User Input
 
// alert("Hello");

// let myBoolean = confirm("Ok === True\nCancel === False");
// console.log(myBoolean);

let nameT = prompt("Name");
// console.log(nameT)
// console.log(nameT ?? "No name");

if (nameT) {
    console.log(nameT.length);
    console.log(nameT.trim().length)
    console.log(nameT.trim());
} else {
    console.log("You not name"); 
}

