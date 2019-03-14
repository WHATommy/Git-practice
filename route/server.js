const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ status: 'success' });
})

router.post('/', (req, res) => {
    let word = req.body
    res.json({ word: word });
})

module.exports = router;