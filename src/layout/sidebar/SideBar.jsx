import { Link } from "react-router-dom";
import { sideBarElements } from "./sideBarElements";
import StyledSideBar from "./StyledSideBar.styles";
import userImage from "../../assets/images/ayock.jpg";
import { FaUserEdit } from "react-icons/fa";

const SideBar = () => {
  return (
    <StyledSideBar>
      <div className="d-flex align-items-center logo-wrapper">
        <FaUserEdit className="orange-color me-2" />
        <span className="orange-color">DarkPan</span>
      </div>
      <div className="d-flex align-items-center mb-3 adminImage-wrapper">
        <img
          src={userImage}
          alt="adminPhoto"
          width={"40px"}
          height="40px"
          className="userImage"
        />
        <div>
          <p className="m-0">Ayock</p>
          <span className="m-0">Admin</span>
        </div>
      </div>
      <>
        {sideBarElements.map((item, idx) => (
          <div key={idx}>
            <div className={`menu-list ${item.classNme}`}>
              <Link to={item.url} className="d-flex align-items-center">
                <i className="itemIcons d-flex align-items-center justify-content-center">
                  {item.icon}
                </i>
                <p>{item.title}</p>
              </Link>
            </div>
          </div>
        ))}
      </>
    </StyledSideBar>
  );
};

export default SideBar;
