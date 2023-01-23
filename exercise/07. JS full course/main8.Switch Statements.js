// // Conditionals: Switch statements

// switch (expression OR value) {
//     case choise1:
//     //run this code
//     break;

//     case choise2:
//     //run this different code
//     break;

//     //and as meny case needed

//     default:
//     //run this code if  no case matches
//     // no need for a bresk here
// }

switch (2) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

switch (Math.floor(Math.random() * 4 + 1)) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No match");
}

let playerOne = "s";
let computer = "rock";

switch (playerOne) {
  case computer:
    console.log("Tie game!");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("Computer Wines");
    } else {
      console.log("playerOne Wines");
    }
    break;

  case "paper":
    if (computer === "s") {
      console.log("Computer Wines");
    } else {
      console.log("playerOne Wines");
    }
    break;

  default:
    if (computer === "rock") {
      console.log("Computer Wines");
    } else {
      console.log("playerOne Wines");
    }
    break;
}
