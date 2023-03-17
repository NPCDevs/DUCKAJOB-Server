const express = require('express');
const jobRouter = express.Router();

const jobController = require('../Controllers/jobController');

// get job by id
jobRouter.get('/:jobId', jobController.getJobDetails);

// create job
jobRouter.post('/create', jobController.create);

// get all jobs
jobRouter.get('/', jobController.getAll);

// get all jobs from user
jobRouter.get('/user/:userId', jobController.getJobsDetailsByUser);

module.exports = jobRouter;
