import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MapComponent() {
    const position = [-26.146230, 28.044050]; // Replace with building's address coordinates

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
            <Marker position={position} radius={10}>
                <Popup>mPower ratings HQ</Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapComponent;