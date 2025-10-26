import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import { ImageOff } from 'lucide-react'; // 2. Import a new icon
import API from '../api';
import '../ui/Gallery.css'; 

export default function Gallery() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    API.get('/artworks')
      .then(r => setArtworks(r.data))
      .catch(console.error);
  }, []);

  return (
    <div className="gallery-page-container">
      <h1 className="gallery-title">Gallery</h1>

      {/* --- 3. This is the new conditional logic --- */}
      {artworks.length === 0 ? (
        
        // --- This div shows when the gallery is empty ---
        <div className="empty-gallery-container">
          <div className="empty-gallery-card glass-card"> {/* Re-using .glass-card */}
            <ImageOff className="empty-gallery-icon" size={60} />
            <h2 className="empty-gallery-title">No Artwork Found</h2>
            <p className="empty-gallery-message">
              It looks a little empty in here. Why not be the first to
              upload?
            </p>
            <Link to="/upload" className="cta-button primary">
              Upload for Free
            </Link>
          </div>
        </div>

      ) : (
        
        // --- This div shows when the gallery has items ---
        <div className="gallery-grid">
          {artworks.map(a => (
            <div key={a.id} className="artwork-card">
              <img 
                src={a.imageUrl} 
                alt={a.title} 
                className="artwork-image" 
              />
              <div className="artwork-content">
                <h3>{a.title}</h3>
                <p>{a.description}</p>
                <strong>₹{a.price}</strong>
              </div>
            </div>
          ))}
        </div>

      )} {/* --- End of conditional logic --- */}
    </div>
  );
}