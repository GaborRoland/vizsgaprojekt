//Felhasználó updatehez szükséges
document.getElementById("felhasznaloSelect").addEventListener("change", function () {
    let selectedOption2 = this.options[this.selectedIndex];

    // Ellenőrizzük, hogy van-e értéke (ne a default opció fusson)
    if (selectedOption2.value) {
        document.getElementById("felhasz_nev2").value = selectedOption2.dataset.felhasznev;

        let adminValue = selectedOption2.dataset.admin;
        let adminSelect = document.getElementById("admin2");

        if (adminValue === "1") {
            adminSelect.value = "1";
        } else if (adminValue === "0") {
            adminSelect.value = "0";
        }
    }
});
