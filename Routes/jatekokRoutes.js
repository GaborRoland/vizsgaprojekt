const express = require('express');
const {OsszesJatekok, KeresoMezo} = require('../Controllers/jatekokController');
const router = express.Router();

router.get('/', OsszesJatekok);
router.post('/', KeresoMezo);


module.exports = router;