import mongoose from "mongoose";

const businessShcema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
   
    
}, { timestamps: true })

const Business = mongoose.model("businesses",businessShcema)

export default Business;
