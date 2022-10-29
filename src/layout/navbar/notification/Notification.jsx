import React from "react";
import { StyledNotification } from "./StyledNotification.styles";
import { Link } from "react-router-dom";

const Notification = () => {
  const notificationElements = [
    {
      title: "Profile updated",
      time: "15 minutes ago",
      url: "#",
    },
    {
      title: "New user added",
      time: "15 minutes ago",
      url: "#",
    },
    {
      title: "Password Changed",
      time: "15 minutes ago",
      url: "#",
    },
  ];
  return (
    <StyledNotification>
      <div>
        {notificationElements.map((notification, idx) => (
          <div key={idx} className="notificationItem">
            <div className="contentItem text-center">
              <Link>
                <p className="lightColor fs-14">{notification.title}</p>
                <p className="GrayColor fs-12">{notification.time}</p>
              </Link>
            </div>
          </div>
        ))}
        <div className="text-center allMessage-wrapper">
            <Link>See all notification</Link>
        </div>
      </div>
    </StyledNotification>
  );
};

export default Notification;
