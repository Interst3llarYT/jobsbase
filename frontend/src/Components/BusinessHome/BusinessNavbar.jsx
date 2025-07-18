import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/BusinessNavbar.css";

function BusinessNavbar() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load saved dark mode preference from localStorage
    const saved = localStorage.getItem("business-dark-mode");
    return saved === "true";
  });

  useEffect(() => {
    // Apply or remove dark mode class on <body>
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }

    // Save dark mode preference
    localStorage.setItem("business-dark-mode", darkMode);
  }, [darkMode]);

  return (
    <nav className="business-navbar">
      <div className="nav-left">
        <NavLink to="/business" className="nav-link">Home</NavLink>
      </div>

      <div className="nav-center">
        <NavLink to="/business/post-job" className="nav-link">Post Job</NavLink>
        <NavLink to="/business/chat" className="nav-link">Chat with Job Seekers</NavLink>
        <NavLink to="/business/upload" className="nav-link">Upload Course/Video</NavLink>
        <NavLink to="/business/report" className="nav-link">Report Issues</NavLink>
      </div>

      <div className="nav-right">
        <NavLink to="/business/profile" className="nav-link">Manage Profile</NavLink>
        <NavLink to="/logout" className="nav-link">Logout</NavLink>

        <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default BusinessNavbar;
