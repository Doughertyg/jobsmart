var express = require('express');
var app = express();
var path = require('path');
const { fetchJobsURI, createJobURI, updateJobURI, deleteJobURI } = require('./endpoints');
const { allJobs, createJob, updateJob, deleteJob } = require('../db/index');
var port = process.env.PORT | 3000;

// start the server
app.listen(port, function() {
  console.log('app started, listening on port: ', port);
});

app.use(express.static(path.join(__dirname, '../public')));

// route our app
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// route for fetching all jobs from db
app.get(fetchJobsURI, (req, res) => {
  allJobs((err, data) => {
    if (err) {
      res.status(500).send({ error: 'could not fetch jobs from the db' });
    }

    res.status(200).send(data);
  })
})

// route for creating a new job
app.post(createJobURI, (req, res) => {
  const newJob = req.body.job;

  createJob(newJob, err => {
    if (err) {
      res.status(500).send({ error: 'could not create new job on db' });
    }

    res.status(200).send('created new job successfully!');
  })
})

// route for updating a job
app.put(updateJobURI, (req, res) => {
  const jobId = req.params.jobId;
  const updatedJob = req.body.job;

  updateJob(jobId, updatedJob, err => {
    if (err) {
      res.status(500).send({ error: 'unable to update job on db' });
    }

    res.status(200).send('updated job successfully!');
  })
})

app.delete(deleteJobURI, (req, res) => {
  const id = req.params.jobId;

  deleteJob(id, err => {
    if (err) {
      res.status(500).send({ error: 'unable to delete job on db' });
    }

    res.status(200).send('job deleted successfully');
  })
})

// use for 404 errors
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/404.html'));
});
