import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const EditView = ({ feed }) => {
  const dispatch = useDispatch();
  const edit = useSelector((state) => state.feedPosts.edit);

  const handleEdit = () => {
    dispatch(postsSliceActions.handleEdit(feed.id));
  };

  const handleChange = (e) => {
    dispatch(postsSliceActions.updateEdit(e.target.value));
  };
  return (
    <div className="edit-view">
      <div className="text-area">
        <textarea
          name="comment"
          id={feed.id}
          value={edit}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>

      <button onClick={() => handleEdit(feed.id)}>UPDATE</button>
    </div>
  );
};
