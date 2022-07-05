import React from 'react';
import "./Cards.css";

import "../Section/Section.css";
// import { categoryCardData } from "./categoryCardData";

export const Cards = () => {
 
  //This need to go in a json file, then offline,called with fetch 
    return (
      <div className="wrapper">
        <Cards
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-1.png"
          title="Bags"
          description="Fall Favorite • Bags"
          price="£ 45.00"
        />
  
        <Cards
          img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-3.png"
          title="Bluetooth speakers"
          description="Loud • crisp sounds"
          price="£ 129.95"
        />
        <Cards
          img="  https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-4.png "
          title="Slim-Fit Demin"
          description="Demin • Versatile"
          price="24.99"
        />
        <Cards
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-2.png"
          title="White Blouse"
          description="Blouse • Lacey"
          price="19.95"
        />
      </div>
    );
  }


// location? + issue here

export const Card = ({props}) => {
  let cardNumber = 1
  //incrementing the cards 
  cardNumber++;
  return (
    // modulo divisible by two e.g. every other card do - if statement - 
    //if the cards are divisible by 2 then give it styling for CardA if not apply styling for CardB
    <div className="Card " id={cardNumber % 2 === 0 ? 'CardA' : 'CardB' }>
      <img className="Card__img" src={props.img} alt="product" />
      <div className="Card__text-container">
        <h2 className="Card__title">{props.title}</h2> 
        <p className="Card__description">{props.description}</p>
      </div>
    </div>
  );
}
