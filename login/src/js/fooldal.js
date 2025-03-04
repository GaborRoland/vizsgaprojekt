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
      sessionStorage.removeItem("loggedInUser");
      window.location.replace("login.html");
      localStorage.clear();
    }
  });
  


//Rendelés gomb
let rendelesGomb = document.createElement("input");
rendelesGomb.type = "button";
rendelesGomb.value = "Rendelés";
rendelesGomb.setAttribute("id", "rendel");
rendelesGomb.style.paddingBottom = "10px";
rendelesGomb.style.margin = "10px";
rendelesGomb.classList.add("searchbutton");
rendelesGomb.setAttribute("onclick", "Megrendeles()");

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

      if(osszegar > 0)
      {
        ossztermek.appendChild(rendelesGomb);
      }

      
    });
    
    ossztermek.appendChild(a2);
    
    
    document.querySelectorAll(".product-card .gomb").forEach(button => {
      button.addEventListener("click", event => {
        let clickedCard = event.currentTarget.closest(".product-card");
        let cim = clickedCard.querySelector('.title').innerHTML;
        let ar = clickedCard.querySelector('.price2').innerHTML;
        let db = clickedCard.querySelector('.db').value || 1;
        
        // Elmentjük a terméket a LocalStorage-ba
        teljesAr = parseInt(ar) * parseInt(db);
        osszegar += teljesAr;
        
        console.log(osszegar);
        
        localStorage.setItem("osszegar", osszegar);
        a2.innerHTML = `Összegár: ${osszegar} Ft`
        
        let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
        storedItems.push({summa: teljesAr, title: cim, price: ar, quantity: db });
        localStorage.setItem("kosar", JSON.stringify(storedItems));
        addToCart(cim, ar, teljesAr);
        ossztermek.appendChild(rendelesGomb);
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
      let priceText = clickedItem.innerHTML.match(/(\d+)\s*Ft/); // A \d egy vagy több számot keres. \s az a szóközöket figyeli. A *Ft pedig azt figyeli, hogy Ft-ra végződjön
      if (priceText) {
          let price = parseInt(priceText[1]);

          osszegar -= price;
          localStorage.setItem("osszegar", osszegar);
          a2.innerHTML = `Összegár: ${osszegar} Ft`;

          let storedItems = JSON.parse(localStorage.getItem("kosar")) || [];
          storedItems = storedItems.filter(item => item.summa !== price);
          localStorage.setItem("kosar", JSON.stringify(storedItems));
      }

      clickedItem.remove();
  }
}

document.addEventListener("click", function(event) {
  if (event.target.classList.contains("torles")) {
      Torles(event);
  }
});


//Rendelés gomb
function Megrendeles(){
  document.getElementById("rendel");
  localStorage.clear();
  location.reload();
  alert("A vásárlás sikeres volt!");
}