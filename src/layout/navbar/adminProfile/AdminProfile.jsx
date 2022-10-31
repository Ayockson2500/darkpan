import React from "react";
import { StyledAdminProfile } from "./StyledAdminProfile.styles";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const adminProfileElements = [
    {
      title: "Profile",
      url: "/profile",
    },
    {
      title: "Settings",
      url: "/settings",
    },
    {
      title: "Log Out",
      url: "/signin",
    },
  ];

  return (
    <StyledAdminProfile>
      <div>
        {adminProfileElements.map((content, idx) => {
          return (
            <div key={idx} className="px-3">
              <Link to={content.url}>{content.title}</Link>
            </div>
          );
        })}
      </div>
    </StyledAdminProfile>
  );
};

export default AdminProfile;
