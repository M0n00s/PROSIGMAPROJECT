import React from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";

const points = [
  { key: "pont1", lat: 25.77427, lng: -80.19366 },
  { key: "pont2", lat: 25.78448, lng: -80.19366 },
  { key: "pont3", lat: 25.78348, lng: -80.20366 },
];
export const Markers = () => {
  return (
    <>
      {points.map((point) => (
        <AdvancedMarker position={point} key={point.key}>
          <img
            style={{
              width: "25px",
              backgroundColor: "black",
              borderRadius: "50%",
              padding: "0.4em",
            }}
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706311083/PROSIGMA/Sin-t%C3%ADtulo-1_za3hyt.png"
            alt="img-icon-markers"
          />
        </AdvancedMarker>
      ))}
    </>
  );
};
