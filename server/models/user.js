const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	username: {
		type: String,
		required: true,
		unique: true
	}
});

UserSchema.plugin(passportLocalMongoose);

// Model
const User = mongoose.model("user", UserSchema, "users");

module.exports = User;