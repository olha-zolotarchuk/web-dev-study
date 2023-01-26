// Classes
// the JavaScript class syntax is really syntactic sugar. And that means it's not changing what happens under the hood or what was already happening in JavaScript. This is just a different way for us to lay out our features. It's a new syntax, but it doesn't change any of the actual functionality of JavaScript

// class Pizza {
//   constructor(pizzaType, pizzaSize) {
//     this.type = pizzaType;
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.toppings = [];
//   }
//   //get pizzaCrust
//   getCrust() {
//     return this.crust;
//   }
//   //set pizzaCrust(pizzaCrust)
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
//   getToppings() {
//     return this.toppings;
//   }
//   setTopping(toppings) {
//     this.toppings.push(toppings);
//   }

//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
//     );
//   }
// }

// const myPizza = new Pizza("pepperoni", "small");
// // myPizza.type = "siprime";
// // myPizza.pizzaCrust = "thin";
// myPizza.setCrust("thin");
// myPizza.bake();
// // console.log(myPizza.type);
// console.log(myPizza.getCrust());

// myPizza.setTopping("sasuage");
// myPizza.setTopping("olives");
// console.log(myPizza.getToppings());

// class Pizza {
//   constructor(pizzaSize) {
//     this.size = pizzaSize;
//     this.crust = "original";
//   }
//   getCrust() {
//     return this.crust;
//   }
//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }
// }

// class SpecialityPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "The works";
//   }
//   slice() {
//     console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);
//   }
// }

// const mySpeciality = new SpecialityPizza("medium");
// mySpeciality.slice();

// naming
// class Pizza {
//   constructor(pizzaSize) {
//     this._size = pizzaSize;
//     this._crust = "original";
//   }
//   getCrust() {
//     return this._crust;
//   }
//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }
// }

// factory function is another way to create an object in JavaScript.

// function pizzaFactory(pizzaSize) {
//   const size = pizzaSize;
//   const crust = "original";
//   return {
//     bake: () => console.log(`Baking a ${this.size} ${this.crust} crust pizza.`),
//   };
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();

//something new
//Now a couple of things about these private fields. //public field class
class Pizza {
  crust = "original"; //public field
  #sauce = "traditional"; //private field
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
    hereYouGo() {
        console.log(`here is ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`);
    }
}

const myPizza = new Pizza("large");
myPizza.hereYouGo();
console.log(myPizza.crust);
console.log(myPizza.getCrust());
// So that is a public field. It's still available to everybody through dot notation, but the private field, let's go ahead and try to access sauce. 
console.log(myPizza.sauce); //undefined
// console.log(myPizza.#sauce); // Private field '#sauce' must be declared in an enclosing class 