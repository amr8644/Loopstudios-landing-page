/*jshint esversion: 6 */
const toggle = document.querySelector(".nav-toggle");
const list = document.querySelector(".list");
const nav = document.querySelector(".nav-bar");

toggle.addEventListener("click", function () {
  list.classList.toggle("show-links");
  nav.classList.toggle("nav-links");
});
