const express = require('express');
const router = express.Router();
const { updateFoodSpot } = require('../controllers/foodSpotController');

// PUT route to update food spot by ID
router.put('/spots/:id', updateFoodSpot);

module.exports = router;
