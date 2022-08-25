import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Marker } from "react-map-gl";
// import { NavigationControl } from "react-map-gl";

import { MapContactCard } from "../MapContactCard/MapContactCard";

import "./MapContact.css";

const MAPBOX_ACCESS_TOKEN =
  "pk.eyJ1IjoianVkaXRocmlja2V0dHMiLCJhIjoiY2w1djA4Y2FuMDR6OTNibnAzbm1oeWN4dCJ9.bwVGnCWwW0QgGJp1KAoN2Q";

export const MapContact = () => {
  return (
    <div>
      <div className="Grid__container-c">
        <div className="Card__text-container-c">
          <div className="cardQ">
            <Map
              initialViewState={{
                longitude: -0.1367,
                latitude: 50.8169,
                zoom: 13,
              }}
              mapboxAccessToken={MAPBOX_ACCESS_TOKEN}
              style={{ width: "100%", height: 400 }}
              mapStyle="mapbox://styles/mapbox/light-v9"
            >
              <Marker
                longitude={-0.1367}
                latitude={50.8169}
                anchor="bottom"
                /* <img src="./pin.png" /> */
              />
              <Marker
                latitude={50.816727}
                longitude={-0.104669}
                anchor="bottom"
              />
              {/*	Gasworks 	Marina way	BN2 5UT	*/}
              <Marker
                latitude={50.820943}
                longitude={-0.138562}
                anchor="bottom"
              />
              {/*	Marlborourgh House	54 Old Steine	BN1 1NH	*/}
              <Marker latitude={50.821} longitude={-0.1379} anchor="bottom" />
              {/*	Steine House	55 Old Steine	BN1 1NX	*/}
              <Marker latitude={50.8226} longitude={-0.13069} anchor="bottom" />
              {/*	6 Tyson Place	Grosvenor Street	BN2 0JQ	*/}
              <Marker latitude={50.82394} longitude={-0.1446} anchor="bottom" />
              {/*	Pacific House	126 Dyke Rd	BN1 3TE	*/}
              <Marker latitude={50.82437} longitude={-0.137} anchor="bottom" />
              {/*	Olde King and Queen pub	13-17 Marlborough place	BN1 1UB	*/}
              <Marker
                latitude={50.824837}
                longitude={-0.138478}
                anchor="bottom"
              />
              {/*	Jubilee Library	Jubilee St, Brighton	BN1 1GE	*/}
              <Marker
                latitude={50.82524}
                longitude={-0.13662}
                anchor="bottom"
              />
              {/*	No friends tattoo club (The Dolphin)	66-67 North Road	BN1 1YD	*/}
              <Marker
                latitude={50.825556}
                longitude={-0.149527}
                anchor="bottom"
              />
              {/*	St Mary Magdalen's Church	55 Upper North Street	BN1 3FH	*/}
              <Marker
                latitude={50.830384}
                longitude={-0.167361}
                anchor="bottom"
              />
              {/*	All Saints Church Hove	The Drive	BN3 3QE	*/}
              <Marker
                latitude={50.832553}
                longitude={-0.136039}
                anchor="bottom"
              />
              {/*	The Rose Hill	Rose Hill Terrace	BN1 4JL	*/}
              <Marker
                latitude={50.83354}
                longitude={-0.13867}
                anchor="bottom"
              />
              {/*	The Graffiti House	Viaduct Road	BN1 4NB	*/}
              <Marker
                latitude={50.83544}
                longitude={-0.16582}
                anchor="bottom"
              />
              {/*	Cardinal Newman Catholic School	The Upper Drive	BN3 6ND	*/}
              <Marker latitude={50.81889} longitude={-0.1174} anchor="bottom" />
              {/*The Royal Sussex County Hospital	Eastern Road	BN2 5BE*/}
              <Marker
                latitude={50.84485}
                longitude={-0.11743}
                anchor="bottom"
              />
              {/*Moulsecoomb Place Manorhouse	Lewes Road	BN2 4GA	*/}
              <Marker
                latitude={50.870297}
                longitude={-0.101919}
                anchor="bottom"
              />
              {/*	Stanmer Church	8 Stanmer Village	BN1 9PZ	*/}
              {/* <NavigationControl /> */}
            </Map>
          </div>
        </div>

        {/* Address */}
        <div>
          <div className="cardP">
            {/* MapContactCard */}
            <MapContactCard
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
