import Jobs from "../models/job_models.js";
const jobRegi = async (req, res) => {
    try {
        const { title, name, location, description, skills, salary } = req.body;
        console.log(req.body)
        if (!title || !name || !location || !description || !skills) {
            return res.status(400).json({ error: "all fields are required" })
        }
        const newJob = new Jobs({
            title, name, location, description, skills, salary
        });
        await newJob.save();
        res.status(201).json({message: "job registered successfully"})
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
          message: "faikled to submoot the data", error: error.message
        })
    
      }
}

const getJobs = async (req, res) => {
    try {
        const jobs = await Jobs.find();
        res.status(200).json(jobs);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "failed to retrieve jobs", error: error.message
        });
    }
};

const getJobById = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await Jobs.findById(id);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }
        res.status(200).json(job);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "failed to retrieve job", error: error.message
        });
    }
};

export default { jobRegi, getJobs, getJobById };