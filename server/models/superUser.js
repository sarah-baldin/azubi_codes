const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const SuperUserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	magicKey: {
		type: String,
		required: true
	}
});


// Model
const SuperUser = mongoose.model("superuser", SuperUserSchema, "SuperUser");

module.exports = SuperUser;