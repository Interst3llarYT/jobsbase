import React, { useState } from "react";
import BusinessNavbar from "../BusinessHome/BusinessNavbar.jsx";
import "../../styles/businessreport.css";

function BusinessReport() {
  const [reportType, setReportType] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Report Type: ${reportType}\nDetails: ${details}`);
  };

  return (
    <>
      <BusinessNavbar />
      <div className="report-container">
        <h1>Report Wrongful Activities</h1>
        <form className="report-form" onSubmit={handleSubmit}>
          <label htmlFor="reportType">Report Type:</label>
          <select
            id="reportType"
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
            required
          >
            <option value="">-- Select a reason --</option>
            <option value="fraud">Fraudulent Job Posting</option>
            <option value="harassment">Harassment</option>
            <option value="scam">Scam or Phishing</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="details">Details:</label>
          <textarea
            id="details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Describe the issue in detail"
            required
            rows={5}
          />

          <button type="submit">Submit Report</button>
        </form>
      </div>
    </>
  );
}

export default BusinessReport;
