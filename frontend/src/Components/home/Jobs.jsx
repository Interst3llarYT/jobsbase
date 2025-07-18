import React from "react";
import Navb from "./HomeNav";
import "../../styles/jobs.css";

const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    // Fetch jobs from an API or use a static list
    const fetchJobs = async () => {
      const response = await fetch("https://7z5574jm-9000.use.devtunnels.ms/jobs")
      const data = await response.json();
      setJobs(data);
    };

    fetchJobs();
  }, []);

  return (
    <>
    <Navb></Navb>
    <div className="jobs-page">
      <header className="jobs-hero">
        <h1>Find Your Dream Job</h1>
        <p>Explore exciting opportunities tailored just for you</p>
      </header>

      <div className="jobs-grid">
        {jobs.map((job) => (
          <div className="job-card" key={job.id}>
            <h2>{job.title}</h2>
            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>
            <a href={`/jobs/${job._id}`} className="view-details">
            <button className="apply-btn">Quick Apply</button>
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Jobs;