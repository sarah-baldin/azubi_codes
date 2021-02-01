import React, { useState, useEffect } from "react";
import KeeperHeader from "./keeper/KeeperHeader";
import KeeperInfoBox from "./keeper/KeeperInfoBox";
import { StyleOutlined } from "@material-ui/icons";
import KeeperFooter from "./keeper/KeeperFooter";
import CreateArea from "./keeper/CreateArea";
import RegisterForm from "./keeper/RegisterForm";
import Note from "./keeper/Note";
import { Context } from "./keeper/Context.js";
import PopUp from "./PopUp";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";
import Swal from "sweetalert2";
import XRegExp from "xregexp";


function KeeperApp() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [currentUser, setCurrentUser] = useState(
		sessionStorage.getItem("user")
	);
	const [userNotes, setUserNotes] = useState([
		{
			user: "",
			title: "",
			content: "",
		},
	]);
	const [notes, setNotes] = useState([]);
	const [emptyContent, setEmptyContent] = useState(false);


	useEffect(() => {
		function getAuth() {
			axios({
				method: "GET",
				url: "/route-to-authenticate-user",
			})
				.then((result) => {
					const userCookie = result.data;
					if (userCookie !== "") {
						setLoggedIn(true);
						setCurrentUser(sessionStorage.getItem("user"));
					} else {
						setLoggedIn(false);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		}
		getAuth();
		if (loggedIn) {
			document.getElementById("register-button").style.display = "none";
			document.getElementById("user-logout").style.display = "block";
			document.getElementById("logged-in-user").style.display = "block";
			document.getElementById("deleteUser").style.display = "inline-block";
		} else if (!loggedIn) {
			document.getElementById("register-button").style.display = "block";
			document.getElementById("user-logout").style.display = "none";
			document.getElementById("logged-in-user").style.display = "none";
			document.getElementById("deleteUser").style.display = "none";
		}
	}, [loggedIn]);


	useEffect(() => {
		function getNotes() {
			axios({
				method: "POST",
				url: "/route-to-get-user-notes",
				data: { username: currentUser },
			})
				.then((result) => {
					setUserNotes(result.data.foundNotes);
				})
				.catch((err) => {
					console.log(err);
				});
		}
		if (loggedIn) {
			getNotes();
		}
	}, [loggedIn, currentUser]);


	function openPopUp() {
		document.getElementById("popup").style.display = "block";
	}


	function addNote(newNote) {
		// ^ - string start, (?![^]*\\s\\s) - no two consecutive spaces, (?=(?:\\P{L}*\\p{L}){2}) - at least 2 Unicode letters, $ - end of string
		let rx = XRegExp("^(?![^]*\\s\\s)(?=(?:\\P{L}*\\p{L}){2})");

		if (newNote.title !== "" && newNote.content !== "" && rx.test(newNote.title) && rx.test(newNote.content)) {
			setEmptyContent(false);
			if (!loggedIn) {
				setNotes((prevNotes) => {
					return [...prevNotes, newNote];
				});
			} else {
				axios({
					method: "POST",
					url: "/route-to-add-notes",
					data: {
						user: currentUser,
						title: newNote.title,
						content: newNote.content,
					},
				})
					.then((result) => {
						setUserNotes((prevNotes) => {
							return [...prevNotes, result.data];
						});
					})
					.catch((err) => {
						console.log(err);
					});
			}
		} else {
			setEmptyContent(true);
		}
	}


	function editNote(noteID, updateTitle, updateContent) {
		let noteToEdit = userNotes.find((element) => element._id === noteID);
		let updatedNote = {...noteToEdit,  title: updateTitle, content: updateContent};

		const newNotes = notes.filter((note, index) => noteID !== index);

		setNotes((prevNotes) => {
			return [ updatedNote, ...newNotes];
		});
	}


	function updateDB(noteID, updateTitle, updateContent) {
		let noteToEdit = userNotes.find((element) => element._id === noteID);
		let updatedNote = {...noteToEdit,  title: updateTitle, content: updateContent};
		
		axios({
			method: "POST",
			url: "/route-to-update-notes",
			data: updatedNote,
		})
			.then(() => {
				let newNotes = userNotes;
				setUserNotes(newNotes);
			})
			.catch((err) => {
				console.log(err);
			}); 
	}


	function deleteNote(noteID) {
		const newNotes = notes.filter((note, index) => noteID !== index);
		setNotes(newNotes);
	}


	function deleteUserNote(noteID) {
		const noteToDelete = userNotes.find((element) => element._id === noteID);

		axios({
			method: "POST",
			url: "/route-to-delete-notes",
			data: noteToDelete,
		})
			.then(() => {
				let newNotes = userNotes.filter((notes) => noteID !== notes["_id"]);
				setUserNotes(newNotes);
			})
			.catch((err) => {
				console.log(err);
			});
	}


	function userLogout() {
		axios({
			method: "GET",
			url: "/route-to-logout-user",
		})
		.then((res) => {
			if (res.data.result === "success") {
				setLoggedIn(false);
				sessionStorage.clear();
				setCurrentUser("");
				Swal.fire("Bis demnächst!", res.data.message, "success")
			} else {
				console.log("NO success Message in UserLogout-VergissMeinNichtApp: ", res);
			}
		})
		.catch((err) => {
			console.log(err);
		});
	}


	function deleteUser() {
		Swal.fire({title:"Sicher?",text: "Wollen Sie Ihren Account und alle dazugehörigen Notizen endgültig löschen?",icon: "warning", showCancelButton: true, cancelButtonColor:  "#b14130", confirmButtonColor: "#f5ba13"})
			.then((result) => {
			if (result.isConfirmed) {
				axios({
					method: "POST",
					url: "/route-to-delete-user-account",
					data: {
						username: currentUser
					}
				})
				.then(() => {
					Swal.fire("Schade, dass Sie gehen!", "Ihr Account wurde erfolgreich gelöscht!", "success")
					.then(
						axios({
							method: "GET",
							url: "/route-to-logout-deleted-user",
						})
						.then((res) => {
							if (res.data.result === "success") {
								setLoggedIn(false);
								sessionStorage.clear();
								setCurrentUser("");
								document.getElementById("deleteUser").style.display = "none";
							} else {
								console.log("NO success Message in UserLogout-VergissMeinNichtApp: ", res);
							}
						})
						.catch((err) => {
							console.log(err);
						})
					)
				})
			} else {
				console.log("Account wurde nicht gelöscht!");
			}
		});
	}


	return (
		<div className="component-wrapper">
			<Context.Provider value={[loggedIn, setLoggedIn]}>
				<div id="keeperApp" className="colored-background">
					<KeeperHeader
						AppIcon={<StyleOutlined id="logo-icon" className="material-icons" />}
						handleButton={openPopUp}
						handleLogout={userLogout}
						myUser={currentUser}
					/>
					<div className="keeper-content">
						<PopUp popupInner={<RegisterForm />} />
						<CreateArea onAdd={addNote} />
						<div className="keeper-alert-info" style={{ marginTop: "25px" }}>
								{emptyContent && (
									<Alert variant="filled" severity="warning">
										Sie können keine leere Notiz hinzufügen. Bitte tragen Sie
										etwas ein.
									</Alert>
								)}

								{ (!loggedIn && notes.length <= 0) && <KeeperInfoBox /> }
							</div>
						<div className="keeper-notes">
							{!loggedIn
								? notes.map((noteItem, index) => {
										return (
											<Note
												key={index}
												id={index}
												onUpdate={editNote}
												onDelete={deleteNote}
												title={noteItem.title}
												content={noteItem.content}
											/>
										);
								})
								: userNotes.map((noteItem) => {
										return (
											<Note
												key={noteItem._id}
												id={noteItem._id}
												onUpdate={updateDB}
												onDelete={deleteUserNote}
												title={noteItem.title}
												content={noteItem.content}
											/>
										);
								})
							}
						</div>
					</div>
					{ loggedIn ? <KeeperFooter deleteAccLink="Account löschen" onDelete={deleteUser} /> : <KeeperFooter /> }
				</div>
			</Context.Provider>
		</div>
	);
}

export default KeeperApp;
