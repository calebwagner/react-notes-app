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
    // if searchbar contains a character
    if (searchTerms !== "") {
      // filter notebooks by title
      const notebookFilter = notebooks.filter((notebook) =>
        notebook.title.toLowerCase().includes(searchTerms.toLowerCase())
      );
      // then match local user to userId key on the notebook object
      const userNotebooks = notebookFilter.filter((notebook) => {
        return currentUserId === notebook.userId;
      });
      // then update the filteredNotebooks variable
      setFiltered(userNotebooks);
    } else {
      // if searchbar contains no characters match local user to userId key on the notebook object
      const userNotebooks = notebooks.filter((notebook) => {
        return currentUserId === notebook.userId;
      });
      // then update the filteredNotebooks variable
      setFiltered(userNotebooks);
    }
  }, [searchTerms, notebooks]); // if variables change, re-rendered page

  return (
    <>
      <div className="notebook__create">
        {/* redirect user to create notebook page */}
        <button onClick={() => history.push("/create")}>Create Notebook</button>
        <h1 className="notebooks__header">Notebooks:</h1>
        <div className="notebook__searchbar">
          <h2>Notebook search:</h2>
          {/* searchbar function */}
          <input
            type="text"
            className="input--wide"
            onKeyUp={(event) => setSearchTerms(event.target.value)}
            placeholder="Search for a notebook... "
          />
        </div>
      </div>
      <div className="flex-box">
        {/* map through filtered notebooks and display them */}
        {filteredNotebooks.map((notebook) => {
          return <NotebookDetail key={notebook.id} notebook={notebook} />;
        })}
      </div>
    </>
  );
};
