const sendBtn = document.querySelector(".send");
const dataAgreeCheckBox = document.querySelector(".data-agree");
const nameInput = document.querySelector(".nameInput");
const usernameInput = document.querySelector(".usernameInput");
const numberInput = document.querySelector(".numberInput");
const emailInput = document.querySelector(".emailInput");
const passwordInput = document.querySelector(".passwordInput");
const repasswordInput = document.querySelector(".repasswordInput");
const addressDetailInput = document.querySelector(".address-detail");
const birthdayInput = document.querySelector(".birthday");
const frequencyInput = document.querySelector(".frequencyInput");
const favoriteInput = document.querySelector(".favoriteInput");
const sexInput = document.querySelector(".sexInput");
const discountInput = document.querySelector(".discountInput");

sendBtn.addEventListener("click", (e) => {
  const countyInput = document.querySelector(".county");
  const districtInput = document.querySelector(".district");

  e.preventDefault();
  //   console.log(dataAgreeCheckBox.checked);
  //   console.log(nameInput.value);
  //   console.log(usernameInput.value);
  //   console.log(numberInput.value);
  //   console.log(emailInput.value);
  //   console.log(passwordInput.value);
  //   console.log(repasswordInput.value);
  //   console.log(countyInput.value);
  //   console.log(districtInput.value);
  //   console.log(addressDetailInput.value);
  //   console.log(birthdayInput.value);
  //   console.log(frequencyInput.value);
  //   console.log(favoriteInput.value); 非必要
  let str = "";

  if (
    dataAgreeCheckBox.checked &&
    nameInput.value != "" &&
    usernameInput.value != "" &&
    numberInput.value != "" &&
    emailInput.value != "" &&
    passwordInput.value != "" &&
    repasswordInput.value != "" &&
    passwordInput.value == repasswordInput.value &&
    countyInput.value != "" &&
    districtInput.value != "" &&
    addressDetailInput.value != "" &&
    birthdayInput.value != "" &&
    frequencyInput.value != ""
  ) {
    alert(`${usernameInput.value} 會員創建成功`);
    dataAgreeCheckBox.checked = false;
    nameInput.value = "";
    usernameInput.value = "";
    numberInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    repasswordInput.value = "";
    countyInput.value = "";
    districtInput.value = "";
    addressDetailInput.value = "";
    birthdayInput.value = "";
    frequencyInput.value = "";
    sexInput.checked = true;
    discountInput.checked = true;
  } else {
    if (!dataAgreeCheckBox.checked)
      str += str == "" ? "請確認完條款後打勾" : "\n請確認完條款後打勾";
    if (nameInput.value == "") str += str == "" ? "請輸入姓名" : "\n請輸入姓名";
    if (usernameInput.value == "")
      str += str == "" ? "請輸入使用者名稱" : "\n請輸入使用者名稱";
    if (numberInput.value == "")
      str += str == "" ? "請輸入聯絡電話" : "\n請輸入聯絡電話";
    if (emailInput.value == "")
      str += str == "" ? "請輸入信箱" : "\n請輸入信箱";
    if (passwordInput.value == "")
      str += str == "" ? "請輸入密碼" : "\n請輸入密碼";
    if (repasswordInput.value == "")
      str += str == "" ? "請再次輸入密碼" : "\n請再次輸入密碼";
    if (passwordInput.value !== repasswordInput.value)
      str +=
        str == "" ? "設定密碼與確認密碼不一致" : "\n設定密碼與確認密碼不一致";
    if (
      countyInput.value == "" ||
      districtInput.value == "" ||
      addressDetailInput.value == ""
    )
      str += str == "" ? "請輸入完整地址" : "\n請輸入完整地址";
    if (birthdayInput.value == "")
      str += str == "" ? "請輸入出生年月日" : "\n請輸入出生年月日";
    if (frequencyInput.value == "")
      str +=
        str == ""
          ? "請選擇一個月內會在薏盃茶消費幾次"
          : "\n請選擇一個月內會在薏盃茶消費幾次";
    alert(str);
  }
});

new TwCitySelector();
