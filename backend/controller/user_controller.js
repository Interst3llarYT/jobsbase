import mongoose from "mongoose"
import User from "../models/user_model.js"
import Business from "../models/business_model.js";
import bcrypt from "bcrypt";
const regi = async (req, res) => {
    try {
        const { firstname, lastname, age, email, password } = req.body;
        console.log(req.body)
        if (!firstname || !lastname || !age || !email || !password) {
            return res.status(400).json({ error: "all fields are required" })
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            firstname, lastname, age, email, password: hashedPassword
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
        console.log(req.body)
        if (!email || !password) {
            return res.status(400).json({ error: "all fields are required" });
        }
        // Check if user exists in the database
        const user = await User.findOne({ email });
        console.log("fff",user.password, password)
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Check if password matches using bcrypt
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid password" });
        }
        res.status(200).json({ message: "User logged in successfully", ut: "individual", email: email,userName: user.firstname });
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
        // Check if password matches using bcrypt
        const validPassword = await bcrypt.compare(password, businessUser.password);
        if (!validPassword) {
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
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newBusiness = new Business({
            name, email, password: hashedPassword, phone
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