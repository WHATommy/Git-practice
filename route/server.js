const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.json({ status: 'success' });
})

router.post('/:country', (req, res) => {
    const { name } = req.body
    axios
        .get(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(country => {
            res.json(country.data)
        })
        .catch(err => {
            console.log(err)
        })
})

router.post('/', (req, res) => {
    let word = req.body
    res.json({ word: word });
})

module.exports = router;