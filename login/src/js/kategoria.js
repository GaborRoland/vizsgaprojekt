//Kategória frissítéséhez szükséges
document.getElementById("kategoriaSelect").addEventListener("change", function () {
    let selectedOption = this.options[this.selectedIndex];

    // Ellenőrizzük, hogy van-e értéke (ne a default opció fusson)
    if (selectedOption.value) {
        document.getElementById("kateg_nev2").value = selectedOption.dataset.katnev;
        document.getElementById("ar2").value = selectedOption.dataset.ar;
    }
});