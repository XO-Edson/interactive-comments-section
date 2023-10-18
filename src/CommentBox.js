import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";

export const CommentBox = ({ feed, handleFeed, post, setPost, replies }) => {
  const adminPost = feed.find((feedPost) => feedPost.admin);
  const replyPost = replies.find((reply) => reply.admin);

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
          name="post"
          id="post"
          placeholder="Add a comment..."
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handleFeed}>SEND</button>
      </div>
    </div>
  );
};
