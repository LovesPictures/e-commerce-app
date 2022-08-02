import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
import { Card } from "../Card/Card";

import "./MapContact.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapContact = () => {
  return (
    <div>
      <div className="Grid__container-c">
        <div className="Card__text-container-c">
          <div className="cardR">
            <Map
              initialViewState={{
                longitude: -0.1367,
                latitude: 50.8169,
                zoom: 13,
              }}
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
              style={{ width: "100%", height: 450 }}
              mapStyle="mapbox://styles/mapbox/light-v9"
            >
              <Marker
                longitude={-0.1367}
                latitude={50.8169}
                anchor="bottom"
                /* <img src="./pin.png" /> */
              />
            </Map>
          </div>
        </div>

        {/* Address */}
        <div className="Card__text-container-c">
          <div className="cardS">
            <Card
              Logo=""
              Street=" 59 Newyork street"
              County="East Sussex"
              CountryCode="Contact: +44 "
              ContactNumber="7945 234 123 "
              Email="Email: dfwefsdff@gmail.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
