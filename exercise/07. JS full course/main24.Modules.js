// Modules
// They're usually used to export different sections of code from one file to another.
// And of course, after that code is exported, you import it into another file. And these sections are usually functions or classes, and we'll have examples of both today

// type="module" in index
// But what you want to do now is just have type equals module that will not only tell JavaScript that we're going to use modules, but it will also say use defer at the same time without you having to add the defer keyword.
// The other thing using modules does is immediately applies strict mode to your JavaScript.
"use strict";
// However, by using modules, even without typing this in your file, strict mode is applied in your JavaScript.

//import

// import playGuitar from "./main24.guitars";
// import { shredding as shred , plucking as pluck } from "./main24.guitars";

import * as Guitars from "./main24.guitars.js";

// console.log(playGuitar());
// console.log(shred());
// console.log(pluck());

// console.log(Guitars.playGuitar());
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

// So you don't want to have a default unless you're ready to just name the default.  in export
// export default function playGuitar () {
// use    export function playGuitar () {


import User from "./main24.user.js";
const me = new User("email@email.com", "Olha");
console.log(me);
console.log(me.greeting());

// Okay, so usually modules would be used in a project with a tool called
// Babbel that can transfer JavaScript. Like the newer code, the newer modern JavaScript can, uh, essentially translate that over or transpile that into older JavaScript. Syntax that will work in older browsers.
// And this is often time used along with a bundler like Webpack or parcel.
// And those things bundle your code and can use babble along the way to make it into older JavaScript that older browsers can read and will bundle it all into one file. So they'll read all of your modules and package it all together in a big bundle.
