//  Event Listeners

const view = document.querySelector("#view2");
// console.log(view);

const div = view.querySelector("div");
const h2 = div.querySelector("h2");

//Syntax: addEventListern(event ("click"), function, useCaptire)

const doSomething = () => {
  alert("doing something");
};

h2.addEventListener("click", doSomething, false);
// And then I'll put False in the Used Capture position. And it's worth noting that this faults is the default.

h2.removeEventListener("click", doSomething, false);

h2.addEventListener("click", (event) => {
  //   console.log(event.target);
  event.target.textContent = "Clicked";
});

// And the first thing I want to do is look at an event that also makes it safer to start working with the document object model the dom, when you load the page.
// And that is the ready state change event. So I'm going to immediately say document at event listener.

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp();
  }
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener(
    "click",
    (event) => {
      //   event.stopPropagation();
      //   view.style.backgroundColor = "purple";
      //   event.target.style.backgroundColor = "purple";
      //   view.classList.add("purple");
      //   view.classList.remove("darkblue");
      view.classList.toggle("purple");
      view.classList.toggle("darkblue");
    },
    // true
    false
  );

  div.addEventListener(
    "click",
    (event) => {
      //   event.stopPropagation();
      //   div.style.backgroundColor = "blue";
      //   event.target.style.backgroundColor = "blue";
      div.classList.toggle("blue");
      div.classList.toggle("black");
    },
    // true
    false
  );

  h2.addEventListener(
    "click",
    (event) => {
      //   event.stopPropagation();
      //   event.target.textContent = "Clicked";
      const myText = event.target.textContent;
      myText === "My 2nd View"
        ? (event.target.textContent = "Clicked")
        : (event.target.textContent = "My 2nd View");
    },
    // true
    false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
    event.target.classList.add("height100");
  });
  nav.addEventListener("mouseout", (event) => {
    event.target.classList.remove("height100");
  });
};

// useCaptire
// So we have stopped the event propagation. So it all depends on what we set. If we leave out the third option in the syntax of the listener, the use capture, if we leave it out or set it defaults, it's the same thing because it defaults defaults. But if we set it to true, it works from the out to the innermost element or the innermost click event because that's what we're doing is it's working its way out, it's propagating or working its way in. When we've set captured to true working its way out when we've set it to false, but either way, it is propagating that event. And if there is another listener for the same event, and in this instance we have a click listener on each one of these elements, uh, that click event is propagating either out or inward.

// event.target.
// So that is also something to consider. When you use the event target, what are you really referring to? It's not necessarily referring to what we have added the event listener to, it's actually the event target. And that is why previously I had this as a diviv and I had this as the view so it would respond like I wanted it to. And then when I clicked each thing or each uh, piece of the puzzle kind of worked its way outward and responded like we wanted it to. Now that didn't turn purple for a second, and that's because I still have the word target there. There we go. Save that now I'll click and there we go. Clicked blue purple as expected.
//  But the event target will always refer to what was actually clicked on.Or if it's not a click, it will refer to whatever. Uh, was targeted or whatever element was targeted for the event.

// classList
//  JavaScript makes it easier than than just this because we can actually change  the ad and remove to the word toggle. And toggle will understand that if the purple class is not added, that it should add it. And if the purple class is added, it should remove it. And so it will do the same for dark blue. So we start out with dark blue being added in purple knot. So when I click and I'll just click the The view, instead of even worrying about the propagation, now it changes to purple, but if I click again, it's back to dark blue. And so that's a pretty cool way of changing something and changing it back. Remember, you can add and remove classes, but it's also possible to toggle classes. And that lets you add and remove in a smart way that lets you of course, interact with the page instead of making a change and then not being able to change it back.


document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("readyState: complete");
    initApp1();
  }
});

const initApp1 = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        console.log("submit event");
    });
};

// preventDefault
// Say, Hey, yes, it logs very quickly and then it disappears because the page reloads. And then we get this again because we get that when it loads. So we'll just see that event for a second. Let me go ahead and do this one more time. Have, hey, and I'll hit enter and you see the submit event. Just flash over there and then it's gone. So we really want to stop this from happening and so we'll put event dot prevent default and now we'll save that and I'll type one, or I guess I've been typing, Hey, it doesn't really matter. I'll hit enter. Now you can see the submit amount logs. It doesn't reload the page or words don't disappear. Here. We've got another submit event when I click the button and then a third and I can hit enter and we get a fourth. But the default behavior. No longer happens, we, we don't get a flash of the page. I'll go ahead and inspect and we can once again look at the elements over here.