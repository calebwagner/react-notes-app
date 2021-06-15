import React, { useContext } from "react";
import { NotebookContext } from "./NotebookProvider";
import "./Notebook.css";

export const NotebookSearch = () => {
  const { setSearchTerms } = useContext(NotebookContext);

  return (
    <>
      Notebook search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a notebook... "
      />
    </>
  );
};
