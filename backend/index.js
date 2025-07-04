// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const foodSpots = [
  { id: 1, name: "Biryani Bliss", cuisine: "Indian", rating: 4.5 },
  { id: 2, name: "Taco Temple", cuisine: "Mexican", rating: 4.3 },
];

// GET endpoint
app.get("/api/foodspots", (req, res) => {
  res.json(foodSpots);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
