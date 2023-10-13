import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";

export const CommentBox = ({ posts, handlePost, comment, setComment }) => {
  //const adminPost = posts.find((post) => post.admin);

  return (
    <div className="comment-area">
      <div className="user-image">
        <img src={JuliusOmo} alt="" />
      </div>
      <div className="text-area">
        <textarea
          name="comment"
          id="comment"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </div>
      <div>
        <button onClick={handlePost}>SEND</button>
      </div>
    </div>
  );
};
