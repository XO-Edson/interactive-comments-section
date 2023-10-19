import React from "react";

import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import { ReplyBox } from "./ReplyBox";
import { EditView } from "./EditView";

export const ProfileComment = ({
  feed,
  handleReply,
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
    <div>
      <div className="comment-container">
        <div className="counter">
          <div className="counter-info">
            <img
              src={plusIcon}
              alt="plus icon"
              onClick={() => (!likes ? addLikes(feed.id) : null)}
            />

            <p>{feed.likes}</p>
            <img
              src={minusIcon}
              alt="minus icon"
              onClick={() => (likes ? removeLikes(feed.id) : null)}
            />
          </div>
        </div>
        <div className="profile">
          <div className="profile-info">
            <img src={feed.profilePicture} alt="" />
            <p className="name">{feed.username}</p>
            <p>{feed.date}</p>
          </div>
          <div className="reply" onClick={handleReply}>
            {feed.admin && (
              <>
                <button id={feed.id} onClick={(e) => handleDelete(e.target.id)}>
                  Delete
                </button>
                <button onClick={toggleEdit}>Edit</button>
              </>
            )}
            <img src={ReplyIcon} alt="" />
            <p id={feed.id}>Reply</p>
          </div>
        </div>
        <div className="comment">
          {edit.slice(0, 5) == feed.comment.slice(0, 5) && feed.admin ? (
            <EditView
              setEdit={setEdit}
              edit={edit}
              feed={feed}
              handleEdit={handleEdit}
            />
          ) : (
            <p>{feed.comment}</p>
          )}
        </div>
      </div>
      {feed.reply && (
        <ReplyBox
          feed={feed}
          newReply={newReply}
          setNewReply={setNewReply}
          replyBtn={replyBtn}
        />
      )}
    </div>
  );
};
