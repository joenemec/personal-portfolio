"use strict";

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
