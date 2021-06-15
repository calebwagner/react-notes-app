import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { Link, useHistory, useParams } from "react-router-dom";
import "./Notebook.css";
import { NotebookDetail } from "./NotebookDetail";

export const NotebookList = () => {
  const { notebooks, getNotebooks, searchTerms } = useContext(NotebookContext);
  const [filteredNotebooks, setFiltered] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getNotebooks();
  }, []);

  useEffect(() => {
    const currentUserId = parseInt(localStorage.getItem("wwi__user"));
    if (searchTerms !== "") {
      const notebookFilter = notebooks.filter((notebook) =>
        notebook.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      const userNotebooks = notebookFilter.filter((notebook) => {
        return currentUserId === notebook.userId;
      });
      setFiltered(userNotebooks);
    } else {
      const userNotebooks = notebooks.filter((notebook) => {
        return currentUserId === notebook.userId;
      });
      setFiltered(userNotebooks);
    }
  }, [searchTerms, notebooks]);

  return (
    <>
      <h1>Notebooks:</h1>
      <button onClick={() => history.push("/create")}>Create Notebook</button>
      <div>
        {filteredNotebooks.map((notebook) => {
          return <NotebookDetail key={notebook.id} notebook={notebook} />;
        })}
      </div>
    </>
  );
};
