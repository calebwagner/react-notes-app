import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory, useParams } from "react-router-dom";
import { NoteDetail } from "./NoteDetail";
import "./Notes.css";

export const NotesList = () => {
  const { notes, getNotes, searchTerms, setSearchTerms } = useContext(
    NotesContext
  );
  const [filteredNotes, setFiltered] = useState([]);
  const history = useHistory();
  const { notebookId } = useParams();

  useEffect(() => {
    getNotes();
  }, []);

  useEffect(() => {
    if (searchTerms !== "") {
      const notesFiltered = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      const filteredByNotebook = notesFiltered.filter((note) => {
        return parseInt(notebookId) === note.notebookId;
      });
      setFiltered(filteredByNotebook);
    } else {
      const filteredByNotebook = notes.filter((note) => {
        return parseInt(notebookId) === note.notebookId;
      });
      setFiltered(filteredByNotebook);
    }
  }, [searchTerms, notes]);

  return (
    <>
      <div className="notebook__create">
        <h1>Notes:</h1>
        <h3> Notes search:</h3>
        <input
          type="text"
          className="input--wide"
          onKeyUp={(event) => setSearchTerms(event.target.value)}
          placeholder="Search for a note... "
        />
      </div>
      <button onClick={() => history.push(`/detail/create/${notebookId}`)}>
        Create Note
      </button>
      <div>
        {filteredNotes.map((note) => {
          return <NoteDetail key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};
