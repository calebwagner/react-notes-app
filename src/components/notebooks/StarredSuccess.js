import React from "react";
import { useHistory } from "react-router-dom";

export const NotebookForm = () => {
  const history = useHistory();

  return (
    <form className="notebookForm">
      <h2 className="notebookForm__title">Notebook is now important!</h2>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/success")}
      >
        Notebooks
      </button>
    </form>
  );
};
