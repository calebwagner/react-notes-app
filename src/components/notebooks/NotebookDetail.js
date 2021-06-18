import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useHistory, Link } from "react-router-dom";
import "./Notebook.css";
import { Toggle } from "./NotebookToggle";

export const NotebookDetail = ({ notebook }) => {
  const {
    deleteNotebook,
    notebookLikes,
    addLike,
    getNotebooks,
    notebooks,
    unlike,
  } = useContext(NotebookContext);

  const history = useHistory();
  const currentUserId = parseInt(localStorage.getItem("wwi__user"));

  const deleteANotebook = () => {
    deleteNotebook(notebook.id).then(() => {
      history.push("/");
    });
  };

  // const starNotebook = () => {
  //   addLike(notebook.id).then(() => {
  //     history.push("/");
  //   });
  // };

  // addLike({
  //   userId: parseInt(localStorage.getItem("wwi__user")),
  //   notebookId: notebook.id,
  // });

  // const likeNotebook = {
  //   userId: parseInt(localStorage.getItem("wwi__user")),
  //   notebookId: notebook.id,
  // };

  // addLike(likeNotebook).then(() => history.push("/"));

  const [isToggled, setIsToggled] = useState(false);

  return (
    <section className="notebooks">
      <h2 className="notebook__title">{notebook.title}</h2>
      <Link key={notebook.id} to={`/detail/${notebook.id}`}>
        <button>View</button>
      </Link>
      <button onClick={() => history.push(`/edit/${notebook.id}`)}>Edit</button>
      <button onDoubleClick={deleteANotebook}>Delete</button>
      <Toggle
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
        onClick={addLike}
      />
    </section>
  );
};
