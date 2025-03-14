const { DataTypes } = require('sequelize');
const sequelize = require('../server/database');

const Felhasznalok = sequelize.define('felhasznalok', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true,
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
  },
  adminisztrator: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
  {
    freezeTableName: true,
    timestamps: false
  });

module.exports = Felhasznalok;
