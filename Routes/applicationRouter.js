const express = require('express');
const applicationRouter = express.Router();

const applicationController = require('../Controllers/applicationController');

// apply for a job
applicationRouter.post('/apply', applicationController.apply);

// get application by job and user
applicationRouter.get('/job/:jobId/user/:userId', applicationController.getApplicationByJobAndUser);

//
applicationRouter.get('/user/:userId', applicationController.getApplicationByUser);

module.exports = applicationRouter;
