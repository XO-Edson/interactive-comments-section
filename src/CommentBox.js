import React from "react";
import JuliusOmo from "./images/avatars/image-juliusomo.webp";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const CommentBox = ({ replies }) => {
  const dispatch = useDispatch();

  const feed = useSelector((state) => state.feedPosts.feed);
  const post = useSelector((state) => state.feedPosts.post);

  const handleFeed = () => {
    dispatch(postsSliceActions.handleFeedData());
  };

  const handleChange = (e) => {
    dispatch(postsSliceActions.updatePost(e.target.value));
  };

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
          onChange={handleChange}
        ></textarea>
      </div>
      <div>
        <button onClick={handleFeed}>SEND</button>
      </div>
    </div>
  );
};
