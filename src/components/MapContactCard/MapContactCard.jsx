import React from "react";
import Logo from "../img/logo.png";
import "./MapContactCard.css";

export const MapContactCard = (props) => {
  return (
    <div className="Card__c">
      <div className="CardQ">
        <div className="Card__text-container">
          <div className="Card__logo">
            <img src={Logo} alt="#" />
          </div>
          <h2 className="Card__text-Street">{props.Street}</h2>
          <span className="Card__text-county">{props.County}</span>
          <span className="Card__text-CountryCode">{props.CountryCode}</span>
          <p className="Card__text-ContactNumber">{props.ContactNumber}</p>
          <p className="Card__text-Email">{props.Email}</p>
        </div>
      </div>
    </div>
  );
};
