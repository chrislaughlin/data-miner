var mongoose = require('mongoose');
var GymPeopleSchema = mongoose.Schema({
    count: Double,
    time: Timestamp
});

module.exports = GymPeopleSchema;
