import React from "react";
import "./CategoryCards.css";
// import { Card } from "../Card/Card";

import { CategoryCard } from "../CategoryCard/CategoryCard";

export const CategoryCards = (props) => {
  return (
    <div className="grid-container">
      <div className="item cardA">
        <CategoryCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-1.png"
          title="HOT"
          description="WOMEN'S"
          type="A"
          QuickView="🔎"
        />
      </div>

      <div className="item cardB">
        <CategoryCard
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-2.png"
          title="TRENDING SHIRTS"
          description="MEN'S"
          type="B"
          QuickView="🔎"
        />
      </div>

      <div className="item cardC">
        <CategoryCard
          img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-3.png"
          title="COLLECTION"
          description="BAGS"
          type="B"
          QuickView="🔎"
        />
      </div>
      <div className="item cardD">
        <CategoryCard
          img="  https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-4.png "
          title="BLUETOOTH"
          description="SPEAKER"
          type="A"
          QuickView="🔎"
        />
      </div>
    </div>
  );
};
