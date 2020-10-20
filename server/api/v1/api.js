const express = require('express');
const router = express.Router();
const {
  fetchJobsURI,
  createJobURI,
  updateJobURI,
  deleteJobURI
} = require('../../endpoints');
const {
  allJobs,
  createJob,
  updateJob,
  deleteJob
} = require('../../../db/index');

// route for fetching all jobs from db
router.get(fetchJobsURI, (req, res) => {
  allJobs((err, data) => {
    if (err) {
      res.status(500).send({ error: 'could not fetch jobs from the db' });
      return;
    }

    res.status(200).send(data);
  })
})

// route for creating a new job
router.post(createJobURI, (req, res) => {
  const newJob = req.body.job;

  createJob(newJob, err => {
    if (err) {
      res.status(500).send({ error: 'could not create new job on db' });
      return;
    }

    res.status(200).send('created new job successfully!');
  })
})

// route for updating a job
router.put('/jobs/:jobId', (req, res) => {
  const jobId = req.params.jobId;
  const updatedJob = req.body.job;

  updateJob(jobId, updatedJob, err => {
    if (err) {
      res.status(500).send({ error: 'unable to update job on db' });
      return;
    }

    res.status(200).send('updated job successfully!');
  })
})

router.delete(deleteJobURI, (req, res) => {
  const id = req.params.jobId;

  deleteJob(id, err => {
    if (err) {
      res.status(500).send({ error: 'unable to delete job on db' });
      return;
    }

    res.status(200).send('job deleted successfully');
  })
})

module.exports = router;
