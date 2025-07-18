import React from "react";
import "../../styles/postjob.css";
import Navb from "./BusinessNavbar";
async function jobRegi(event) {
  event.preventDefault();

  const title = event.target[0].value;
  const name = event.target[1].value;
  const location = event.target[2].value;
  const description = event.target[3].value;
  const skills = event.target[4].value;
  const salary = event.target[5].value || "";

  try {
    const response = await fetch("https://7z5574jm-9000.use.devtunnels.ms/jobregi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, name, location, description, skills, salary }),
    });

    const data = await response.json();
    console.log(data); // handle success
    if (response.ok) {
      alert("Job posted successfully!");
      event.target.reset(); // Reset the form after successful submission

    } else {
      alert("Job posting failed: " + data.message);
    }
  } catch (error) {
    console.error("Job posting error:", error);
  }
}
function PostJob() {
  return (
    <>
      <Navb />
      <div className="postjob-container">
        <h1 className="postjob-title">Post a New Job</h1>
        <form className="postjob-form" onSubmit={jobRegi}>
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
