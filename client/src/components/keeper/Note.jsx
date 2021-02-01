import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';


function Note(props) {
  const [editable, setEditable] = useState(false);
 
  function grabNewContent(e) {
    const newTitle = String(e.target.parentElement.firstChild.children[0].innerText);
    const newContent = String(e.target.parentElement.firstChild.children[1].innerText);
    
    props.onUpdate(props.id, newTitle, newContent);
    setEditable(false);
  }

  function setCaret(e) {
    let caretGoTo;
    setEditable(true);
    if (e.target.id === "edit-icon") {
      caretGoTo = e.target.parentElement.parentElement.firstChild.children[0];
    } else if (e.target.id === "edit-button") {
      caretGoTo = e.target.parentElement.children[0].children[0];
    }
    setTimeout(function() {
      caretGoTo.focus();
    }, 0);
  }

  return (
    <div className="note" >
      <div className="note-content overflow-auto">
        <h4 id="note-head" suppressContentEditableWarning={true} contentEditable={editable}>{props.title}</h4>
        <p id="note-body" suppressContentEditableWarning={true} contentEditable={editable}>{props.content}</p>
      </div>

      {editable && 
        <button  id="save-button" 
          onClick={grabNewContent}>
          speichern
        </button>
      }

      <button id="delete-button"
        onClick={() => {
          props.onDelete(props.id);
        }}><DeleteIcon id="delete-icon" />
      </button>

      <button id="edit-button" onClick={setCaret}><EditIcon id="edit-icon" /></button>
    </div>
  );
}

export default Note;