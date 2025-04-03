import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import MapDescript from "./MapDescript.jsx";
import "../styleCss/MapCss.css";

const containerStyle = {
  width: "1000px",
  height: "600px",
  borderRadius: "20px",
};

const center = { lat: 14.845949298396896, lng: 99.79366653569664 };

const markersData = [
  { id: 1, position: { lat: 14.845706849866332, lng: 99.79447147751324 }, batteryLevel: 80, soilMoisture: 45 },
  { id: 2, position: { lat: 14.845491023833091, lng: 99.79440768347361 }, batteryLevel: 50, soilMoisture: 30 },
  { id: 3, position: { lat: 14.845059371120158, lng: 99.794343889434 }, batteryLevel: 10, soilMoisture: 20 },
];

const MapComponent = () => {
  const [selectedBattery, setSelectedBattery] = useState(null);
  const [selectedSoilMoisture, setSelectedSoilMoisture] = useState(null);
  const [hoveredMarker, setHoveredMarker] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [googleLoaded, setGoogleLoaded] = useState(false);
  const [pinIcons, setPinIcons] = useState({});

  useEffect(() => {
    if (googleLoaded && window.google) {
      const icons = {};
      markersData.forEach((marker) => {
        icons[marker.id] = {
          path: "M 0,0 C -10,-20 -20,-30 0,-30 C 20,-30 10,-20 0,0 z",
          fillColor: "#B3FF87",
          fillOpacity: 1,
          strokeWeight: 2,
          strokeColor: "#fff",
          scale: 0.9,
          anchor: new window.google.maps.Point(0, -15),
        };
      });
      setPinIcons(icons);
    }
  }, [googleLoaded]);

  return (
    <div className="map-align">
      <LoadScript 
        googleMapsApiKey="AIzaSyBVg-N0T1tPgTacwwUhRmAE8ky3IUAaiUk"
        onLoad={() => setGoogleLoaded(true)}
      >
        {googleLoaded && (
          <GoogleMap 
            mapContainerStyle={containerStyle} 
            center={center} 
            zoom={17.6} 
            options={{ mapTypeId: "satellite", gestureHandling: "greedy" }}
          >
            {markersData.map((marker) => (
              <Marker
                key={marker.id}
                position={marker.position}
                icon={pinIcons[marker.id]}
                onClick={() => {
                  setSelectedMarker(selectedMarker === marker.id ? null : marker.id);
                  setSelectedBattery(marker.batteryLevel);
                  setSelectedSoilMoisture(marker.soilMoisture);
                }}
                onMouseOver={() => setHoveredMarker(marker.id)}
                onMouseOut={() => setHoveredMarker(null)}
              />
            ))}

            {hoveredMarker && (
              <InfoWindow
                position={{
                  lat: markersData.find(m => m.id === hoveredMarker).position.lat + 0.00008,
                  lng: markersData.find(m => m.id === hoveredMarker).position.lng,
                }}
                onCloseClick={() => setHoveredMarker(null)}
              >
                <div 
                  style={{ color: "black", fontSize: "14px", fontWeight: "bold" }}
                >
                  Battery Level: {markersData.find(m => m.id === hoveredMarker).batteryLevel}% <br />
                  Soil Moisture: {markersData.find(m => m.id === hoveredMarker).soilMoisture}%
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        )}
      </LoadScript>

      {/* MapDescript Component */}
      <MapDescript batteryLevel={selectedBattery} soilMoisture={selectedSoilMoisture} />
    </div>
  );
};

export default MapComponent;
