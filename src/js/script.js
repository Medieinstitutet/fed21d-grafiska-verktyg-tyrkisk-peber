window.addEventListener("load", (event) => {
  checkEmail();
});

let accBtn = document.getElementById("cookie-accept-btn");
let rejBtn = document.getElementById("cookie-reject-btn");
let cookieWrap = document.getElementById("cookie-wrap");

accBtn.addEventListener("click", (e) => {
  cookieWrap.style.display = "none";
});
rejBtn.addEventListener("click", (e) => {
  cookieWrap.style.display = "none";
});

function checkEmail() {
  let input = document.getElementById("email-input");
  let btn = document.getElementById("email-btn");

  input.value = "";

  input.addEventListener("change", (e) => {
    const regexExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const str = input.value;

    if (regexExp.test(str)) {
      //change button background color to yellow
      btn.style.backgroundColor = "#ffd707";
    } else {
      btn.style.backgroundColor = "#000fa0";
      input.value = "";
    }
  });
}

//animation candy on cookie-banner
gsap.to(".cookie-svg", {
  duration: 1,
  fill: "#000",
  transformOrigin: "60% 60%",
  rotation: 360,
  repeat: 0,
});
