const loaderOut = document.querySelector(".loader-out");
const loaderRing = document.querySelector(".loader-ring");

window.onload = function () {
  loaderOut.style.background = "transparent";
  loaderRing.classList.remove("-loading");
};