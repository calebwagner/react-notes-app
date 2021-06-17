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
          {/* Render ** NotebookList ** when http://localhost:3000 */}
          <Route exact path="/">
            <NotebookList />
          </Route>
          {/* Render ** NotebookForm ** when http://localhost:3000/create */}
          <Route path="/create">
            <NotebookForm />
          </Route>
          {/* Render ** NotebookEdit ** when http://localhost:3000/edit/:notebookId */}
          <Route exact path="/edit/:notebookId">
            <NotebookEdit />
          </Route>
          {/* Render ** NotesList ** when http://localhost:3000/detail/:notebookId */}
          <Route exact path="/detail/:notebookId">
            <NotesList />
          </Route>
          {/* Render ** NotesForm ** when http://localhost:3000detail/create/:notebookId */}
          <Route exact path="/detail/create/:notebookId">
            <NotesForm />
          </Route>
          {/* Render ** NoteEdit ** when http://localhost:3000/note/edit/:noteId */}
          <Route exact path="/note/edit/:noteId">
            <NoteEdit />
          </Route>
        </NotesProvider>
      </NotebookProvider>
    </>
  );
};
