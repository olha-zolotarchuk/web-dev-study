
// semicircle ==================================== semicircle

window.addEventListener("scroll", function () {
  const semicircle = document.querySelector(".semicircle");
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const angle = (180 * window.scrollY) / pageHeight;
  semicircle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(${window.scrollY}px)`;
});

// semicircle ==================================== semicircle

// about__presentation ==================================== about__presentation

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

// about__presentation ==================================== about__presentation

// about ==================================== about

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

// about ==================================== about

// language buttons==================================== language buttons

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

// language buttons ==================================== language buttons


// LocalStorage ==================================== LocalStorage

localStorage.setItem("language");
var language = localStorage.getItem("language");
// var language = localStorage.getItem("language") || "en";
// LocalStorage ==================================== LocalStorage