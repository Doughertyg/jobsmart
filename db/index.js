const mongoose = require('mongoose');
const { Job } = require('./models');
const URI = process.env.DB_URI || 'mongodb://localhost/jobsmart'; // TODO: refactor to use dot.env
const user = process.env.DB_USER || 'dev';
const pass = process.env.DB_PASS || 'password';

mongoose.connect(URI, { user, pass, useNewUrlParser: true, useUnifiedTopology: true })
  .catch(err => console.log('error connecting to the database: ', err));

const db = mongoose.connection;

db.on('error', (err) => console.log('connection error: ', err));
db.once('open', () => console.log('successfully connected to database'));

/**
 * function for finding all job applications saved in the database
 * @param {Function} fn callback to be called with error and data returned 
 */
const allJobs = (fn) => {
  Job.find({}, fn);
}

/**
 * function for deleting a job where id equals jobId from the database
 * @param {number} jobId id of job app to delete 
 */
const removeJob = (jobId) => {
	Job.findOneAndDelete({ id: jobId }, callback);
}

/**
 * function that saves a new job to the database
 * @param {Object} jobToSave new job object to save 
 */
const newJob = (jobToSave) => {
  const job = new Job(jobToSave);

  job.save(callback);
}

exports.allJobs = allJobs;
exports.removeJob = removeJob;
exports.newJob = newJob;
exports.db = db;
