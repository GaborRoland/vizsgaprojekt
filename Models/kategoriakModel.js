const { DataTypes } = require('sequelize');
const sequelize = require('../server/database');

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
}, {
  freezeTableName: true,
});

module.exports = Kategoriak;
