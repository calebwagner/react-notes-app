import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory } from "react-router-dom";

export const NotesForm = () => {
  const { addNote, getNotes } = useContext(NotesContext);

  const [note, setNote] = useState({
    title: "",
    notebookId: 2,
    description: "",
    timestamp: Date.now(),
  });

  const history = useHistory();

  useEffect(() => {
    getNotes().then();
  }, []);

  const handleControlledInputChange = (event) => {
    const newNote = { ...note };
    newNote[event.target.id] = event.target.value;
    setNote(newNote);
  };

  const handleClickSaveNote = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const noteTitle = parseInt(note.title);
    const noteDescription = parseInt(note.description);
    if (noteTitle.length || noteDescription.length === 0) {
      window.alert("Please fill out note form");
    } else {
      const newNote = {
        title: note.title,
        notebookId: 2,
        description: note.description,
        timestamp: Date.now(),
      };
      addNote(newNote).then(() => history.push(`/detail/:notebookId`));
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
