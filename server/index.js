const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/v1/api');
const app = express();
const path = require('path');
const { fetchJobsURI, createJobURI, updateJobURI, deleteJobURI } = require('./endpoints');
const { allJobs, createJob, updateJob, deleteJob } = require('../db/index');
const port = process.env.PORT | 3000;

// start the server
app.listen(port, function() {
  console.log('app started, listening on port: ', port);
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());
app.use('/api/v1', api);

// route our app
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// use for 404 errors
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/404.html'));
});
