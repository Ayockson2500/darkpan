import React, { useState } from "react";
import FieldInput from "../../module/common/inputfields/FieldInput";
import StyledSignUp from "./StyledSignUp.styles";
import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../../module/common/buttons/Button";
import { passwordIsValid } from "../../utils/validate";
import { emailValidation } from "../../utils/validate";
import Modal from "../../components/modal/Modal";

const SignUp = () => {
  const [disabledButton, setDisabledButton] = useState(true);
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [formData, setFormData] = useState({
    userName: { value: "", error: true, touched: false },
    email: { value: "", error: true, touched: false },
    password: { value: "", error: true, touched: false },
    confirmPassword: { value: "", error: true, touched: false },
  });


  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData))
    setTimeout(() => {
      clearFormData()
      setShowSuccessModal(!showSuccessModal)
    }, 1000)
  };

  const userData = () => JSON.parse(localStorage.getItem('userData'))
  console.log(userData);

   const clearFormData = () => {
    setFormData ({userName: { value: "", error: true, touched: false },
    email: { value: "", error: true, touched: false },
    password: { value: "", error: true, touched: false },
    confirmPassword: { value: "", error: true, touched: false },})
   }

   const handleCheck = () => {
    setDisabledButton(!disabledButton);
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
          value={formData.userName.value}
          className="navy-text"
          onChange={(e) =>
            setFormData({
              ...formData,
              userName: {
                value: e.target.value.trim(),
                touched: true,
                error: !Boolean(e.target.value),
              },
            })
          }
          error ={formData.userName.touched && formData.userName.error}
          errorMessage={"User Name cannot be empty!"}
          required
        />
        <FieldInput
          placeholder="Email address"
          type="email"
          value={formData.email.value}
          className="navy-text"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: {
                value: e.target.value,
                touched: true,
                error: !emailValidation(e.target.value.trim()),
              },
            })
          }
          error = {formData.email.touched && formData.email.error}
          errorMessage={"Invalid Email!"}
          required
        />
        <FieldInput
          placeholder="password"
          type="password"
          value={formData.password.value}
          className="navy-text"
          onChange={(e) =>
            setFormData({
              ...formData,
              password: {
                value: e.target.value,
                touched: true,
                error: !passwordIsValid(e.target.value.trim()),
              },
            })
          }
          error = {formData.password.touched && formData.password.error}
          errorMessage={"Invalid password!"}
          required
        />
        <FieldInput
          placeholder="confirm password"
          type="password"
          value={formData.confirmPassword.value}
          className="navy-text"
          onChange={(e) =>
            setFormData({
              ...formData,
              confirmPassword: {
                value: e.target.value,
                touched: true,
                error: e.target.value !== formData.password.value,
              },
            })
          }
          error = {formData.confirmPassword.touched && formData.confirmPassword.error}
          errorMessage={"Password is Not same!"}
          required
        />
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <input onChange={handleCheck} type="checkbox" className="form-check-input" />{" "}
            <span className="navy-text fs-14">Check me out</span>
          </div>
          <Link to="" className="fs-14">
            Forget Password
          </Link>
        </div>
        <Button disabled={disabledButton} type={"submit"} className="signUp-btn light-text">
          Sign Up
        </Button>
        <p className="navy-text text-center fs-14">
          Already have an Account?{" "}
          <Link to="/signin" className="fs-14">
            Sign In
          </Link>
        </p>
      </form>
      <Modal show={showSuccessModal} className="successModal">
        {
          <>
          <h2 className="text-center">Sign Up Was Successfull!</h2>
          <Link to={"/"} className="text-center">Ok</Link>
          </>
        }
      </Modal>
    </StyledSignUp>
  );
};

export default SignUp;
