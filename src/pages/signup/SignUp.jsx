import React, { useState } from "react";
import FieldInput from "../../module/common/inputfields/FieldInput";
import StyledSignUp from "./StyledSignUp.styles";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../module/common/buttons/Button";
import { passwordIsValid } from "../../utils/validate";
import { emailValidation } from "../../utils/validate";
import { toast } from "react-toastify";

const SignUp = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const ValidatePassword = () => {

    if (formData.password !== formData.confirmPassword) {
      return toast.error("Passwaord does not match!")
    }  else {
      setFormData()
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (email)
  };
  return (
    <StyledSignUp>
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex align-items-center justify-content-between logo-wrapper">
          <div className="d-flex align-items-center">
            <FaUserEdit className="orange-color me-2" />
            <span className="orange-color">DarkPan</span>
          </div>
          <div className="light-text">Sign Up</div>
        </div>
        <FieldInput
          placeholder="Username"
          type="text"
          value={formData.userName}
          className="navy-text"
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
        <FieldInput
          placeholder="Email address"
          type="email"
          className="navy-text"
          onChange={(e) =>
            setFormData({ ...formData, email: !emailValidation(e.target.value) })
          }
        />
        <FieldInput
          placeholder="password"
          type="password"
          className="navy-text"
          onChange={(e) =>
            setFormData({ ...formData, password: !passwordIsValid(e.target.value) })
          }
        />
        <FieldInput
          placeholder="confirm password"
          type="password"
          className="navy-text"
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <input type="checkbox" className="form-check-input" />{" "}
            <span className="navy-text fs-14">Check me out</span>
          </div>
          <Link to="" className="fs-14">
            Forget Password
          </Link>
        </div>
        <Button className="signUp-btn light-text">Sign Up</Button>
        <p className="navy-text text-center fs-14">
          Already have an Account?{" "}
          <Link to="/signin" className="fs-14">
            Sign In
          </Link>
        </p>
      </form>
    </StyledSignUp>
  );
};

export default SignUp;
