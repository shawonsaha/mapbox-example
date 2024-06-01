# Mapbox React Example

This is an example project that demonstrates how to integrate Mapbox into a React application. It displays a map with a marker at a specified latitude and longitude.

## Prerequisites

Before running the application, make sure you have the following:

- Node.js installed on your machine
- A Mapbox access token (sign up at [mapbox.com](https://www.mapbox.com/) to get one)

## Getting Started

To get started with this project, follow these steps:

1. Create a new React project using Create React App:

```bash
npx create-react-app mapbox-example
cd mapbox-example
```

2. Install the required dependencies:

```bash
npm install mapbox-gl
```

3. Create a new component file called `Map.js` in the `src` directory:

```jsx
import React, { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken = "YOUR_ACCESS_TOKEN";

const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-3.700346, 40.41669],
      zoom: 9,
    });

    new mapboxgl.Marker().setLngLat([-3.700346, 40.41669]).addTo(map);

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: "100%", height: "400px" }} />;
};

export default Map;
```

4. Update the `App.js` file to include the `Map` component:

```jsx
import React from "react";
import Map from "./Map";

const App = () => {
  return (
    <div>
      <h1>Mapbox Example</h1>
      <Map />
    </div>
  );
};

export default App;
```

5. Replace `'YOUR_ACCESS_TOKEN'` in the `Map.js` file with your own Mapbox access token.

6. Run the application:

```bash
npm start
```

## Usage

The application displays a map centered at the specified latitude and longitude. You can pan and zoom the map using the mouse or touch gestures.

To customize the map:

- Modify the `center` coordinates in the `Map.js` file to change the initial center of the map.
- Adjust the `zoom` level in the `Map.js` file to change the initial zoom level of the map.
- Add more markers or other map features using the Mapbox API.

## Dependencies

This project relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- mapbox-gl: The Mapbox GL JS library for rendering interactive maps.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Mapbox](https://www.mapbox.com/) for providing the mapping platform and API.
- [Create React App](https://create-react-app.dev/) for bootstrapping the React project.
