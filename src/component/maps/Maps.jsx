import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import "./maps.css";
import { Markers } from "./Markers";
import { useEffect } from "react";

export const Maps = () => {
  const position = {
    lat: window.innerWidth < 800 ? 28.82 : 28.59,
    lng: -81.24130984885234,
  };
  console.log(window.innerWidth);

  return (
    <section id="location" className="mapsCont">
      <h3>
        <span className="textNaranja">Prosigma</span>
      </h3>
      <div className="mapsBoxCont">
        <APIProvider apiKey={import.meta.env.VITE_MAPS_APIKEY}>
          <Map
            zoom={window.innerWidth < 800 ? 9 : 10}
            center={position}
            mapId={import.meta.env.VITE_MAPS_ID}
            style={{ height: "100%", width: "100%" }}
          >
            <Markers />
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};
