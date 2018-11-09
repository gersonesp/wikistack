const express = require('express');
const router = express.Router();
const layout = require('../views/layout');

router.get('/', function(req, res) {
    console.log('This will get all wiki pages');
    res.send(layout());
})

router.post('/', function(req, res) {
    console.log('This will submit a new page to the database');
    res.send(layout());
})

router.get('/add', function(req, res) {
    console.log('This will retrive add page');
    res.send(layout());
})

module.exports = router;