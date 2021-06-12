import React, { useContext, useEffect } from "react";
import { NotebookContext } from "./NotebookProvider";
import { Link } from "react-router-dom";

export const NotebookList = () => {
  const { notebooks, getNotebooks } = useContext(NotebookContext);

  useEffect(() => {
    getNotebooks();
  }, []);

  return (
    <>
      <section className="notebook__list">
        {notebooks.map((notebook) => (
          <div
            key={notebook.id}
            className="notebook"
            id={`notebook--${notebook.id}`}
          >
            <Link key={notebook.id}>{notebook.title}</Link>
            {notebook.title}
          </div>
        ))}
      </section>
    </>
  );
};
