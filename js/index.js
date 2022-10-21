"use strict";

// LOADING SCREEN
const loadScreen = document.querySelector(".loading-screen");
const body = document.body;

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  setTimeout(() => {
    loadScreen.classList.toggle("inactive");
    body.style.overflowY = "unset";
  }, 1800);
};

window.onbeforeunload();

// LAZY LOADING IMAGES
const imgTargets = document.querySelectorAll("img[data-src]");
console.log(imgTargets);

const loadImg = (entries, observer) => {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

imgTargets.forEach((img) => imgObserver.observe(img));

// CLICK EVENTS
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

// NAVBAR TOGGLE
const menuBurger = document.querySelector("[data-menu]");
const menuContent = document.querySelectorAll("[data-menu-toggler]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  menuBurger.classList.toggle("openmenu");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(menuContent, "click", toggleNav);

// CONTACT TOGGLE
const contact = document.querySelector("[data-contact]");
const contactContent = document.querySelectorAll("[data-contact-toggler]");

const toggleContact = function () {
  contact.classList.toggle("active");
};

addEventOnElem(contactContent, "click", toggleContact);
