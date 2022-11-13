const fabarsBtn = document.querySelector(".fa-bars");
const headerUl = document.querySelector(".header ul");
const headerOverlay = document.querySelector(".headeroverlay");

// console.log(headerUl);
let checkStatus = 0;
fabarsBtn.addEventListener("click", function () {
  checkStatus = checkStatus === 0 ? 1 : 0;

  if (checkStatus === 1) {
    headerUl.style.left = "2px";
    headerOverlay.classList.remove("hidden");
  }
  if (checkStatus === 0) {
    headerUl.style.left = "-210px";
    headerOverlay.classList.add("hidden");
  }
});

headerOverlay.addEventListener("click", function () {
  headerUl.style.left = "-210px";
  headerOverlay.classList.add("hidden");
  checkStatus = 0;
});
