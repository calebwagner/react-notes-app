import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory, useParams } from "react-router-dom";

export const NoteEdit = () => {
  const { editNote, getNotesById } = useContext(NotesContext);
  const { noteId } = useParams();

  const [note, setNote] = useState({
    title: "",
    description: "",
    notebookId: 0,
    timestamp: Date.now(),
  });

  const history = useHistory();

  useEffect(() => {
    getNotesById(parseInt(noteId)).then(setNote);
  }, []);

  const handleControlledInputChange = (event) => {
    const noteEdit = { ...note };
    noteEdit[event.target.id] = event.target.value;
    setNote(noteEdit);
  };

  const handleClickEditNote = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    editNote(note).then(() => history.push(`/detail/${note.notebookId}`));
  };
  console.log(note);
  return (
    <form className="noteForm">
      <h2 className="noteForm__title">Edit Note</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Note Title:</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            defaultValue={note.title}
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
        defaultValue={note.description}
        onChange={handleControlledInputChange}
      />

      <button className="btn btn-primary" onClick={handleClickEditNote}>
        Save
      </button>
    </form>
  );
};
