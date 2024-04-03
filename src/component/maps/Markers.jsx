import React from "react";
import { AdvancedMarker } from "@vis.gl/react-google-maps";

const points = [{ key: "pont1", lat: 28.39, lng: -81.24130984885234 }];

export const Markers = () => {
  return (
    <>
      {points.map((point) => (
        <AdvancedMarker position={point} key={point.key}>
          <img
            style={{
              width: "350px",
              backgroundColor: "rgba(0,0,0,0.3)",
              borderRadius: "50%",
              padding: "8em",
            }}
            src="https://res.cloudinary.com/dksz8cxlh/image/upload/v1706311083/PROSIGMA/Sin-t%C3%ADtulo-1_za3hyt.png"
            alt="img-icon-markers"
          />
        </AdvancedMarker>
      ))}
    </>
  );
};
