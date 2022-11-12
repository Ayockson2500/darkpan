import React, { useState } from "react";
import { StyledTestimonial } from "./StyledTestimonial.styles";
import { customersReview } from "./customersReview";

const Testimonial = () => {
  const reviews = customersReview;
  const [counter, setCounter] = useState(0);
  const displayClientReview = () => {
    if (counter > reviews.length-1) {
      setCounter(counter)
    }
    setCounter(counter + 1)
  };

  setInterval(() => {
    displayClientReview();
  }, 5000);

  return (
    <StyledTestimonial>
      <h4>Testimonial</h4>
      <div className="testimonial-content text-center">
        <img
          className="client-image"
          src={reviews[counter].picture}
          width="100px"
          height="100px"
          alt=""
        />
        <h3 className="client-name">{reviews[counter].name}</h3>
        <p className="client-profession">{reviews[counter].profession}</p>
        <p className="text-content">{reviews[counter].review}</p>
      </div>
    </StyledTestimonial>
  );
};

export default Testimonial;
