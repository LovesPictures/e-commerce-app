import React from "react";
import "./Trending.css";

// export const Trending = () => {
//   return <div id="Trending">Trending</div>;
// };

// // export default Trending;
// import "./index.css"; /* App.css */
import "./Trending.css";

export const Trending = () => {
  return (
    <div id="Trending">
      <div className="Trending__container">
        <div className="Grid__container-e">
          {/* Card  1*/}
          <div className="CardT">
            <div className="Trending__container">
              <p className="Trending__label">Trending!</p>
              <img
                className="Trending__banner-img"
                src="https://static.dezeen.com/uploads/2018/02/the-house-on-drolet-street-asgoneau-design-architecture-interiors-white-house-montreal-canada_dezeen_2364_col_8-852x568.jpg"
                alt="#"
              />
              <button
                type="submit"
                id="Trending__submit-Btn-1"
                className="BuyNow-button"
              >
                See Now
              </button>
            </div>
          </div>
          {/* Card  2*/}
          <div className="CardU">
            <div className="Trending__container">
              <p className="Trending__label">Trending!</p>
              <img
                className="Trending__banner-img"
                src="https://www.radiustheme.com/demo/wordpress/themes/metro/wp-content/uploads/2020/02/bench-accounting-scaled.jpg"
                alt="#"
              />
              <button
                type="submit"
                id="Trending__submit-Btn-1"
                className="BuyNow-button"
              >
                See Now
              </button>
            </div>
          </div>

          {/* Card  3*/}
          <div className="CardV">
            <div className="Trending__container">
              <p className="Trending__label">Trending!</p>
              <img
                className="Trending__banner-img"
                src="https://static.dezeen.com/uploads/2020/01/michael-moran-soho-loft-julian-king-architects-new-york-usa_dezeen_2364_col_0-852x569.jpg"
                alt="#"
              />
              <button
                type="submit"
                id="Trending__submit-Btn-1"
                className="BuyNow-button"
              >
                See Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
