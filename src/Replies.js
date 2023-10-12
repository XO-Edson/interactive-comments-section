import React from "react";
import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import { ReplyBox } from "./ReplyBox";

export const Replies = ({ posts, handleReply, replies }) => {
  return replies.map((reply) => {
    return (
      <div key={reply.id} className="replies">
        <div className="comment-container">
          <div className="counter">
            <div className="counter-info">
              <img src={plusIcon} alt="plus icon" />
              <p>{reply.likes}</p>
              <img src={minusIcon} alt="minus icon" />
            </div>
          </div>
          <div className="profile">
            <div className="profile-info">
              <img src={reply.profilePicture} alt="" />
              <p className="name">{reply.username}</p>
              <p>{reply.date}</p>
            </div>
            <div className="reply" onClick={handleReply}>
              <img src={ReplyIcon} alt="" />
              <p id={reply.id}>Reply</p>
            </div>
          </div>
          <div className="comment">
            <p>{reply.comment}</p>
          </div>
        </div>
        {reply.reply && <ReplyBox posts={posts} />}
      </div>
    );
  });
};
