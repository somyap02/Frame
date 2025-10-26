import React from 'react';
import { Link } from 'react-router-dom';
// Using icons you already have, plus a few new ones
import { Github, Twitter, Dribbble } from 'lucide-react'; 
import '../ui/Footer.css'; // Import the new CSS file

export default function Footer() {
  return (
    // This main footer element gets the glass styling
    <footer className="main-footer">
      <div className="footer-content">
        
        {/* Quick navigation links */}
        <div className="footer-links">
          <Link to="/" className="footer-link">Home</Link>
          <Link to="/gallery" className="footer-link">Gallery</Link>
          <Link to="/upload" className="footer-link">Upload</Link>
          <Link to="/about" className="footer-link">About</Link>
        </div>

        {/* Social media icons */}
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Dribbble">
            <Dribbble size={20} />
          </a>
        </div>

        {/* Copyright and tagline */}
        <div className="footer-copyright">
          © {new Date().getFullYear()} Frame. All rights reserved.
          <br />
          A free & open space for digital art.
        </div>

      </div>
    </footer>
  );
}