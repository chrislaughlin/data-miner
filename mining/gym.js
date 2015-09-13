var request = require('request');
var cheerio = require('cheerio');
var GymPeople = require('../schemas/gymPeople');
var countElement = '.people-number';
var url = 'http://www.puregym.com/gyms/belfast/whats-happening?no-cache='+ new Date().toISOString();
var options = {
    url: url,
    headers: {
        'Cache-Control': 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0'
    }
};

function mine(cb) {
    request(options, function (error, response, html) {
        var people = 0;
        if (!error) {
            var $ = cheerio.load(html);
            people = $(countElement).html();
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

module.exports = {
    mine: mine
};
