var schedule = require('node-schedule');

module.exports = {
    gym: function() {
        var rule = new schedule.RecurrenceRule();
        rule.minute = 30;
        return {
            name: 'Gym People',
            rule: rule
        }
    }
};
