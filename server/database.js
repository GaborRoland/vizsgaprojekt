// database.js
const { Sequelize } = require('sequelize');

// mysql adatbázis kapcsolat létrehozása
const sequelize = new Sequelize('jatekbusiness', 'root', '',{
  dialect: 'mysql',
});

// Adatbázis és tábla szinkronizálása
async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Kapcsolódás sikeres az adatbázishoz.');
    
    // A modellek szinkronizálása (táblák létrehozása, ha nem léteznek)
    await sequelize.sync({ force: false }); // alter: true biztosítja a táblák frissítését a modellek alapján
    console.log('Adatbázis szinkronizálva.');
  } 
  catch (error) {
    console.error('Hiba az adatbázishoz való kapcsolódás során:', error);
  }
}
syncDatabase();
module.exports = sequelize;
