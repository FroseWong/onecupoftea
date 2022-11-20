"use strict";

const membernavbar = document.querySelector(".membernavbar");
const memberModal = document.querySelector(".member-modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".fa-xmark");
let username = document.querySelector(".username");
const loginPassword = document.querySelector(".login-password");
const loginBtn = document.querySelector(".login");
const forgetBtn = document.querySelector(".forget");
const memberForm = document.querySelector(".member-form");
const forgetsendBtn = document.querySelector(".forgetsend");
const forgetemail = document.querySelector(".forgetemail");
const forgetpassword = document.querySelector(".forgetpassword");
const forgetpasswordForm = document.querySelector(".forgetpassword-form");
const reloginBtn = document.querySelector(".relogin");

const openModal = function () {
  memberModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  memberModal.classList.add("hidden");
  overlay.classList.add("hidden");
  forgetpassword.style.top = "270px";
  username.value = "";
  loginPassword.value = "";
  forgetemail.value = "";
};

membernavbar.addEventListener("click", openModal);
closeBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  closeModal();
  //   forgetpassword.style.top = "270px";
});
overlay?.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !memberModal.classList.contains("hidden")) {
    // forgetpassword.style.top = "270px";
    closeModal();
  }
});

if (memberForm?.addEventListener) {
  memberForm?.addEventListener("submit", () => {
    // alert("hi");
    username = username.value;

    // window.location.href = "http://127.0.0.1:5500/index.html";
    alert(`${username} 您登入成功`);
  });
}

// console.log(forgetpasswordForm);
// console.log(forgetemail);
// console.log(forgetsendBtn);

if (forgetpasswordForm?.addEventListener) {
  forgetpasswordForm?.addEventListener("submit", () => {
    alert(`已傳送變更密碼信至您的信箱\n${forgetemail.value}`);
  });
}

reloginBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  forgetpassword.style.top = "270px";
});

// console.log(forgetBtn);

forgetBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  forgetpassword.style.top = "50px";
});
