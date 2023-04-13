// Get a reference to the test element
const testEl = document.querySelector(".test");

// Detect when the user scrolls
window.addEventListener("scroll", () => {
  // Get the distance the user has scrolled
  const scrollTop = window.pageYOffset;

  // Calculate the new position of the test element based on the scroll position
  const newY = -scrollTop;

  // Apply the new position to the test element
  testEl.style.transform = `translateY(${newY}px)`;
});

//
// const homeEl = document.querySelector(".home");
// const homeHeight = homeEl.clientHeight;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset;
//   const scrollPercent =
//     scrollTop / (document.body.scrollHeight - window.innerHeight);

//   // Calculate new position for home__name element
//   const newY = -(scrollTop * (1 - scrollPercent) + homeHeight * scrollPercent);
//   homeEl.style.transform = `translateY(${newY}px) scale(${1 - scrollPercent})`;
// });

//
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// const testEl = document.querySelector(".test");
// const windowHeight = window.innerHeight;

// window.addEventListener("scroll", () => {
//   const scrollTop = window.pageYOffset;
//   const scrollPercent = scrollTop / (document.body.scrollHeight - windowHeight);
//   const newClipPath = `ellipse(1000px 1000px at 0% ${scrollPercent * 100}%)`;
//   testEl.style.clipPath = newClipPath;
// });

//  window.addEventListener("scroll", function () {
//    const semicircle = document.querySelector(".test");
//    const scrollTop = window.scrollY;
//    semicircle.style.transform = `translate(-50%, -50%) rotate(${
//      scrollTop / 5
//    }deg)`;
//  });

window.addEventListener("scroll", function () {
  const semicircle = document.querySelector(".test");
  const scrollTop = window.scrollY;
  if (scrollTop <= window.innerHeight / 2) {
    // calculate rotation angle based on scroll position
    const angle = scrollTop / 5;
    // apply rotation transform to semicircle
    semicircle.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  } else {
    // stop rotation once semicircle is horizontal
    semicircle.style.transform = `translate(-50%, -50%) rotate(0deg)`;
  }
});

// about ==================================== about

// const animItems = document.querySelectorAll("._anim-items");

// if (animItems.length > 0) {
//   window.addEventListener("scroll", animOnScroll);

//   function animOnScroll() {
//     for (let index = 0; index < animItems.length; index++) {
//       const animItem = animItems[index];
//       const animItemHeight = animItem.offsetHeight;
//       const animItemOffset = offset(animItem).top;
//       const animStart = 4;

//       let animItemPoint = window.innerHeight - animItemHeight / animStart;
//       if (animItemHeight > window.innerHeight) {
//         animItemPoint = window.innerHeight - window.innerHeight / animStart;
//       }

//       if (
//         window.scrollY > animItemOffset - animItemPoint &&
//         window.scrollY < animItemOffset + animItemHeight
//       ) {
//         animItem.classList.add("_active");
//       } else {
//         animItem.classList.remove("_active");
//       }
//     }
//   }

//   function offset(el) {
//     const rect = el.getBoundingClientRect();
//     return { top: rect.top + window.scrollY, left: rect.left };
//   }

//   animOnScroll();
// }
 const section = document.querySelector(".about__work");
 const listItems = section.querySelectorAll("._anim-items li");

 function isElementInViewport(element) {
   const rect = element.getBoundingClientRect();
   return (
     rect.top >= 0 &&
     rect.left >= 0 &&
     rect.bottom <=
       (window.innerHeight || document.documentElement.clientHeight) &&
     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
   );
 }

 function showListItems() {
   let delay = 0;
   listItems.forEach((item) => {
     setTimeout(() => {
       item.classList.add("show");
     }, delay);
     delay += 200; // add 200ms delay for each item
   });
 }

 function toggleListItems() {
   listItems.forEach((item) => {
     if (isElementInViewport(item)) {
       item.classList.add("show");
     } else {
       item.classList.remove("show");
     }
   });
 }

 toggleListItems();

 window.addEventListener("scroll", toggleListItems);