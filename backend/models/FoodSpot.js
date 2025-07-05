const mongoose = require('mongoose');

const FoodSpotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: String,
  rating: Number,
  imageUrl: String
}, {
  timestamps: true
});

module.exports = mongoose.model("FoodSpot", FoodSpotSchema);
