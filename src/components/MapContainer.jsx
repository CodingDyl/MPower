import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const position = [-26.158920, 28.034550]; // Replace with building's address coordinates

    return (
        <MapContainer center={position} zoom={14} style={{ width: '100%', height: '400px' }} dragging={false} // Disable map dragging
                      zoomControl={false} // Disable zoom control
                      doubleClickZoom={false} // Disable double click to zoom
                      scrollWheelZoom={false} // Disable scroll wheel zoom
                      touchZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>mPower ratings HQ</Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapComponent;