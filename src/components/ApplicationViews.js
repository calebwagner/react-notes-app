import React from "react";
import { Route } from "react-router-dom";
import { NotebookProvider } from "./notebooks/NotebookProvider";
import { NotebookList } from "./notebooks/NotebookList";

export const ApplicationViews = () => {
  return (
    <>
      <NotebookProvider>
        <Route exact path="/">
          <NotebookList />
        </Route>
      </NotebookProvider>
    </>
  );
};
