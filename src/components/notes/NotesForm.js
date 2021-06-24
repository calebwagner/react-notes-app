import React, { useContext, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory, useParams } from "react-router-dom";

export const NotesForm = () => {
  const { addNote } = useContext(NotesContext);

  const { notebookId } = useParams();

  const history = useHistory();

  const [note, setNote] = useState({
    title: "",
    notebookId: parseInt(notebookId),
    description: "",
    timestamp: Date.now(),
  });

  // whatever the user types in ...
  const handleControlledInputChange = (event) => {
    const newNote = { ...note };
    newNote[event.target.id] = event.target.value;
    // ... update note object
    setNote(newNote);
  };

  const handleClickSaveNote = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    if (note.title.length === 0 || note.description.length === 0) {
      window.alert("Please fill out note form");
    } else {
      // POST note to database
      addNote(note).then(() => history.push(`/detail/${notebookId}`));
    }
  };

  return (
    <form className="noteForm">
      <h2 className="noteForm__title">Create Note:</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Note Title:</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            placeholder="type title here ..."
            value={note.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <div className="form-group">
        <label htmlFor="title">Description:</label>
        <textarea
          type="text"
          id="description"
          name="description"
          className="form-control"
          cols={10}
          rows={10}
          required
          value={note.description}
          onChange={handleControlledInputChange}
        />

        <div className="note-footer">
          <small>{note.description.length} Characters</small>
        </div>
      </div>
      ;
      <button className="btn btn-primary" onClick={handleClickSaveNote}>
        Save Note
      </button>
    </form>
  );
};
