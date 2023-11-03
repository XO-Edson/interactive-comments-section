import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const EditReplyView = ({ reply }) => {
  const dispatch = useDispatch();

  // Fetch the edit state from the store
  const edit = useSelector((state) => state.feedPosts.edit);

  // Function to handle the edit of the reply
  const handleReplyEdit = () => {
    // Pass the reply.id to the action to indicate which reply is being edited
    dispatch(postsSliceActions.handleReplyEdit(reply.id));
  };

  // Function to handle changes in the textarea
  const handleChange = (e) => {
    // Update the edit state in the store with the new value
    dispatch(postsSliceActions.updateEdit(e.target.value));
  };

  return (
    <div className="edit-view">
      <div className="text-area">
        <textarea
          name="comment"
          id={reply.id}
          value={edit}
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>

      <button onClick={() => handleReplyEdit(reply.id)}>UPDATE</button>
    </div>
  );
};
