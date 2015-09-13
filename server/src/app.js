var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res){
    var url = 'http://www.puregym.com/gyms/belfast/whats-happening';
    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);
            console.log($('.people-number').html());
        }
    })
});

app.listen('8081');

console.log('Magic happens on port 8081');

exports = module.exports = app;