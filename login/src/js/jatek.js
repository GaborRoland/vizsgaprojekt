//Játék frissítéséhez szükséges
document.getElementById("jatekSelect").addEventListener("change", function() {
    let selectedOption2 = this.options[this.selectedIndex];

    // Ellenőrizzük, hogy van-e értéke (ne a default opció fusson)
    if (selectedOption2.value) {
        document.getElementById("jatek_nev2").value = selectedOption2.dataset.jateknev;
        document.getElementById("leiras2").value = selectedOption2.dataset.leiras;
    }
});