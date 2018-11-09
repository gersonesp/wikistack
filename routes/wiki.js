const express = require('express');
const router = express.Router();
const layout = require('../views/layout');
const models = require('../models')
const Page = models.Page;
const addPage = require('../views/addPage');


router.get('/', function(req, res, next) {
    console.log('This will get all wiki pages');
    res.send(layout());
})

router.post('/', async function(req, res, next) {
    const page = new Page({
        title: req.body.title,
        content: req.body.content
    })

    try {
        await page.save();
        console.log(page);
        res.redirect('/');
    } catch (error) {
        next(error)
    }  
})

router.get('/add', function(req, res, next) {
    console.log('This will retrive add page');
    res.send(addPage());
})

module.exports = router;

