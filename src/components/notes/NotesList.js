import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory } from "react-router-dom";
import { NoteDetail } from "./NoteDetail";
import "./Notes.css";

export const NotesList = () => {
  const { notes, getNotes, searchTerms } = useContext(NotesContext);
  const [filteredNotes, setFiltered] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const notesFiltered = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      setFiltered(notesFiltered);
    } else {
      setFiltered(notes);
    }
  }, [searchTerms, notes]);

  return (
    <>
      <h1>Notes:</h1>
      {/* <button onClick={() => history.push(`/detail/:notebookId/create`)}>
        Create Note
      </button> */}
      <div>
        {filteredNotes.map((note) => {
          return <NoteDetail key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};
