import React from "react";
import InputField from "../../components/inputField/InputField";
import { StyledNavBar } from "./StyledNavBar.styles";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import userImage from "../../assets/images/ayock.jpg";

const NavBar = () => {
  return (
    <StyledNavBar className="sticky">
      <div className="navbar-wrapper">
        <div className="d-flex align-items-center barIconSearch-wrapper">
          <div className="barsIcon-wrapper d-flex align-items-center justify-content-center me-3">
            <FaBars className="orange-color bars-icon" />
          </div>
          <div>
            <InputField placeholder="Search" />
          </div>
        </div>
        <div className="d-flex align-items-center notification-wrapper">
          <div className="d-flex align-items-center me-3 navItem">
            <i>
              <AiOutlineMail className="mail-icon" />
            </i>
            <span className="mx-2">Messages</span>
            <FaAngleDown />
          </div>
          <div className="d-flex align-items-center me-3 navItem">
            <AiOutlineBell />
            <span className="mx-2">Notification</span>
            <FaAngleDown />
          </div>
          <div className="d-flex align-items-center navItem">
            <img
              src={userImage}
              width="40"
              height="40"
              className="userImage"
              alt="ayock"
            />
            <span className="mx-2">Ayockson</span>
            <FaAngleDown />
          </div>
        </div>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
