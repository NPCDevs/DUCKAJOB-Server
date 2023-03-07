const Application = require('../Models/apllicationModel');
const User = require('../Models/userModel');
const Job = require('../Models/jobModel');
const mongoose = require('mongoose');

class applicationController {
  async apply(req, res) {
    const { jobId, userId } = req.body;
    if (!jobId || !userId) res.status(500).send({ error: 'Error' });

    const user = await User.findById(userId);
    const job = await Job.findById(jobId);

    if (!job || !user) res.status(500).send({ error: 'No such user or job' });

    const newApplication = new Application({ userId: user, jobId: job });
    newApplication.save();

    res.status(200).send({ data: newApplication });
  }
}

module.exports = new applicationController();
