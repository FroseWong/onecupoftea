"use strict";

const seebackground2Li = document.querySelectorAll(".seebackground2-li");
const seebackground2Ul = document.querySelector(".seebackground2-ul");
const outh3All = document.querySelectorAll(".outh3");
const inh3All = document.querySelectorAll(".inh3");
// console.log(outh3All);
// console.log(inh3All);

const liChange = function () {
  if (window.innerWidth <= 414) {
    seebackground2Li[0].addEventListener("click", function () {
      outh3All[0].style.color = "transparent;";
      outh3All[1].style.color = "white;";
      outh3All[2].style.color = "white;";

      inh3All[0].style.color = "white";
      inh3All[1].style.color = "transparent";
      inh3All[2].style.color = "transparent";
    });

    seebackground2Li[1].addEventListener("click", function () {
      outh3All[0].style.color = "white;";
      outh3All[1].style.color = "transparent;";
      outh3All[2].style.color = "white;";

      inh3All[0].style.color = "transparent";
      inh3All[1].style.color = "white";
      inh3All[2].style.color = "transparent";
    });

    seebackground2Li[2].addEventListener("click", function () {
      outh3All[0].style.color = "white;";
      outh3All[1].style.color = "white;";
      outh3All[2].style.color = "transparent;";

      inh3All[0].style.color = "transparent";
      inh3All[1].style.color = "transparent";
      inh3All[2].style.color = "white";
    });
  } else {
    seebackground2Li.forEach((li) => li?.removeEventListener());
  }
};

liChange();

addEventListener("resize", (e) => {
  liChange();
});
