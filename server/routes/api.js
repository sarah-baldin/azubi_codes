const express = require("express");
const Note = require("../models/note");
const User = require("../models/user");
const SuperUser = require("../models/superUser");
const Reason = require("../models/reason");
const passport = require("passport");
const router = express.Router();


// API-Routes

/* QUOTE-GENERATOR ROUTE */
router.get("/route-to-reasons-for-hiring-sarah", async (req, res) => {
	Reason.find({}, (err, foundReasons) => {
		if (err) {
			console.log("Error while searching for Data -> ", err);
		} else {
			res.json(foundReasons);
		}
	});
});


/* VERGISSMEINNICHT ROUTES */

/* check MagicKey */
router.post("/route-to-check-MagicKey", async (req, res) => {
	const userMagicKey = String(req.body.myKey);

	SuperUser.find({ username: "mySecretSuperUser" }, (err, foundUser) => {
		if (err) {
			console.log("Error while searching for Data -> ", err);
		} else {
			if (foundUser[0].magicKey === userMagicKey) {
				res.json({result: "success", message: "Magic Key korrekt"});
			} else {
				res.json({result: "error", message: "Magic Key ist falsch!"});
			}
		}
	});
});


/* register user */
router.post("/route-to-register-new-users", async (req, res) => {
	const userToRegister = String(req.body.username);
	const userToRegisterPW = String(req.body.password);
		User.register({ username: userToRegister }, userToRegisterPW, (err, user) => {
			 if (err) {
				 res.json({result: "error", message: "Sie sind schon registriert oder der Username ist schon vergeben. Versuchen Sie es mit einem anderen Namen oder gehen Sie zum Login."});
			 } else {
				Note.create({user: userToRegister, title: "Willkommen, "+userToRegister+"!", content: "Hier können Sie all ihre Notizen hinterlegen. Klicken Sie einfach oben auf Notiz erstellen..."}, (err) => {
					if (err) {
						console.log(err);
					}
				});
				res.json({result: "success", message: "Die Registrierung war erfolgreich! Sie können sich nun einloggen."});
			 }
		});	
}); 


/* authenticate user */
router.get("/route-to-authenticate-user", async (req, res) => {
	const userCookie = req.cookies["connect.sid"];
	res.json(userCookie);
});



/* login user */
router.post("/route-to-login-user", passport.authenticate("local"), (req, res) => {
	req.login(req.user, (err) => {
		if (err) {
			res.json({result: "error" ,message: "Username oder Passwort falsch!"});
		} else {
			res.json({result: "success" ,message: "Ihre Notizen stehen Ihnen nun überall zur Verfügung!", user: req.user.username});
		}
	});
});

/* logout user */
router.get("/route-to-logout-user", async (req,res) => {
	req.logout();
	res.clearCookie('connect.sid', {path: '/'});
	res.json({result: "success", message: "Sie haben sich erfolgreich ausgeloggt!"});
});


/* delete account */
router.post("/route-to-delete-user-account", async (req,res) => {
	const userToDelete = String(req.body.username);
	console.log("delete request from: ", userToDelete);
	try {
		User.deleteOne({ username : userToDelete}, (err, deletedUser) => {
			if (err) {
				console.log("ERROR while deleting User in DB -> ", err);
				res.json({result: "error", message: "Es gab ein Problem beim Löschen Ihres Accounts.", error: err});
			} else {
				Note.deleteMany({user : userToDelete}, (err) =>{
					if (err) {
						console.log("Error while DELETING deletedUserNotes ", err);
					} else {
						console.log("deletedUserNotes SUCCESSFULLY deleted!");
					}
				});
				console.log("User successfully deleted!"); 
				res.json({result: "success", message: "Ihr Account wurde erfolgreich gelöscht!"});
			}
		});
	} catch (err) {
		console.log("ERROR while POST_deleting User -> ", err);
	}
	
})

/* get notes from DB */
router.post("/route-to-get-notes-from-db", async (req, res) => {
	const userToFind = String(req.body.username);
	Note.find({user: userToFind}, (err, foundNotes) => {
		if (err) {
			console.log("ERROR while searching for NOTES -> ", err)
		} else {
			res.json({foundNotes});
		}
	}); 
});

/* add notes to DB */
router.post("/route-to-add-notes-to-db", async (req, res) => {
	try {
		const newNote = req.body;
		const newNoteUser = String(newNote.user);
		const newNoteTitle = String(newNote.title);
		const newNoteContent = String(newNote.content);
		
		Note.create({user: newNoteUser, title: newNoteTitle, content: newNoteContent}, (err, savedNote) => {
			if (err) {
				console.log(err);
			} else {
				res.json(savedNote);
			}
		});
	} catch (err) {
		console.log("Add Note ERROR: ",err);
	}
});

/* update notes in DB */
router.post("/route-to-edit-notes-in-db", async (req, res) => {
	try {
		const updatedNoteID = req.body._id;
		const updatedNoteTitle = String(req.body.title);
		const updatedNoteContent = String(req.body.content);

		Note.updateOne({ _id: updatedNoteID }, { title: updatedNoteTitle, content: updatedNoteContent }, (err, updatedNote) => {
			if (err) {
				console.log(err);
			} else {
				console.log(updatedNote);
			}
		});
	} catch (err) {
		console.log("Update Note ERROR: ",err);
	}
});

/* delete notes in DB */
router.post("/route-to-delete-notes-in-db", async (req, res) => {
	try {
		const deletedNoteID = req.body._id;
		Note.deleteOne({_id: deletedNoteID}, (err, deletedNote) => {
			if (err) {
				console.log(err);
			} else {
				console.log("DELETED NOTE RES: ", deletedNote);
				res.json(deletedNote);
			}
		});
	} catch (err) {
		console.log("Add Note ERROR: ",err);
	}
});


module.exports = router;
