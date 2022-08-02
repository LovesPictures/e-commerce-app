import React from "react";

import "./ProductCard.css";

export const ProductCard = (props) => {
  return (
    <div className="Card__b">
      {/* Notes: alt tag and why "" because the HTML will be returning a string */}
      <img src={props.img} alt="{props.title}" className="Card__img-b" />

      <div className="Card__text-container-b">
        {/* link to Model 
        <a href="https://www.radiustheme.com/demo/wordpress/themes/metro/product/leaf-ban-earring-2/">Leaf Ban Earring</a>
        // https://codepen.io/jude1/pen/GRxgqER/b37f77872ad35c404d3708b8bca65e62?editors=0110
       */}
        <h2 className="Card__text-title-b">{props.title}</h2>
        {/* currency conversion / selection */}
        <p className="Card__text-currency-b">{props.Currency}</p>
        <p className="Card__text-price-b">{props.price}</p>
        {/* <p className="Card__text-description">{props.description}</p> */}
      </div>

      {/* cart options */}
      <div className="Cart__container-b">
        {" "}
        {props.Cart__container}
        {/* <span> */}
        <div className="Favorites-b"> {props.Favorites}</div>
        {/* dropdown menu for options - object */}
        {/* First part of ternary - if the type is "A" then select className Cart -
        otherwise option and second part select the text depending of if its a
        Cart or an Option */}
        <p className={props.type === "C" ? "Cart" : "Option"}>
          {" "}
          {props.type === "C" ? props.Option : props.Cart}
        </p>
        <p className="QuickView"> {props.QuickView}</p>
        {/* </span> */}
      </div>
    </div>
  );
};
