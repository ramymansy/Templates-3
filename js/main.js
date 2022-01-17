// Icon For otherLinks
// ======================
const icon = document.getElementById("icon");
const menu = document.getElementById("mega-menu");

icon.onclick = function () {
  icon.classList.toggle("active");
  menu.classList.toggle("active");
};
document.onclick = function (clickEvent) {
  if (clickEvent.target.id !== "mega-menu" && clickEvent.target.id !== "icon") {
    icon.classList.remove("active");
    menu.classList.remove("active");
  }
};

// ==============================================
// onscroll Function
// =================
const btn = document.querySelector("button.up");
const section = document.querySelector(".our-skills");
const progressSpans = document.querySelectorAll(".the-progress span");
const nums = document.querySelectorAll(".stats .number");
const stateSection = document.querySelector(".stats");
let started = false;

window.onscroll = function () {
  // button.up
  if (this.scrollY >= 721) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
  // our-skills
  if (this.scrollY >= section.offsetTop - 100) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // stats-section
  if (this.scrollY >= stateSection.offsetTop - 400) {
    if (!started) {
      nums.forEach((num) => startcount(num));
    }
    started = true;
  }
};

// button.up
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// stats-section
function startcount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}
// ====================================
// Events Section
// The End Of The Year Date To Countdown To
// 1000 Milliseconds = 1 Second

const countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();
// console.log(countDownDate);

const counter = setInterval(() => {
  //Get Date Now
  const dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  const dateDiff = countDownDate - dateNow;

  // Get Time Units
  const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;
  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
