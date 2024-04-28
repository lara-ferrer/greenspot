import React from "react";
import L from "leaflet";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Coordinates } from "../../../types/coordinates";
import "./business-map.scss";
import icon from "../../../assets/icons/leaf.svg";

type BusinessMapProps = {
  coordinates: Coordinates;
};

var locationIcon = L.icon({
  iconUrl: icon,
  iconSize: [80, 80],
  iconAnchor: [32, 64],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

export const BusinessMap = ({ coordinates }: BusinessMapProps) => {
  return (
    <>
      <div id="map">
        <MapContainer
          center={[coordinates.lat, coordinates.lng]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[coordinates.lat, coordinates.lng]}
            icon={locationIcon}
          />
        </MapContainer>
      </div>
    </>
  );
};
