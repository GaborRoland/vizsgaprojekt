const bcrypt = require('bcrypt');
const Felhasznalok = require('../Models/felhasznalokModel'); 

//Összes felhasználó
exports.Felhasznalok = async function felhasznalokLekeres(req, res) {
    try {
        let felhasznalok = await Felhasznalok.findAll({
            attributes: ['id', 'felhasznalo_nev', 'jelszo', 'adminisztrator']
        });
        res.render('felhasznalo', {felhasznalok: felhasznalok}); 
    } catch (err) {
        res.status(500).send('Hiba történt a felhasználók lekérésekor.');
    }
};

//Regisztráció
exports.felhasznaloLetrehozas = async function felhasznaloLekeres(req, res) {
    const { nev, jelszo1, jelszo2 } = req.body;

    if (jelszo1 === jelszo2) {
        try {
            const hashedPassword = await bcrypt.hash(jelszo1, 10); 
            await Felhasznalok.create({
                felhasznalo_nev: nev,
                jelszo: hashedPassword,
                adminisztrator: 0
            });
            res.redirect('/login.html'); 
        } catch (error) {
            console.error('Hiba történt a felhasználó létrehozása közben:', error);
            res.status(500).send('Hiba történt a felhasználó létrehozása során.');
        }
    } else {
        res.status(400).send('<script>alert("A két jelszó nem egyezik meg."); window.location.href="../login/register.html";</script>');
    }
};

//Az Admin felületen felhasználó létrehozása
exports.AdminfelhasznaloLetrehozas = async function felhasznaloLekeres(req, res) {
    const { felhasz_nev, jelszo, admin } = req.body;
        try {
            const hashedPassword = await bcrypt.hash(jelszo, 10); 
            await Felhasznalok.create({
                felhasznalo_nev: felhasz_nev,
                jelszo: hashedPassword,
                adminisztrator: admin
            });
            res.redirect('/dashboard-xyz123/felhasznalo'); 
        } catch (error) {
            console.error('Hiba történt a felhasználó létrehozása közben:', error);
            res.status(500).send('Hiba történt a felhasználó létrehozása során.');
        }
};

//Bejelentkeztetés
exports.felhasznaloBejelentkezes = async function bejelentkezes(req, res) {
    const { nev, jelszo1 } = req.body;
    try {
        const felhasznalo = await Felhasznalok.findOne({
            where: { felhasznalo_nev: nev }
        });

        if (!felhasznalo) {
           return res.status(401).send('<script>alert("Helytelen felhasználónév vagy jelszó!"); window.location.href="../login/login.html";</script>');
        }
        const isPasswordValid = await bcrypt.compare(jelszo1, felhasznalo.jelszo);

        if (!isPasswordValid) {
            return res.status(401).send('<script>alert("Helytelen felhasználónév vagy jelszó!"); window.location.href="../login/login.html";</script>');
        }
        
         // Ha a jelszó helyes, és nem adminisztrátor, akkor a főoldalra irányítjuk
         if (felhasznalo.adminisztrator === 0) {
            req.session.username = felhasznalo.felhasznalo_nev;  // Session tárolása
            return res.redirect('/');
        }

        // Ha adminisztrátor, akkor az admin dashboardra irányítjuk
        if (felhasznalo.adminisztrator === 1) {
            req.session.username = felhasznalo.felhasznalo_nev;  // Session tárolása
            return res.redirect('/dashboard-xyz123');
        }
        return res.status(401).send('<script>alert("Helytelen felhasználónév vagy jelszó!"); window.location.href="../login/login.html";</script>');
    } catch (error) {
        console.error('Hiba történt a bejelentkezés során:', error);
        res.status(500).send('Hiba történt a bejelentkezés során.');
    }
};

//Felhasználó törlés
exports.FelhasznaloTorles = async (req, res) => {
    const { torolni } = req.body;
    console.log(req.body,torolni);
    try {
      await Felhasznalok.destroy({ where: { id: torolni } });
      res.redirect('/dashboard-xyz123/felhasznalo');
      
    } catch (err) {
      res.status(500).send("Hiba a játék törlésekor");
    }
  };


//Felhasználó módosítása
exports.FelhasznaloFrissites = async (req, res) => {
    const { felhasz_nev2, jelszomeg, admin2, frissiteni } = req.body;
    try {
        if(jelszomeg)
        {
            const hashedPassword2 = await bcrypt.hash(jelszomeg, 10); 
            let megtalalt = await Felhasznalok.findOne({ where: { id: frissiteni } });
            await megtalalt.update({felhasznalo_nev: felhasz_nev2, jelszo: hashedPassword2, adminisztrator: admin2 });
        }
        else{ 
            let megtalalt = await Felhasznalok.findOne({ where: { id: frissiteni } });
            await megtalalt.update({felhasznalo_nev: felhasz_nev2, adminisztrator: admin2 });
        }
      res.redirect('/dashboard-xyz123/felhasznalo');
      
    } catch (err) {
      res.status(500).send("Hiba a játék törlésekor");
    }
  };

exports.Logout = async (req, res) =>{
    req.session.destroy((err) => {
        if (err) {
          return res.status(500).send('Failed to log out');
        }
        res.redirect('login.html'); 
      });
}

exports.BackToMain = async (req, res) =>{
    req.session.destroy((err) => {
        if (err) {
          return res.status(500).send('Failed to log out');
        }
        res.redirect('/'); 
      });
}
