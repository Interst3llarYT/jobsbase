import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    },
    
    description: {
        type: String,
        require: true
    },
    skills: {
        type: String,
        require: true
    },
    salary: {
        type: String
    }
   
    
}, { timestamps: true })

const Jobs = mongoose.model("jobs", jobSchema)

export default Jobs ;
