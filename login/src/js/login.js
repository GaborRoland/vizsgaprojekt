//Jelszó láthatósága
function Megjelenites() {
    var password = document.getElementById("jelszo");

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

function Husveti_Tojas() {
    alert("Womp womp.")
}

function Felhivas() {
    alert("Ez a funkció fejlesztés alatt áll.")
}