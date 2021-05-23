import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row, Button, Container } from "react-bootstrap";
import ImageZoom from "react-medium-image-zoom";
import { specieDetails as details } from "../../actions/specie_actions";

import { Link } from "react-router-dom";

import "./styles.css";

export default function SpecieScreen({ history, match }) {
  const specieId = match.params.id;
  const dispatch = useDispatch();
  const specieDetails = useSelector((state) => state.specieDetails);
  const { error, loading, success, specie } = specieDetails;
  useEffect(() => {
    dispatch(details(specieId));
  }, [specieId, history, match]);
  return (
    <Container style={{ marginTop: "25vh", overflowX: "hidden" }}>
        <Link to="/maps">
            <Button>
                Regresar al mapa
            </Button>
        </Link>
      <Row className="w-100" style={{marginTop: "3vh"}}>
        <Col md={4}>
            <ImageZoom 
                image={{
                    src: `https://res.cloudinary.com/jordiespinoza/${specie?.img}`,
                    alt: `${specie?.name}`,
                    className: "img image-specie",
                }}
                zoomImage={{
                    src: `https://res.cloudinary.com/jordiespinoza/${specie?.img}`,
                    alt: `${specie?.name}`
                }}
            />
        </Col>
        <Col md={6}>
          <h1>{specie?.name}</h1>
          <hr/>
          <span>Riesgo: {specie?.risk}</span>
          <p>{specie?.description}</p>
          <h5>Habitat</h5>
          <p>{specie?.habitat}</p>
          <hr/>
          <h5>Reino</h5>
          <p>{specie?.kingdom}</p>
          <hr/>
          <h5>Familia</h5>
          <p>{specie?.family}</p>
          <hr/>
          <h5>Ecosistem</h5>
          <p>{specie?.ecosistem}</p>
          
        </Col>
      </Row>
    </Container>
  );
}
