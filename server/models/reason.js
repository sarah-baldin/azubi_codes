const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const ReasonSchema = new Schema({
	reason: String,
});

// Model
const Reason = mongoose.model("reason", ReasonSchema, "reasons");

module.exports = Reason;