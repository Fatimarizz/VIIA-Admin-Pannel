import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import TripProgressBar from './RideComponents/TripProgressBar';

export default function LiveTrackingMap({ trip }) {
  const mapRef = useRef(null);
  const routeRef = useRef(null);

  useEffect(() => {
    // Initialize the map when the component mounts (map should be shown by default)
    if (!mapRef.current) {
      mapRef.current = L.map('map', {
        center: [51.505, -0.09], // Default center
        zoom: 13,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © OpenStreetMap contributors',
      }).addTo(mapRef.current);
    }

    // If a trip is available, draw the route
    if (trip) {
      // Clear existing route if any
      if (routeRef.current) {
        routeRef.current.remove();
      }

      // Example route coordinates
      const routeCoordinates = [
        [51.505, -0.09],
        [51.51, -0.1],
        [51.515, -0.11],
      ];

      // Create a green polyline for the route
      routeRef.current = L.polyline(routeCoordinates, { color: 'green' }).addTo(mapRef.current);

      // Fit the map to the bounds of the route
      mapRef.current.fitBounds(routeRef.current.getBounds());

      // Add a marker for the current car location
      const carIcon = L.icon({
        iconUrl: '/assets/Car_icon.svg',
        iconSize: [32, 32],
      });

      L.marker(routeCoordinates[routeCoordinates.length - 1], { icon: carIcon }).addTo(mapRef.current);
    }
  }, [trip]);

  return (
    <div>
      {/* The map will always be shown */}
      <div id="map" className="h-64 w-full rounded-md shadow-md"></div>

      {/* Only show the progress bar if a trip is available */}
      {trip && (
        <div className="mt-3 bg-white rounded-lg shadow-sm">
          <TripProgressBar trip={trip} />
        </div>
      )}
    </div>
  );
}
