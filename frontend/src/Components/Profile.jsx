import React, { useState } from "react";
import Navb from "./navb";
import "../styles/profile.css";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [bio, setBio] = useState("Aspiring developer passionate about tech.");
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const [animatePic, setAnimatePic] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setAnimatePic(true);
      setTimeout(() => setAnimatePic(false), 600); // Reset animation state
    }
  };

  const handleSave = () => {
    if (!name.trim() || !email.trim()) {
      setError("Name and email cannot be empty.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    alert("Profile saved!");
  };

  return (
    <>
      <Navb />
      <div className="profile-container">
        <h1 className="profile-title">Edit Your Profile</h1>

        <div className="profile-box">
          <div className="profile-pic-wrapper">
            <img
              src={image || "https://i.imgur.com/6VBx3io.png"}
              alt="Profile"
              className={`profile-pic ${animatePic ? "animate" : ""}`}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="upload-input"
            />
          </div>

          <div className="profile-form">
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Bio</label>
            <textarea
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />

            {error && <p className="error-msg">{error}</p>}

            <button onClick={handleSave} className="save-btn">Save Changes</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
