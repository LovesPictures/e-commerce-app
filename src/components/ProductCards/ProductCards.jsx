import React from "react";
import "./ProductCards.css";
import { ProductCard } from "../ProductCard/ProductCard";

import "./ProductCards.css";

export const ProductCards = () => {
  return (
    <div id="Products">
      <div className="Grid__container-b">
        {/* cardA with options */}
        <ProductCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
          title="Daily Cream"
          description="This is the description "
          Currency="£ "
          price="45.00"
          type="C"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />
        <ProductCard
          img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
          title="Bluetooth speakers "
          description="This is the description "
          Currency="£ "
          price="45.00"
          type="D"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />
        <ProductCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
          title="Daily cardG"
          description="This is the description"
          Currency="£ "
          price="45.00"
          type="C"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />

        <ProductCard
          img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
          title="Bluetooth"
          description="This is the description"
          Currency="£ "
          price="45.00"
          type="D"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />

        <ProductCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
          title="Bags"
          description="This is the description"
          Currency="£ "
          price="45.00"
          type="C"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />

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

        <ProductCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
          title="Bags "
          description="This is the description"
          Currency="£ "
          price="45.00"
          type="D"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />

        <ProductCard
          img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/03/p_4.jpg"
          title="Bluetooth"
          description="This is the description"
          Currency="£ "
          price="45.00"
          // type="C"
          Favorites="❤️"
          // conditional formatting
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />

        <ProductCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
          title="Bags"
          description="This is the description"
          Currency="£ "
          price="45.00"
          // type="D"
          // conditional formatting
          Favorites="❤️"
          isLiked="false"
          Cart="Add to Cart"
          Option="Select an Option"
          QuickView="🔎"
        />

        <ProductCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2022/01/img_13.jpg  "
          title="Bags"
          description="This is the description"
          Currency="£ "
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
    </div>
  );
};
