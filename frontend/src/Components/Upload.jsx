import React, { useState } from "react";
import "../styles/upload.css";
import Navb from "./Navb"

function Upload() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreviewURL(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !file) {
      setError("Please fill out all fields and select a file.");
      return;
    }

    // Simulate upload success
    setSubmitted(true);
    setError("");
  };

  return (
    <>
    <Navb/>
    <div className="upload-container">
      <h2>Upload Course or Video</h2>
      {!submitted ? (
        <form className="upload-form" onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="4"
            placeholder="Enter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label htmlFor="fileUpload">Select file (video or course)</label>
          <input
            id="fileUpload"
            type="file"
            accept="video/*,.pdf,.doc,.docx"
            onChange={handleFileChange}
          />

          {previewURL && (
            <div className="preview">
              {file.type.startsWith("video/") ? (
                <video src={previewURL} controls width="320" />
              ) : (
                <p>Selected file: {file.name}</p>
              )}
            </div>
          )}

          {error && <p className="error">{error}</p>}

          <button type="submit" className="btn-submit">
            Upload
          </button>
        </form>
      ) : (
        <div className="success-message">
          <h3>Upload Successful!</h3>
          <p>Your file has been uploaded. Thank you!</p>
        </div>
      )}
    </div>
    </>
  );
}

export default Upload;
