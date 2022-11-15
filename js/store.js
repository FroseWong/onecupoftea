let addressAll = document.querySelectorAll(".address");
const displayMap = document.querySelector(".display-map");
const chooseAddressBtn = document.querySelector(".choose-address");
const addressSort = document.querySelector(".address-sort");
let taipeiAll = document.querySelectorAll(".taipei");
let newtaipeiAll = document.querySelectorAll(".newtaipei");
let hsinchuAll = document.querySelectorAll(".hsinchu");
let taichungAll = document.querySelectorAll(".taichung");

const address = [
  {
    name: "台北開封店",
    address: "台北市中正區開封街1段10號",
    tel: "02-2388-6061",
    loc: "taipei",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.653715741327!2d121.51210971399179!3d25.045823183966874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9732b1a838b%3A0x497fe6fe42b716d0!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6ZaL5bCB6KGX5LiA5q61Mi0xMOiZnw!5e0!3m2!1szh-TW!2stw!4v1666871769992!5m2!1szh-TW!2stw",
  },
  {
    name: "北投公館店",
    address: "台北市北投區公館路10號",
    tel: "02-2892-0708",
    loc: "taipei",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0714489097545!2d121.50009741399435!3d25.13327518392594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae5084ed6525%3A0xfe0fecb43f03fa81!2zMTEy5Y-w5YyX5biC5YyX5oqV5Y2A5YWs6IiY6LevMTDomZ8!5e0!3m2!1szh-TW!2stw!4v1666875272047!5m2!1szh-TW!2stw",
  },
  {
    name: "台北古亭店",
    address: "台北市大安區羅斯福路2段52號",
    tel: "02-2391-5152",
    loc: "taipei",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1846165195675!2d121.51940521399132!3d25.027808083975234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99a46049e5f%3A0xe9a17c6a6d45e6bd!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LqM5q61NTLomZ8!5e0!3m2!1szh-TW!2stw!4v1666874980425!5m2!1szh-TW!2stw",
  },
  {
    name: "蘆洲民族店",
    address: "新北市蘆洲區民族路56號",
    tel: "02-8286-7709",
    loc: "newtaipei",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.513296956234!2d121.47499511399297!3d25.084480183948674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8cdd318faa1%3A0x71055439a51aebfb!2zMjQ35paw5YyX5biC6JiG5rSy5Y2A5rCR5peP6LevNTbomZ8!5e0!3m2!1szh-TW!2stw!4v1666875402992!5m2!1szh-TW!2stw",
  },
  {
    name: "土城頂埔店",
    address: "新北市土城區中央路4段132號",
    tel: "02-2269-5051",
    loc: "newtaipei",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2125730334974!2d121.4153307139895!3d24.95888128400753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681cebf3d551c1%3A0x24d09118881b1e98!2zMjM25paw5YyX5biC5Zyf5Z-O5Y2A5Lit5aSu6Lev5Zub5q61MTMy6Jmf!5e0!3m2!1szh-TW!2stw!4v1666875452078!5m2!1szh-TW!2stw",
  },
  {
    name: "板橋中正店",
    address: "新北市板橋區中正路232號",
    tel: "02-2968-7179",
    loc: "newtaipei",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4503113171936!2d121.45367571399105!3d25.018787683979497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a80540eb7513%3A0x54bbf92d9590084f!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5Lit5q2j6LevMjMy6Jmf!5e0!3m2!1szh-TW!2stw!4v1666875470839!5m2!1szh-TW!2stw",
  },
  {
    name: "新埔中正店",
    address: "新竹縣新埔鎮中正路286號",
    tel: "03-5892-2981",
    loc: "hsinchu",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.060633663057!2d121.07872591398574!3d24.82759998406939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346839e25e821c67%3A0x99e6da547cb1d0df!2zMzA15paw56u557ij5paw5Z-U6Y6u5Lit5q2j6LevMjg26Jmf!5e0!3m2!1szh-TW!2stw!4v1666875503304!5m2!1szh-TW!2stw",
  },
  {
    name: "竹東東林店",
    address: "新竹縣竹東鎮東林路15號",
    tel: "03-5100-0038",
    loc: "hsinchu",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7078800893937!2d121.08663371398318!3d24.736907184112354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346847e64282dca7%3A0xbb76203b885e080c!2zMzEw5paw56u557ij56u55p2x6Y6u5p2x5p6X6LevMTXomZ8!5e0!3m2!1szh-TW!2stw!4v1666875528374!5m2!1szh-TW!2stw",
  },
  {
    name: "竹東長春店",
    address: "新竹縣竹東鎮長春路3段202號",
    tel: "03-5103-3006",
    loc: "hsinchu",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.4949165395574!2d121.08099231398344!3d24.744214684108925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346847e3308af4c5%3A0x5f5c27123b280573!2zMzEw5paw56u557ij56u55p2x6Y6u6ZW35pil6Lev5LiJ5q61MjAy6Jmf!5e0!3m2!1szh-TW!2stw!4v1666875576599!5m2!1szh-TW!2stw",
  },
  {
    name: "台中西屯店",
    address: "台中市北區西屯路1段428號",
    tel: "04-2208-3852",
    loc: "taichung",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3022098216816!2d120.6627997139673!3d24.161131884388446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d821db564e3%3A0x26ef9bf8b0f0a507!2zNDA05Y-w5Lit5biC5YyX5Y2A6KW_5bGv6Lev5LiA5q61NDI46Jmf!5e0!3m2!1szh-TW!2stw!4v1666875595809!5m2!1szh-TW!2stw",
  },
];

const addressTaipei = [];
addressTaipei[0] = address[0];
addressTaipei[1] = address[1];
addressTaipei[2] = address[2];

const addressNewTaipei = [];
addressNewTaipei[0] = address[3];
addressNewTaipei[1] = address[4];
addressNewTaipei[2] = address[5];

const addressHsinchu = [];
addressHsinchu[0] = address[6];
addressHsinchu[1] = address[7];
addressHsinchu[2] = address[8];

const addressTaichung = [];
addressTaichung[0] = address[9];

addressAll.forEach((list) =>
  list.addEventListener("click", (e) => e.preventDefault())
);

const changeMap = function (mapcode) {
  displayMap.src = mapcode;
};

const clearallclass = function () {
  addressAll = document.querySelectorAll(".address");
  addressAll.forEach((list) => list.classList.remove("active"));
};

const init = function () {
  let str = "";
  for (let i = 0; i < address.length; i++) {
    str += ` <li>
    <a class="address  ${address[i].loc}" href=""
      ><i class="fa-solid fa-location-dot"></i>
      <span>${address[i].name}</span>
      <span>${address[i].address}</span>
      <span>${address[i].tel}</span>
    </a>
  </li>`;
  }
  addressSort.innerHTML = str;
  addressAll = document.querySelectorAll(".address");
  for (let i = 0; i < 10; i++) {
    addressAll[i].addEventListener("click", (e) => {
      e.preventDefault();
      changeMap(address[i].mapcode);
      clearallclass();
      addressAll[i].classList.add("active");
    });
  }
};

const initRWD = function () {
  let str = "";
  let space = "__";
  for (let i = 0; i < address.length; i++) {
    str += ` <li>
    <a class="address  ${address[i].loc}" href=""
      ><i class="fa-solid fa-location-dot"></i>
      <span>${address[i].name}</span><br>
      <i class="fa-solid fa-map"><span></i>${address[i].address}</span> <br>
      <i class="fa-solid fa-phone"></i><span>${address[i].tel}</span>
    </a>
  </li>`;
  }
  addressSort.innerHTML = str;
  addressAll = document.querySelectorAll(".address");
  for (let i = 0; i < 10; i++) {
    addressAll[i].addEventListener("click", (e) => {
      e.preventDefault();
      changeMap(address[i].mapcode);
      clearallclass();
      addressAll[i].classList.add("active");
    });
  }
};

const sort = function (location) {
  let str = "";
  if (location === "taipei") {
    for (let i = 0; i < addressTaipei.length; i++) {
      str +=
        window.innerWidth > 414
          ? `<li>
  <a class="address ${location}" href=""
    ><i class="fa-solid fa-location-dot"></i>
    <span>${addressTaipei[i].name}</span>
    <span>${addressTaipei[i].address}</span>
    <span>${addressTaipei[i].tel}</span>
  </a>
</li>`
          : ` <li>
<a class="address  ${location}" href=""
  ><i class="fa-solid fa-location-dot"></i>
  <span>${addressTaipei[i].name}</span><br>
  <i class="fa-solid fa-map"><span></i>${addressTaipei[i].address}</span> <br>
  <i class="fa-solid fa-phone"></i><span>${addressTaipei[i].tel}</span>
</a>
</li>`;
    }
    addressSort.innerHTML = str;
    taipeiAll = document.querySelectorAll(".taipei");
    for (let i = 0; i < addressTaipei.length; i++) {
      taipeiAll[i].addEventListener("click", (e) => {
        e.preventDefault();
        changeMap(addressTaipei[i].mapcode);
        clearallclass();
        taipeiAll[i].classList.add("active");
      });
    }
  } else if (location === "newtaipei") {
    for (let i = 0; i < addressNewTaipei.length; i++) {
      str +=
        window.innerWidth > 414
          ? `<li>
  <a class="address ${location}" href=""
    ><i class="fa-solid fa-location-dot"></i>
    <span>${addressNewTaipei[i].name}</span>
    <span>${addressNewTaipei[i].address}</span>
    <span>${addressNewTaipei[i].tel}</span>
  </a>
</li>`
          : ` <li>
<a class="address  ${location}" href=""
  ><i class="fa-solid fa-location-dot"></i>
  <span>${addressNewTaipei[i].name}</span><br>
  <i class="fa-solid fa-map"><span></i>${addressNewTaipei[i].address}</span> <br>
  <i class="fa-solid fa-phone"></i><span>${addressNewTaipei[i].tel}</span>
</a>
</li>`;
    }
    addressSort.innerHTML = str;
    newtaipeiAll = document.querySelectorAll(".newtaipei");
    for (let i = 0; i < addressTaipei.length; i++) {
      newtaipeiAll[i].addEventListener("click", (e) => {
        e.preventDefault();
        changeMap(addressNewTaipei[i].mapcode);
        clearallclass();
        newtaipeiAll[i].classList.add("active");
      });
    }
  } else if (location === "hsinchu") {
    for (let i = 0; i < addressHsinchu.length; i++) {
      str +=
        window.innerWidth > 414
          ? `<li>
  <a class="address ${location}" href=""
    ><i class="fa-solid fa-location-dot"></i>
    <span>${addressHsinchu[i].name}</span>
    <span>${addressHsinchu[i].address}</span>
    <span>${addressHsinchu[i].tel}</span>
  </a>
</li>`
          : ` <li>
<a class="address  ${location}" href=""
  ><i class="fa-solid fa-location-dot"></i>
  <span>${addressHsinchu[i].name}</span><br>
  <i class="fa-solid fa-map"><span></i>${addressHsinchu[i].address}</span> <br>
  <i class="fa-solid fa-phone"></i><span>${addressHsinchu[i].tel}</span>
</a>
</li>`;
    }
    addressSort.innerHTML = str;
    hsinchuAll = document.querySelectorAll(".hsinchu");
    for (let i = 0; i < addressHsinchu.length; i++) {
      hsinchuAll[i].addEventListener("click", (e) => {
        e.preventDefault();
        changeMap(addressHsinchu[i].mapcode);
        clearallclass();
        hsinchuAll[i].classList.add("active");
      });
    }
  } else if (location === "taichung") {
    for (let i = 0; i < addressTaichung.length; i++) {
      str +=
        window.innerWidth > 414
          ? `<li>
  <a class="address ${location}" href=""
    ><i class="fa-solid fa-location-dot"></i>
    <span>${addressTaichung[i].name}</span>
    <span>${addressTaichung[i].address}</span>
    <span>${addressTaichung[i].tel}</span>
  </a>
</li>`
          : ` <li>
<a class="address  ${location}" href=""
  ><i class="fa-solid fa-location-dot"></i>
  <span>${addressTaichung[i].name}</span><br>
  <i class="fa-solid fa-map"><span></i>${addressTaichung[i].address}</span> <br>
  <i class="fa-solid fa-phone"></i><span>${addressTaichung[i].tel}</span>
</a>
</li>`;
    }
    addressSort.innerHTML = str;
    taichungAll = document.querySelectorAll(".taichung");
    for (let i = 0; i < addressTaichung.length; i++) {
      taichungAll[i].addEventListener("click", (e) => {
        e.preventDefault();
        changeMap(addressTaichung[i].mapcode);
        clearallclass();
        taichungAll[i].classList.add("active");
      });
    }
  }
  // return str;
};

const mapRWD = function () {
  if (window.innerWidth <= 414) {
    displayMap.height = "250";
  } else {
    displayMap.height = "450";
  }
};

for (let i = 0; i < 10; i++) {
  addressAll[i].addEventListener("click", (e) => {
    changeMap(address[i].mapcode);
    clearallclass();
    addressAll[i].classList.add("active");
  });
}

chooseAddressBtn.addEventListener("change", function (location) {
  if (location.target.value === "all") {
    window.innerWidth <= 414 ? initRWD() : init();
  }
  if (location.target.value === "taipei") sort("taipei");
  if (location.target.value === "newtaipei") sort("newtaipei");
  if (location.target.value === "hsinchu") sort("hsinchu");
  if (location.target.value === "taichung") sort("taichung");
});

// addEventListener("resize", (e) => {
//   mapRWD();
// });
mapRWD();

// addEventListener("resize", (e) => {
//   if (window.innerWidth <= 414) {
//     initRWD();
//   } else {
//     init();
//   }
// });

if (window.innerWidth <= 414) {
  initRWD();
} else {
  init();
}
