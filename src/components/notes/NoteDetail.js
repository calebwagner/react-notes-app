import React, { useContext } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Notes.css";

export const NoteDetail = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);
  const { noteId } = useParams();

  const history = useHistory();

  const deleteANote = () => {
    deleteNote(note.id).then(() => {
      history.push(`/detail/${note.id}`);
    });
  };

  return (
    <section className="notes">
      <h3>{note.title}</h3>
      <h5>{note.description}</h5>
      <div className="note__buttons">
        <button onClick={() => history.push(`/note/edit/${note.id}`)}>
          Edit Note
        </button>
        <button onDoubleClick={deleteANote}>Delete</button>
      </div>
    </section>
  );
};
