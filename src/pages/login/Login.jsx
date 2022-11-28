import React, { useState } from "react";
import StyledLogin from "./StyledLogin.styles";
import FieldInput from "../../module/common/inputfields/FieldInput";
import { FaUserEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../module/common/buttons/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import data from "../../mockApi.json"
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Login = () => {
  const { isLoggin } = useSelector((store) => store.auth);

  console.log(isLoggin);
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  // const [disabledButton, setDisabledButton] = useState(true);


  // require('react-dom');
  // window.React2 = require('react');
  // console.log(window.React1 === window.React2);

  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("click");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      // return toast.error('email field can Not be empty!')
      return toast.error("this title already exist");
    }
    navigate("/dashboard")
  };

  // const handleCheck = () => {
  //   setDisabledButton(!disabledButton);
  // };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    setPasswordType(!passwordType);
  };

  return (
    <StyledLogin>
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex align-items-center justify-content-between logo-wrapper">
          <div className="d-flex align-items-center">
            <FaUserEdit className="orange-color me-2" />
            <span className="orange-color">DarkPan</span>
          </div>
          <div className="light-text">Sign In</div>
        </div>
        <FieldInput
          placeholder="Email address"
          type="email"
          className="navy-text"
          onChange={(e) => setEmail({...email, email: e.target.value})}
        />
        <div className="password-field">
          <FieldInput
            placeholder="password"
            type={passwordType ? "password" : "text"}
            className="navy-text"
            onChange={(e) =>
              setPassword({ ...password, password: e.target.value })
            }
          />
          <span onClick={toggleShowPassword} className="eye-icon-wrapper">
            {showPassword ? (
              <FaEye className="eye-icon" />
            ) : (
              <FaEyeSlash className="eye-icon" />
            )}
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <input
              // onChange={handleCheck}
              type="checkbox"
              className="form-check-input"
            />{" "}
            <span className="navy-text fs-14">Check me out</span>
          </div>
          <Link to="" className="fs-14">
            Forget Password
          </Link>
        </div>
        <Button
          // disabled={disabledButton}
          onClick={handleLogin}
          className="signin-btn light-text"
        >
          Sign In
        </Button>
        <p className="navy-text text-center fs-14 btn">
          Don't have an Account?{" "}
          <Link to="/signup" className="fs-14">
            Sign Up
          </Link>
        </p>
      </form>
    </StyledLogin>
  );
};

export default Login;
