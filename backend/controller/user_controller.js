import mongoose from "mongoose"
import User from "../models/user_model.js"
import Business from "../models/business_model.js";
const regi = async (req, res) => {
    try {
        const { firstname, lastname, age, email, password } = req.body;
        console.log(req.body)
        if (!firstname || !lastname || !age || !email || !password) {
            return res.status(400).json({ error: "all fields are required" })
        }
        const newUser = new User({
            firstname, lastname, age, email, password
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
const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "all fields are required" });
        }
        // Check if user exists in the database
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Check if password matches
        if (user.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
        res.status(200).json({ message: "User logged in successfully", ut: "individual", email: email });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "failed to log in", error: error.message
        });
    }
}
const busilogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "all fields are required" });
        }
        // Check if business user exists in the database
        const businessUser = await Business.findOne({ email });
        if (!businessUser) {
            return res.status(404).json({ error: "Business user not found" });
        }
        // Check if password matches
        if (businessUser.password !== password) {
            return res.status(401).json({ error: "Invalid password" });
        }
        res.status(200).json({ message: "Business user logged in successfully", ut: "business", email: email });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "failed to log in", error: error.message
        });
    }
}
const busyRegi = async (req, res) => {
    try {
        const { name, email, password, phone} = req.body;
        console.log(req.body)
        if (!name || !phone || !email || !password) {
            return res.status(400).json({ error: "all fields are required" })
        }
        const newBusiness = new Business({
            name, email, password, phone
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
    busyRegi,
    UserLogin,
    busilogin
}