import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";
import { listSpecies } from "../../actions/specie_actions";

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
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function MapComponent({history}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAP_p_tz9vpl8fw0MHYDo99nc5L3aHaet4",
    libraries,
  });
  const [markers, setMarkers] = useState([]);


  const dispatch = useDispatch();

  const specieList = useSelector((state) => state.specieList);
  const { loading: loadingList, error: errorList, species } = specieList;


  useEffect(() => {
    dispatch(listSpecies());
  },[dispatch, history]);

  if (loadError) return "Error al cargar el mapa";
  if (!isLoaded) return "Cargando mapa";
  return (
    <div style={{ marginTop: "7vh", overflowX: "hidden", textAlign: "center" }}>
      <h5>
        Explora y conoce sobre las especies que se encuentran en peligro de
        extincion
      </h5>
      <GoogleMap
        options={options}
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onClick={(event) => {
          setMarkers((current) => [
            ...current,
            {
              lat: event.latLng.lat(),
              lng: event.latLng.lng(),
              time: new Date(),
            },
          ]);
        }}
      >
        {species?.map((specie) => (
          <Marker
            key={specie.id}
            position={{ lat: parseFloat(specie.latitude), lng: parseFloat(specie.altitude) }}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
