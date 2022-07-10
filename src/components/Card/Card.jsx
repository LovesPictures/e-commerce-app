import React from "react";

import "./Card.css";

export const Card = (props) => {
  return (
    <div className="Card {props.type === 'A' ? 'Card--A' : 'Card--B'}">
      {/* Notes: alt tag and why "" because the HTML will be returning a string */}
      <img src={props.img} alt="{props.title}" className="Card__img" />
      <div className="Card__text-container">
        <h2 className="Card__text-title">{props.title}</h2>
        <p className="Card__text-description">{props.description}</p>
      </div>
    </div>
  );
};
