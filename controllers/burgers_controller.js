var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

router.get('/', function(req, res) {
    burger.all(function(data) {
        res.render('index', {burgers: data})
    });
})

router.post('/', function(req, res) {
    console.log(req.body);
    burger.create(req.body.name, parseInt(req.body.status), function() {
        res.redirect('/');
    })
    });

router.put('/:id/eat', function(req, res) {
    var id = req.params.id;
    burger.update(id, 1, function() {
        res.redirect('/');
    })
})

router.put('/:id/restore', function(req, res) {
    var id = req.params.id;
    burger.update(id, 0, function() {
        res.redirect('/');
    })
})

module.exports = router;
