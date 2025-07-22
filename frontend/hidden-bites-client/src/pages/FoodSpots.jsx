import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FoodSpots.css'

function FoodSpots() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get("http://localhost:5000/api/foodspots")
      .then(res => {
        setSpots(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching spots", err);
        setError("Failed to load food spots.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading food spots...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="spots-container">
      <h2>Available Food Spots</h2>
      {spots.length === 0 ? (
        <p>No food spots found. Be the first to add one!</p>
      ) : (
        <div className="card-grid">
          {spots.map((spot) => (
            <div key={spot._id} className="card">
              <img src={spot.imageUrl} alt={spot.name} />
              <h3>{spot.name}</h3>
              <p>Cuisine: {spot.cuisine}</p>
              <p>Rating: ⭐ {spot.rating}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FoodSpots;
