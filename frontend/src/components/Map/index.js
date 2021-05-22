import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from './mapStyles'
const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 32.533,
  lng: -117.05,
};
const options = {
  styles:mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};
export default function MapComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAP_p_tz9vpl8fw0MHYDo99nc5L3aHaet4",
    libraries,
  });
  if (loadError) return "Error al cargar el mapa";
  if (!isLoaded) return "Cargando mapa";
  return (
    <div style={{ marginTop: "7vh", overflowX: "hidden", textAlign: "center" }}>
      <h5>Explora y conoce sobre las especies que se encuentran en peligro de extincion</h5>
      <GoogleMap
        options={options}
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
}
