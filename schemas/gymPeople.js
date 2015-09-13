var mongoose = require('mongoose');
var GymPeopleSchema = mongoose.Schema({
    count: Number,
    date: Date
});

module.exports = mongoose.model('GymPeople', GymPeopleSchema);
