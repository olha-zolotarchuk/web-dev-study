// // Get a reference to the test element
// const testEl = document.querySelector(".test");

// // Detect when the user scrolls
// window.addEventListener("scroll", () => {
//   // Get the distance the user has scrolled
//   const scrollTop = window.pageYOffset;

//   // Calculate the new position of the test element based on the scroll position
//   const newY = -scrollTop;

//   // Apply the new position to the test element
//   testEl.style.transform = `translateY(${newY}px)`;
// });

const homeEl = document.querySelector(".home");
const homeHeight = homeEl.clientHeight;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const scrollPercent =
    scrollTop / (document.body.scrollHeight - window.innerHeight);

  // Calculate new position for home__name element
  const newY = -(scrollTop * (1 - scrollPercent) + homeHeight * scrollPercent);
  homeEl.style.transform = `translateY(${newY}px) scale(${1 - scrollPercent})`;
});

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
 window.addEventListener("scroll", function () {
   const semicircle = document.querySelector(".test");
   const scrollTop = window.scrollY;
   semicircle.style.transform = `translate(-50%, -50%) rotate(${
     scrollTop / 5
   }deg)`;
 });