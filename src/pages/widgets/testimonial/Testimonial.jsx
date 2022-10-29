// import React, { useState } from "react";
import { StyledTestimonial } from "./StyledTestimonial.styles";
import userImage from "../../../assets/images/ayock.jpg";
// import { customersReview } from "./customersReview";
// import { useEffect } from "react";

const Testimonial = () => {
//   const [reviews, setReview] = useState(customersReview);
//   const [counter, setCounter] = useState(0)

//   const displayClientReview = () => {}
  
//   useEffect(() => {
//     [...reviews]
//   });

  return (
    <StyledTestimonial>
      <h4>Testimonial</h4>
      <div className="testimonial-content text-center">
        <img
          className="client-image"
          src={userImage}
          width="100px"
          height="100px"
          alt=""
        />
        <h3 className="client-name">Client Name</h3>
        <p className="client-profession">Profession</p>
        <p className="text-content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, non?
        </p>
      </div>
    </StyledTestimonial>
  );
};

export default Testimonial;
