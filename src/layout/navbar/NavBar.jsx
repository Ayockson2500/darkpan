import React, { useState } from "react";
import InputField from "../../components/inputField/InputField";
import { StyledNavBar } from "./StyledNavBar.styles";
import { FaAngleDown } from "react-icons/fa";
import { AiOutlineBell, AiOutlineMail } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import userImage from "../../assets/images/ayock.jpg";
import Modal from "../../components/modal/Modal";
import RecievedMessages from "./messageRecieved/RecievedMessages";
import Notification from "./notification/Notification";
import AdminProfile from "./adminProfile/AdminProfile";

const NavBar = () => {
  const [showMessages, setShowMessages] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  console.log(showMessages);
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
          <div
            onClick={() => setShowMessages(!showMessages)}
            className="d-flex align-items-center me-3 navItem"
          >
            <i className="itemIcons d-flex align-items-center">
              <AiOutlineMail className="mail-icon" />
            </i>
            <span className="mx-2 fs-12">Messages</span>
            <FaAngleDown />
          </div>
          <div
            onClick={() => setShowNotification(!showNotification)}
            className="d-flex align-items-center me-3 navItem"
          >
            <i className="itemIcons d-flex align-items-center justify-content-center">
              <AiOutlineBell />
            </i>
            <span className="mx-2 fs-12">Notification</span>
            <FaAngleDown />
          </div>
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="d-flex align-items-center navItem"
          >
            <img
              src={userImage}
              width="40"
              height="40"
              className="userImage"
              alt="ayock"
            />
            <span className="mx-2 fs-12">Ayockson</span>
            <FaAngleDown />
          </div>
        </div>
      </div>
      <Modal className={"messages-modal"} show={showMessages}>
        <main>
          <RecievedMessages />
        </main>
      </Modal>
      <Modal className={"notification-modal"} show={showNotification}>
        <main>
          <Notification />
        </main>
      </Modal>
      <Modal className={"profile-modal"} show={showProfile}>
        <main>
          <AdminProfile />
        </main>
      </Modal>
    </StyledNavBar>
  );
};

export default NavBar;
