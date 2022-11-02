console.log("hi");

const backBtn = document.querySelector(".back");

backBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  history.back();
});
