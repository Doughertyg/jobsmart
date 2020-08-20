const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
  id: Number,
  name: String,
  url: String,
  owner: String,
  lastUpdated: String 
});

const Job = mongoose.model('Job', jobSchema, 'myJobs'); //entries to our db will be instances of Job
module.exports = Job;
