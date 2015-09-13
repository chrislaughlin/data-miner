var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');
var url = 'http://www.puregym.com/gyms/belfast/whats-happening';
var GymPeople = require('../schemas/gymPeople');

function getNoPeopleInGym(cb) {
    request(url, function (error, response, html) {
        var people = 0;
        if (!error) {
            var $ = cheerio.load(html);
            people = $('.people-number').html();
            var gymPeople = new GymPeople({count: people, date: new Date()});
            gymPeople.save(function(err, record) {
                if (!err) {
                    console.log("Saved record", JSON.stringify(record));
                } else {
                    console.error("Failed to save:", err);
                }
            });
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
