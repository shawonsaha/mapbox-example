import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXJyb2JvdDQyMCIsImEiOiJjbHd2d2dmZTgwdTNjMm9yMTJwdzk1cGZrIn0.3EGphitu6W6iB8ZBOmpJVA";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-3.700346, 40.41669],
      zoom: 9,
    });

    // Add a marker at the specified lat, lon
    new mapboxgl.Marker().setLngLat([-3.700346, 40.41669]).addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default Map;
