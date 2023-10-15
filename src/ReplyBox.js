import React from "react";

export const ReplyBox = ({ feed, comment, setComment, replyBtn }) => {
  //const adminfeed = feed.admin;
  return (
    <div className="comment-area">
      <div className="user-image">
        {/* <img src={adminfeed ? adminfeed.profilePicture : undefined} alt="" /> */}
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
        <button onClick={replyBtn}>Reply</button>
      </div>
    </div>
  );
};
