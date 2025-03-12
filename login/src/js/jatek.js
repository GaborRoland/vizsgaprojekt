//Játék frissítéséhez szükséges
document.getElementById("jatekSelect").addEventListener("change", function () {
    let selectedOption2 = this.options[this.selectedIndex];

    if (selectedOption2.value) {
        document.getElementById("jatek_nev2").value = selectedOption2.dataset.jateknev;
        document.getElementById("leiras2").value = selectedOption2.dataset.leiras;
        document.getElementById("kep").value = selectedOption2.dataset.kep;

        let kategoriaSelect = document.getElementById("kategoria2");
        let jatekKategoriaId = selectedOption2.dataset.kategoriaid;

        for (let i = 0; i < kategoriaSelect.options.length; i++) {
            if (kategoriaSelect.options[i].value === jatekKategoriaId) {
                kategoriaSelect.selectedIndex = i;
                break;
            }
        }
    }
});
