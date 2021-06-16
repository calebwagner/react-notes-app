import React from "react";
import { Route } from "react-router-dom";
import { NotebookProvider } from "./notebooks/NotebookProvider";
import { NotebookList } from "./notebooks/NotebookList";
import { NotesProvider } from "./notes/NotesProvider";
import { NotesList } from "./notes/NotesList";
import { NotebookForm } from "./notebooks/NotebookForm";
import { NotebookEdit } from "./notebooks/NotebookEdit";
import { NotebookView } from "./notebooks/NotebookView";
import { NotebookSearch } from "./notebooks/NotebookSearch";
import { NoteSearch } from "./notes/NoteSearch";

export const ApplicationViews = () => {
  return (
    <>
      <NotebookProvider>
        <NotesProvider>
          <Route exact path="/">
            <NotebookSearch />
            <NotebookList />
          </Route>
          <Route path="/create">
            <NotebookForm />
          </Route>
          <Route path="/edit/:notebookId">
            <NotebookEdit />
          </Route>
          <Route exact path="/detail/:notebookId">
            <NoteSearch />
            {/* <NotebookView /> */}
            <NotesList />
          </Route>
        </NotesProvider>
      </NotebookProvider>
    </>
  );
};
