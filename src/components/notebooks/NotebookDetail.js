import React, { useContext, useEffect, useState } from "react";
import { NotebookContext } from "./NotebookProvider";
import { useHistory, Link, useParams } from "react-router-dom";
import "./Notebook.css";
import { Toggle } from "./NotebookToggle";

export const NotebookDetail = ({ notebook }) => {
  const {
    deleteNotebook,
    addLike,
    unlike,
    getLikes,
    likedNotebooks,
  } = useContext(NotebookContext);

  const [isToggled, setIsToggled] = useState(false);

  const [isLiked, setIsLiked] = useState();

  const history = useHistory();

  const currentUserId = parseInt(localStorage.getItem("wwi__user"));

  const deleteANotebook = () => {
    deleteNotebook(notebook.id).then(() => {
      history.push("/");
    });
  };

  useEffect(() => {
    getLikes().then(() => {
      const foundLike = likedNotebooks.find((liked) => {
        return notebook.id === liked.notebookId;
      });
      console.log(foundLike);
      if (foundLike) {
        setIsLiked(true);
      } else {
        setIsLiked(false);
      }
    });
  }, [isLiked]);

  const addLikedNotebook = () => {
    addLike({
      userId: currentUserId,
      notebookId: notebook.id,
    }).then(() => {
      history.push("/");
    });
  };

  const foundLike = likedNotebooks.find((liked) => {
    return notebook.id === liked.notebookId;
  });

  const unlikeNotebook = () => {
    unlike(foundLike.id).then(() => {
      history.push("/");
    });
  };

  return (
    <section className="notebooks">
      <div className="like-btn">
        <div className="unlike-btn">
          <h2 className="notebook__title">{notebook.title}</h2>
          <Link key={notebook.id} to={`/detail/${notebook.id}`}>
            <button className="view__btn">View</button>
          </Link>
          {isLiked ? (
            <button className="unlike-btn" onClick={unlikeNotebook}>
              unlike
            </button>
          ) : (
            <button className="like-btn" onClick={addLikedNotebook}>
              like
            </button>
          )}

          <button onClick={() => history.push(`/edit/${notebook.id}`)}>
            Edit
          </button>
          <button onDoubleClick={deleteANotebook}>Delete</button>

          {/* <Toggle
        rounded={true}
        isToggled={isToggled}
        onToggle={() => setIsToggled(!isToggled)}
      /> */}
        </div>
      </div>
    </section>
  );
};
