// Objects
// key value pairs in curly braces

const myObj = { name: "Dave" };
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code"],
  beverage: {
    morning: "coffee",
    afternoon: "Iced Tea",
  },
  //   Something else that we can store in objects, well objects have properties and the key value paired.
  //   But they also can have methods. And all methods are, are functions that we define within the object.
  //   action: function () {
  //     return "Hello world!";
  //   },
  //   This, so this function action, this method, but it's an anonymous function of course, that when it's in an object now will refer to it as a method.
  action: function () {
    return `Time for ${this.beverage.morning}`;
  },
};

console.log(anotherObj.alive);
console.log(anotherObj["alive"]);
console.log(anotherObj.hobbies[0]);
console.log(anotherObj["beverage"]);
console.log(anotherObj.beverage.morning);
console.log(anotherObj.action());

const vehicle = {
  wheels: 4,
  engine: function () {
    return "Vroom";
  },
};

// const truck = Object.create(vehicle);
// truck.doors = 2;
// console.log(truck);
// console.log(truck.wheels); //inheritance
// console.log(truck.engine());

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function () {
  return "Whoosh!";
};
console.log(car.engine());

const tesla = Object.create(car);
console.log(tesla.wheels);
console.log(tesla.engine());
tesla.engine = function(){ return "Shhhh"}
console.log(tesla.engine());


const band = {
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

delete band.drums;
console.log(band.hasOwnProperty("drums"))

console.log(Object.keys(band));
console.log(Object.values(band));
console.log(band);

for (let job in band) {
  // console.log(band[job]);
  console.log(`On ${job}, it is ${band[job]}!`);
}

// destructuring objects
const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable);
console.log(myBass);

const { vocals, guitar, bass, druns } = band;
console.log(guitar);
console.log(vocals);

function sings({ vocals }) {
    return `${vocals} sings!`
};
console.log(sings(band));

