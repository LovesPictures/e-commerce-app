import React from "react";
import "./ProductPromo.css";
// import "../Section/Section.css";

// import "./index.css"; /* App.css */
// import "./Card.css";

export const ProductPromo = () => {
  return (
    <div id="Sale">
      <div className="ProductPromo__container">
        <div className="Grid__container-b">
          <div className="CardR">
            <img
              className="ProductPromo__background-img"
              src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/04/banner2.png"
              alt="#"
            />
            <img
              className="ProductPromo__banner-img"
              src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/04/banner1.png"
              alt="#"
            />
            <button
              type="submit"
              id="ProductPromo__form-submit-Btn"
              className="BuyNow-button"
            >
              Buy Now >
            </button>
          </div>

          <div className="CardS">
            <img
              className="ProductPromo__overlay-img"
              src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/04/product66.png"
              alt="#"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
