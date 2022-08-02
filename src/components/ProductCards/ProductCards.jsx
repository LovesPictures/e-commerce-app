import React from "react";
import "./ProductCards.css";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductCards = () => {
  return (
    <div className="Grid__container-b">
      {/* <div className="xx"> */}
      {/* cardA with options */}
      <ProductCard
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Daily Cream cardE"
        description="This is the description "
        Currency="£"
        price="45.00"
        type="C"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardF"> */}
      <ProductCard
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth speakers cardF"
        description="This is the description "
        Currency="£"
        price="45.00"
        type="D"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardG "> */}
      <ProductCard
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Daily cardG"
        description="This is the description"
        Currency="£"
        price="45.00"
        type="C"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardH"> */}
      <ProductCard
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth cardH"
        description="This is the description"
        Currency="£"
        price="45.00"
        type="D"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardI"> */}
      {/* <p>cardA</p> */}
      <ProductCard
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags cardI"
        description="This is the description"
        Currency="£"
        price="45.00"
        type="C"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}
      {/* <div className="item cardJ"> */}
      <ProductCard
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth cardJ"
        description="This is the description"
        Currency="£"
        price="45.00"
        type="C"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardK "> */}
      <ProductCard
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags cardK"
        description="This is the description"
        Currency="£"
        price="45.00"
        type="D"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}
      {/* <div className="item cardL"> */}
      <ProductCard
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth cardL"
        description="This is the description"
        Currency="£"
        price="45.00"
        // type="C"
        Favorites="❤️"
        // conditional formatting
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* <p>cardM</p> */}
      {/* </div> */}

      {/* <div className="item cardM"> */}
      <ProductCard
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags cardM"
        description="This is the description"
        Currency="£"
        price="45.00"
        // type="D"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardN"> */}
      <ProductCard
        img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
        title="Bags cardN"
        description="This is the description"
        Currency="£"
        price="45.00"
        type="D"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
      {/* </div> */}

      {/* <div className="item cardO"> */}
      <ProductCard
        img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
        title="Bluetooth cardO"
        description="This is the description "
        Currency="£"
        price="45.00"
        type="D"
        // conditional formatting
        Favorites="❤️"
        isLiked="false"
        Cart="Add to Cart"
        Option="Select an Option"
        QuickView="🔎"
      />
    </div>
  );
};
/*
to do 
with media query I need to move the cards positions 

*/

// function Card(props) {
//   return (
//     <div className="Product__Card">
//       <img src={props.img} className="Product__Card-img" />
//       {/* alt="{props.title} */}
//       <div className="Product__Card-text-Container">
//         <h2 className="Product__Card-text-title">{props.title}</h2>
//         <p className="Product__Card-text-description">{props.description}</p>
//       </div>
//     </div>
//   );
// }
