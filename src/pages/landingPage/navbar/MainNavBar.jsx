import React from "react";
import StyledMainNavBar from "./StyledMainNavBar.styles";
import { navElements } from "./navElements";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../module/common/buttons/Button";

const MainNavBar = ({isSignIn, setIsSignIn}) => {
    console.log(isSignIn);
    const navigate = useNavigate()

    if (!isSignIn) {
        setIsSignIn(false)
    } else {
        setIsSignIn(true)
        navigate("/dashboard")
    }
  return (
    <StyledMainNavBar >
        <div>
            <h1 className="logo">Logo</h1>
        </div>
      <div className="d-flex">
        {navElements.map((item, idx) => (
          <p className="me-4" key={idx}>
            <Link>{item.title}</Link>
          </p>
        ))}
        <Button className={"me-3 signIn-Btn"}><Link to={"/signin"}>Log In</Link></Button>
        <Button className={"signUp-btn"}><Link to={"/signup"}>Sign Up</Link></Button>
      </div>
    </StyledMainNavBar>
  );
};

export default MainNavBar;
