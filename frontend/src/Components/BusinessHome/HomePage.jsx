import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/businessHome.css";
import BusinessNavbar from "./BusinessNavbar.jsx";
function BusinessHome() {
  const businessName = "NovaTech Solutions";

  return (
    <>
      <BusinessNavbar />
      <main className="business-home">
        <section className="welcome-section">
          <h1 className="welcome-title">Welcome back, {businessName} 👋</h1>
          
          <p className="welcome-subtext">
            Manage your postings, connect with talents, and track your success.
          </p>
        </section>

        <section className="dashboard-section">
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Post a New Job</h3>
              <p>Quickly share new opportunities with job seekers.</p>
              <NavLink to="/business/post-job">
                <button>Post Job</button>
              </NavLink>
            </div>

            <div className="dashboard-card">
              <h3>Upload Course/Video</h3>
              <p>Share educational resources and boost your employer brand.</p>
              <NavLink to="/business/upload">
                <button>Upload Content</button>
              </NavLink>
            </div>

            <div className="dashboard-card">
              <h3>Report Wrongful Activities</h3>
              <p>Help maintain a safe and trustworthy platform.</p>
              <NavLink to="/business/report">
                <button>Report Now</button>
              </NavLink>
            </div>
            <div className="dashboard-card">
              <h3>Track Performance</h3>
              <p>Monitor views, interactions, and applicant stats.</p>
              <NavLink to="/business/analytics">
                <button>View Analytics</button>
              </NavLink>
            </div>
          </div>
        </section>

        <section className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            <li>You received 4 new job applications.</li>
            <li>Your post “Frontend Intern” reached 1,200 views.</li>
            <li>Your new video “Career Tips 2025” got 48 likes.</li>
            <li>2 new businesses followed you.</li>
          </ul>
        </section>
      </main>
    </>
  );
}

export default BusinessHome;
