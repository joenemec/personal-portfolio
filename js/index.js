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

// window.onbeforeunload();

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
