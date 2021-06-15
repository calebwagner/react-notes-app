import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useParams, useHistory, Link } from "react-router-dom";
import "./Notebook.css";

export const NotebookDetail = ({ notebook }) => {
  const { getNotebookById, deleteNotebook } = useContext(NotebookContext);
  const [notebookVar, setNotebook] = useState({});
  const { notebookId } = useParams();

  useEffect(() => {
    if (notebookId) {
      getNotebookById(parseInt(notebookId)).then((notebookObj) => {
        setNotebook(notebookObj);
      });
    } else {
      setNotebook(notebook);
    }
  }, [notebookId]);

  const history = useHistory();

  const deleteANotebook = () => {
    deleteNotebook(notebookVar.id).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="notebooks">
      <h3>{notebookVar.title}</h3>
      <Link key={notebook.id} to={`/detail/${notebook.id}`}>
        <button>View</button>
      </Link>
      <button onClick={() => history.push(`/edit/${notebook.id}`)}>Edit</button>
      <button onDoubleClick={deleteANotebook}>Delete</button>
    </section>
  );
};
