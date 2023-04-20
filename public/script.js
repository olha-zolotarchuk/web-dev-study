// semicircle 
window.addEventListener("scroll", function () {
  const semicircle = document.querySelector(".semicircle");
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const angle = (180 * window.scrollY) / pageHeight;
  semicircle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(${window.scrollY}px)`;
});
// about__presentation
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
// about__work
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
// language buttons
document.getElementById("en-btn").addEventListener("click", function () {
  setLanguage("en");
});
document.getElementById("ua-btn").addEventListener("click", function () {
  setLanguage("ua");
});
function setLanguage(language) {
  document.documentElement.lang = language;
  var elements = document.querySelectorAll("[data-lang-en], [data-lang-ua]");
  elements.forEach(function (element) {
    var text = element.getAttribute("data-lang-" + language);
    element.textContent = text;
  });
}
// LocalStorage
const enBtn = document.getElementById("en-btn");
const uaBtn = document.getElementById("ua-btn");
const languagePreference = localStorage.getItem("language");
if (languagePreference) {
  setLanguage(languagePreference);
}
enBtn.addEventListener("click", function () {
  localStorage.setItem("language", "en");
  setLanguage("en");
});
uaBtn.addEventListener("click", function () {
  localStorage.setItem("language", "ua");
  setLanguage("ua");
});
