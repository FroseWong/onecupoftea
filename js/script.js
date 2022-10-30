"use strict";

// intro select
const chooseAll = document.querySelectorAll(".choosing");
const drinkList = document.querySelector(".drink-list");
const drinkText0 = [
  "阿薩姆紅茶",
  "茉莉綠茶",
  "黃金烏龍",
  "波霸紅茶",
  "椰果綠茶",
  "檸檬紅茶",
  "多多綠",
  "鳳梨紅茶",
];
const drinkText1 = ["柚子茶", "奶綠"];
const drinkPic0 = [
  "drinks_2_760.png",
  "drinks_6_760.png",
  "drinks_8_760.png",
  "drinks_15_760.png",
  "drinks_16_760.png",
  "drinks_20_760.png",
  "drinks_41_760.png",
  "drinks_42_760.png",
];

const drinkPic1 = ["drinks_25_760.png", "drinks_46_760.png"];

const addStr = function (num) {
  let str = "";
  const drinkText = num === 0 ? drinkText0 : drinkText1;
  const drinkPic = num === 0 ? drinkPic0 : drinkPic1;

  for (let i = 0; i < drinkText.length; i++) {
    str += `<li>
    <a href="drinkdetail_0.html">
      <div class="img-block">
        <img src="img/try/${drinkPic[i]}" alt="" />
      </div>
      <p>${drinkText[i]}</p>
    </a>
  </li>`;
  }

  if (!chooseAll[num === 0 ? 0 : 1].classList.contains("active")) {
    chooseAll[num === 0 ? 0 : 1].classList.add("active");
    chooseAll[num === 0 ? 1 : 0].classList.remove("active");
    drinkList.innerHTML = `<ul>${str}
    </ul>`;
  }
};

chooseAll[0].addEventListener("click", (e) => {
  e.preventDefault();
  addStr(0);
});

chooseAll[1].addEventListener("click", (e) => {
  e.preventDefault();
  addStr(1);
});
