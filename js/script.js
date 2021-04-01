"use strict";

const menu = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

menu.addEventListener("click", function (e) {
  e.preventDefault();
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
});
