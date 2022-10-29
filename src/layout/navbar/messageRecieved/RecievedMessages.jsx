import React from 'react';
import {StyledRecievedMessages} from "./StyledRecievedMessages.styles"
import userImage from "../../../../assets/images/ayock.jpg";

const RecievedMessages = () => {

 const messagesElement = [
  {
    senderName: "Jhon Doe",
    message: "Short message goes here...",
    time: "15 hr ago",
    senderPhoto: userImage
  },
  {
    senderName: "Jhon Doe",
    message: "Short message goes here...",
    time: "15 min ago",
    senderPhoto: userImage
  },
  {
    senderName: "Jhon Doe",
    message: "Short message goes here...",
    time: "15 min ago",
    senderPhoto: userImage
  },
  {
    senderName: "Jhon Doe",
    message: "Short message goes here...",
    time: "15 min ago",
    senderPhoto: userImage
  }
]
  return (
    <StyledRecievedMessages>
        <div>
            {
                messagesElement.map((content, index) => (
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
                ))
            }
        </div>
    </StyledRecievedMessages>
  )
}

export default RecievedMessages