import React, { useState } from 'react';
import API from '../api';
import '../ui/Upload.css'; // Make sure this path is correct

export default function Upload() {
  const [form, setForm] = useState({ title: '', description: '', price: '', imageUrl: '' });

  const submit = async e => {
    e.preventDefault();
    await API.post('/artworks', { ...form, price: parseFloat(form.price) })
      .then(() => alert('Uploaded'))
      .catch(e => alert('Error: ' + (e.message || 'unknown')));
  }

  return (
    // The main container for the page, which will also hold your background image
    <div className="upload-page-container">
      
      {/* The form itself, now with the 'glass-card' style */}
      <form onSubmit={submit} className="upload-form glass-card">
        
        <h2 className="card-title">Upload New Artwork</h2>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
            placeholder="e.g., 'Sunset Over the Lake'"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            id="imageUrl"
            type="url"
            value={form.imageUrl}
            onChange={e => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="e.g., 'https://example.com/image.png'"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ₹:</label>
          <input
            id="price"
            type="number"
            step="0.01"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            placeholder="e.g., '29.99'"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            placeholder="A short description of the artwork..."
            rows={4}
          />
        </div>

        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  )
}