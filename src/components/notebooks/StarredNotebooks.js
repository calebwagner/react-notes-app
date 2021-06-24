import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";

export const StarredNotebooks = ({ notebook }) => {
  const { getLikes, getNotebooks, likedNotebooks, notebooks } = useContext(
    NotebookContext
  );
  //   const [notebook, setNotebook] = useState({});

  const [isLiked, setIsLiked] = useState();

  useEffect(() => {
    getNotebooks().then(getLikes());
  }, []);

  //   useEffect(() => {
  //     getLikes().then(() => {
  //       const foundLike = likedNotebooks
  //         .find((liked) => {
  //           return notebook.id === liked.notebookId;
  //         })
  //         .then(setIsLiked(foundLike));
  //     });
  //   }, []);

  return (
    <>
      <h1>Liked Notebooks</h1>
      {/* {isLiked.map((liked) => {
        return <div>Notebook: {liked.title}</div>;
      })} */}
    </>
  );
};
