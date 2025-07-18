import express from "express"

export const router= express.Router()
import "../controller/user_controller.js"
import user_controller from "../controller/user_controller.js";
import job_controller from "../controller/job_controlller.js";
import user_profile from "../controller/userprofile_controller.js";



router.post("/indregi",user_controller.regi)
router.post("/busyregi",user_controller.busyRegi)
router.post("/login", user_controller.UserLogin)
router.post("/busilogin", user_controller.busilogin)
router.post("/userprofile", user_profile.userprofile)
router.post("/jobregi", job_controller.jobRegi)




router.get("/jobs", job_controller.getJobs);
router.get("/jobs/:id", job_controller.getJobById);

router.get("/", (req, res) => {
    res.status(200).json({ message: "SERVER WORKING" });
  });
  router.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: "got the data" });
  });
  
  router.post("/", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      const newUser = new User({
        email, password
      });
  
      const saveduser = await newUser.save();//this saves the data to db
  
      res.status(201).json({ message: "i have the user", data: saveduser });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({
        message: "faikled to submoot the data", error: error.message
      })
  
    }
  
  })