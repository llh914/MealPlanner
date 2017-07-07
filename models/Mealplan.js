const mongoose = require('mongoose');

var Mealplan = new mongoose.Schema({
	startDate: {
		type: Date
	},

	// Array of each meal plan
	meals: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Recipe",

		// Track the time and day that the specific meal is used
		mealtime: {
			day: Number, // (0-6, Sunday-Saturday)
			meal: Number, // (0-2, breakfast-dinner)
		}
	}]
});

module.exports = mongoose.model('Mealplan', Mealplan);