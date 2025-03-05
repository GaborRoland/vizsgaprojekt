//kategoriakController.js
const Kategoriak = require('../Models/kategoriakModel');
const Jatekok = require('../Models/jatekokModel');

exports.OsszesKategoriak = async (req, res) => {
  try {
      const kategoriak = await Kategoriak.findAll({
          attributes: ['id', 'kategoria', 'kategoriak_ar']
      });

      for (let i = 0; i < kategoriak.length; i++) {
          const kategoria = kategoriak[i];
          
          // Megszámoljuk a játékok számát az adott kategóriához
          const jatekokSzama = await Jatekok.count({
              where: {
                kategoria_id: kategoria.id
              }
          });

          // Hozzáadjuk a jatekokSzama mezőt az aktuális kategóriához
          kategoriak[i] = kategoria.toJSON(); // JSON-re alakítjuk, hogy az adatokat módosíthassuk
          kategoriak[i].jatekokSzama = jatekokSzama; // Játékok száma hozzáadása
      }
      res.render('kategoria', { kategoriak });
  } catch (error) {
      console.error('Hiba a kategóriák lekérése közben:', error);
      res.status(500).json({ error: 'Hiba történt a kategóriák lekérésekor.' });
  }
};


// Új kategória hozzáadása
exports.KategoriaLetrehozas = async (req, res) => {
    const { kateg_nev, ar } = req.body;
    console.log(req.body)
    try {
        const ujKategoria =
        await Kategoriak.create({
            kategoria: kateg_nev,
            kategoriak_ar: ar
        });
        res.redirect('/dashboard-xyz123/kategoria');
    } catch (error) {
        console.error('Hiba a kategória létrehozásakor:', error);
        res.status(500).json({ error: 'Nem sikerült létrehozni a kategóriát.' });
    }
};

//Kategória törlés
exports.KategoriaTorles = async (req, res) => {
    const { torolni } = req.body;
    console.log(req.body,torolni);
    try {

      // Ellenőrizzük, hogy van-e olyan játék, amelyhez a törölni kívánt kategória tartozik
    const jatekok = await Jatekok.findAll({
      where: { kategoria_id: torolni } // Feltételezve, hogy a 'kategoriak_id' a kapcsolódó mező a Jatekok táblában
    });

    if (jatekok.length > 0) {
      // Ha találunk ilyen játékokat, nem törölhetjük a kategóriát
      return res.status(400).send('<script>alert("A kategória törléséhez először el kell távolítani a hozzá tartozó játékokat!"); window.location.href = "/dashboard-xyz123/kategoria";</script>');
    }

      await Kategoriak.destroy({ where: { id: torolni } });
      res.redirect('/dashboard-xyz123/kategoria');
      
    } catch (err) {
      res.status(500).send('<script>alert("Hiba a kategoria törlésekor!"); window.location.href = "/dashboard-xyz123/kategoria";</script>');
    }
  };

//Kategória frissítése
exports.KategoriaFrissites = async (req, res) => {
    const { kateg_nev2, ar2, frissiteni } = req.body;
    console.log(req.body,frissiteni);
    try {
      let megtalalt = await Kategoriak.findOne({ where: { id: frissiteni } });
      await megtalalt.update({kategoria: kateg_nev2, kategoriak_ar: ar2 });
      res.redirect('/dashboard-xyz123/kategoria');
      
    } catch (err) {
      res.status(500).send("Hiba a játék törlésekor");
    }
  };
