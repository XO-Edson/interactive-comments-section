import React from "react";

export const ReplyBox = ({ posts }) => {
  const adminPost = posts.find((post) => post.admin);
  return (
    <div className="comment-area">
      <div className="user-image">
        <img src={adminPost ? adminPost.profilePicture : undefined} alt="" />
      </div>
      <div className="text-area">
        <textarea
          name="comment"
          id="comment"
          placeholder="Add a comment..."
        ></textarea>
      </div>
      <div>
        <button>Reply</button>
      </div>
    </div>
  );
};
