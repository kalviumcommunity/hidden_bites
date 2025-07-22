import React from 'react';
import './FoodSpotCard.css';

export default function FoodSpotCard({ name, cuisine, rating, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={name} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>Cuisine: {cuisine}</p>
        <p>⭐ {rating}</p>
      </div>
    </div>
  );
}
