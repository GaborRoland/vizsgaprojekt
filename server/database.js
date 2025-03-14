const { Sequelize } = require('sequelize');
require('dotenv').config();

// mysql adatbázis kapcsolat létrehozása
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: process.env.DB_DIALECT,
  }
);

async function syncDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Kapcsolódás sikeres az adatbázishoz.');

    await sequelize.sync({ force: false });
    console.log('Adatbázis szinkronizálva.');
  }
  catch (error) {
    console.error('Hiba az adatbázishoz való kapcsolódás során:', error);
  }
}
syncDatabase();
module.exports = sequelize;
