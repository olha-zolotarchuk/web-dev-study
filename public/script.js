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
