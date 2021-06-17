import React, { useContext, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useHistory } from "react-router-dom";

export const NotebookForm = () => {
  const { addNotebook } = useContext(NotebookContext);
  const history = useHistory();

  const currentUserId = parseInt(localStorage.getItem("wwi__user"));

  const [notebook, setNotebook] = useState({
    title: "",
    userId: currentUserId,
    timestamp: Date.now(),
  });

  // whatever the user types in ...
  const handleControlledInputChange = (event) => {
    const newNotebook = { ...notebook };
    newNotebook[event.target.id] = event.target.value;
    // ... update notebook object
    setNotebook(newNotebook);
  };

  const handleClickSaveNotebook = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form
    if (notebook.title.length === 0) {
      window.alert("Please type a title");
    } else {
      // POST notebook to database
      addNotebook(notebook).then(() => history.push("/"));
    }
  };

  return (
    <form className="notebookForm">
      <h2 className="notebookForm__title">New Notebook</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="title">Notebook Title:</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            placeholder="type title here ..."
            value={notebook.title}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>

      <button className="btn btn-primary" onClick={handleClickSaveNotebook}>
        Add Notebook
      </button>
    </form>
  );
};
