import React from "react";
import { StyledCheckBox } from "./StyledCheckBox.styles"

const CheckBox = () => {
  return (
    <StyledCheckBox>
      <input className="form-check-input" type="checkbox" />
    </StyledCheckBox>
  );
};

export default CheckBox;
