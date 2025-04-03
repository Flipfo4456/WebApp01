import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styleCss/Nav.css"; 
import logo from "../assets/logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
    <img src={logo} alt="Logo" className="nav-logo" />
    <nav className="navbar">
            <Link to="/" className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>Overview</Link>
            <Link to="/graph" className={`nav-item ${location.pathname === "/graph" ? "active" : ""}`}>Graph</Link>
            <Link to="/mapnode" className={`nav-item ${location.pathname === "/mapnode" ? "active" : ""}`}>Map & Node</Link>
        
    </nav>
    </>
  );
};

export default Navbar;
