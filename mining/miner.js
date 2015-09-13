var schedule = require('node-schedule');
var jobsConfig = require('../config/cronJobs');
var gym = require('./jobs/gym');
function startJobs(cb) {
    schedule.scheduleJob(jobsConfig.gym().rule, function(){
        console.log("Starting Job: ", jobsConfig.gym.name);
        gym.mine(function() {
            console.log("Finishing Job: ", jobsConfig.gym.name);
        });
    });
}

module.exports = {
    start: startJobs
};
