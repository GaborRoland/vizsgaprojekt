const Jatekok = require('./jatekokModel');
const Kategoriak = require('./kategoriakModel');

// Kapcsolatok beállítása
Kategoriak.hasMany(Jatekok, { foreignKey: 'kategoria_id' });
Jatekok.belongsTo(Kategoriak, { foreignKey: 'kategoria_id', as: 'kategoria' });

module.exports = { Jatekok, Kategoriak };
