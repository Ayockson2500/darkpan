import React from "react";
import { Link } from "react-router-dom";
import { StyledRecievedMessages } from "./StyledRecievedMessages.styles";
import userImage from "../../../assets/images/ayock.jpg";

const RecievedMessages = () => {
  const messagesElement = [
    {
      senderName: "Jhon Doe",
      message: "Short message goes here...",
      time: "15 minute ago",
      senderPhoto: userImage,
    },
    {
      senderName: "Jhon Doe",
      message: "Short message goes here...",
      time: "15 minute ago",
      senderPhoto: userImage,
    },
    {
      senderName: "Jhon Doe",
      message: "Short message goes here...",
      time: "15 minute ago",
      senderPhoto: userImage,
    },
  ];
  return (
    <StyledRecievedMessages>
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
              <div className="">
                <p className="sender-name lightColor fs-14">
                  {content.senderName} send you a message
                </p>
                <p className="time GrayColor fs-14">{content.time}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="allMessage-wrapper text-center mt-1">
          <Link to="#">
            See All Message
          </Link>
        </div>
      </div>
    </StyledRecievedMessages>
  );
};

export default RecievedMessages;
