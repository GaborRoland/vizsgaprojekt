let log = document.getElementById("log");

log.addEventListener("click", function () {
    localStorage.clear();
    window.location.href = '/users/backtomain';
});