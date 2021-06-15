import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { Link, useParams } from "react-router-dom";
import "./Notes.css";
import { NotebookContext } from "../notebooks/NotebookProvider";

export const NotesList = () => {
  const { notes, getNotes } = useContext(NotesContext);
  const [note, setNote] = useState({ notebook: {} });
  const { notebooks, getNotebooks } = useContext(NotebookContext);
  const { notebookId } = useParams();
  const [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    getNotebooks();
  }, []);

  // TODO:
  useEffect(() => {
    const filtered = notes.filter((note) => {
      return parseInt(notebookId) === note.notebookId;
    });
    setFilteredNotes(filtered);
  }, [notes]);

  return (
    <>
      <section className="note__list">
        {filteredNotes.map((note) => (
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
