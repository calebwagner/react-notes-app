import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useHistory } from "react-router-dom";
import "./Notebook.css";
import { NotebookDetail } from "./NotebookDetail";

export const NotebookList = () => {
  const { notebooks, getNotebooks, searchTerms, setSearchTerms } = useContext(
    NotebookContext
  );
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
      <div className="notebook__create">
        <button onClick={() => history.push("/create")}>Create Notebook</button>
        <h1 className="notebooks__header">Notebooks:</h1>
        <div className="notebook__searchbar">
          <h2>Notebook search:</h2>
          <input
            type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a notebook... "
          />
        </div>
      </div>
      <div className="flex-box">
        {filteredNotebooks.map((notebook) => {
          return <NotebookDetail key={notebook.id} notebook={notebook} />;
        })}
      </div>
    </>
  );
};
