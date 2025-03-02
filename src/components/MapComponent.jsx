import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapComponent = ({ lat, lon, city }) => {
  if (!lat || !lon) return null;

  return (
    <div className="map-wrapper">
      <MapContainer 
        center={[lat, lon]} 
        zoom={10} 
        className="map-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={[lat, lon]}>
          <Popup className="map-popup">{city}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;