window.addEventListener("load", (event) => {
  checkEmail();
});

let menuBtn = document.getElementById("menu-button");
let accBtn = document.getElementById("cookie-accept-btn");
let rejBtn = document.getElementById("cookie-reject-btn");
let cookieWrap = document.getElementById("cookie-wrap");

//OPEN NAV
menuBtn.addEventListener("click", (e) => {
  menuBtn.classList.toggle("menu-open");
});

//ACCEPT COOKIES
accBtn.addEventListener("click", (e) => {
  cookieWrap.style.display = "none";
});
//REJECT COOKIES
rejBtn.addEventListener("click", (e) => {
  cookieWrap.style.display = "none";
});

//CHANGE BG ON BUTTON, VALIDATION EMAIL
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
