import React from "react";

import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import editIcon from "./images/icon-edit.svg";
import deleteIcon from "./images/icon-delete.svg";
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
  const popUp = useSelector((state) => state.feedPosts.popUp);

  const toggleEdit = () => {
    if (!edit) {
      dispatch(postsSliceActions.updateEdit(feed.comment));
    }
  };

  const togglePopup = () => {
    dispatch(postsSliceActions.togglePopup());
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

  const handleDelete = (e) => {
    dispatch(postsSliceActions.handleDelete(e.target.id));
    dispatch(postsSliceActions.togglePopup());
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
        </div>
        <div className="reply">
          {feed.admin && (
            <>
              <button className="deleteBtn" onClick={togglePopup}>
                <img src={deleteIcon} alt="deleteBtn" />
                Delete
              </button>
              <button onClick={toggleEdit} className="editBtn">
                <img src={editIcon} alt="editBtn" />
                Edit
              </button>
            </>
          )}
          <img src={ReplyIcon} alt="" />
          <p id={feed.id} onClick={(e) => handleReplyBtn(e)}>
            Reply
          </p>
        </div>

        {/*  */}
        {popUp && (
          <div
            className="popup-background"
            style={{ visibility: popUp ? "visible" : "hidden" }}
          >
            <div className="delete-Popup">
              <h3>Delete comment</h3>
              <p>
                Are you sure you want to delete this comment? This will remove
                the comment ans cant be undone.
              </p>
              <div className="popup-buttons">
                <button onClick={togglePopup} className="cancelBtn-popup">
                  NO,CANCEL
                </button>
                <button
                  id={feed.id}
                  onClick={(e) => handleDelete(e)}
                  className="deleteBtn-popup"
                >
                  YES,DELETE
                </button>
              </div>
            </div>
          </div>
        )}
        {/*  */}

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
