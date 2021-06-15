import React from "react";
import { Route } from "react-router-dom";
import { NotebookProvider } from "./notebooks/NotebookProvider";
import { NotebookList } from "./notebooks/NotebookList";
import { NotesProvider } from "./notes/NotesProvider";
import { NotesList } from "./notes/NotesList";
import { NotebookForm } from "./notebooks/NotebookForm";
import { NotebookEdit } from "./notebooks/NotebookEdit";
import { NotebookDetail } from "./notebooks/NotebookDetail";

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
          <Route path="/edit/:notebookId(\d+)">
            <NotebookEdit />
          </Route>
          <Route exact path="/detail/:notebookId(\d+)">
            <NotebookDetail />
            <NotesList />
          </Route>
        </NotesProvider>
      </NotebookProvider>

      {/* <NotesProvider>
        <NotebookProvider>
          <Route exact path="/notes">
            <NotesList />
          </Route>
        </NotebookProvider>
      </NotesProvider> */}
    </>
  );
};
