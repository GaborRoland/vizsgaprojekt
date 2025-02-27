//kategoriakController.js
const Kategoriak = require('../Models/kategoriakModel');

// Összes kategória lekérdezése
exports.OsszesKategoriak = async (req, res) => {
    try {
        const kategoriak = await Kategoriak.findAll({
            attributes: ['id', 'kategoria', 'kategoriak_ar']
        });
        res.render('kategoria', {kategoriak: kategoriak});
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
      await Kategoriak.destroy({ where: { id: torolni } });
      res.redirect('/dashboard-xyz123/kategoria');
      
    } catch (err) {
      res.status(500).send("Hiba a játék törlésekor");
    }
  };
