import React from "react";
import "../../Styles/map.scss";
const Map = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.732127741036!2d91.08447591428194!3d22.996875823060385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754a3a3f32e762f%3A0x94d5e12f8adc5ecd!2sTopoder%20bari!5e0!3m2!1sen!2sbd!4v1635096842050!5m2!1sen!2sbd"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
