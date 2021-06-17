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
    // if searchbar contains a character
    if (searchTerms !== "") {
      // filter notes by title
      const notesFiltered = notes.filter((note) =>
        note.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      // then match notebookId to notebookId key on the note object
      const filteredByNotebook = notesFiltered.filter((note) => {
        return parseInt(notebookId) === note.notebookId;
      });
      // then update the filteredNotes variable
      setFiltered(filteredByNotebook);
    } else {
      // if searchbar contains no characters match notebookId to notebookId key on the note object
      const filteredByNotebook = notes.filter((note) => {
        return parseInt(notebookId) === note.notebookId;
      });
      // then update the filteredNotes variable
      setFiltered(filteredByNotebook);
    }
  }, [searchTerms, notes]); // if variables change, re-rendered page

  return (
    <>
      <div className="notebook__create">
        {/* redirect user to create note page */}
        <button onClick={() => history.push(`/detail/create/${notebookId}`)}>
          Create Note
        </button>
        <h1>Notes:</h1>
        <div className="notebook__searchbar">
          <h2> Notes search:</h2>
          {/* searchbar function */}
          <input
            type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a note... "
          />
        </div>
      </div>
      <div className="flex-box">
        {/* map through filtered notes and display them */}
        {filteredNotes.map((note) => {
          return <NoteDetail key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};
