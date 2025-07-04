import React, { useState } from "react";
import BusinessNavbar from "../BusinessHome/BusinessNavbar.jsx";
import "../../styles/businessupload.css";

function BusinessUpload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now just alert the data; no backend
    alert(`Title: ${title}\nDescription: ${description}\nFile: ${file ? file.name : "No file selected"}`);
  };

  return (
    <>
      <BusinessNavbar />
      <div className="upload-container">
        <h1>Upload Course or Video</h1>
        <form className="upload-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter title"
          />

          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter description"
            rows={4}
          />

          <label htmlFor="file">Select File (Video or Document):</label>
          <input
            type="file"
            id="file"
            accept="video/*,application/pdf"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />

          <button type="submit">Upload</button>
        </form>
      </div>
    </>
  );
}

export default BusinessUpload;
