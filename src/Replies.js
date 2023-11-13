import React from "react";
import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";
import editIcon from "./images/icon-edit.svg";
import deleteIcon from "./images/icon-delete.svg";
import { ReplyBox } from "./ReplyBox";
import { EditReplyView } from "./EditReplyView";
import { useDispatch, useSelector } from "react-redux";
import { postsSliceActions } from "./app/postsSlice";

export const Replies = ({
  feed,
  reply,
  newReply,
  setNewReply,
  replyBtn,

  handleReplyEdit,
  setEdit,
}) => {
  const dispatch = useDispatch();
  const likes = useSelector((state) => state.feedPosts.likes);
  const edit = useSelector((state) => state.feedPosts.edit);
  const popUp = useSelector((state) => state.feedPosts.popUp);

  const handleDelete = (e) => {
    dispatch(postsSliceActions.handleDelete(e.target.id));
    dispatch(postsSliceActions.togglePopup());
  };

  const togglePopup = () => {
    dispatch(postsSliceActions.togglePopup());
  };

  const addLikes = () => {
    dispatch(postsSliceActions.addLikes(reply.id));
  };
  const removeLikes = () => {
    dispatch(postsSliceActions.removeLikes(reply.id));
  };

  const toggleReplyEdit = () => {
    if (!edit) {
      dispatch(postsSliceActions.updateEdit(reply.comment));
    }
  };
  const handleReplyBtn = (e) => {
    dispatch(postsSliceActions.handleReplyBtn(e.target.id));
  };

  return (
    <div key={reply.id} className="replies">
      <div className="comment-container">
        <div className="counter">
          <div className="counter-info">
            <img
              src={plusIcon}
              alt="plus icon"
              onClick={() => (!likes ? addLikes(reply.id) : null)}
            />
            <p>{reply.likes}</p>
            <img
              src={minusIcon}
              alt="minus icon"
              onClick={() => (likes ? removeLikes(reply.id) : null)}
            />
          </div>
        </div>
        <div className="profile">
          <div className="profile-info">
            <img src={reply.profilePicture} alt="" />
            <p className="name">{reply.username}</p>
            <p>{reply.date}</p>
          </div>
        </div>
        <div className="reply">
          {reply.admin && (
            <>
              <button className="deleteBtn" onClick={togglePopup}>
                <img src={deleteIcon} alt="deleteBtn" />
                Delete
              </button>
              <button onClick={toggleReplyEdit} className="editBtn">
                <img src={editIcon} alt="editBtn" />
                Edit
              </button>
            </>
          )}

          <img src={ReplyIcon} alt="" />
          <p id={reply.id} onClick={(e) => handleReplyBtn(e)}>
            Reply
          </p>
        </div>

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
                  id={reply.id}
                  onClick={(e) => handleDelete(e)}
                  className="deleteBtn-popup"
                >
                  YES,DELETE
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="comment">
          {edit.slice(0, 5) == reply.comment.slice(0, 5) && reply.admin ? (
            <EditReplyView
              setEdit={setEdit}
              edit={edit}
              reply={reply}
              handleReplyEdit={handleReplyEdit}
            />
          ) : (
            <p>{reply.comment}</p>
          )}
        </div>
      </div>
      {reply.reply && (
        <ReplyBox
          feed={feed}
          reply={reply}
          newReply={newReply}
          setNewReply={setNewReply}
          replyBtn={replyBtn}
        />
      )}
    </div>
  );
};
