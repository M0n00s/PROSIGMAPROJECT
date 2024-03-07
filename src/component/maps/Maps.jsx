import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import "./maps.css";
import { Markers } from "./Markers";

export const Maps = () => {
  const position = { lat: 25.77427, lng: -80.19366 };

  return (
    <section id="location" className="mapsCont">
      <h3>
        <span className="textNaranja">Prosigma</span>
      </h3>
      <div className="mapsBoxCont">
        <APIProvider apiKey={import.meta.env.VITE_MAPS_APIKEY}>
          <Map
            zoom={14}
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
