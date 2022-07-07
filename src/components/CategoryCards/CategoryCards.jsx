import React from "react";
import "../Section/Section.css";
import "./CategoryCards.css";

export const CategoryCards = () => {
  return (
    <div id="CategoryCards">

<div className="Category__Card-container">
      <Card
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-1.png  "
        title="Bags"
        description="Fall Favorite • Bags"
        price="£ 45.00"
      />

      <Card
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-3.png"
        title="Bluetooth speakers"
        description="Loud • crisp sounds"
        price="£ 129.95"
      />
      <Card
        img="  https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-4.png "
        title="Slim-Fit Demin"
        description="Demin • Versatile"
        price="24.99"
      />
      <Card
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-2.png"
        title="White Blouse"
        description="Blouse • Lacey"
        price="19.95"
      />
    </div>
    </div>
  );
}

let cardNumber = 1

function Card(props) {
  //incrementing the cards 
  cardNumber ++;
  return (
    // modulo divisible by two e.g. everyother card do - if statment - 
    //if the cards are divisible by 2 then give it styling for CardA if not apply styling for CardB
    <div className="Category__Card " id={cardNumber % 2 === 0 ? 'Category__Card-A' : 'Category__Card-B' }>
      <img src={props.img} className="Category__Card-img" />
     <div className="Category__card-text-Container">
        <h2 className="Category__Card-text-title">{props.title}</h2> 
        <p className="Category__Card-text-description">{props.description}</p>
      </div>
    </div>
  );
}

