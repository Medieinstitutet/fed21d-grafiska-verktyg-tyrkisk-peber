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

// Animation on SVG candy making it spin
gsap.to(".cookie-svg", {duration: 1, repeatDelay: 1, repeat:50, rotation: 360, ease:"myWiggle"})

// Animation on SVG fire making it shoot out

gsap.to(".fire-svg", {duration: 1, delay: 1, repeatDelay: 1, y: "-50%", x: "50%", ease: "rough", repeat: 50,})

gsap.from(".fire-svg", {duration: 1, delay: 1, repeatDelay:1, opacity: 0, repeat: 50 })