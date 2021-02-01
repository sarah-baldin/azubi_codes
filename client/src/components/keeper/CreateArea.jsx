import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Zoom, Fab } from "@material-ui/core";

function CreateArea(props) {
	const [zoomIn, setZoomIn] = useState(false);
	const [note, setNote] = useState({
		title: "",
		content: "",
	});


	function handleChange(e) {
		const { name, value } = e.target;
		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}


	function submitNote(e) {
		props.onAdd(note);
		e.preventDefault();
		setNote({ title: "", content: "" });
	}


	function handleZoom() {
		setZoomIn(true);
	}

	
	return (
		<div className="row">
			<form className="create-note">
				{zoomIn && (
					<input
						name="title"
						onChange={handleChange}
						value={note.title}
						placeholder="Titel"
					/>
				)}
				<textarea
					name="content"
					onClick={handleZoom}
					onChange={handleChange}
					value={note.content}
					placeholder="Notiz erstellen..."
					rows={zoomIn ? "3" : "1"}
				/>
				<Zoom in={zoomIn}>
					<Fab onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
