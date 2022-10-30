const addressAll = document.querySelectorAll(".address");
const displayMap = document.querySelector(".display-map");
const address = [
  {
    name: "台北開封店",
    address: "台北市中正區開封街1段10號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.653715741327!2d121.51210971399179!3d25.045823183966874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9732b1a838b%3A0x497fe6fe42b716d0!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A6ZaL5bCB6KGX5LiA5q61Mi0xMOiZnw!5e0!3m2!1szh-TW!2stw!4v1666871769992!5m2!1szh-TW!2stw",
  },
  {
    name: "北投公館店",
    address: "台北市北投區公館路10號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.0714489097545!2d121.50009741399435!3d25.13327518392594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ae5084ed6525%3A0xfe0fecb43f03fa81!2zMTEy5Y-w5YyX5biC5YyX5oqV5Y2A5YWs6IiY6LevMTDomZ8!5e0!3m2!1szh-TW!2stw!4v1666875272047!5m2!1szh-TW!2stw",
  },
  {
    name: "台北古亭店",
    address: "台北市大安區羅斯福路2段52號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.1846165195675!2d121.51940521399132!3d25.027808083975234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a99a46049e5f%3A0xe9a17c6a6d45e6bd!2zMTAw5Y-w5YyX5biC5Lit5q2j5Y2A576F5pav56aP6Lev5LqM5q61NTLomZ8!5e0!3m2!1szh-TW!2stw!4v1666874980425!5m2!1szh-TW!2stw",
  },
  {
    name: "蘆洲民族店",
    address: "新北市蘆洲區民族路56號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.513296956234!2d121.47499511399297!3d25.084480183948674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a8cdd318faa1%3A0x71055439a51aebfb!2zMjQ35paw5YyX5biC6JiG5rSy5Y2A5rCR5peP6LevNTbomZ8!5e0!3m2!1szh-TW!2stw!4v1666875402992!5m2!1szh-TW!2stw",
  },
  {
    name: "土城頂埔店",
    address: "新北市土城區中央路4段132號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2125730334974!2d121.4153307139895!3d24.95888128400753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681cebf3d551c1%3A0x24d09118881b1e98!2zMjM25paw5YyX5biC5Zyf5Z-O5Y2A5Lit5aSu6Lev5Zub5q61MTMy6Jmf!5e0!3m2!1szh-TW!2stw!4v1666875452078!5m2!1szh-TW!2stw",
  },
  {
    name: "板橋中正店",
    address: "新北市板橋區中正路232號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.4503113171936!2d121.45367571399105!3d25.018787683979497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a80540eb7513%3A0x54bbf92d9590084f!2zMjIw5paw5YyX5biC5p2_5qmL5Y2A5Lit5q2j6LevMjMy6Jmf!5e0!3m2!1szh-TW!2stw!4v1666875470839!5m2!1szh-TW!2stw",
  },
  {
    name: "新埔中正店",
    address: "新竹縣新埔鎮中正路286號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.060633663057!2d121.07872591398574!3d24.82759998406939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346839e25e821c67%3A0x99e6da547cb1d0df!2zMzA15paw56u557ij5paw5Z-U6Y6u5Lit5q2j6LevMjg26Jmf!5e0!3m2!1szh-TW!2stw!4v1666875503304!5m2!1szh-TW!2stw",
  },
  {
    name: "竹東東林店",
    address: "新竹縣竹東鎮東林路15號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.7078800893937!2d121.08663371398318!3d24.736907184112354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346847e64282dca7%3A0xbb76203b885e080c!2zMzEw5paw56u557ij56u55p2x6Y6u5p2x5p6X6LevMTXomZ8!5e0!3m2!1szh-TW!2stw!4v1666875528374!5m2!1szh-TW!2stw",
  },
  {
    name: "竹東長春店",
    address: "新竹縣竹東鎮長春路3段202號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.4949165395574!2d121.08099231398344!3d24.744214684108925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346847e3308af4c5%3A0x5f5c27123b280573!2zMzEw5paw56u557ij56u55p2x6Y6u6ZW35pil6Lev5LiJ5q61MjAy6Jmf!5e0!3m2!1szh-TW!2stw!4v1666875576599!5m2!1szh-TW!2stw",
  },
  {
    name: "台中西屯店",
    address: "台中市北區西屯路1段428號",
    mapcode:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.3022098216816!2d120.6627997139673!3d24.161131884388446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d821db564e3%3A0x26ef9bf8b0f0a507!2zNDA05Y-w5Lit5biC5YyX5Y2A6KW_5bGv6Lev5LiA5q61NDI46Jmf!5e0!3m2!1szh-TW!2stw!4v1666875595809!5m2!1szh-TW!2stw",
  },
];
addressAll.forEach((list) =>
  list.addEventListener("click", (e) => e.preventDefault())
);

const changeMap = function (mapcode) {
  displayMap.src = mapcode;
};

const clearallclass = function () {
  addressAll.forEach((list) => list.classList.remove("active"));
};

// addressAll[0].addEventListener("click");
console.log(displayMap);

for (let i = 0; i < 10; i++) {
  addressAll[i].addEventListener("click", (e) => {
    changeMap(address[i].mapcode);
    clearallclass();
    addressAll[i].classList.add("active");
  });
}
/*
addressAll[0].addEventListener("click", (e) => {
  changeMap(address[0].mapcode);
  clearallclass();
  addressAll[0].classList.add("active");
});

addressAll[1].addEventListener("click", (e) => {
  changeMap(address[1].mapcode);
  clearallclass();
  addressAll[1].classList.add("active");
});

addressAll[2].addEventListener("click", (e) => {
  changeMap(address[2].mapcode);
  clearallclass();
  addressAll[2].classList.add("active");
});

addressAll[3].addEventListener("click", (e) => {
  changeMap(address[3].mapcode);
  clearallclass();
  addressAll[3].classList.add("active");
});

addressAll[4].addEventListener("click", (e) => {
  changeMap(address[4].mapcode);
  clearallclass();
  addressAll[4].classList.add("active");
});

addressAll[5].addEventListener("click", (e) => {
  changeMap(address[5].mapcode);
  clearallclass();
  addressAll[5].classList.add("active");
});

addressAll[6].addEventListener("click", (e) => {
  changeMap(address[6].mapcode);
  clearallclass();
  addressAll[6].classList.add("active");
});

addressAll[7].addEventListener("click", (e) => {
  changeMap(address[7].mapcode);
  clearallclass();
  addressAll[7].classList.add("active");
});

addressAll[8].addEventListener("click", (e) => {
  changeMap(address[8].mapcode);
  clearallclass();
  addressAll[8].classList.add("active");
});

addressAll[9].addEventListener("click", (e) => {
  changeMap(address[9].mapcode);
  clearallclass();
  addressAll[9].classList.add("active");
});
*/
