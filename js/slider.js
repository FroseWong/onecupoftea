const animaBtn = document.querySelector(".anima");
const eventUl = document.querySelector(".event--ul");
const leftBtn = document.querySelector(".fa-arrow-left");
const rightBtn = document.querySelector(".fa-arrow-right");
const sliderDots = document.querySelectorAll(".slider-dots");
const sliderDiv = document.querySelector(".slider-div");

let num = 0;

const mobileInit = function () {
  if (window.innerWidth <= 414) {
    leftBtn.classList.remove("hidden");
    rightBtn.classList.remove("hidden");
    sliderDiv.classList.remove("hidden");
    eventUl.style.transform = `translateX(370px)`;
    sliderDots.forEach((dots) => dots.classList.remove("focus"));
    sliderDots[0].classList.add("focus");
    num = 370;
  } else {
    leftBtn.classList.add("hidden");
    rightBtn.classList.add("hidden");
    sliderDiv.classList.add("hidden");
    eventUl.style.transform = `translateX(0px)`;
    num = 0;
  }
};

const dotsSelected = function () {
  eventUl.style.transform = `translateX(${num}px)`;
  sliderDots.forEach((dots) => dots.classList.remove("focus"));
  if (num === 370) sliderDots[0].classList.add("focus");
  if (num === 0) sliderDots[1].classList.add("focus");
  if (num === -370) sliderDots[2].classList.add("focus");
};

mobileInit();

leftBtn.addEventListener("click", function () {
  if (num == 370) {
    num = -740;
  }
  num += 370;
  // console.log(num);
  // eventUl.style.transform = `translateX(${num}px)`;
  // sliderDots.forEach((dots) => dots.classList.remove("focus"));
  // if (num === 370) sliderDots[0].classList.add("focus");
  // if (num === 0) sliderDots[1].classList.add("focus");
  // if (num === -370) sliderDots[2].classList.add("focus");
  dotsSelected();
});

rightBtn.addEventListener("click", function () {
  if (num == -370) {
    num = 740;
  }
  num -= 370;
  // console.log(num);
  // eventUl.style.transform = `translateX(${num}px)`;
  // sliderDots.forEach((dots) => dots.classList.remove("focus"));
  // if (num === 370) sliderDots[0].classList.add("focus");
  // if (num === 0) sliderDots[1].classList.add("focus");
  // if (num === -370) sliderDots[2].classList.add("focus");
  dotsSelected();
});

addEventListener("resize", (e) => {
  mobileInit();
});

for (let i = 0; i < sliderDots.length; i++) {
  sliderDots[i].addEventListener("click", function () {
    sliderDots.forEach((dots) => dots.classList.remove("focus"));
    sliderDots[i].classList.add("focus");
    if (i === 0) num = 370;
    if (i === 1) num = 0;
    if (i === 2) num = -370;
    eventUl.style.transform = `translateX(${num}px)`;
  });
}
