import mongoose from "mongoose"
import User from "../models/user_model.js"
import Business from "../models/business_model.js";

const getUserProfile = async (req, res) => {
    try {
        const userId = req.query.userId;
        if (!userId) {
            return res.status(400).json({ error: "User ID is required" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.status(200).json({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            image: user.image
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to fetch profile",
            error: error.message
        });
    }
};

const userprofile = async (req, res) => {
    try {
        const { firstname,lastname, email, image } = req.body;
        if (!firstname || !lastname || !email ) {
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



export default {
    userprofile,
    getUserProfile
}