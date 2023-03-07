const express = require('express');
const router = express.Router();

const usersController = require('../Controllers/usersController');
const tagsController = require('../Controllers/tagsController');
const jobController = require('../Controllers/jobController');
const applicationController = require('../Controllers/applicationController');

// auth => logged in || register
router.post('/users/auth', usersController.authUser);

// register => logged in
router.post('/users/register', usersController.register);

// test
router.get('/', (req, res) => {
  res.status(200).send({ msg: 'Test' });
});

// create job
router.post('/job/create', jobController.create);

// get all jobs
router.get('/jobs', jobController.getAll);

// get job by id
router.get('/jobs/:jobId', jobController.getJobDetails);

// search for tags (?name=name)
router.get('/tags', tagsController.search);

// apply for a job
router.post('/apply', applicationController.apply);

// TEST ADD TAG
// router.post('/tag', tagsController.add);

module.exports = router;
