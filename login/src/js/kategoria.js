document.getElementById("kategoriaSelect").addEventListener("change", function () {
    let selectedOption = this.options[this.selectedIndex];

    if (selectedOption.value) {
        document.getElementById("kateg_nev2").value = selectedOption.dataset.katnev;
        document.getElementById("ar2").value = selectedOption.dataset.ar;
    }
});