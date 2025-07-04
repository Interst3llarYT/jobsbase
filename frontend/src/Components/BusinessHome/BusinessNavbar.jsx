import { NavLink } from "react-router-dom";
import "../../styles/BusinessNavbar.css";

function BusinessNavbar() {
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
      </div>
    </nav>
  );
}

export default BusinessNavbar;
