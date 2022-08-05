import React from "react";
import "./HeadedList.css";

//   return <div id="HeadedList">HeadedList</div>;
// };

//export a named export wirh {const} - if export default no {} needed
import { HeadedListCard } from "../HeadedListCard/HeadedListCard";

export const HeadedList = () => {
  return (
    <div className="Grid__container-b">
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
  );
};
