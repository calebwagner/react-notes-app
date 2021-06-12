import React, { useContext, useEffect } from "react";
import { NotesContext } from "./NotesProvider";
import { Link } from "react-router-dom";
import "./Notes.css";
import { NotebookContext } from "../notebooks/NotebookProvider";

export const NotesList = () => {
  const { notes, getNotes } = useContext(NotesContext);
  //   const { getNotebooks } = useContext(NoteBookContext);

  useEffect(() => {
    getNotes();
  }, []);

  //   const filteredNotes = notes.filter((note) => {
  //     return notebook.id === note.notebookId;
  //   });

  return (
    <>
      <section className="note__list">
        {notes.map((note) => (
          <div key={note.id} className="notes" id={`note--${note.id}`}>
            <Link className="note" key={note.id}>
              {note.title}
            </Link>
            {note.title}
          </div>
        ))}
      </section>
    </>
  );
};
