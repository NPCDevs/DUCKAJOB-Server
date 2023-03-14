const express = require('express');
const jobRouter = express.Router();

const jobController = require('../Controllers/jobController');

// get job by id
jobRouter.get('/:jobId', jobController.getJobDetails);

// create job
jobRouter.post('/create', jobController.create);

// get all jobs
jobRouter.get('/', jobController.getAll);

module.exports = jobRouter;
