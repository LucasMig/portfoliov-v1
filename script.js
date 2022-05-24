"use strict";

//DECLARING VARIABLES
const mainApp = document.querySelector(".main__app");
const nav = document.querySelector(".nav--primary");
const footerLink = document.querySelector(".footer--link");
const displaySelector = document.getElementById("checkbox");
const btnOpenMenu = document.getElementById("btn__menu--open");
const btnCloseMenu = document.getElementById("btn__menu--close");
const mobileNav = document.querySelector(".nav__container");
const date = document.getElementById("date");
const curYear = new Date().getFullYear();

//SMOOTH SCROLLING
const scrollToTarget = function (event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));

  target.scrollIntoView({ behavior: "smooth" });
  closeMobileMenu();
};

const openMobileMenu = function () {
  mobileNav.classList.add("active");
};

const closeMobileMenu = function () {
  mobileNav.classList.remove("active");
};

nav.addEventListener("click", scrollToTarget);
footerLink.addEventListener("click", scrollToTarget);

// DISPLAY MODE SWITCH
displaySelector.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

//MOBILE NAVIGATION
btnOpenMenu.addEventListener("click", function (event) {
  event.preventDefault();
  openMobileMenu();
});

btnCloseMenu.addEventListener("click", function (event) {
  event.preventDefault();
  closeMobileMenu();
});

//KEEP FOOTER DATE UPDATED
date.innerHTML = curYear;
