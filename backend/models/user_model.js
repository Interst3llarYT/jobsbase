import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
   
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    schoolname: {
        type: String,
        require: true
    }
}, { timestamps: true })

const User = mongoose.model("users",userSchema)

export default User;
