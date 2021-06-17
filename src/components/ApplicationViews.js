import React from "react";
import { Route } from "react-router-dom";
import { NotebookProvider } from "./notebooks/NotebookProvider";
import { NotebookList } from "./notebooks/NotebookList";
import { NotesProvider } from "./notes/NotesProvider";
import { NotesList } from "./notes/NotesList";
import { NotebookForm } from "./notebooks/NotebookForm";
import { NotebookEdit } from "./notebooks/NotebookEdit";
import { NotesForm } from "./notes/NotesForm";
import { NoteEdit } from "./notes/NoteEdit";

export const ApplicationViews = () => {
  return (
    <>
      <NotebookProvider>
        <NotesProvider>
          <Route exact path="/">
            <NotebookList />
          </Route>
          <Route path="/create">
            <NotebookForm />
          </Route>
          <Route exact path="/edit/:notebookId">
            <NotebookEdit />
          </Route>

          <Route exact path="/detail/:notebookId">
            <NotesList />
          </Route>

          <Route exact path="/detail/create/:notebookId">
            <NotesForm />
          </Route>

          <Route exact path="/note/edit/:noteId">
            <NoteEdit />
          </Route>
        </NotesProvider>
      </NotebookProvider>
    </>
  );
};
