import React, { useState, createContext } from "react";

export const NotebookContext = createContext();

export const NotebookProvider = (props) => {
  const [notebooks, setNotebooks] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  const getNotebooks = () => {
    return fetch("http://localhost:8088/notebooks?_embed=starredNotebooks")
      .then((res) => res.json())
      .then(setNotebooks);
  };

  const addLike = (notebook) => {
    return fetch(`http://localhost:8088/starredNotebooks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notebook),
    }).then((response) => response.json());
  };

  // const unlike = (notebookId) => {
  //   return fetch(`http://localhost:8088/notebooks/${notebookId}`, {
  //     method: "DELETE",
  //   }).then(getNotebooks);
  // };

  const getNotebooksById = (notebookId) => {
    return fetch(
      `http://localhost:8088/notebooks/${notebookId}?_embed=notes`
    ).then((res) => res.json());
  };

  const addNotebook = (notebookObj) => {
    return fetch("http://localhost:8088/notebooks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notebookObj),
    }).then(getNotebooks);
  };

  const editNotebook = (notebook) => {
    return fetch(`http://localhost:8088/notebooks/${notebook.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notebook),
    }).then(getNotebooks);
  };

  const deleteNotebook = (notebookId) => {
    return fetch(`http://localhost:8088/notebooks/${notebookId}`, {
      method: "DELETE",
    }).then(getNotebooks);
  };

  return (
    <NotebookContext.Provider
      value={{
        notebooks,
        getNotebooks,
        getNotebooksById,
        addNotebook,
        editNotebook,
        deleteNotebook,
        searchTerms,
        setSearchTerms,
        addLike,
        // unlike,
      }}
    >
      {props.children}
    </NotebookContext.Provider>
  );
};
