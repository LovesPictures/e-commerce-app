import React from "react";

// import "./Card.css";
// move to cards --------------------------------------
export const Card = (props) => {
  return (
    <div className="Card">
      {/* ternary operator to select styles using the date type */}
      <div className={props.type === "A" ? "cardA" : "cardB"}>
        {/* Notes: alt tag and why "" because the HTML will be returning a string */}
        <img src={props.img} alt="{props.title}" className="Card__img" />
        <div className="Card__text-container">
          <h2 className="Card__text-title">{props.title}</h2>
          <p className="Card__text-description Underline__action Underline__active-effect">
            {props.description}
          </p>
          {/* <div className="Headline__action Headline__active-effect"> </div> */}
        </div>
      </div>
    </div>
  );
};
