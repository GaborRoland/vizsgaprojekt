let log = document.getElementById("log");

log.addEventListener("click", function(){
    sessionStorage.removeItem("loggedInUser");
    window.location.replace("/");
    localStorage.clear();
});