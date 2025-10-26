import React from 'react';
import { Link } from 'react-router-dom';
// No CSS import is needed

export default function NotFound() {

  // --- Start of Inline Styles ---

  const pageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    width: '100%',
    maxWidth: '500px',
    padding: '40px 30px',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.45)', // Glass background
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)', // For Safari
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '6rem',
    fontWeight: 800,
    color: '#222',
    margin: '0 0 10px 0',
    lineHeight: 1,
  };

  const messageStyle = {
    fontSize: '1.2rem',
    color: '#333',
    margin: '0 0 30px 0',
  };

  // Base button style (hover/active effects are removed)
  const buttonStyle = {
    backgroundColor: '#6a5acd',
    color: 'white',
    border: 'none',
    padding: '14px 20px',
    fontSize: '1.05rem',
    fontWeight: 600,
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    textDecoration: 'none',
    display: 'inline-block',
    // All transition properties are removed
  };

  // --- End of Inline Styles ---

  return (
    <div style={pageContainerStyle}>
      <div style={cardStyle}>
        
        <h1 style={titleStyle}>404</h1>
        
        <p style={messageStyle}>
          Oops! The page you're looking for doesn't exist.
        </p>
        
        <Link to="/" style={buttonStyle}>
          Go Back Home
        </Link>
        
      </div>
    </div>
  );
}