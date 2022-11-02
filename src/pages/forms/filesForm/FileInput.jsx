import React from "react";
import FieldInput from "../../../module/common/inputfields/FieldInput";
import { StyleFileInput } from "./StyledFileInput.styles";

const FileInput = () => {
  return (
    <StyleFileInput>
      <form>
        <p className="title">File Input</p>
        <div className="navy-color fs-14">
          <label htmlFor="">Default file input example</label>
          <FieldInput className="p-0" type="file" />
        </div>
        <div className="navy-color fs-14">
          <label htmlFor="">Multiple files input example</label>
          <FieldInput className="p-0" type="file" multiple />
        </div>
        <div className="navy-color fs-14">
          <label htmlFor="">Small file input example</label>
          <FieldInput className="p-0" type="file" />
        </div>
        <div className="navy-color fs-14">
          <label htmlFor="">Large file input example</label>
          <FieldInput className="p-0" type="file" />
        </div>
      </form>
    </StyleFileInput>
  );
};

export default FileInput;
