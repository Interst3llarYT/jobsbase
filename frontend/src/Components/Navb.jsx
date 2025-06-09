import { NavLink } from "react-router-dom";
import "../styles/navb.css";

function Navb({ userName = "User" }) {
  return (
    <nav className="navb">
      <div className="navb-logo">
        <NavLink to="/home" className="jobsbase-logo">JobsBase</NavLink>
      </div>
      <div className="navb-links">
        <NavLink to="/jobs" className="navb-link" activeclassname="active">Jobs</NavLink>
        <NavLink to="/notifications" className="navb-link" activeclassname="active">Get Notifications</NavLink>
        <NavLink to="/upload" className="navb-link" activeclassname="active">Upload Course/Video</NavLink>
        <NavLink to="/report" className="navb-link" activeclassname="active">Report Wrongful Activities</NavLink>
        <NavLink to="/chat" className="navb-link" activeclassname="active">Chat with Businesses</NavLink>
        <NavLink to="/follow" className="navb-link" activeclassname="active">Follow Businesses and Individuals</NavLink>

        <NavLink to="/profile" className="navb-link" activeclassname="active">
          Hello, {userName}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navb;
