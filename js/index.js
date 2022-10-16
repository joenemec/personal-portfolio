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
const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = function () {
  navbar.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNav);
