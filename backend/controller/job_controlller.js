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
export default { jobRegi };