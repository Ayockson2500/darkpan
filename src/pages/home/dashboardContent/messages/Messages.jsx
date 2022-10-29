import React from "react";
import { StyledMessages } from "./StyledMessages.styles";
import { Link } from "react-router-dom";
import { messagesElement } from "./messagesElement";

const Messages = ({className}) => {
  return (
    <StyledMessages>
      <div className="d-flex align-items-center justify-content-between title-wrapper">
        <p>Messages</p>
        <Link>Show All</Link>
      </div>
      <div>
        {messagesElement.map((content, index) => (
          <div key={index} className="d-flex align-items-center contentItem">
            <div>
              <img
                src={content.senderPhoto}
                alt={content.senderName}
                width="40"
                height="40"
                className="userImage"
              />
            </div>
            <div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="sender-name lightColor">{content.senderName}</p>
                <p className="time GrayColor fs-14">{content.time}</p>
              </div>
              <p className="message GrayColor fs-14">{content.message}</p>
            </div>
          </div>
        ))}
      </div>
    </StyledMessages>
  );
};

export default Messages;
