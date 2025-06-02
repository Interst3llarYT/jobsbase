import mongoose from "mongoose";

export const mconn = async () => {
    try {
        const uri = process.env.URI;
        await mongoose.connect(uri)
        console.log("dbconnected")
    }
    catch (error) {
        console.log("db error")
    }
};