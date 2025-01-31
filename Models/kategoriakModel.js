// models/jatekok.js
const { DataTypes } = require('sequelize');
const sequelize = require('../server/database');

// kategoriak modell definiálása
const Kategoriak = sequelize.define('kategoriak', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
    autoIncrement: true
  },
  kategoria: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  kategoriak_ar: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
  // Opciók
  freezeTableName: true,// Ez biztosítja, hogy a tábla neve 'felhasznalok' maradjon, és ne változzon többes számúvá
});

Kategoriak.hasMany(require('./jatekokModel'), { foreignKey: 'kategoria_id' });

module.exports = Kategoriak;