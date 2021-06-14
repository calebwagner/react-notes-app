import React, { useContext, useEffect } from "react";
import { NotebookContext } from "./NotebookProvider";
import { Link, useHistory } from "react-router-dom";
import "./Notebook.css";

export const NotebookList = () => {
  const { notebooks, getNotebooks } = useContext(NotebookContext);
  const history = useHistory();

  useEffect(() => {
    getNotebooks();
  }, []);

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
            <Link className="notebook" key={notebook.id} to={`/notes`}>
              {notebook.title}
            </Link>
            <button onClick={() => history.push(`/edit/${notebook.id}`)}>
              Edit
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
