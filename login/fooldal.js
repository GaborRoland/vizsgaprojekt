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

function goToGames() {
  jatekaink.scrollIntoView({ block:"start", behavior: 'smooth' });
};

function goToFooter() {
  footer.scrollIntoView({ block:"start", behavior: 'smooth' });
};

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

      
    }


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
}





