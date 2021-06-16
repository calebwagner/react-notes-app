import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory } from "react-router-dom";

export const NotebookEdit = () => {
  const { addNote, getNotes } = useContext(NotesContext);

  const [note, setNote] = useState({
    title: "",
    notebookId: 1,
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
    if (noteTitle || noteDescription === 0) {
      window.alert("Please fill out note form");
    } else {
      const newNote = {
        title: note.title,
        notebookId: 1,
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
            defaultValue={note.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <textarea>
        <div className="form-group">
          <label htmlFor="description">description:</label>
          <input
            type="text"
            id="description"
            required
            autoFocus
            className="form-control"
            placeholder="type description here ..."
            defaultValue={note.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </textarea>

      <button className="btn btn-primary" onClick={handleClickSaveNote}>
        Save Note
      </button>
    </form>
  );
};
