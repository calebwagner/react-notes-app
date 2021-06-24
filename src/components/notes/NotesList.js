import React, { useContext, useEffect, useState } from "react";
import { NotesContext } from "./NotesProvider";
import { useHistory, useParams } from "react-router-dom";
import { NoteDetail } from "./NoteDetail";
import "./Notes.css";
import { TiArrowBack } from "react-icons/ti";
import { TextField } from "@material-ui/core";

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
      <div className="note__create">
        {/* redirect user to create note page */}
        <TiArrowBack
          className="back__btn btn btn-white btn-animate"
          onClick={() => history.push("/")}
        />
        <h1>Notes:</h1>
        <div className="note__searchbar">
          <div className="search">
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="filled"
              className="input--wide"
              onKeyUp={(event) => setSearchTerms(event.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        className="create__note__btn"
        onClick={() => history.push(`/detail/create/${notebookId}`)}
      >
        Create Note
      </button>
      <div className="flex-box">
        {/* map through filtered notes and display them */}
        {filteredNotes.map((note) => {
          return <NoteDetail key={note.id} note={note} />;
        })}
      </div>
    </>
  );
};
