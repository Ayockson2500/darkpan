import React from "react";
import { StyledMap } from "./StyledMap.styles";

const Map = () => {

  return (
    <StyledMap>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.038411141903!2d3.384936464304008!3d7.095879261467008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103a4ac3aad61d17%3A0x8cb9281ed8dd8efd!2s110118%2C%20Kobape!5e0!3m2!1sen!2sng!4v1647354072076!5m2!1sen!2sng"
          width="100%"
          height="220vh"
          style={{ border: "border:0" }}
          allowFullScreen={true}
          loading="lazy"
          title="myFrame"
        ></iframe>
      </div>
    </StyledMap>
  );
};

export default Map;
