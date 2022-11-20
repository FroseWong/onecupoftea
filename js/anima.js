"use strict";

const buttons = document.querySelectorAll(".anima-right a");
const drinkpackBtn = document.querySelector(".drinkpack");
const drinkreturnBtn = document.querySelector(".drinkreturn");
const animah3hidden = document.querySelector(".anima-text-h3hidden");

let i = 0;

drinkpackBtn.addEventListener("click", function (e) {
  e.preventDefault();
  i++;
  if (i === 1) {
    $("#anima_pic0").fadeOut("1000");
    $("#anima_pic1").delay(500).fadeIn("1000");
  }
  if (i === 2) {
    $("#anima_pic1").fadeOut("1000");
    $("#anima_pic2").delay(500).fadeIn("1000");
    animah3hidden.style.color = "#949486";
  }
});

drinkreturnBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (i === 0) {
    $("#anima_pic0").fadeOut("1000").delay(500).fadeIn("1000");
  }

  if (i === 1) {
    $("#anima_pic1").fadeOut("1000");
    $("#anima_pic0").delay(500).fadeIn("1000");
  }

  if (i >= 2) {
    $("#anima_pic2").fadeOut("1000");
    $("#anima_pic0").delay(500).fadeIn("1000");
    animah3hidden.style.color = "transparent";
  }
  i = 0;
});

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    // console.log(scrollY);
    let x = e.clientX - e.target.offsetLeft;
    // let y = e.clientY - e.target.offsetTop;
    let y = e.pageY - e.target.offsetTop - 150;
    let ripples = document.createElement("span");
    ripples.style.left = x + "px";
    ripples.style.top = y + "px";

    // ripples.style.top = y + screenY - 100 + "px";

    // if (scrollY === 0) {
    //   ripples.style.top = y - 100 + "px";
    // } else if (scrollY >= 0 && scrollY <= 100) {
    //   ripples.style.top = y + "px";
    // } else if (scrollY >= 101 && screenY <= 200) {
    //   ripples.style.top = y + 100 + "px";
    // } else if (scrollY >= 201) {
    //   ripples.style.top = y + 200 + "px";
    // }
    this.appendChild(ripples);

    setTimeout(() => {
      ripples.remove();
    }, 1000);
  });
});
