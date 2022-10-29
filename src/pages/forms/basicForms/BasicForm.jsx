import React from "react";
import Button from "../../../module/common/buttons/Button";
import CheckBox from "../../../module/common/checkbox/CheckBox";
import FieldInput from "../../../module/common/inputfields/FieldInput";
import { StyledBasicForm } from "./StyledBasicForm.styles";
import { Link } from "react-router-dom";

const BasicForm = () => {
  return (
    <StyledBasicForm>
      <h3>Basic Form</h3>
      <div>
        <div>
          <FieldInput label="Email address" />
        </div>
        <FieldInput label="Password" />
        <div className="d-flex align-items-cnter">
          <CheckBox /> <span>Check me Out</span>
        </div>
        <Button>
          <Link>Sign In</Link>
        </Button>
      </div>
    </StyledBasicForm>
  );
};

export default BasicForm;
