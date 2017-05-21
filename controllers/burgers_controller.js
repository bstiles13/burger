var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {burgers: data})
    });
})

router.get('/test', function(req, res) {
    res.send('Test');
})

router.post('/', function(req, res) {
    console.log(req.body);
    burger.create(req.body.name, parseInt(req.body.status), function() {
        res.redirect('/');
    })
    });

router.put('/:id', function(req, res) {
    burger.update(req.params.id, function() {
        res.redirect('/');
    })
})

module.exports = router;
