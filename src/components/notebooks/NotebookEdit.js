import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useHistory, useParams } from "react-router-dom";

export const NotebookEdit = () => {
  const { editNotebook, getNotebooksById } = useContext(NotebookContext);
  const { notebooks, getNotebooks } = useContext(NotebookContext);
  const { notebookId } = useParams();

  const currentUserId = parseInt(localStorage.getItem("wwi__user"));

  const [notebook, setNotebook] = useState({
    title: "",
    userId: currentUserId,
    timestamp: Date.now(),
  });

  const history = useHistory();

  /*
  Reach out to the world and get customers state
  and locations state on initialization.
  */
  useEffect(() => {
    getNotebooks();
  }, []);

  useEffect(() => {
    getNotebooksById().then(setNotebook());
  }, []);

  const handleControlledInputChange = (event) => {
    const newNotebook = { ...notebook };
    newNotebook[event.target.id] = event.target.value;
    setNotebook(newNotebook);
  };

  //   const handleClickEditNotebook = (event) => {
  //     event.preventDefault(); //Prevents the browser from submitting the form

  //     const notebookTitle = parseInt(notebook.title);

  //     if (notebookTitle === 0) {
  //       window.alert("Please type a title");
  //     } else {
  //       const newNotebook = {
  //         title: notebook.title,
  //         userId: currentUserId,
  //         timestamp: Date.now(),
  //       };
  //       editNotebook(newNotebook).then(() => history.push("/"));
  //     }
  //   };

  // TODO: ... editing ...
  const handleClickEditNotebook = (event) => {
    event.preventDefault(); //Prevents the browser from submitting the form

    const newNotebook = {
      title: notebook.title,
      userId: currentUserId,
      timestamp: Date.now(),
    };
    editNotebook(newNotebook).then(() => history.push("/"));
  };

  return (
    <form className="notebookForm">
      <h2 className="notebookForm__title">Edit Notebook</h2>
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

      <button className="btn btn-primary" onClick={handleClickEditNotebook}>
        Save
      </button>
    </form>
  );
};
