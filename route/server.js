const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.json({ status: 'success' });
})

router.get('/:country', (req, res) => {
    axios
        .get(`https://restcountries.eu/rest/v2/name/${req.body.name}`)
        .then(country => req.json(country))
        .catch(err => {
            console.log(err)
        })
})

router.post('/', (req, res) => {
    let word = req.body
    res.json({ word: word });
})

module.exports = router;