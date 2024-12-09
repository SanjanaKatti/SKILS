// components/WorldMap.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const WorldMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const locations = [
    { name: "Pune", position: [18.5204, 73.8567] },
    { name: "Mumbai", position: [19.076, 72.8777] },
    { name: "Bengaluru", position: [12.9716, 77.5946] },
    { name: "Cochin", position: [9.9312, 76.2673] },
    { name: "US", position: [37.0902, -95.7129] }, // Generic location in the US
    { name: "London", position: [51.5074, -0.1278] },
    { name: "Madrid", position: [40.4168, -3.7038] },
  ];

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });

  return (
    <div className="flex flex-col sm:flex-row m-5 sm:m-10 mx-auto max-w-[1000px] items-center justify-between content-center h-full">
      <MapContainer
        center={[20.0, 0.0]}
        zoom={2}
        style={{
          height: "300px",  // smaller height for smaller screens
          width: "100%",
        }}
        className="sm:h-[500px]"  // larger height for larger screens
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((location, index) => (
          <Marker key={index} position={location.position}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default WorldMap;
