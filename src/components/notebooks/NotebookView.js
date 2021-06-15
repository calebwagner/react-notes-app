import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useParams } from "react-router-dom";

export const NotebookView = ({ notebook }) => {
  const { getNotebooksById } = useContext(NotebookContext);
  const [notebookVar, setNotebook] = useState({});
  const { notebookId } = useParams();

  useEffect(() => {
    if (notebookId) {
      getNotebooksById(parseInt(notebookId)).then((notebookObj) => {
        setNotebook(notebookObj);
      });
    } else {
      setNotebook(notebook);
    }
  }, [notebookId]);

  return (
    <section className="notebook">
      <h3 className="note__title">{notebookVar.title}</h3>
    </section>
  );
};
