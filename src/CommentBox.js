import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";

export const CommentBox = ({ posts }) => {
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
        ></textarea>
      </div>
      <div>
        <button>SEND</button>
      </div>
    </div>
  );
};
