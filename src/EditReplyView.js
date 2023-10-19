import React from "react";

export const EditReplyView = ({ setEdit, edit, handleReplyEdit, reply }) => {
  return (
    <div className="edit-view">
      <div className="text-area">
        <textarea
          name="comment"
          id={reply.id}
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        ></textarea>
      </div>

      <button onClick={() => handleReplyEdit(reply)}>UPDATE</button>
    </div>
  );
};
