// Document Object Model (DOM)
// The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory.

// function script() {
// }
// window.onload = script;

const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");
console.log(view2);

view1.style.display = "flex";
view2.style.display = "none";

const views = document.getElementsByClassName("view");
console.log(views);

const sameViews = document.querySelectorAll(".view");
console.log(sameViews);

// // ????????? And I'm sure you're gathering that the query selector uses selectors much like our c s s does to identify the different elements on the page.

// // ?????? Отже, ми повинні знати різницю між вузлом і елементом H T HTML. 4:14:52


const divs = view1.querySelectorAll("div");
console.log(divs);

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

// // Okay, so now we have selected by tag name and we also built our selector on a previous selector, so that really helps us out.

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);

// // We selected just the even divs within our page and that is by knowing how to use our query selector. And essentially if you know how to do that in css, you know how to do that within the query selectors as well.

for (let i = 0; i < evenDivs.length; i++) {
    evenDivs[i].style.backgroundColor = "darkblue";
  // evenDivs[i].style.width = "200px";
//   evenDivs[i].style.height = "200px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Hello world!";

// // And now with this nav bar, we can change the inner html. Now it is important to know how this is different from text content before we just change the text. So that is really the text node that we're changing. And it is not adding any html to the page. However, the inner HTML property will change the html. If we insert it, we, we can actually insert HTML with inner HTML property. So let's do that and we will add, because the inner HTML by the way, will overwrite everything we currently have in there. So we need to put something like our hello world

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>Hello</h1> <p>This should align right</p>`;
console.log(navbar);

navbar.style.justifyContent = "space-between";

// // Now let's talk about navigating the dom tree.
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);

// // And you can think of the dom as a tree because you start out with HTML is the main element. And of course from there it goes down to usually have a head element and a body element. So those would be the children of html. And then they also have their own own children. And that navigates out kind of like you see the roots of a tree. So many times it's referred to as the dom tree.

console.log(evenDivs[0].parentElement.childNodes);
// // The children are actual elements, the child nodes, they aren't just elements. They are elements and also text nodes. Also any white space nodes or anything else that might exist, we could easily guess that at least they're double because we have 12 elements and we have 12 text nodes, and we probably have maybe one extra text note and that's what it looks like.

console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);

// // Before we finish, we need to discuss adding two and taking away or removing from the dom.

view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild) {
  view2.lastChild.remove();
}

const createDivs = (parent, iter) => {
  const newDiw = document.createElement("div");
  newDiw.textContent = iter;
  newDiw.style.background = "#000";
  newDiw.style.width = "100px";
  newDiw.style.height = "100px";
  newDiw.style.margin = "10px";
  newDiw.style.display = "flex";
  newDiw.style.justifyContent = "center";
  newDiw.style.alignItems = "center";
  parent.append(newDiw);
};
// createDivs(view2, 10);
for (let i = 0; i <= 12; i++) {
  createDivs(view2, i);
}
