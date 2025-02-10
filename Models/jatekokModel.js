const { DataTypes } = require('sequelize');
const sequelize = require('../server/database');

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
  }
}, {
  freezeTableName: true,
  timestamps: false // createdAt és updatedAt oszlopok automatikus kezelése
});

module.exports = Jatekok;
