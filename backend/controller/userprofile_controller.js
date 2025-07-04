import mongoose from "mongoose"
import User from "../models/user_model.js"
import Business from "../models/business_model.js";

const userprofile = async (req, res) => {
    try {
        const { firstname,lastname, email, image } = req.body;
        if (!firstname || !lastname || !email || !image) {
            return res.status(400).json({ error: "All fields are required" });
        }
        // Logic to update user profile in the database
        const updatedUser = await User.findOneAndUpdate({ email }, { firstname,lastname, email, image }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to update profile", error: error.message
        });
    }
}

export default{
    userprofile
}