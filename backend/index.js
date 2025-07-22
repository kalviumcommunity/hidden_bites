const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const FoodSpot = require("./models/FoodSpot");
const foodSpotRoutes = require('./routes/foodSpotRoutes');
app.use('/api', foodSpotRoutes);


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()); // 

// ✅ MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection failed", err));

// ✅ GET API
app.get("/api/foodspots", async (req, res) => {
  try {
    const spots = await FoodSpot.find();
    res.json(spots);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch food spots" });
  }
});

// ✅ POST API
app.post("/api/foodspots", async (req, res) => {
  console.log("Received POST request:", req.body);
  try {
    const newSpot = new FoodSpot(req.body);
    await newSpot.save();
    res.status(201).json(newSpot);
  } catch (err) {
    console.error("Error saving spot:", err);
    res.status(400).json({ error: "Failed to add food spot" });
  }
});

// ✅ Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
