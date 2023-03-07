const Job = require('../Models/jobModel');
const Application = require('../Models/apllicationModel');

class jobController {
  async create(req, res) {
    const { title, description, budget, tags } = req.body;
    if (!title || !description || !budget) return res.status(500).send({ err: 'err' });

    try {
      const newJob = await new Job({ title, description, budget });
      newJob.save();
    } catch (error) {
      console.log(error);
    }

    res.status(200).send({ msg: 'whateva' });
  }
  async getAll(req, res) {
    const jobs = await Job.find();

    return res.status(200).send({ data: jobs });
  }

  async getJobDetails(req, res) {
    const { jobId } = req.params;
    if (!jobId) return res.status(404);
    const job = await Job.findById(jobId);

    const applications = await Application.find({ jobId });

    return res.status(200).send({ job, applications });
  }
}

module.exports = new jobController();
