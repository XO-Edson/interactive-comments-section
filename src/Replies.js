import React from "react";
import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import { ReplyBox } from "./ReplyBox";
import { EditView } from "./EditView";

export const Replies = ({
  feed,
  handleReply,
  reply,
  newReply,
  setNewReply,
  replyBtn,
  addLikes,
  removeLikes,
  likes,
  handleDelete,
  handleEdit,
  setEdit,
  edit,
}) => {
  const toggleEdit = () => {
    if (!edit) {
      setEdit(feed.comment);
    }
  };

  return (
    <div key={reply.id} className="replies">
      <div className="comment-container">
        <div className="counter">
          <div className="counter-info">
            <img
              src={plusIcon}
              alt="plus icon"
              onClick={() => (!likes ? addLikes(reply.id) : null)}
            />
            <p>{reply.likes}</p>
            <img
              src={minusIcon}
              alt="minus icon"
              onClick={() => (likes ? removeLikes(reply.id) : null)}
            />
          </div>
        </div>
        <div className="profile">
          <div className="profile-info">
            <img src={reply.profilePicture} alt="" />
            <p className="name">{reply.username}</p>
            <p>{reply.date}</p>
          </div>
          <div className="reply" onClick={handleReply}>
            {reply.admin && (
              <>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={toggleEdit}>Edit</button>
              </>
            )}
            <img src={ReplyIcon} alt="" />
            <p id={reply.id}>Reply</p>
          </div>
        </div>
        <div className="comment">
          {edit && reply.admin ? (
            <EditView
              setEdit={setEdit}
              edit={edit}
              feed={feed}
              handleEdit={handleEdit}
            />
          ) : (
            <p>{reply.comment}</p>
          )}
        </div>
      </div>
      {reply.reply && (
        <ReplyBox
          feed={feed}
          reply={reply}
          newReply={newReply}
          setNewReply={setNewReply}
          replyBtn={replyBtn}
        />
      )}
    </div>
  );
};
