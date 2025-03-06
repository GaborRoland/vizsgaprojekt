//jatekokController.js
const { Op } = require('sequelize');
const Jatekok = require('../Models/jatekokModel'); 
const Kategoria = require('../Models/kategoriakModel');

exports.OsszesJatekok = async function JatekKereses(req, res) {
    try {
        let jatekok = await Jatekok.findAll({
            attributes: ['id', 'jatek_nev', 'leiras', 'kategoria_id'],
            include: [{
                model: Kategoria,
                as: 'kategoria',
                attributes: ['kategoriak_ar']
            }]
        });
        res.render('index', { jatekok: jatekok, keresett : 0, username: req.session.username || 'Felhasználó'});
    } catch (err) {
        res.status(500).send('Hiba történt a játékok lekérésekor.');
    }
};

//Admin felületen játékok megjelenítése
exports.OsszesJatekokAdmin = async function JatekKereses2(req, res) {
    try {
        let jatekok = await Jatekok.findAll({
            attributes: ['id', 'jatek_nev', 'leiras', 'kategoria_id'],
            include: [{
                model: Kategoria,
                as: 'kategoria',
                attributes: ['kategoriak_ar', 'kategoria']
            }]
        });
        const kategoriak = await Kategoria.findAll({
            attributes: ['id', 'kategoria', 'kategoriak_ar']
        });
        res.render('jatek', {jatekok: jatekok, kategoriak: kategoriak});
    } catch (err) {
        res.status(500).send('Hiba történt a játékok lekérésekor.');
    }
};

//Admin felületen játék létrehozása
exports.JatekLetrehozasAdmin = async function JatekKereses(req, res) {
    const { jatek_nev, leiras, kategoria } = req.body;
        try {
            await Jatekok.create({
                jatek_nev: jatek_nev,
                leiras: leiras,
                kategoria_id: kategoria
            });
            res.redirect('/dashboard-xyz123'); 
        } catch (error) {
            console.error('Hiba történt a játék létrehozása közben:', error);
            res.status(500).send('Hiba történt a játék létrehozása során.');
        }
    
};

//Admin felületen játék törlés
exports.JatekTorlesAdmin = async (req, res) => {
    const { torolni } = req.body;
    console.log(req.body,torolni);
    try {
      await Jatekok.destroy({ where: { id: torolni } });
      res.redirect('/dashboard-xyz123');
      
    } catch (err) {
      res.status(500).send("Hiba a játék törlésekor");
    }
  };

//Kereső mező 
exports.KeresoMezo = async function (req, res) {
    const { search } = req.body;
    let jatekok = [];
    console.log(search)
        try {
            keresett = await Jatekok.findAll({
                where: {
                    jatek_nev:{
                        [Op.like]: `%${search}%`
                    }

                },
                include: [{
                    model: Kategoria,
                    as: 'kategoria',
                    attributes: ['kategoriak_ar']
                }]
            });
            res.render('index', {jatekok: jatekok, keresett: keresett, username: req.session.username || 'Felhasználó'}) 
        } catch (error) {
            console.error('Hiba történt a játék keresése közben:', error);
            res.status(500).send('Hiba történt a játék keresése során.');
        }
    
};

//Játékok frissítése
exports.JatekFrissites = async (req, res) => {
    const { jatek_nev2, leiras2, kategoria2, frissiteni } = req.body;
    console.log(req.body,frissiteni);
    try {
      let megtalalt = await Jatekok.findOne({ where: { id: frissiteni } });
      await megtalalt.update({jatek_nev: jatek_nev2, leiras: leiras2, kategoria_id: kategoria2});
      res.redirect('/dashboard-xyz123');
      
    } catch (err) {
      res.status(500).send("Hiba a játék törlésekor");
    }
  };
