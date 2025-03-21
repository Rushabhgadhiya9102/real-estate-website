// ----------- LOADER ANIMATION ------------

const content = document.querySelectorAll(".main-content");
const loader = document.getElementById("loader");

content.forEach((content) => {
  content.style.display = "none";

});

window.addEventListener("load", () => {
  
  setTimeout(() => {
    loader.style.display = "none";

    content.forEach((content) => {
      content.style.display = "block";

    });

  }, 3000);
});

// ----------- LOADER ANIMATION ------------

// --------- NAVBAR ----------

let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {

    header.style.top = "-70px";
    header.style.transition = "all 0.2s";

  } else {

    header.style.top = "0";
    header.style.transition = "all 0.2s";

  }

  lastScrollY = window.scrollY;
});

// --------- NAVBAR ----------

// ----------- TOP BTN --------------

const topBtn = document.getElementById("topBtn");

topBtn.style.display = "none";
window.addEventListener("scroll", () => {

  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {

    topBtn.style.display = "block";
    topBtn.style.transition = "all 0.2s";

  } else {

    topBtn.style.display = "none";
    topBtn.style.transition = "all 0.2s";

  }
});

topBtn.addEventListener("click", () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// ----------- TOP BTN --------------