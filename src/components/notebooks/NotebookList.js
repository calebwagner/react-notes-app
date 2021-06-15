import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Notebook.css";

export const NotebookList = ({ notebook }) => {
  const {
    notebooks,
    getNotebooksById,
    getNotebooks,
    deleteNotebook,
  } = useContext(NotebookContext);
  const [notebookVar, setNotebook] = useState({});
  const { notebookId } = useParams();

  const history = useHistory();

  useEffect(() => {
    getNotebooks();
  }, []);

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
    deleteNotebook(notebookVar).then(() => {
      history.push("/");
    });
  };

  const currentUserId = parseInt(localStorage.getItem("wwi__user"));

  const userNotebooks = notebooks.filter((notebook) => {
    return currentUserId === notebook.userId;
  });

  return (
    <>
      <button onClick={() => history.push("/create")}>Create Notebook</button>
      <section className="notebook__list">
        {userNotebooks.map((notebook) => (
          <div
            key={notebook.id}
            className="notebooks"
            id={`notebook--${notebook.id}`}
          >
            <Link className="notebook" key={notebook.id}>
              {notebook.title}
            </Link>
            <button onClick={() => history.push(`/edit/${notebook.id}`)}>
              Edit
            </button>
            <Link key={notebook.id} to={`/detail/${notebook.id}`}>
              <button>View</button>
            </Link>
            <button onClick={deleteANotebook}>Delete</button>
          </div>
        ))}
      </section>
    </>
  );
};
