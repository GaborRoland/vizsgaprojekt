//Segédváltozók
const toTopButton = document.getElementById("to-top-button");
let log = document.getElementById("log");
let loggedin = false;
const jatekaink = document.getElementById("section-title-id");
const hirek = document.getElementById("hirek");
const aboutus = document.getElementById("about-us");
const cart = document.getElementById("cart");
const ossztermek = document.getElementById("ossztermek");
let user = window.usernameFromBackend;
let osszegar = 0;

//Oldal tetejére visszamenő gomb megjelenítése egy bizonyos méret után
window.onscroll = function () {
  if (document.documentElement.scrollTop > 500) {
    toTopButton.classList.add("visible");
  } else {
    toTopButton.classList.remove("visible");
  }
};

//Smooth legördülések
function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function goToGames() {
  jatekaink.scrollIntoView({ block: "start", behavior: 'smooth' });
};

function goToAboutUs() {
  aboutus.scrollIntoView({ block: "start", behavior: 'smooth' });
};

function goToNews() {
  hirek.scrollIntoView({ block: "start", behavior: 'smooth' });
};

//Felhasználó bejelentkeztetése
document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("felhasz").innerHTML = user;

  if (user != "Felhasználó") {
    log.innerHTML = "Kijelentkezés";
    loggedin = true;
    document.getElementById("reg").innerHTML = "Beállítások";
    document.getElementById("reg").href = "";
    document.getElementById("reg").addEventListener("click", function () {
      alert("Fejlesztés alatt áll!"); 
    });

    cart.style.display = "block";
    ossztermek.style.visibility = "visible";
  }
});

//Kijelentkeztetés
log.addEventListener("click", function () {
  if (loggedin) {
    localStorage.clear();
    window.location.href = '/users/logout';
  }
});

//Kosár feltöltése  
let a2 = document.createElement("a");

if (user) {
  document.addEventListener("DOMContentLoaded", () => {
    osszegar = parseInt(localStorage.getItem("osszegar")) || 0;
    a2.innerHTML = `Összegár: ${osszegar} Ft`;

    let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];

    storedItems.forEach(item => {
      addToCart(item.title, item.price, item.summa);
    });

    if (osszegar > 0) {
      ossztermek.appendChild(rendelesGomb);
    }
  });

  ossztermek.appendChild(a2);

  document.querySelectorAll(".product-card .gomb").forEach(button => {
    button.addEventListener("click", event => {
      if (user === "Felhasználó") {
        alert("A vásárláshoz jelentkezz be!")
      }
      else {
        let clickedCard = event.currentTarget.closest(".product-card");
        let cim = clickedCard.querySelector('.title').innerHTML;
        let ar = clickedCard.querySelector('.price2').innerHTML;
        let db = clickedCard.querySelector('.db').value || 1;

        teljesAr = parseInt(ar) * parseInt(db);
        osszegar += teljesAr;

        localStorage.setItem("osszegar", osszegar);
        a2.innerHTML = `Összegár: ${osszegar} Ft`

        let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
        storedItems.push({ summa: teljesAr, title: cim, price: ar, quantity: db });
        localStorage.setItem("kosar", JSON.stringify(storedItems));

        addToCart(cim, ar, teljesAr);

        if (osszegar > 0) {
          ossztermek.appendChild(rendelesGomb);
        }
      }
    });
  });
}

// Új elem hozzáadása a DOM-hoz
function addToCart(title, price, summa) {
  const input = document.createElement("input");
  input.type = "button";
  input.value = " 🗑";
  input.id = "trash";
  input.setAttribute('onclick', 'Torles()');
  input.classList.add("torles");
  let a = document.createElement("a");
  a.innerHTML = `${title} ${summa} Ft`;
  a.classList.add("dropbtn", "termek");
  ossztermek.appendChild(a);
  a.appendChild(input);

}

function Torles(event) {
  let clickedButton = event.target;
  let clickedItem = clickedButton.closest(".termek");

  if (clickedItem) {
    let priceText = clickedItem.innerHTML.match(/(\d+)\s*Ft/);
      let price = parseInt(priceText[1]);

      osszegar -= price;
      localStorage.setItem("osszegar", osszegar);
      a2.innerHTML = `Összegár: ${osszegar} Ft`;

      let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
      storedItems = storedItems.filter(item => item.summa !== price);
      localStorage.setItem("kosar", JSON.stringify(storedItems));
    }

    clickedItem.remove();
    if (osszegar == 0) {
      rendelesGomb.remove();
    }
  }

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("torles")) {
    Torles(event);
  }
});


//Rendelés gomb
function Megrendeles() {
  document.getElementById("rendel");
  localStorage.clear();
  location.reload();
  alert("A vásárlás sikeres volt!");
}
let rendelesGomb = document.createElement("input");
rendelesGomb.type = "button";
rendelesGomb.value = "Rendelés";
rendelesGomb.setAttribute("id", "rendel");
rendelesGomb.style.paddingBottom = "10px";
rendelesGomb.style.margin = "10px";
rendelesGomb.classList.add("searchbutton");
rendelesGomb.setAttribute("onclick", "Megrendeles()");

//Hírek sliderhez
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
