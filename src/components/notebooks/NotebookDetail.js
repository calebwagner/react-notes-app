import React, { useContext } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useHistory, Link } from "react-router-dom";
import "./Notebook.css";

export const NotebookDetail = ({ notebook }) => {
  const { deleteNotebook } = useContext(NotebookContext);

  const history = useHistory();

  const deleteANotebook = () => {
    deleteNotebook(notebook.id).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="notebooks">
      <h2 className="notebook__title">{notebook.title}</h2>
      <Link key={notebook.id} to={`/detail/${notebook.id}`}>
        <button>View</button>
      </Link>
      <button onClick={() => history.push(`/edit/${notebook.id}`)}>Edit</button>
      <button onDoubleClick={deleteANotebook}>Delete</button>
    </section>
  );
};
