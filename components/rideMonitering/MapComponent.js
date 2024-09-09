import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define custom icon for cars
const carIcon = new L.Icon({
    iconUrl: '/assets/Car_icon.svg',  // Replace with the path to your car icon
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25]
});

export default function MapComponent({ trips }) {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '200px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {trips.map((trip) => (
                <Marker
                    key={trip.id}
                    position={trip.coordinates}  // Example: [51.505, -0.09]
                    icon={carIcon}
                >
                    <Popup>
                        <div>
                            <h2>{trip.tripCodeID}</h2>
                            <p>Driver: {trip.driver_name}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}
