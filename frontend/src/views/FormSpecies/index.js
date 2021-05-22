import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Form, Image } from "react-bootstrap";
import FormContainer from "../../components/FormContainer";
import { specieDetails as details, updateSpecie } from "../../actions/specie_actions";
import {
  SPECIE_DETAILS_RESET,
  SPECIE_UPDATE_RESET,
} from "../../constants/species_constants";

export default function EditSpecieScreen({ match, history }) {
  const specieId = match.params.id;
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [risk, setRisk] = useState();
  const [habitat, setHabitat] = useState();
  const [kingdom, setKingdom] = useState();
  const [family, setFamily] = useState();
  const [ecocistem, setEcocistem] = useState();
  const [info_actual, setInfoActual] = useState();
  const [movement, setMovement] = useState();
  const [awareness, setAwareness] = useState();
  const [latitude, setLatitude] = useState();
  const [altitude, setAltitude] = useState();
  const [ong, setOng] = useState();
  const dispatch = useDispatch();
  const specieDetails = useSelector((state) => state.specieDetails);
  const {
    error: errorDetails,
    loading: loadingDetails,
    success: successDetails,
    specie,
  } = specieDetails;

  const specieUpdate = useSelector((state) => state.specieUpdate);
  const {
    error: errorUpdate,
    loading: loadingUpdate,
    success: successUpdate,
  } = specieUpdate;

  useEffect(()=>{
    if(successUpdate){
      dispatch({type:SPECIE_UPDATE_RESET})
      dispatch({type:SPECIE_DETAILS_RESET})
      history.push("/especies/");
    }else{
      if(!specie?.name || specie.id !==Number(specieId)){
        dispatch(details(specieId))
      }else{
        setName(specie.name);
        setDescription(specie.description);
        setRisk(specie.risk);
        setHabitat(specie.habitat);
        setKingdom(specie.kingdom);
        setFamily(specie.family);
        setEcocistem(specie.ecosistem);
        setInfoActual(specie.info_actual);
        setMovement(specie.movement);
        setAwareness(specie.awareness);
        setLatitude(specie.latitude);
        setAltitude(specie.altitude);
        setOng(specie.ong);
      }
    }
  },[specie, specieId,successUpdate, history, dispatch])
  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(
      updateSpecie({
        name:name,
        id:specieId,
        description:description,
        risk:risk,
        habitat:habitat,
        kingdom:kingdom,
        family:family,
        ecocistem:ecocistem,
        info_actual:info_actual,
        movement:movement,
        awareness:awareness,
        latitude:latitude,
        altitude:altitude,
        ong:ong
      })
    )
  }
  return (
    <div style={{ marginTop: "10vh" }}>
      <>
        <FormContainer>
          <h1 style={{ width: "100%" }}>Editar especie</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="risk">
              <Form.Label>Riesgo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el riesgo"
                value={risk}
                onChange={(e) => setRisk(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="risk">
              <Form.Label>Habitat</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el habitat"
                value={habitat}
                onChange={(e) => setHabitat(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="risk">
              <Form.Label>Reino</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el reino"
                value={kingdom}
                onChange={(e) => setKingdom(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="risk">
              <Form.Label>Familia</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la familia"
                value={family}
                onChange={(e) => setFamily(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="ecosistem">
              <Form.Label>Ecosistema</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el ecosistema"
                value={ecocistem}
                onChange={(e) => setEcocistem(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="infoActual">
              <Form.Label>Informacion actual</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la informacion actual"
                value={info_actual}
                onChange={(e) => setInfoActual(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="movement">
              <Form.Label>Patron de movimiento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa el patrón de movimiento"
                value={movement}
                onChange={(e) => setMovement(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="awareness">
              <Form.Label>Concientización </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la consientización"
                value={awareness}
                onChange={(e) => setAwareness(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="latitude">
              <Form.Label>Latitud</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la latitud"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="Altitude">
              <Form.Label>Altitud</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la altitud"
                value={altitude}
                onChange={(e) => setAltitude(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="ong">
              <Form.Label>ONG</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa la ong"
                value={ong}
                onChange={(e) => setOng(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Subir
            </Button>
          </Form>
        </FormContainer>
      </>
    </div>
  );
}
