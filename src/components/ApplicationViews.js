import React from "react";
import { Route } from "react-router-dom";
import { NotebookProvider } from "./notebooks/NotebookProvider";
import { NotebookList } from "./notebooks/NotebookList";
import { NotesProvider } from "./notes/NotesProvider";
import { NotesList } from "./notes/NotesList";
import { NotebookForm } from "./notebooks/NotebookForm";

export const ApplicationViews = () => {
  return (
    <>
      <NotebookProvider>
        <NotesProvider>
          <Route path="/">
            <NotebookForm />
          </Route>
          <Route exact path="/">
            <NotebookList />
          </Route>
        </NotesProvider>
      </NotebookProvider>

      <NotesProvider>
        <Route exact path="/notes">
          <NotesList />
        </Route>
      </NotesProvider>
    </>
  );
};
