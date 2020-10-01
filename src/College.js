import React from "react";
import "./College.css";
function College({ id, title, image, price, rating }) {
  return (
    <div classname="college">
      <div className="college__info">
        <p>{title}</p>
        <p className="college__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="college__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img classname="college-img" alt="" src={image} />
    </div>
  );
}

export default College;
