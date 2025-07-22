import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import FoodSpotCard from "../components/FoodSpotCard";
import './Home.css';

export default function Home() {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/foodspots")
      .then((res) => {
        setSpots(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching food spots", err);
        setError("Failed to fetch food spots.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <h2>
        Popular Food Spots {spots.length > 0 && `(${spots.length})`}
      </h2>

      {loading && <p>Loading spots...</p>}
      {error && <p>{error}</p>}

      <div className="card-wrapper">
        {spots.slice(0, 4).map((spot, i) => (
          <FoodSpotCard key={i} {...spot} />
        ))}
      </div>

      <div className="nav-buttons">
        <Link to="/foodspots">
          <button>View All Spots</button>
        </Link>
        <Link to="/add">
          <button>Add New Spot</button>
        </Link>
      </div>
    </div>
  );
}
