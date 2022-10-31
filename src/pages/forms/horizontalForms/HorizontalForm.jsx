import React from "react";
import Button from "../../../module/common/buttons/Button";
import { StyleHorizontalForm } from "./StyledHorizontalForm.styles";
import { Link } from "react-router-dom";
import FieldInput from "../../../module/common/inputfields/FieldInput";
import CheckBox from "../../../module/common/checkbox/CheckBox";

const HorizontalForm = () => {
  return (
    <StyleHorizontalForm>
      <p className="title">Horizontal Form</p>
      <div>
        <div className="d-flex align-items-cente">
          <label className="email-label">Email</label>
          <FieldInput className="inputField" />
        </div>
        <div className="d-flex">
          <label className="password-label">Password</label>
          <FieldInput className="inputField" />
        </div>
        <div className="d-flex">
          <p className="navy-color me-4 fs-14">Radios</p>
          <div className="">
            <div className="d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="male"
              />
              <p className="navy-color fs-14 ms-2">First Radio</p>
              <br />
            </div>
            <div className="d-flex align-items-center">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="female"
              />
              <p className="navy-color fs-14 ms-2">Second Radio</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-cnter checkbox-wrapper my-3">
          <p className="navy-color fs-14 me-2">Checkbox</p>
          <div className="d-flex">
            <CheckBox />{" "}
            <span className="navy-color fs-14 ms-2">Check me Out</span>
          </div>
        </div>
        <Button>
          <Link>Sign in</Link>
        </Button>
      </div>
    </StyleHorizontalForm>
  );
};

export default HorizontalForm;
