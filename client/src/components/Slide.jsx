import React from "react";
import "../styles/Slide.css";

const Slide = () => {
  return (
    <div>
    <div className="slide">
      <h1>Questions <br /> about <br /> hosting?</h1>
      <button>Ask a Superhost</button>
      <div className="background"></div>
    </div>
    <div className="future_getaways">
        <h1>Inspiration for future getaways</h1>
        <div className="future_getaways_top">
          <h5>Destinations for arts & culture</h5>
          <p>Destinations for outdoor adventure</p>
          <p>Mountain cabins</p>
          <p>Beach destinations</p>
          <p>Popular destinations</p>
          <p>Unique Stays</p>
        </div>

        <div className="future_getaways_info">
          <div className="future_getaways_phoenix">
            <h5>Phoenix</h5>
            <p>Arizona</p>
            <h5>San Francisco</h5>
            <p>California</p>
            <h5>Keswick</h5>
            <p>England</p>
          </div>
          <div className="future_getaways_springs">
            <h5>Hot Springs</h5>
            <p>Arkansas</p>
            <h5>Barcelona</h5>
            <p>Catalonia</p>
            <h5>London</h5>
            <p>England</p>
          </div>
          <div className="future_getaways_la">
            <h5>Los Angeles</h5>
            <p>California</p>
            <h5>Prague</h5>
            <p>Czechia</p>
            <h5>Scarborough</h5>
            <p>England</p>
          </div>
          <div className="future_getaways_san">
            <h5>San Diego</h5>
            <p>California</p>
            <h5>Washington</h5>
            <p>District of Columbia</p>
            <h4>Show more</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;

