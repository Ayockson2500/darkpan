import React, { useState } from "react";
import StyledLogin from "./StyledLogin.styles";
import FieldInput from "../../module/common/inputfields/FieldInput";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../module/common/buttons/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSelector } from "react-redux";

const Login = () => {
  const { isLoggin } = useSelector((store) => store.auth);

  // console.log(isLoggin);
  const [passwordType, setPasswordType] = useState("password");
  const [showPassword, setShowPassword] = useState(true);
  const [formData, setFormData] = useState({})
  const [disabledButton, setDisabledButton] = useState(true);
  
  const userData = JSON.parse(localStorage.getItem('userData'))
  console.log(userData);

  const handleLogin = () => {
    console.log("click");
  };

  const getInputValue = (value, name) => {
        const data = {[name]: value}
        setFormData({...formData, ...data})
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleCheck = () => {
    setDisabledButton(!disabledButton);
  };

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
          name={"email"}
          className="navy-text"
          onChange={(e) => getInputValue(e.target.value, e.target.name)}
        />
        <div className="password-field">
          <FieldInput
            placeholder="password"
            type={passwordType ? "password" : "text"}
            name={"password"}
            className="navy-text"
            onChange={(e) => getInputValue(e.target.value, e.target.name)}
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
              onChange={handleCheck}
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
          disabled={disabledButton}
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
