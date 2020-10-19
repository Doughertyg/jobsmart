var express = require('express');
var app = express();
var path = require('path');
const { fetchJobsURI } = require('./endpoints');
const { allJobs } = require('../db/index');
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

// use for 404 errors
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname, '../public/404.html'));
});
