// semicircle
window.addEventListener("scroll", function () {
  const semicircle = document.querySelector(".semicircle");
  const pageHeight = document.body.scrollHeight - window.innerHeight;
  const angle = (180 * window.scrollY) / pageHeight;
  semicircle.style.transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(${window.scrollY}px)`;
});
// about__presentation
document.addEventListener("DOMContentLoaded", function () {
  var section = document.querySelector(".about__presentation");
  setTimeout(function () {
    section.classList.add("show");
  }, 500);
});
document.addEventListener("DOMContentLoaded", function () {
  var section = document.querySelector(".about__presentation");

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function handleScroll() {
    if (isElementInViewport(section)) {
      section.classList.add("active");
      window.removeEventListener("scroll", handleScroll);
    }
  }

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

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("scroll", reveal);

  handleScroll();
  reveal();
});

// about__work
const aboutWorkSection = document.querySelector(".about__work");
const aboutSkillsSection = document.querySelector(".about__skills");
const listItemsWork = aboutWorkSection.querySelectorAll("._anim-items li");
const listItemsSkills = aboutSkillsSection.querySelectorAll("._anim-items li");

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

function showListItems(listItems) {
  let delay = 0;
  listItems.forEach((item) => {
    setTimeout(() => {
      item.classList.add("show");
    }, delay);
    delay += 200; // add 200ms delay for each item
  });
}

function toggleListItems(listItems) {
  listItems.forEach((item) => {
    if (isElementInViewport(item)) {
      item.classList.add("show");
    } else {
      item.classList.remove("show");
    }
  });
}

// Initially show items that are already in the viewport
showListItems(listItemsWork);
showListItems(listItemsSkills);

// Toggle items when scrolling
window.addEventListener("scroll", function () {
  toggleListItems(listItemsWork);
  toggleListItems(listItemsSkills);
});

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
// Home page
// const homeP = document.querySelector('.home__p');
// function handleWindowResize() {
//   if (window.innerWidth >= 767) {
//     homeP.classList.remove('exclude');
//     homeP.classList.add('include');
//   } else {
//     homeP.classList.remove('include');
//     homeP.classList.add('exclude');
//   }
// }
// handleWindowResize(); // Call the function initially
// window.addEventListener('resize', handleWindowResize); // Call the function on window resize

// NAV menu
function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('nav.header__nav a[href^="#"]');
  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = this.getAttribute("href");
      smoothScroll(target);
    });
  });

  const homeLink = document.querySelector('li a[href="#home"]');
  homeLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#home");
  });

  const workLink = document.querySelector('li a[href="#works"]');
  workLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#works");
  });

  const aboutLink = document.querySelector('li a[href="#about"]');
  aboutLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#about");
  });

  const contactLink = document.querySelector('li a[href="#contact"]');
  contactLink.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#contact");
  });

  const homeButton = document.querySelector('a[href="#home"]');
  homeButton.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#home");
  });

  const workButton = document.querySelector('a[href="#works"]');
  workButton.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#works");
  });

  const aboutButton = document.querySelector('a[href="#about"]');
  aboutButton.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#about");
  });

  const contactButton = document.querySelector('a[href="#contact"]');
  contactButton.addEventListener("click", function (e) {
    e.preventDefault();
    smoothScroll("#contact");
  });
});

//
var menuElement, menuBgElement;
window.addEventListener("load", function () {
  menuElement = document.getElementById("menu");
  menuBgElement = document.getElementById("menu-bg");
  function handleScroll() {
    if (window.scrollY > 150) {
      // menuElement.classList.toggle("_active");
      // menuBgElement.classList.toggle("_active");
      menuElement.style.display = "block";
      menuElement.style.position = "fixed";
      menuElement.style.top = "0";
      menuBgElement.style.display = "block";
      menuBgElement.style.position = "fixed";
      menuBgElement.style.top = "0";
    } else {
      menuElement.style.display = "none";
      menuBgElement.style.display = "none";
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);
});
