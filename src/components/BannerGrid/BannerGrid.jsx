import React from "react";
import "./BannerGrid.css";
import { Card } from "../Card/Card";

import "../Section/Section.css";

export const BannerGrid = (props) => {
  return (
    <div className="grid-container">
      <div className="item cardA">
        <Card
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-1.png"
          title="Bags"
          description="Fall Favorite • Bags"
          price="£ 45.00"
          type="A"
        />
      </div>

      <div className="item cardB">
        <Card
          img="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-2.png"
          title="White Blouse"
          description="Blouse • Lacey"
          price="19.95"
          type="B"
        />
      </div>

      <div className="item cardC">
        <Card
          img=" https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-3.png"
          title="Bluetooth speakers"
          description="Loud • crisp sounds"
          price="£ 129.95"
          type="B"
        />
      </div>

      <div className="item cardD">
        <Card
          img="  https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2019/11/Untitled-4.png "
          title="Slim-Fit Demin"
          description="Demin • Versatile"
          price="24.99"
          type="A"
        />
      </div>
    </div>
  );
};
