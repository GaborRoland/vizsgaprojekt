//Jelszó láthatósága
function Megjelenites(){
    var password = document.getElementById("jelszo");

    //Jelszó típusának ellenőrzése és az alapján a megjelenítés
    if(password.type === "password")
    {
        password.type = "text";
    }
    else{
        password.type = "password"
    }
}

function Login() {
    const username = document.getElementById("felhasznalonev").value;
    
    if (username) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.replace = "index.ejs"; // Átirányítás a főoldalra
    }
}