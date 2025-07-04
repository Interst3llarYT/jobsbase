import React from "react";
import Navb from "./HomeNav";
import "../../styles/jobs.css";

const Jobs = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechNova",
      location: "Remote",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "CreativeBits",
      location: "New York, NY",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "CloudCore",
      location: "San Francisco, CA",
    },
  ];

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
            <button className="apply-btn">Quick Apply</button>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Jobs;