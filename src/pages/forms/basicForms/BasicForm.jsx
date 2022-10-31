import React from "react";
import Button from "../../../module/common/buttons/Button";
import CheckBox from "../../../module/common/checkbox/CheckBox";
import FieldInput from "../../../module/common/inputfields/FieldInput";
import { StyledBasicForm } from "./StyledBasicForm.styles";
import { Link } from "react-router-dom";

const BasicForm = () => {
  return (
    <StyledBasicForm>
      <p className="title">Basic Form</p>
      <div>
        <div className="email-field-wrapper">
          <FieldInput label="Email address" className='inputField' />
          <span>We'll never share your email with anyone else.</span>
        </div>
        <div>
          <FieldInput label="Password" className='inputField' />
        </div>
        <div className="d-flex align-items-cnter checkbox-wrapper">
          <CheckBox /> <span>Check me Out</span>
        </div>
        <Button>
          <Link>Sign in</Link>
        </Button>
      </div>
    </StyledBasicForm>
  );
};

export default BasicForm;
