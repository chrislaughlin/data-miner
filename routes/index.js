var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var url = 'http://www.puregym.com/gyms/belfast/whats-happening';

function getNoPeopleInGym(cb) {
    request(url, function (error, response, html) {
        var people = 0;
        if (!error) {
            var $ = cheerio.load(html);
            people = $('.people-number').html();
            console.log(people);
        }
        cb(people);
    });
}

/* GET home page. */
router.get('/', function (req, res, next) {
    getNoPeopleInGym(function(people) {
        res.render('index', {title: 'Data Miner', people: people});
    })                                                         ;
});

module.exports = router;
