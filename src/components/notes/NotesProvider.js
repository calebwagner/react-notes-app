import React, { useState, createContext } from "react";

export const NotesContext = createContext();

export const NotesProvider = (props) => {
  const [notes, setNotes] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  const getNotes = () => {
    return fetch(`http://localhost:8088/notes`)
      .then((res) => res.json())
      .then(setNotes);
  };

  const getNotesById = (noteId) => {
    return fetch(`http://localhost:8088/notes/${noteId}`).then((res) =>
      res.json()
    );
  };

  const addNote = (notebookObj) => {
    return fetch("http://localhost:8088/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notebookObj),
    }).then(getNotes);
  };

  const editNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    }).then(getNotes);
  };

  const deleteNote = (noteId) => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
      method: "DELETE",
    }).then(getNotes);
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        getNotes,
        getNotesById,
        addNote,
        editNote,
        deleteNote,
        searchTerms,
        setSearchTerms,
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};
