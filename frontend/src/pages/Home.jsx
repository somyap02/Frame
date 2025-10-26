import React from 'react';
import { Link } from 'react-router-dom';
import { UploadCloud, Image } from 'lucide-react'; // Icons for the feature cards
import '../ui/Home.css'; // Import the new CSS file

export default function Home() {
  return (
    <div className="home-page-container">
      
      {/* --- Hero Section --- */}
      <section className="hero-section">
        <div className="hero-glass-card">
          <h1 className="hero-title">Discover & Share Digital Art</h1>
          <p className="hero-subtitle">
            A new home for your creations. Upload your artwork for free and
            explore a growing gallery of digital masterpieces.
          </p>
          <div className="hero-cta-buttons">
            <Link to="/gallery" className="cta-button primary">
              Explore Gallery
            </Link>
            <Link to="/upload" className="cta-button secondary">
              Upload Your Art
            </Link>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="features-section">
        
        {/* Feature 1: Upload */}
        <div className="feature-card glass-card">
          <UploadCloud className="feature-icon" size={50} />
          <h2 className="feature-title">Upload for Free</h2>
          <p className="feature-description">
            No sign-up, no fees. Share your art with the world in seconds.
            Just fill out the form and see your work go live.
          </p>
        </div>

        {/* Feature 2: Gallery */}
        <div className="feature-card glass-card">
          <Image className="feature-icon" size={50} />
          <h2 className="feature-title">Explore the Gallery</h2>
          <p className="feature-description">
            Browse a diverse collection of art from creators around the world.
            Discover your next inspiration.
          </p>
        </div>

      </section>
    </div>
  );
}
