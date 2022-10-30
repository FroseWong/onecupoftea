const eventNewAll = document.querySelectorAll(".event-new-btn");
const newsContent = document.querySelector(".news-content");
const eventList = [
  {
    img: "img/discount1.png",
    date: "2022-11-02",
    class: "event",
    classText: "活動",
    newsText: "原茶限時8折",
    link: "newsdetail_0.html",
  },
  {
    img: "img/bringmycup.png",
    date: "2022-09-23",
    class: "event",
    classText: "活動",
    newsText: "自備飲料杯省10元",
  },
  {
    img: "img/collectpoint.png",
    date: "2022-09-26",
    class: "event",
    classText: "活動",
    newsText: "滿59元集1點",
  },
];

const newitemList = [
  {
    img: "img/grapefruit.png",
    date: "2022-10-22",
    class: "newitem",
    classText: "新品",
    newsText: "柚子茶新上架",
  },
  {
    img: "img/greenmilk.png",
    date: "2022-11-13",
    class: "newitem",
    classText: "新品",
    newsText: "奶綠新上架",
  },
];
const combineList = eventList.concat(newitemList);

const news = function (num) {
  let arr = [];
  let str = "";
  if (num === 1) arr = eventList;
  if (num === 2) arr = newitemList;
  if (num === 0) arr = combineList;

  for (let i = 0; i < arr.length; i++) {
    str += ` <li>
    <a href="${arr[i].link}">
      <div class="news-img-block">
        <img src="${arr[i].img}" alt="" />
      </div>
      <div class="news-date-eventornew-block">
        <p>${arr[i].date}</p>
        <div class="${arr[i].class}"><p>${arr[i].classText}</p></div>
      </div>
      <div class="news-text">
        <h3>${arr[i].newsText}</h3>
      </div>
    </a>
  </li>`;
  }
  newsContent.innerHTML = `<ul>${str}</ul>`;
};

const eventNewClicked = function (num) {
  for (let i = 0; i < eventNewAll.length; i++) {
    eventNewAll[i].classList.remove("active");
  }
  eventNewAll[num].classList.add("active");
};

eventNewAll[0].addEventListener("click", (e) => {
  e.preventDefault();
  eventNewClicked(0);
  news(0);
});

eventNewAll[1].addEventListener("click", (e) => {
  e.preventDefault();
  eventNewClicked(1);
  news(1);
});

eventNewAll[2].addEventListener("click", (e) => {
  e.preventDefault();
  eventNewClicked(2);
  news(2);
});
