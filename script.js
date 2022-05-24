"use strict";

//SMOOTH SCROLLING
const nav = document.querySelector(".nav--primary");
const footerLink = document.querySelector(".footer--link");

const scrollToTarget = function (event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));

  target.scrollIntoView({ behavior: "smooth" });
};

nav.addEventListener("click", scrollToTarget);
footerLink.addEventListener("click", scrollToTarget);

// DISPLAY MODE SWITCH
const displaySelector = document.getElementById("checkbox");

displaySelector.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

//KEEP FOOTER DATE UPDATED
const date = document.getElementById("date");
const curYear = new Date().getFullYear();

date.innerHTML = curYear;
