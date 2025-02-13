//Segédváltozók
const toTopButton = document.getElementById("to-top-button");
const keresesDiv = document.getElementById("kereses");
const keresesCim = document.getElementById("keresescim");
const keresomezo = document.getElementById("keresomezo");
const usermenu = document.getElementById("usermenu");
let log = document.getElementById("log");
let loggedin = false;
const jatekaink = document.getElementById("section-title");
const footer = document.getElementById("footer");
const keresoinput = document.querySelector('search-input');
const cart = document.getElementById("cart");
const AllTitle = document.querySelectorAll(".title");
const AllPrice = document.querySelectorAll(".price2");
const AllProducts = document.querySelectorAll(".product-card");
const ossztermek = document.getElementById("ossztermek");
const ures = document.getElementById("ures");

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
  jatekaink.scrollIntoView({ block:"start", behavior: 'smooth' });
};

function goToFooter() {
  footer.scrollIntoView({ block:"start", behavior: 'smooth' });
};

//Felhasználó bejelentkeztetése
document.addEventListener("DOMContentLoaded", function() {
  const user = sessionStorage.getItem("loggedInUser");

  console.log("Bejelentkezett felhasználó:", user); // Debugging üzenet

  if (!user) {
      console.log("Nincs bejelentkezett felhasználó, átirányítás...");
      document.getElementById("felhasz").innerHTML = "Felhasználó";
  } else {
        document.getElementById("felhasz").innerHTML = user;
        log.innerHTML = "Kijelentkezés";
        loggedin = true;
        document.getElementById("reg").innerHTML = "Beállítások";
        cart.style.display = "block";

      }

//Kijelentkeztetés
  });
  log.addEventListener("click", function(){
    if(loggedin)
    {
      logout();
    }
  });
  
  function logout() {
  sessionStorage.removeItem("loggedInUser");
  window.location.replace("login.html");
  localStorage.clear();
}

//Kosár feltöltése
document.addEventListener("DOMContentLoaded", () => {
  let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
  storedItems.forEach(item => addToCart(item.title, item.price));
});

let osszegar = 0;
let a2 = document.createElement("a");
ossztermek.appendChild(a2);

AllProducts.forEach(button => {
  button.addEventListener("click", event => {
      let clickedCard = event.currentTarget;
      let cim = clickedCard.querySelector('.title').innerHTML;
      let ar = clickedCard.querySelector('.price2').innerHTML;

      let vegcim = `${cim} ${ar} Ft`;
      osszegar += parseInt(ar);
      console.log(osszegar);
      a2.innerHTML = "Összeg ár: " + osszegar + " Ft"; 

      addToCart(cim, ar);

      // Elmentjük a terméket a LocalStorage-ba
      let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
      storedItems.push({ title: cim, price: ar });
      localStorage.setItem("kosar", JSON.stringify(storedItems));
    });
  });

// Új elem hozzáadása a DOM-hoz
function addToCart(title, price) {
  ures.style.display = "none";
  let a = document.createElement("a");
  a.innerHTML = `${title} ${price} Ft`;
  a.classList.add("dropbtn", "termek");
  ossztermek.appendChild(a);
}

