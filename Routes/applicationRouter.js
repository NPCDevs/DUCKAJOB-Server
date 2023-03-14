const express = require('express');
const applicationRouter = express.Router();

const applicationController = require('../Controllers/applicationController');

// apply for a job
applicationRouter.post('/apply', applicationController.apply);

module.exports = applicationRouter;
