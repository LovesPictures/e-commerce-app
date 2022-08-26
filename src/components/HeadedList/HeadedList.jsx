import React from "react";
// import "./HeadedList.css";

//export a named export with {const} - if export default no {} needed
import { HeadedListCard } from "../HeadedListCard/HeadedListCard";

export const HeadedList = () => {
  return (
    <div id="Information">
      <div className="Grid__container-e">
        <div className="cardR">
          <HeadedListCard
            Information=" Information"
            AboutUs="About Us"
            ContactUs="Contact Us"
            LatestPost="Latest Post"
          />
        </div>

        <div className="cardR">
          <HeadedListCard
            MyAccount="My Account"
            Login="Login/Register"
            Cart="Cart"
            WishList="Wish List"
            OrderHistory="Order History"
          />
        </div>

        <div className="cardR">
          <HeadedListCard
            HelpSupport="Help & Support"
            Payment="Payments"
            Returns="Returns"
            Delivery="Delivery"
            Privacy=" Privacy & Cookie Policy"
          />
        </div>
      </div>
    </div>
  );
};
