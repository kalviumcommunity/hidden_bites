import { useEffect, useState } from "react";
import axios from "axios";
import FoodSpotCard from "../components/FoodSpotCard";

export default function Home() {
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/foodspots").then((res) => {
      setSpots(res.data);
    });
  }, []);

  return (
    <div className="container">
      <h2>Popular Food Spots</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {spots.map((spot, i) => (
          <FoodSpotCard key={i} {...spot} />
        ))}
      </div>
    </div>
  );
}
