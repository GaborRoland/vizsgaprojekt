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
}


function Kereses() {
    keresomezo.addEventListener('keypress', function(e){
        if(e.key === 'Enter')
        {
            keresesDiv.style.visibility = "visible";
            keresesCim.style.visibility = "visible";
            ujDiv = document.createElement("div");
            ujDiv.classList.add("product-card")

            ujImg = document.createElement("img");
            ujImg.src = "pics/game-49.png";

            ujCim = document.createElement("h3");
            ujCim.innerHTML = "Játék neve";

            ujLeiras = document.createElement("p");
            ujLeiras.innerHTML = "Leírás";

            ujAr = document.createElement("spam");
            ujAr.classList.add("price");
            ujAr.innerHTML = 3000;

            keresesDiv.appendChild(ujDiv);
            ujDiv.appendChild(ujImg);
            ujDiv.appendChild(ujCim);
            ujDiv.appendChild(ujLeiras);
            ujDiv.appendChild(ujAr);
        }
    })
}

Kereses()

