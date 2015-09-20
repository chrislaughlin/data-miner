var GymPeople = require('../schemas/gymPeople');
var mongoose = require('mongoose');

module.exports =  function (req, res) {
    var GymPeopleModel = mongoose.model('GymPeople', GymPeople);
    GymPeopleModel.find(function(err, data) {
        res.json(data);
    });
};
