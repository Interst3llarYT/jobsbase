import React, { useState } from "react";
import BusinessNavbar from "../BusinessHome/BusinessNavbar.jsx";
import "../../styles/businessprofile.css";

function BusinessProfile() {
  const [profile, setProfile] = useState({
    companyName: "",
    email: "",
    phone: "",
    address: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Profile Updated:\n${JSON.stringify(profile, null, 2)}`);
  };

  return (
    <>
      <BusinessNavbar />
      <div className="manage-profile-container">
        <h1>Manage Profile</h1>
        <form className="manage-profile-form" onSubmit={handleSubmit}>
          <label htmlFor="companyName">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={profile.companyName}
            onChange={handleChange}
            placeholder="Your company name"
            required
          />

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="example@company.com"
            required
          />

          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
          />

          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={profile.address}
            onChange={handleChange}
            placeholder="Company address"
          />

          <label htmlFor="website">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={profile.website}
            onChange={handleChange}
            placeholder="https://yourcompany.com"
          />

          <label htmlFor="description">Company Description</label>
          <textarea
            id="description"
            name="description"
            value={profile.description}
            onChange={handleChange}
            placeholder="Brief description about your company"
            rows={5}
          />

          <button type="submit">Update Profile</button>
        </form>
      </div>
    </>
  );
}

export default BusinessProfile;
