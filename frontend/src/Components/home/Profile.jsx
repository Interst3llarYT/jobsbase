import React, { useState, useEffect } from "react";
import Navb from "./HomeNav";
import "../../styles/profile.css";

function Profile() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null); // for uploading
  const [error, setError] = useState("");
  const [animatePic, setAnimatePic] = useState(false);

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching user data...");
        const userData = JSON.parse(localStorage.getItem("user"));
        console.log("User data from localStorage:", userData);
        
        if (!userData || !userData._id) {
          console.error("No user ID found in localStorage");
          setError("User not found. Please login again.");
          return;
        }

        console.log("Making API call to fetch profile...");
        const response = await fetch(`https://7z5574jm-9000.use.devtunnels.ms/getuserprofile?userId=${userData._id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
        });
        
        const data = await response.json();
        console.log("API Response:", data);
        
        if (response.ok) {
          console.log("Setting form data from API response");
          setfirstname(data.firstname || "");
          setlastname(data.lastname || "");
          setemail(data.email || "");
          if (data.image) {
            setImage(data.image);
          }
        } else {
          console.error("API call failed:", data);
          setError("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Error loading profile data");
      }
    };

    // Immediately invoke the fetch function when component mounts
    console.log("Profile component mounted - fetching user data");
    fetchUserData();
  }, []); // Empty dependency array means this runs once when component mounts

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

      const userData = JSON.parse(localStorage.getItem("user"));
      if (!userData || !userData._id) {
        setError("User not found. Please login again.");
        return;
      }

      const payload = {
        userId: userData._id,
        firstname: firstname,
        lastname: lastname,
        email: email,
        image: imageBase64,
      };

      const response = await fetch("https://7z5574jm-9000.use.devtunnels.ms/userprofile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      
      if (response.ok) {
        // Update the user data in localStorage with new information
        const updatedUserData = { ...userData, firstname, lastname, email };
        localStorage.setItem("user", JSON.stringify(updatedUserData));
        alert("Profile updated successfully!");
        window.location.href = "/home";
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
