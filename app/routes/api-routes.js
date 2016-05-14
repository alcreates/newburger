// Dependencies
// =============================================================
var Character 	= require("../model/character.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/api/burgersList', function(req, res){

		
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
				Character.findAll({})
					.then(function(result){
						res.json(result);
				});
			

	});

	// If a user sends data to add a new character...
	app.post('/api/new', function(req, res){

		// Take the request...
		var character = req.body;

		// Create a routeName 
		var routeName = character.name.replace(/\s+/g, '').toLowerCase();

		// Then add the character to the database using sequelize
		Character.create({
			name: character.name,
			role: character.role,
			age: character.age,
			forcePoints: character.forcePoints
		});
		
	})
}