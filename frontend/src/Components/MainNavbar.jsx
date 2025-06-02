import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Using Lucide for icons
import "../styles/MainNavbar.css"; // We'll define custom styles here

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar-logo">
                <NavLink to="/" className="navbar-brand">JobsBase</NavLink>
            </div>

            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
                <NavLink to="/login" className="nav-link">Login</NavLink>
                <NavLink to="/about" className="nav-link">About</NavLink>
            </div>

            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>
        </nav>
    );
}

export default Navbar;
