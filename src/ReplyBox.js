import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";

export const ReplyBox = ({ feed, newReply, setNewReply, replyBtn, reply }) => {
  const adminPost = feed.admin;
  const replyPost = reply ? reply.admin : reply;

  const profilePictureSrc =
    (adminPost && adminPost.profilePicture) ||
    (replyPost && replyPost.profilePicture) ||
    JuliusOmo;
  return (
    <div className="comment-area">
      <div className="user-image">
        <img src={profilePictureSrc} alt="" />
      </div>
      <div className="text-area">
        <textarea
          name="comment"
          id="comment"
          placeholder="Add a comment..."
          value={newReply}
          onChange={(e) => setNewReply(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={replyBtn}>Reply</button>
      </div>
    </div>
  );
};
