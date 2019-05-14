const express = require('express');

const db = require('../shared/database');

const router = express.Router();

router.post('/new', (req, res) => {
   res.json({ok: true});
});

router.post('/cv/new', (req, res) => {
   res.json({ok: true});
});

router.post('/alert/new', (req, res) => {
   res.json({ok: true});
});


module.exports = router;