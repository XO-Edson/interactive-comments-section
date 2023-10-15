import React from "react";

import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import { ReplyBox } from "./ReplyBox";

export const ProfileComment = ({
  feed,
  handleReply,
  comment,
  setComment,
  replyBtn,
  addLikes,
  removeLikes,
  likes,
}) => {
  return (
    <div>
      <div className="comment-container">
        <div className="counter">
          <div className="counter-info">
            <img
              src={plusIcon}
              alt="plus icon"
              onClick={() => (likes ? addLikes(feed.id) : null)}
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
            <img src={ReplyIcon} alt="" />
            <p id={feed.id}>Reply</p>
          </div>
        </div>
        <div className="comment">
          <p>{feed.comment}</p>
        </div>
      </div>
      {feed.reply && (
        <ReplyBox
          feed={feed}
          comment={comment}
          setComment={setComment}
          replyBtn={replyBtn}
        />
      )}
    </div>
  );
};
