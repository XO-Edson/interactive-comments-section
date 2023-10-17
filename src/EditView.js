import React from "react";

export const EditView = ({ setEdit, edit, handleEdit, feed }) => {
  return (
    <div className="edit-view">
      <div className="text-area">
        <textarea
          name="comment"
          id={feed.id}
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        ></textarea>
      </div>

      <button onClick={() => handleEdit(feed)}>UPDATE</button>
    </div>
  );
};
