const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const NoteSchema = new Schema({
	user: String,
	title: String,
	content: String
});

// Model
const Note = mongoose.model("note", NoteSchema, "notes");

module.exports = Note;