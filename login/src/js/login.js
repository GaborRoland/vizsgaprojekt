//Jelszó láthatósága
function Megjelenites() {
    var password = document.getElementById("jelszo");

    //Jelszó típusának ellenőrzése és az alapján a megjelenítés
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password"
    }
}

function NincsFelhasz() {
    sessionStorage.clear();
    window.location.href = '/users/backtomain';
}

