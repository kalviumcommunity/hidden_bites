export default function FoodSpotCard({ name, cuisine, rating }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Cuisine: {cuisine}</p>
      <p>⭐ {rating}</p>
    </div>
  );
}
