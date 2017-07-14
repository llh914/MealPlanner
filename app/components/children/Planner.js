var React = require('react');

// Include Day sub component
var Day = require('./children/Day');

var Planner = React.createClass({

	clickDay: function(day){
		// Runs when you click a "day" column
		// Check first if clickAdd is true - signals that a recipe from search was clicked first
		if(this.props.clickAdd){
			// Add the current recipe to the meal plan day, then reset
			this.props.addToMealPlan(day);
		}
	},

	// Called when delete button is clicked for a recipe
	removeRecipe: function(day, recipe){
		this.props.removeFromMealPlan(day, recipe);
	},

	render: function(){
		return (
			<div>
				<Day day='Sunday' dayNum={0} meals={this.props.mealPlan.meals[0]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe}/>
				<Day day='Monday' dayNum={1} meals={this.props.mealPlan.meals[1]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe} />
				<Day day='Tuesday' dayNum={2} meals={this.props.mealPlan.meals[2]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe} />
				<Day day='Wednesday' dayNum={3} meals={this.props.mealPlan.meals[3]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe} />
				<Day day='Thursday' dayNum={4} meals={this.props.mealPlan.meals[4]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe} />
				<Day day='Friday' dayNum={5} meals={this.props.mealPlan.meals[5]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe} />
				<Day day='Saturday' dayNum={6} meals={this.props.mealPlan.meals[6]} clickDay={this.clickDay}
					removeRecipe={this.removeRecipe} />
			</div>
		)
	}
});

module.exports = Planner;