const toTopButton = document.getElementById("to-top-button");
const keresesDiv = document.getElementById("kereses");
const keresesCim = document.getElementById("keresescim");
const keresomezo = document.getElementById("keresomezo");


window.onscroll = function () {
  if (document.documentElement.scrollTop > 500) {
    toTopButton.classList.add("visible");
  } else {
    toTopButton.classList.remove("visible");
  }
};

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};



