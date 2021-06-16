import React, { useContext, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory, useParams } from "react-router-dom";

export const NotesForm = () => {
  const { addNote } = useContext(NotesContext);
  const { notebookId } = useParams();

  const [note, setNote] = useState({
    title: "",
    notebookId: parseInt(notebookId),
    description: "",
    timestamp: Date.now(),
  });

  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newNote = { ...note };
    newNote[event.target.id] = event.target.value;
    setNote(newNote);
  };

  const handleClickSaveNote = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const noteTitle = note.title;
    const noteDescription = note.description;
    if (noteTitle.length === 0 || noteDescription.length === 0) {
      window.alert("Please fill out note form");
    } else {
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
      ;
      <button className="btn btn-primary" onClick={handleClickSaveNote}>
        Save Note
      </button>
    </form>
  );
};
