const FoodSpot = require('../models/FoodSpot');

// PUT: Update a food spot by ID
const updateFoodSpot = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedData = req.body;

    const updatedSpot = await FoodSpot.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true
    });

    if (!updatedSpot) {
      return res.status(404).json({ message: "Food spot not found" });
    }

    res.status(200).json(updatedSpot);
  } catch (error) {
    res.status(500).json({ message: "Failed to update food spot", error });
  }
};

// DELETE /api/foodSpots/:id
const deleteFoodSpot = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFoodSpot = await FoodSpot.findByIdAndDelete(id);

    if (!deletedFoodSpot) {
      return res.status(404).json({ message: 'Food spot not found' });
    }

    res.status(200).json({ message: 'Food spot deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete food spot', error: error.message });
  }
};

module.exports = {
  createFoodSpot,
  getAllFoodSpots,
  getFoodSpotById,
  updateFoodSpot,     // existing
  deleteFoodSpot      // newly added
};
