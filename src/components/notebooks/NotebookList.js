import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Notebook.css";

export const NotebookList = () => {
  const {
    notebooks,
    getNotebooksById,
    getNotebooks,
    deleteNotebook,
    searchTerms,
  } = useContext(NotebookContext);
  const [filteredNotebooks, setFiltered] = useState([]);

  const [notebook, setNotebook] = useState({});
  const { notebookId } = useParams();

  const history = useHistory();

  useEffect(() => {
    getNotebooks();
  }, []);

  useEffect(() => {
    getNotebooksById(parseInt(notebookId)).then((notebookObj) => {
      setNotebook(notebookObj);
    });
  }, [notebookId]);

  useEffect(() => {
    if (searchTerms !== "") {
      const notebookFilter = notebooks.filter((notebook) =>
        notebook.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      setFiltered(notebookFilter);
    } else {
      // If the search field is blank, display all animals
      setFiltered(notebooks);
    }
  }, [searchTerms, notebooks]);

  // useEffect(() => {
  //   if (notebookId) {
  //     getNotebooksById(parseInt(notebookId)).then((notebookObj) => {
  //       setNotebook(notebookObj);
  //     });
  //   } else {
  //     setNotebook(notebook);
  //   }
  // }, [notebookId]);

  const deleteANotebook = () => {
    deleteNotebook(notebook.id).then(() => {
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
            <button onDoubleClick={deleteANotebook}>Delete</button>
          </div>
        ))}
      </section>
    </>
  );
};
