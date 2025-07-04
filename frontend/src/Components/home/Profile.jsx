import React, { useState } from "react";
import Navb from "./HomeNav";
import "../../styles/profile.css";

function Profile() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [bio, setbio] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null); // for uploading
  const [error, setError] = useState("");
  const [animatePic, setAnimatePic] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setFile(file);
      setAnimatePic(true);
      setTimeout(() => setAnimatePic(false), 600); // Reset animation state
    }
  };

  const userProfile = async (event) => {
    event.preventDefault();
    if (!firstname.trim() || !email.trim() || !lastname.trim()) {
      setError("First name, last name and email cannot be empty.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    alert("Profile saved!");
    try {
      let imageBase64 = null;
      if (file) {
        // Convert image file to base64
        imageBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      }
      const payload = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        // bio: bio,
        image: imageBase64, // base64 string or null
      };
      const response = await fetch("https://7z5574jm-9000.use.devtunnels.ms/userprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data); // handle success
      if (response.ok) {
        alert("Profile updated successfully!");
        window.location.href = "/home";  // Redirect to feed or home page
        localStorage.setItem("user", JSON.stringify(data.user));
      } else {
        alert("Profile update failed: " + data.message);
      }
    } catch (error) {
      console.error("Profile update error:", error);
    }
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
          </div>
          <form onSubmit={userProfile} className="upload-form">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="upload-input"
            />
            <div className="profile-form">
              <label>First Name</label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
              <label>Last Name</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              {/* <label>Bio</label>
              <textarea
                rows="4"
                value={bio}
                onChange={(e) => setbio(e.target.value)}
              /> */}
              {error && <p className="error-msg">{error}</p>}
              <button className="save-btn">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Profile;
