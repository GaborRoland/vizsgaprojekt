const password = document.getElementById("jelszo");
const re_password = document.getElementById("jelszoujra");


//Leellenőrzi, hogy a két jelszó ugyanaz e
function Ugyanaze(){
    if(password.value === re_password.value)
    {
        
    }
    else{

        alert("A jelszavak nem egyeznek meg.")
    }
}