// --------- 

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

// ----------- TOP BTN --------------

const topBtn = document.getElementById("topBtn");

topBtn.style.display = "none";
window.addEventListener("scroll", () => {


    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){

         topBtn.style.display = "block";
         topBtn.style.transition = "all 0.2s";

    }else{

        topBtn.style.display = "none";
        topBtn.style.transition = "all 0.2s";   

    }

})

topBtn.addEventListener("click", () => {

    scrollTo({

        top: 0,
        behavior:"smooth"

    })
})