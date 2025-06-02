import mongoose from "mongoose"
import User from "../models/user_model.js"
import Business from "../models/business_model.js";
const regi = async (req, res) => {
    try {
        const { firstname, lastname, age, username, password } = req.body;
        console.log(req.body)
        if (!firstname || !lastname || !age || !username || !password) {
            return res.status(400).json({ error: "all fields are required" })
        }
        const newUser = new User({
            firstname, lastname, age, username, password
        });
        await newUser.save();
        res.status(201).json({message: "user registered successfully"})
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
          message: "faikled to submoot the data", error: error.message
        })
    
      }
}
const busyRegi = async (req, res) => {
    try {
        const { name, email, username, password, phone} = req.body;
        console.log(req.body)
        if (!name || !phone || !email || !username || !password) {
            return res.status(400).json({ error: "all fields are required" })
        }
        const newBusiness = new Business({
            name, email, username, password,phone
        });
        await newBusiness.save();
        res.status(201).json({message: "user registered successfully"})
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
          message: "faikled to submoot the data", error: error.message
        })
    
      }
}
export default{
    regi,
    busyRegi
}