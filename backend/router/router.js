import express from "express"

export const router= express.Router()
import "../controller/user_controller.js"
import user_controller from "../controller/user_controller.js";



router.post("/indregi",user_controller.regi)
router.post("/busyregi",user_controller.busyRegi)


router.get("/", (req, res) => {
    res.status(200).json({ message: "SERVER WORKING" });
  });
  router.post("/", (req, res) => {
    console.log(req.body)
    res.status(200).json({ message: "got the data" });
  });
  
  router.post("/", async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const newUser = new User({
        username, password
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