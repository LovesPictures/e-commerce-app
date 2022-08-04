import React from "react";
import "./HeadedListCard.css";

export const HeadedListCard = (props) => {
  return (
    <div className="Card__c">
      {/* card1 */}
      <div className="Card__text-container-e">
        <h2 className="Card__Information">{props.Information}</h2>
        <span className="Card__AboutUs">{props.AboutUs}</span>
        <span className="Card__LatestPost">{props.LatestPost}</span>
        <span className="Card__ContactUs">{props.ContactUs}</span>

        {/* card2 */}
        <h2 className="Card__MyAccount">{props.MyAccount}</h2>
        <span className="Card__Login">{props.Login}</span>
        <span className="Card__Cart">{props.Cart}</span>
        <span className="Card__WishList">{props.WishList}</span>
        <span className="Card__OrderHistory">{props.OrderHistory}</span>

        {/* carrd3 */}
        <h2 className="Card__HelpSupport">{props.HelpSupport}</h2>
        <span className="Card__Payment">{props.Payment}</span>
        <span className="Card__Returns">{props.Returns}</span>
        <span className="Card__Delivery">{props.Delivery}</span>
        <span className="Card__Privacy">{props.Privacy}</span>
      </div>
    </div>
  );
};
