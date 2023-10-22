import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Coordinates } from "../../../types/coordinates";
import "./business-map.scss";

type BusinessMapProps = {
  coordinates: Coordinates;
};

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
          <Marker position={[coordinates.lat, coordinates.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  );
};
