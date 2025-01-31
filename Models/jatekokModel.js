// models/jatekok.js
const { DataTypes } = require('sequelize');
const sequelize = require('../server/database');
const Kategoriak = require('./kategoriakModel');

// jatekok modell definiálása
const Jatekok = sequelize.define('jatekok', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  jatek_nev: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  leiras: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kategoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
        model: Kategoriak,
        key: 'id',
    },
    onUpdate: 'RESTRICT',
    onDelete: 'RESTRICT',
  }
},
{
  // Opciók
  freezeTableName: true,// Ez biztosítja, hogy a tábla neve 'felhasznalok' maradjon, és ne változzon többes számúvá
});

Jatekok.belongsTo(Kategoriak, { foreignKey: 'kategoria_id' });

module.exports = Jatekok;