import React from "react";

import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import { ReplyBox } from "./ReplyBox";

export const ProfileComment = ({
  posts,
  handleReply,
  comment,
  setComment,
  replyBtn,
}) => {
  return posts.map((post) => {
    return (
      <div key={post.id}>
        <div className="comment-container">
          <div className="counter">
            <div className="counter-info">
              <img src={plusIcon} alt="plus icon" />
              <p>{post.likes}</p>
              <img src={minusIcon} alt="minus icon" />
            </div>
          </div>
          <div className="profile">
            <div className="profile-info">
              <img src={post.profilePicture} alt="" />
              <p className="name">{post.username}</p>
              <p>{post.date}</p>
            </div>
            <div className="reply" onClick={handleReply}>
              <img src={ReplyIcon} alt="" />
              <p id={post.id}>Reply</p>
            </div>
          </div>
          <div className="comment">
            <p>{post.comment}</p>
          </div>
        </div>
        {post.reply && (
          <ReplyBox
            posts={posts}
            comment={comment}
            setComment={setComment}
            replyBtn={replyBtn}
          />
        )}
      </div>
    );
  });
};
