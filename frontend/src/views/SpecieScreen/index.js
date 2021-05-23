import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Col, Row, Button, Container } from "react-bootstrap";
import ImageZoom from "react-medium-image-zoom";
import { specieDetails as details } from "../../actions/specie_actions";

import { Link } from "react-router-dom";

import "./styles.css";
import { PayPalButton } from "react-paypal-button-v2";
export default function SpecieScreen({ history, match }) {
  const [showDonation, setShowDonation] = useState();
  const specieId = match.params.id;
  const dispatch = useDispatch();
  const specieDetails = useSelector((state) => state.specieDetails);
  const { error, loading, success, specie } = specieDetails;
  useEffect(() => {
    dispatch(details(specieId));
  }, [specieId, history, match]);
  return (
    <Container style={{ marginTop: "25vh", overflowX: "hidden" }} data-aos={"fade-down"}>
      <Link to="/maps">
        <Button>Regresar al mapa</Button>
      </Link>
      <Row className="w-100" style={{ marginTop: "3vh" }}>
        <Col lg={4}>
          <ImageZoom
            image={{
              src: `https://res.cloudinary.com/jordiespinoza/${specie?.img}`,
              alt: `${specie?.name}`,
              className: "img image-specie",
            }}
            zoomImage={{
              src: `https://res.cloudinary.com/jordiespinoza/${specie?.img}`,
              alt: `${specie?.name}`,
            }}
          />
        </Col>
        <Col lg={6}>
          <h1>{specie?.name}</h1>
          <hr />
          <span>Riesgo: {specie?.risk}</span>
          <p>{specie?.description}</p>
        </Col>
      </Row>
      <Container>
        <h5>Habitat</h5>
        <p>{specie?.habitat}</p>
        <hr />
        <h5>Reino</h5>
        <p>{specie?.kingdom}</p>
        <hr />
        <h5>Familia</h5>
        <p>{specie?.family}</p>
        <hr />
        <h5>Ecosistema</h5>
        <p>{specie?.ecosistem}</p>
        <hr />
        <h5>Información actual</h5>
        <p>{specie?.info_actual}</p>
        <hr />
        <h5>Concientización</h5>
        <p>{specie?.awareness}</p>
      </Container>
      {specie?.ong && specie?.ong != "NA" && (
        <Container
          className="d-flex flex-column align-items-center mt-5"
          style={{ height: "60vh" }}
        >
          <h5>¿Deseas ayudar al cuidado de esta especie?</h5>
          <h5>
            Realiza una donacion para ayudar a la presevacion de esta especie
          </h5>
          <Button
            className="mb-3"
            onClick={() => setShowDonation(!showDonation)}
          >
            Quiero hacer una donacion con {specie.ong}
          </Button>
          {showDonation ? (
            <>
              <PayPalButton amount="100" />
            </>
          ) : (
            <span></span>
          )}
        </Container>
      )}
    </Container>
  );
}
