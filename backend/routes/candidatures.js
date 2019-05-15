const express = require('express');

const db = require('../shared/database');

const router = express.Router();

router.post('/liste', (req, res) => {
   res.json({ok: true});
});



module.exports = router;