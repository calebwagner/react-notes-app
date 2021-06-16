import React, { useContext } from "react";
import { NotesContext } from "./NotesProvider";
import "./Notes.css";

export const NoteSearch = () => {
  const { setSearchTerms } = useContext(NotesContext);

  return (
    <>
      Notes search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a note... "
      />
    </>
  );
};
