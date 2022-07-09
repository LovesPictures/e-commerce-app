import React from 'react';
import "./ProductCards.css";

import "../Section/Section.css";
// import { categoryCardData } from "./categoryCardData";

export const ProductCards = () => {

    return (
      <div className="Product__Cards-container">
      <Card
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags"
        description="Fall Favorite • Bags"
        price="£ 45.00"
      />

      <Card
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth speakers"
        description="Loud • crisp sounds"
        price="£ 129.95"
      />
      <Card
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags"
        description="Fall Favorite • Bags"
        price="£ 45.00"
      />

      <Card
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth speakers"
        description="Loud • crisp sounds"
        price="£ 129.95"
      />
      <Card
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags"
        description="Fall Favorite • Bags"
        price="£ 45.00"
      />

      <Card
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth speakers"
        description="Loud • crisp sounds"
        price="£ 129.95"
      />
      <Card
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags"
        description="Fall Favorite • Bags"
        price="£ 45.00"
      />

      <Card
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth speakers"
        description="Loud • crisp sounds"
        price="£ 129.95"
      />
    </div>
  );
}
/*
to do 
with media query I need to move the cards positions 

*/

function Card(props) {
  return (
    <div className="Product__Card">     
      <img src={props.img} className="Product__Card-img" />
      <div className="Product__Card-text-Container">
        <h2 className="Product__Card-text-title">{props.title}</h2>
        <p className="Product__Card-text-description">{props.description}</p>
      </div>
    </div>
  );
}