import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddSpot() {
  const [formData, setFormData] = useState({
    name: '',
    cuisine: '',
    rating: '',
    imageUrl: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      await axios.post("http://localhost:5000/api/foodspots", formData);
      setFormData({ name: '', cuisine: '', rating: '', imageUrl: '' });
      setMessage('✅ Food spot added successfully!');
      setTimeout(() => navigate('/foodspots'), 1000);
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to add food spot');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Add a Food Spot</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="cuisine" placeholder="Cuisine" value={formData.cuisine} onChange={handleChange} required />
        <input name="rating" type="number" step="0.1" placeholder="Rating" value={formData.rating} onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default AddSpot;
