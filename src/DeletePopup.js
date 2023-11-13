import React from "react";
import { useDispatch } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const DeletePopup = () => {
  const dispatch = useDispatch();

  const handleDelete = (e) => {
    dispatch(postsSliceActions.handleDelete(e.target.id));
  };

  return (
    <div className="popup-Background">
      <div className="delete-Popup">
        <h2>Delete comment</h2>
        <p>
          Are you sure you want to delete this comment?This will remove the
          comment ans cant be undone.
        </p>
        <button>NO,CANCEL</button>
        <button onClick={handleDelete}>YES,DELETE</button>
      </div>
    </div>
  );
};
