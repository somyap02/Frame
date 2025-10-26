import React from 'react';
import { Link } from 'react-router-dom';
import { UploadCloud, Image } from 'lucide-react'; // Re-using icons for consistency
import '../ui/About.css'; // Import the new CSS file

export default function About() {
  return (
    <div className="about-page-container">
      <div className="about-card glass-card">
        
        <h1>About Frame</h1>

        <p className="about-mission">
          Our mission is simple: to create a beautiful, free, and accessible
          space for artists to share their work and for art lovers to
          discover it.
        </p>

        <h2>Our Philosophy</h2>
        <p>
          We believe that sharing art shouldn't be complicated. In a digital
          world full of barriers, sign-up forms, and fees, we wanted to
          create a simple, elegant platform that focuses on one thing: the
          art itself. "Frame" is our plan to make art sharing effortless and
          open to everyone.
        </p>

        <h2>How It Works</h2>
        <div className="how-it-works-grid">
          <div className="about-feature">
            <UploadCloud className="feature-icon" size={40} />
            <h3>1. Upload for Free</h3>
            <p>
              No accounts, no cost. You can directly upload your artwork to
              our gallery. It's the simplest way to get your creations online
              and in front of an audience.
            </p>
          </div>
          <div className="about-feature">
            <Image className="feature-icon" size={40} />
            <h3>2. Explore the Gallery</h3>
            <p>
              Discover a constantly growing collection of digital art,
              illustrations, and creative works from around the world. Find
              your next inspiration in our open gallery.
            </p>
          </div>
        </div>

        <div className="about-cta">
          <p>
            Whether you're an artist or an admirer, we're glad you're here.
          </p>
          <Link to="/gallery" className="cta-button primary">
            Explore the Gallery
          </Link>
        </div>

      </div>
    </div>
  );
}
