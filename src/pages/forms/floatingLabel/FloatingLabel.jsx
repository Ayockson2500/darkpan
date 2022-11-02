import React from "react";
import { StyledFloatingLabel } from "./StyledFloatingLabel.styles";

const FloatingLabel = () => {
  return (
    <StyledFloatingLabel>
      <p className="title mb-2">Floating Label</p>
      <div class="form-floating mb-3 col-sm-12 col-xl-6">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3 col-sm-12 col-xl-6">
        <input
          type="email"
          class="form-control form-control-input"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInput">Password</label>
      </div>
      <div className="form-floating mb-4 col-sm-12 col-xl-6">
        <select style={{width: "100%", padding: "20px"}} name="" id="floatingSelect">
          <option value="">Open this select Menu</option>
          <option value="">One</option>
          <option value="">Two</option>
          <option value="">Three</option>
        </select>
        <label htmlFor="floatingSelect">Work with select</label>
      </div>
      <div class="form-floating mb-3">
        <textarea
          name=""
          cols="30"
          rows="5"
          type="text"
          class="form-control"
          id="floatingTextarea"
          placeholder="Leave a comment"
          style={{ height: "150px" }}
        ></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
      </div>
    </StyledFloatingLabel>
  );
};

export default FloatingLabel;
