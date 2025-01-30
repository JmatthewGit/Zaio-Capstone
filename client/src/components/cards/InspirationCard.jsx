import React from "react";
import "../../styles/InspirationCards.css";

const InspirationCard = ({src, title, distance}) => {
  return (
    <div className="inspiration_card">
      <img src={src} alt="" />
      <div className="inspiration_card_info">
        <h2>{title}</h2>
        <h5>{distance}</h5>
      </div>
    </div>
  )
}

export default InspirationCard;