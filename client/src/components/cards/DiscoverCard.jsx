import React from "react";
import "../../styles/DiscoverCard.css";

const DiscoverCard = ({ src, title, text }) => {
    return (
      <div className="discover_card">
        <div className="discover_card_info">
          <h2>{title}</h2>
          <button>{text}</button>
        </div>
        <div className="discover_card_image" style={{ backgroundImage: `url(${src})` }}></div>
      </div>
    );
  };

export default DiscoverCard;