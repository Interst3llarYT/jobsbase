import React from "react";
import "../../styles/postjob.css";
import Navb from "./BusinessNavbar";

function PostJob() {
  return (
    <>
      <Navb />
      <div className="postjob-container">
        <h1 className="postjob-title">Post a New Job</h1>
        <form className="postjob-form">
          <label>
            Job Title
            <input type="text" placeholder="e.g., Frontend Developer" required />
          </label>

          <label>
            Company Name
            <input type="text" placeholder="e.g., JobsBase Inc." required />
          </label>

          <label>
            Location
            <input type="text" placeholder="e.g., Remote / New York" required />
          </label>

          <label>
            Job Description
            <textarea placeholder="Briefly describe the job role..." rows="5" required></textarea>
          </label>

          <label>
            Required Skills
            <input type="text" placeholder="e.g., React, Node.js, UI/UX" required />
          </label>

          <label>
            Salary Range (Optional)
            <input type="text" placeholder="e.g., $60,000 - $80,000" />
          </label>

          <button type="submit" className="submit-btn">Submit Job</button>
        </form>
      </div>
    </>
  );
}

export default PostJob;
