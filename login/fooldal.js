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
const user = sessionStorage.getItem("loggedInUser");
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
  jatekaink.scrollIntoView({ block:"start", behavior: 'smooth' });
};

function goToFooter() {
  footer.scrollIntoView({ block:"start", behavior: 'smooth' });
};

//Felhasználó bejelentkeztetése
document.addEventListener("DOMContentLoaded", function() {
  

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
        ossztermek.style.visibility = "visible";

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
let a2 = document.createElement("a");
if(user)
  {
    document.addEventListener("DOMContentLoaded", () => {
      osszegar = parseInt(localStorage.getItem("osszegar")) || 0;
      a2.innerHTML = `Összegár: ${osszegar} Ft`;

      let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
      
      storedItems.forEach(item => {
        addToCart(item.title, item.price, item.summa); 
      });
    });
    
    ossztermek.appendChild(a2);
    
    document.querySelectorAll(".product-card .gomb").forEach(button => {
      button.addEventListener("click", event => {
        let clickedCard = event.currentTarget.closest(".product-card");
        let cim = clickedCard.querySelector('.title').innerHTML;
        let ar = clickedCard.querySelector('.price2').innerHTML;
        let db = clickedCard.querySelector('.db').value || 1;
        
        
        // Elmentjük a terméket a LocalStorage-ba
        let teljesAr = parseInt(ar) * parseInt(db);
        osszegar += teljesAr;

        console.log(osszegar);

        localStorage.setItem("osszegar", osszegar);
        a2.innerHTML = `Összegár: ${osszegar} Ft`

        let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
        storedItems.push({summa: teljesAr, title: cim, price: ar, quantity: db });
        localStorage.setItem("kosar", JSON.stringify(storedItems));
        addToCart(cim, ar, teljesAr);
        });

      });
    }
    
    // Új elem hozzáadása a DOM-hoz
    function addToCart(title, price, summa) {
      const input = document.createElement("input");
      input.type = "button";
      input.value = "🗑";
      input.id = "trash";
      input.setAttribute('onclick', 'Torles()');
      input.classList.add("torles");
      let a = document.createElement("a");
      a.innerHTML = `${title} ${price} Ft `;
      a.classList.add("dropbtn", "termek");
      //a2.innerHTML = `Összegár: ${summa} Ft`
    ossztermek.appendChild(a);
    a.appendChild(input);

}

function Torles(){
  document.querySelectorAll(".termek .torles").forEach(button => {
    button.addEventListener("click", event => {
      let clickedCard = event.currentTarget.closest(".termek");
      clickedCard.remove();
    });

  });
}