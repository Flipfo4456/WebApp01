import React from "react";

const MapComponent = () => {
  return (
    <div className="map-container">
      <iframe
        className="map-frame"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345091237!2d99.792842!3d14.846283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTQuODQ2MjgzLCA5OS43OTI4NDI!5e0!3m2!1sth!2sth"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
