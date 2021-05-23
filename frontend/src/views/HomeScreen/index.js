import { useEffect, useState } from "react";

import Header from "../../components/Header";
import { Col, Row, Image, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import AOS from "aos";
import "aos/dist/aos.css";

import "./styles.css";
export default function HomeScreen() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const updateWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    console.log(width);
  }, [window.innerWidth]);
  return (
    <>
      <Header />
      <div className="text-center px-2 py-4" style={{ overflowX: "hidden" }}>
        <h2>Descubre especies en peligro y que medidas tomar</h2>
        <Row className="mt-5" data-aos={width > 991 ? "fade-down" : ""}>
          <Col lg={6}>
            <Row>
              <Col md={6} className="text-left">
                <h5>Conoce</h5>
                <span className="myspan">
                  Descubre en nuestro mapa interactivo la cantidad de especies
                  que se encuentrar en peligro de extinción en México,
                  interactua con ellos para consultar información importante.
                </span>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg/250px-Ocelot_%28Jaguatirica%29_Zoo_Itatiba.jpg"
                  height="350px"
                  className="img img-home mt-4"
                />
              </Col>
              <Col md={6} className="text-left">
                <h5>Apoya a salvar a las especies</h5>
                <span className="myspan">
                  Consulta información sobre como puedes ayudar a la
                  preservación de una especie realizando una donación directa
                  desde nuestra aplicación
                </span>
                <Image
                  src="https://images.unsplash.com/photo-1611773941418-15f7e8d2c956?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFuaW1hbHMlMjBpbiUyMHRoZSUyMHdpbGR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  height="350px"
                  className="img img-home mt-4"
                />
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Image
              src="https://res.cloudinary.com/jordiespinoza/image/upload/v1621735707/Logo2_tyxula.png"
              height="550px"
              className="img img-home p-5"
            />
          </Col>
        </Row>
      </div>
      <div className="text-center py-5 px-5 bg-light">
        <h2>Mapa interactivo</h2>
        <Row>
          <Col lg={6}>
            <Image
              src="https://res.cloudinary.com/jordiespinoza/image/upload/v1621754877/Captura_de_pantalla_de_2021-05-23_00-27-27_kz1xm0.png"
              height="550px"
              className="img img-home-2 p-5"
            />
          </Col>
          <Col
            lg={6}
            className="map-info flex-column h-100 d-flex justify-content-center align-items-center"
          >
            <span className="p-5 d-block">
              Desarrollado con el fin de dar a conocer la gran cantidad de
              especies en peligro de extincion en México, provee de información
              detallada sobre la especie en cuestión y establecemos un vinculo
              entre el usuario y una ONG encargada del preservar la especie
            </span>
            <LinkContainer to="/maps">
              <Button>Ver mapa</Button>
            </LinkContainer>
          </Col>
        </Row>
      </div>
      <div className="text-center py-5 px-5 bg-light">
        <h2>Ayuda a conservar la biodiversidad mexicana</h2>
        <Row>
          <Col
            lg={6}
            className="map-info h-100 d-flex justify-content-center align-items-center"
          >
            <span className="p-5 d-block">
              Muchas veces se busca el realizar donaciones para el presevar una
              especie, pero realmente no sabemos que camino tomar, en Proyección
              Nepatla te vinculamos directamente con alguna ONG (Organización no
              gubernamental) que este en la misión del cuidado de una especie,
              podrás realizar tu donativo hacia ellos directamente.
            </span>
          </Col>
          <Col lg={6}>
            <Image
              src="https://res.cloudinary.com/jordiespinoza/image/upload/v1621756138/30937-animales-salvajes_lqbvc9.jpg"
              height="550px"
              className="img img-home-2 p-5"
            />
          </Col>
        </Row>
      </div>
    </>
  );
}
