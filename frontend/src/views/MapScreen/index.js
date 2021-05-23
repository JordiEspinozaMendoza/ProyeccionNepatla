import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import mapStyles from "./mapStyles";
import "./styles.css";

import { listSpecies } from "../../actions/specie_actions";

const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};
const center = {
  lat: 19.617845,
  lng: -100.137148,
};
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

export default function MapScreen({ history }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyAP_p_tz9vpl8fw0MHYDo99nc5L3aHaet4",
    libraries,
  });
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const specieList = useSelector((state) => state.specieList);
  const { loading: loadingList, error: errorList, species } = specieList;

  useEffect(() => {
    dispatch(listSpecies());
  }, [dispatch, history]);

  if (loadError) return "Error al cargar el mapa";
  if (!isLoaded) return "Cargando mapa";
  return (
    <div
      style={{ marginTop: "20vh", overflowX: "hidden", textAlign: "center" }}
    >
      <div className="mb-5">
        <h1>Proyección Nepatla - Mapa interactivo</h1>
        <h5>
          Explora y conoce sobre las especies que se encuentran en peligro de
          extincion
        </h5>
      </div>

      <GoogleMap
        options={options}
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        zoom={5}
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
            position={{
              lat: parseFloat(specie.latitude),
              lng: parseFloat(specie.altitude),
            }}
            icon={{
              url: `https://res.cloudinary.com/jordiespinoza/${specie.logo}`,
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
            onClick={() => {
              if (selected?.id == specie.id) {
                setSelected(null);
              } else {
                setSelected({
                  latitude: parseFloat(specie.latitude),
                  altitude: parseFloat(specie.altitude),
                  name: specie.name,
                  id: specie.id,
                  description: specie.description,
                  img: specie.img,
                  risk: specie.risk,
                });
              }
            }}
          />
        ))}
        {selected ? (
          <InfoWindow
            position={{ lat: selected.latitude, lng: selected.altitude }}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h5>{selected.name}</h5>
              <p>{selected.description}</p>
              <div className="excerpt d-flex p-3 justify-content-center flex-column">
                <Image
                  height="100px"
                  width="150px"
                  src={`https://res.cloudinary.com/jordiespinoza/${selected.img}`}
                  style={{ margin: "0 auto" }}
                />
                <strong>Riesgo {selected.risk}</strong>
              </div>
              <LinkContainer to={`species/${selected.id}/`}>
                <Button variant="primary">Ver mas</Button>
              </LinkContainer>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
