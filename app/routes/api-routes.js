// Dependencies
// =============================================================
var Burgers	= require("../model/burgers.js"); // Pulls out the Character Model

// Routes
// =============================================================
module.exports = function(app){

	// Search for Specific Character (or all characters) then provides JSON
	app.get('/api/burgersList', function(req, res){
			console.log("received request");
		
			// Otherwise display the data for all of the characters. 
			// (Note how we're using Sequelize here to run our searches)
				Burgers.findAll({})
					.then(function(result){
						res.json(result);
				});
			

	});

	// If a user sends data to add a new character...
	app.post('/api/new', function(req, res){

		// Take the request...
		var burger = req.body;

		// Create a routeName 
		

		// Then add the character to the database using sequelize
		Burgers.create({ burger_name: burger.burger_name})
		.then(function(){
			res.redirect('/');
		})
		
	});

	app.post('/api/update', function(req,res){
        	console.log(req)
        	Burgers.update(
            //set value to be updated
            {
                devoured : 1
            },
            // where clause/criteria
            {   where : {
                id: req.body.id
                }
            }
                )
        	.then(function(){
                    res.redirect('/');
                })
    });
    
}