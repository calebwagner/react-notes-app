import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useParams, useHistory } from "react-router-dom";

export const NotebookDetail = ({ notebook }) => {
  const { getNotebooksById, deleteNotebook } = useContext(NotebookContext);
  const [notebookVar, setNotebook] = useState({});
  const { notebookId } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (notebookId) {
      getNotebooksById(parseInt(notebookId)).then((notebookObj) => {
        setNotebook(notebookObj);
      });
    } else {
      setNotebook(notebook);
    }
  }, [notebookId]);

  const deleteANotebook = () => {
    deleteNotebook(notebookVar.id).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="notebook">
      <h3 className="note__title">{notebookVar.title}</h3>
      <button onClick={deleteANotebook}>Delete</button>
    </section>
  );
};
