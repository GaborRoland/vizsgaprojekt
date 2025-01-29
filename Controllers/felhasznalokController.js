const bcrypt = require('bcrypt');
const Felhasznalok = require('../Models/felhasznalokModel'); 

exports.Felhasznalok = async function felhasznalokLekeres(req, res) {
    try {
        let felhasznalok = await Felhasznalok.findAll({
            attributes: ['id', 'felhasznalo_nev', 'jelszo']
        });
        res.json(felhasznalok); 
    } catch (err) {
        res.status(500).send('Hiba történt a felhasználók lekérésekor.');
    }
};

exports.felhasznaloLetrehozas = async function felhasznaloLekeres(req, res) {
    const { nev, jelszo1, jelszo2 } = req.body;

    if (jelszo1 === jelszo2) {
        try {
            const hashedPassword = await bcrypt.hash(jelszo1, 10); 
            await Felhasznalok.create({
                felhasznalo_nev: nev,
                jelszo: hashedPassword,
            });
            res.redirect('/'); 
        } catch (error) {
            console.error('Hiba történt a felhasználó létrehozása közben:', error);
            res.status(500).send('Hiba történt a felhasználó létrehozása során.');
        }
    } else {
        res.status(400).send('A két jelszó nem egyezik meg!');
    }
};

exports.felhasznaloBejelentkezes = async function bejelentkezes(req, res) {
    const { nev, jelszo1 } = req.body;
    try {
        const felhasznalo = await Felhasznalok.findOne({
            where: { felhasznalo_nev: nev }
        });

        if (!felhasznalo) {
            return res.status(401).send('Helytelen felhasználónév vagy jelszó.');
        }

        const isPasswordValid = await bcrypt.compare(jelszo1, felhasznalo.jelszo);

        if (isPasswordValid) {
            return  res.redirect('/');
        } else {
            return res.status(401).send('Helytelen felhasználónév vagy jelszó.');
        }
    } catch (error) {
        console.error('Hiba történt a bejelentkezés során:', error);
        res.status(500).send('Hiba történt a bejelentkezés során.');
    }
};