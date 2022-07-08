import React from "react";
import "./BannerGrid.css";

import "../Section/Section.css";

export const BannerGrid = () => {
  return (
    <div className="grid-container">
    <div className="item cardA">
      <p>cardA</p>
    </div>
    <div className="item cardB">
      <p>cardB</p>
    </div>

    <div className="item cardC">
      <p>cardC</p>
    </div>
    <div className="item cardD">
      <p>cardD</p>
    </div>
  </div>
);
}


