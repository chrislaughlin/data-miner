var express = require('express');
var router = express.Router();
var request = require('request');
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var url = 'http://www.puregym.com/gyms/belfast/whats-happening';
    request(url, function(error, response, html){
        var people = 0;
        if(!error){
            var $ = cheerio.load(html);
            people = $('.people-number').html();
            console.log(people);
        }
        res.send('people: ' + people);
    });
});

module.exports = router;
