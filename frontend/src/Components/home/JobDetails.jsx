import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navb from "./HomeNav";
import "../../styles/JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`https://7z5574jm-9000.use.devtunnels.ms/jobs/${id}`);
        if (!response.ok) {
          throw new Error('Job not found');
        }
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);


    const saveJobs = async () => {  
        // Get existing saved job IDs from localStorage
        const savedJobIds = JSON.parse(localStorage.getItem("savedJobIds")) || [];
        // Check if job ID is already saved
        if (!savedJobIds.includes(id)) {
            // Add new job ID to array
            savedJobIds.push(id);
            // Save updated array back to localStorage
            localStorage.setItem("savedJobIds", JSON.stringify(savedJobIds));
            alert("Job saved successfully!");
        } else {
            alert("This job is already saved!");
        }
    }

  if (loading) {
    return (
      <>
        <Navb />
        <div className="job-details-container">
          <p>Loading...</p>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navb />
        <div className="job-details-container">
          <p className="error-message">{error}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navb />
      <div className="job-details-container">
        <div className="job-details-card">
          <div className="job-header">
            <h1>{job.title}</h1>
            <div className="company-info">
              <h2>{job.name}</h2>
              <p className="location">{job.location}</p>
            </div>
            {job.salary && <p className="salary">Salary: ${job.salary}</p>}
          </div>

          <div className="job-section">
            <h3>Description</h3>
            <p>{job.description}</p>
          </div>

          <div className="job-section">
            <h3>Required Skills</h3>
            <div className="skills-container">
              <p>
                {job.skills || "No skills listed"}
                {/* {job.skills.map((skill, index) => (
                  // <span key={index} className="skill-tag">
                  //   {skill}
                  // </span>
                ))} */}
              </p>
            </div>
          </div>

          <div className="action-buttons">
            <button className="apply-button">Apply Now</button>
            <button className="share-button">Share Job</button>
            <button onClick={saveJobs} className="save-button">Save Job</button>

          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetails;