import React from 'react';
import { Link } from 'react-router-dom';
import '../ui/Navbar.css'; 

export default function Navbar() { 
  return (
    <nav className="main-nav">
      {/* Logo */}
      <div className="nav-logo">
        <Link to="/" className="logo-link">
          Frame
        </Link>
      </div>
      {/* Centered Links */}
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/gallery" className="nav-link">Gallery</Link>
        <Link to="/upload" className="nav-link">Upload</Link>
        <Link to="/about" className="nav-link">About</Link>
      </div>
    </nav>
  );
}