import React, { useState } from "react";
import "../styles/report.css";
import Navb from "./Navb"

function Report() {
  const [formData, setFormData] = useState({
    activityType: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.activityType || !formData.description.trim()) {
      setError("Please fill out all fields.");
      return;
    }

    // For now, just simulate submission
    setSubmitted(true);
    setError("");
  };

  return (
    <>
    <Navb/>
    <div className="report-container">
      <h2>Report Wrongful Activities</h2>
      {!submitted ? (
        <form className="report-form" onSubmit={handleSubmit}>
          <label htmlFor="activityType">Type of Activity</label>
          <select
            id="activityType"
            name="activityType"
            value={formData.activityType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select activity type --</option>
            <option value="spam">Spam</option>
            <option value="harassment">Harassment</option>
            <option value="fraud">Fraud</option>
            <option value="copyright">Copyright Violation</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Describe the wrongful activity in detail..."
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn-submit">
            Submit Report
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Thank you!</h3>
          <p>Your report has been submitted successfully. We will review it shortly.</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Report;
