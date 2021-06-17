import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useParams, useHistory } from "react-router-dom";
import "./Notes.css";

export const NoteDetail = ({ note }) => {
  const { getNotesById, deleteNote } = useContext(NotesContext);
  const [noteVar, setNote] = useState({});
  const { noteId } = useParams();

  // useEffect(() => {
  //   if (noteId) {
  //     getNotesById(parseInt(noteId)).then((noteObj) => {
  //       setNote(noteObj);
  //     });
  //   } else {
  //     setNote(note);
  //   }
  // }, [noteId]);

  useEffect(() => {
    setNote(note);
  }, [noteId]);

  const history = useHistory();

  const deleteANote = () => {
    deleteNote(noteVar.id).then(() => {
      history.push(`/detail/${note.id}`);
    });
  };

  return (
    <section className="notes">
      <h3>{noteVar.title}</h3>
      <h5>{noteVar.description}</h5>
      <button onClick={() => history.push(`/note/edit/${note.id}`)}>
        Edit Note
      </button>
      <button onDoubleClick={deleteANote}>Delete</button>
    </section>
  );
};
