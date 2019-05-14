const express = require('express');

const db = require('../shared/database');

const router = express.Router();

router.get('/search', (req, res) => {
   res.json({ok: true});
});

router.post('/candidature', (req, res) => {
   res.json({ok: true});
});

router.post('/new', (req, res) => {
   res.json({ok: true});
});


module.exports = router;