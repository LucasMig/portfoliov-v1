"use strict";

//SMOOTH SCROLLING
const nav = document.querySelector(".nav--primary");

nav.addEventListener("click", function (event) {
  event.preventDefault();
  const target = document.querySelector(event.target.getAttribute("href"));

  target.scrollIntoView({ behavior: "smooth" });
});

// DISPLAY MODE SWITCH
const displaySelector = document.getElementById("checkbox");

displaySelector.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

//KEEP FOOTER DATE UPDATED
const date = document.getElementById("date");
const curYear = new Date().getFullYear();

date.innerHTML = curYear;
