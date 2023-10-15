import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";

export const CommentBox = ({ posts, handleFeed, post, setPost }) => {
  //const adminPost = posts.find((post) => post.admin);

  return (
    <div className="comment-area">
      <div className="user-image">
        <img src={JuliusOmo} alt="" />
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
