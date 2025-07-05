import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown, Briefcase, Bell, Upload,
  MessageCircle, Users, AlertTriangle, User, Moon, Sun
} from "lucide-react";
import "../../styles/HomeNav.css"; // Adjust the path as necessary

function Navb({ userName = "User" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Apply saved dark mode preference on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedMode);
    document.body.classList.toggle("dark-mode", savedMode);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.body.classList.toggle("dark-mode", newMode);
    localStorage.setItem("darkMode", newMode.toString());
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom sticky-top">
      <div className="container-fluid">
        <NavLink 
          to="/home" 
          className="navbar-brand fw-bold text-primary fs-3"
          onClick={closeMenu}
        >
          JobsBase
        </NavLink>

        <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                role="button"
                onClick={() => toggleDropdown("jobs")}
              >
                <Briefcase size={16} className="me-2" /> Jobs & Career <ChevronDown size={16} className="ms-1" />
              </div>
              <ul className={`dropdown-menu ${activeDropdown === "jobs" ? "show" : ""}`}>
                <li>
                  <NavLink to="/jobs" className="dropdown-item" onClick={closeMenu}>
                    <Briefcase size={16} className="me-2" /> Browse Jobs
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/notifications" className="dropdown-item" onClick={closeMenu}>
                    <Bell size={16} className="me-2" /> Job Notifications
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/upload" className="nav-link" onClick={closeMenu}>
                <Upload size={16} className="me-2" /> Upload Content
              </NavLink>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                role="button"
                onClick={() => toggleDropdown("community")}
              >
                <Users size={16} className="me-2" /> Community <ChevronDown size={16} className="ms-1" />
              </div>
              <ul className={`dropdown-menu ${activeDropdown === "community" ? "show" : ""}`}>
                <li>
                  <NavLink to="/chat" className="dropdown-item" onClick={closeMenu}>
                    <MessageCircle size={16} className="me-2" /> Chat with Businesses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/follow" className="dropdown-item" onClick={closeMenu}>
                    <Users size={16} className="me-2" /> Follow & Connect
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink to="/report" className="nav-link" onClick={closeMenu}>
                <AlertTriangle size={16} className="me-2" /> Report
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/profile" className="nav-link" onClick={closeMenu}>
                <User size={16} className="me-2" /> Hello, {userName}
              </NavLink>
            </li>

            {/* Dark Mode Toggle */}
            <li className="nav-item">
              <button className="btn btn-outline-secondary ms-3" onClick={toggleDarkMode}>
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navb;
