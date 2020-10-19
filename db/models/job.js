const mongoose = require('mongoose');

const stageDataSchema = mongoose.Schema({
  title: String,
  type: String,
  value: String || Boolean,
})

const stageSchema = mongoose.Schema({
  stage: String,
  data: [stageDataSchema],
})

const jobSchema = mongoose.Schema({
  id: Number,
  company: String,
  title: String,
  link: String,
  active: Boolean,
  starred: Boolean,
  stages: [stageSchema],
});

exports.Job = mongoose.model('Job', jobSchema); //entries to our db will be instances of Job
