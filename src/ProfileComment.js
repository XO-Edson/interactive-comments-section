import React from "react";
import AmyRobson from "./images/avatars/image-amyrobson.webp";
import ReplyIcon from "./images/icon-reply.svg";
import plusIcon from "./images/icon-plus.svg";
import minusIcon from "./images/icon-minus.svg";

export const ProfileComment = () => {
  return (
    <div className="comment-container">
      <div className="counter">
        <div className="counter-info">
          <img src={plusIcon} alt="plus icon" />
          <p>12</p>
          <img src={minusIcon} alt="minus icon" />
        </div>
      </div>
      <div className="profile">
        <div className="profile-info">
          <img src={AmyRobson} alt="" />
          <p className="name">amyrobson</p>
          <p>1 month ago</p>
        </div>
        <div className="reply">
          <img src={ReplyIcon} alt="" />
          <p>Reply</p>
        </div>
      </div>
      <div className="comment">
        <p>
          Impressive! Though it seems the drag feature could be improved.But
          overall it looks increadible.You've nailed the design and the
          responsiveness at various breakpoints really well
        </p>
      </div>
    </div>
  );
};
