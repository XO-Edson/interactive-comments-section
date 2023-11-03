import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const ReplyBox = ({ feed, reply }) => {
  const dispatch = useDispatch();
  const newReply = useSelector((state) => state.feedPosts.newReply);

  const handleChange = (e) => {
    dispatch(postsSliceActions.updateReply(e.target.value));
  };

  const replyBtn = () => {
    dispatch(postsSliceActions.replybtn());
    dispatch(postsSliceActions.handleReplyBtn(feed.id));
  };

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
          onChange={(e) => handleChange(e)}
        ></textarea>
      </div>
      <div>
        <button onClick={replyBtn}>Reply</button>
      </div>
    </div>
  );
};
