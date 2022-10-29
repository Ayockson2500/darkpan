import React from "react";
import StyledNotFound from "./StyledNotFound.styles";
import errorIcon from "../../assets/images/emergency-logo.PNG";
import { Link } from "react-router-dom";
import Button from "../../module/common/buttons/Button"

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className="notfound-content text-center">
        <img src={errorIcon} alt="errorIcon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          We’re sorry, the page you have looked for does not exist in our
          website! Maybe go to our home page or try to use a search?
        </p>
        <Button className="error-btn">
          <Link>Go Back To Home</Link>
        </Button>
      </div>
    </StyledNotFound>
  );
};

export default NotFound;
