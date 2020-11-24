import GoogleMapReact from "google-map-react";
import LocationMarker from "../LocationMarker/LocationMarker";

// Components

const Map = ({ eventData, center, zoom }) => {
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8 || ev.categories[0].id === 12) {
      return (
        <LocationMarker
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          id={ev.categories[0].id}
        />
      );
    }
    return null;
  });
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDTf17VH6BinXs8EP4N4YG6KtV6If-mr-Y" }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 0,
    lng: -56.164532,
  },
  zoom: 3,
};

export default Map;
