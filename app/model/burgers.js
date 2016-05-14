// Dependency

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize"); 
// sequelize (lowercase) references my connection to the DB. You could name it something else, but I was just following their convention.
var sequelize = require("../config/connection.js"); 

// Creates a "Character" model that matches up with DB
var Burger = sequelize.define("character", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	
	name: {
		type: Sequelize.STRING,
	},
	devoured : {
		type: Sequelize.BOOLEAN,
	}
});

// Syncs with DB
Burger.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Burger;
