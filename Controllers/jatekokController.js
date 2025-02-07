//jatekokController.js
const bcrypt = require('bcrypt');
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
        // console.log(jatekok);
        res.render('index', { jatekok: jatekok });
    } catch (err) {
        res.status(500).send('Hiba történt a játékok lekérésekor.');
    }
};

exports.JatekLetrehozas = async function JatekKereses(req, res) {
    const { jatek_neve, leirasa, kategoria } = req.body;
        try {
            await Jatekok.create({
                jatek_nev: jatek_neve,
                leiras: leirasa,
                kategoria_id: kategoria
            });
            res.redirect('/'); 
        } catch (error) {
            console.error('Hiba történt a játék létrehozása közben:', error);
            res.status(500).send('Hiba történt a játék létrehozása során.');
        }
    
};