import React from "react";
import "./ProductPromo.css";
// import "../Section/Section.css";

export const ProductPromo = () => {
  return (
    <div id="ProductPromo">
      <div className="ProductPromo__container">
        <img
          className="ProductPromo__background-img"
          src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/04/banner2.png"
          alt="#"
        />

        <img
          className="ProductPromo__overlay-img"
          src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/04/product66.png"
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
          className="submit-button"
        >
          Buy Now >
        </button>
      </div>
    </div>
  );
};
