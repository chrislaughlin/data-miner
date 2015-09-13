var express = require('express');
var router = express.Router();
var gymMiner = require('../mining/jobs/gym');

router.get('/', function (req, res) {
    gymMiner.mine(function(people) {
        res.render('index', {title: 'Data Miner', people: people});
    });
});

module.exports = router;
