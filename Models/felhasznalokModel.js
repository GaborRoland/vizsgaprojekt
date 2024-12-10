// models/felhasznalok.js
const { DataTypes } = require('sequelize');
const sequelize = require('../server/database');
const bcrypt = require('bcrypt'); //npm install bcrypt (a jelszó titkosítására)

// felhasznalok modell definiálása
const Felhasznalok = sequelize.define('felhasznalok', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true, // Ezt hozzáadva a `felhasznalo_nev` lesz az elsődleges kulcs
    autoIncrement: true
  },
  felhasznalo_nev: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  jelszo: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
  // Opciók
  freezeTableName: true,// Ez biztosítja, hogy a tábla neve 'felhasznalok' maradjon, és ne változzon többes számúvá
  timestamps: false // createdAt és updatedAt oszlopok automatikus kezelése
});

module.exports = Felhasznalok;
