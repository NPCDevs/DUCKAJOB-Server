const Job = require('../Models/jobModel');
const Application = require('../Models/apllicationModel');

class jobController {
  async create(req, res) {
    const { title, description, budget, tags } = req.body;
    if (!title || !description || !budget) return res.status(500).send({ err: 'err' });

    try {
      const newJob = await new Job({ title, description, budget });
      newJob.save();

      res.status(200).send({ success: true, redirectUrl: `/jobs/${newJob._id}` });
    } catch (error) {
      res.status(500).send({ success: false, redirectUrl: '' });
    }
  }
  async getAll(req, res) {
    const jobs = await Job.find().exec(function (err, jobs) {
      if (err) {
        return res.status(500).json({ error: err });
      }
      Application.find({ jobId: { $in: jobs.map((job) => job._id) } })
        .populate('jobId')
        .exec(function (err, applications) {
          if (err) {
            return res.status(500).json({ error: err });
          }
          const jobsWithApplications = jobs.map((job) => ({
            ...job.toObject(),
            applications: applications.filter((app) => app.jobId.equals(job._id)),
          }));
          return res.status(200).json({ data: jobsWithApplications });
        });
    });
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
