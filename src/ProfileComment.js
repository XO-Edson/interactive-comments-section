import React from "react";

import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import { ReplyBox } from "./ReplyBox";
import { EditView } from "./EditView";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const ProfileComment = ({
  feed,

  newReply,
  setNewReply,
  replyBtn,
}) => {
  const dispatch = useDispatch();

  const likes = useSelector((state) => state.feedPosts.likes);
  const edit = useSelector((state) => state.feedPosts.edit);

  const toggleEdit = () => {
    if (!edit) {
      dispatch(postsSliceActions.updateEdit(feed.comment));
    }
  };

  const handleDelete = (e) => {
    dispatch(postsSliceActions.handleDelete(e.target.id));
  };

  const addLikes = () => {
    dispatch(postsSliceActions.addLikes(feed.id));
  };
  const removeLikes = () => {
    dispatch(postsSliceActions.removeLikes(feed.id));
  };

  const handleEdit = () => {
    dispatch(postsSliceActions.handleEdit());
  };

  const handleReplyBtn = (e) => {
    dispatch(postsSliceActions.handleReplyBtn(e.target.id));
  };

  return (
    <div>
      <div className="comment-container">
        <div className="counter">
          <div className="counter-info">
            <img
              src={plusIcon}
              alt="plus icon"
              onClick={() => (!likes ? addLikes(feed.id) : null)}
            />

            <p>{feed.likes}</p>
            <img
              src={minusIcon}
              alt="minus icon"
              onClick={() => (likes ? removeLikes(feed.id) : null)}
            />
          </div>
        </div>
        <div className="profile">
          <div className="profile-info">
            <img src={feed.profilePicture} alt="" />
            <p className="name">{feed.username}</p>
            <p>{feed.date}</p>
          </div>
          <div className="reply" onClick={(e) => handleReplyBtn(e)}>
            {feed.admin && (
              <>
                <button id={feed.id} onClick={(e) => handleDelete(e)}>
                  Delete
                </button>
                <button onClick={toggleEdit}>Edit</button>
              </>
            )}
            <img src={ReplyIcon} alt="" />
            <p id={feed.id}>Reply</p>
          </div>
        </div>
        <div className="comment">
          {edit.slice(0, 5) == feed.comment.slice(0, 5) && feed.admin ? (
            <EditView
              setEdit={handleEdit}
              edit={edit}
              feed={feed}
              handleEdit={handleEdit}
            />
          ) : (
            <p>{feed.comment}</p>
          )}
        </div>
      </div>
      {feed.reply && (
        <ReplyBox
          feed={feed}
          newReply={newReply}
          setNewReply={setNewReply}
          replyBtn={replyBtn}
        />
      )}
    </div>
  );
};
