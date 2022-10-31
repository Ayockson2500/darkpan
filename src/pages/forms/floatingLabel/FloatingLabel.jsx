import React from "react";
import { StyledFloatingLabel } from "./StyledFloatingLabel.styles";

const FloatingLabel = () => {
  return (
    <StyledFloatingLabel>
      <p className="title">Basic Form</p>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mb-3">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Password</label>
      </div>
      <div class="form-floating mb-3">
        <div className="form-floating mb-3">
          <select name="" id="floatingSelect">
            <option value="">Open this select Menu</option>
            <option value="">One</option>
            <option value="">Two</option>
            <option value="">Three</option>
          </select>
          <label for="floatingSelect">Work with select</label>
        </div>
        <textarea
          name=""
          cols="30"
          rows="5"
          type="text"
          class="form-control"
          id="floatingTextarea"
          placeholder="Leave a comment"
          style={{height: "150px"}}
        ></textarea>
        <label for="floatingTextarea">Comments</label>
      </div>
    </StyledFloatingLabel>
  );
};

export default FloatingLabel;
