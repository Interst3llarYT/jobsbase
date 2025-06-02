import { NavLink } from "react-router-dom";
import "../styles/navb.css";

function Navb() {
  return (
    <nav className="navb">
      <div className="navb-logo">
        <NavLink to="/" className="jobsbase-logo">JobsBase</NavLink>
      </div>
      <div className="navb-links">
        <NavLink to="/" className="navb-link" activeclassname="active" end>Home</NavLink>
        <NavLink to="/jobs" className="navb-link" activeclassname="active">Jobs</NavLink>
        <NavLink to="/courses" className="navb-link" activeclassname="active">Courses</NavLink>
        <NavLink to="/view" className="navb-link" activeclassname="active">View</NavLink>
        <NavLink to="/search" className="navb-link" activeclassname="active">Search</NavLink>
        <span className="navb-user">Hello, User</span>
      </div>
    </nav>
  );
}

export default Navb;
