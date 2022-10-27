import React from 'react'
import StyledLogin from "./StyledLogin.styles"
import FieldInput from "../../module/common/inputfields/FieldInput";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../module/common/buttons/Button";

const Login = () => {
  return (
    <StyledLogin>
      <form>
        <div className="d-flex align-items-center justify-content-between logo-wrapper">
          <div className='d-flex align-items-center'>
            <FaUserEdit className="orange-color me-2" />
            <span className="orange-color">DarkPan</span>
          </div>
          <div className="light-text">Sign In</div>
        </div>
        <FieldInput
          placeholder="Email address"
          type="email"
          className="navy-text"
        />
        <FieldInput
          placeholder="password"
          type="password"
          className="navy-text"
        />
        <div className="d-flex align-items-center justify-content-between">
          <div><input type="checkbox" className="form-check-input" /> <span className="navy-text fs-14">Check me out</span></div>
          <Link to="" className="fs-14">
            Forget Password
          </Link>
        </div>
        <Button className="signin-btn light-text">Sign In</Button>
        <p className="navy-text text-center fs-14">
        Don't have an Account?{" "}
          <Link to="/signup" className="fs-14">
            Sign Up
          </Link>
        </p>
      </form>
    </StyledLogin>
  )
}

export default Login