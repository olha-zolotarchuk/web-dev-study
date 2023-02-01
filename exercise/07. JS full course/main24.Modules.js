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
console.log(Guitars.pluckingpluck());

// So you don't want to have a default unless you're ready to just name the default.  in export
// export default function playGuitar () {
// use    export function playGuitar () {
