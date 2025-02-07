//kategoriakController.js
const Kategoriak = require('../Models/kategoriakModel');

// Összes kategória lekérdezése
exports.OsszesKategoriak = async (req, res) => {
    try {
        const kategoriak = await Kategoriak.findAll({
            attributes: ['id', 'kategoria', 'kategoriak_ar']
        });
        res.json(kategoriak);
    } catch (error) {
        console.error('Hiba a kategóriák lekérése közben:', error);
        res.status(500).json({ error: 'Hiba történt a kategóriák lekérésekor.' });
    }
};

// Új kategória hozzáadása
exports.KategoriaLetrehozas = async (req, res) => {
    const { kategoria, kategoriak_ar } = req.body;
    try {
        const ujKategoria = await Kategoriak.create({ kategoria, kategoriak_ar });
        res.status(201).json(ujKategoria);
    } catch (error) {
        console.error('Hiba a kategória létrehozásakor:', error);
        res.status(500).json({ error: 'Nem sikerült létrehozni a kategóriát.' });
    }
};
