import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-light d-flex align-items-center w-100 flex-column p-4">
      <Row>
        <Col className="text-light" md={6}>
          <h4 className="text-light">Sobre el proyecto</h4>
          <span>
            Estamos concientes que el problema que hoy en día estamos afrontando
            todos es el de mantener viva cualquier especie durante el mismo
            tiempo que viva la humanidad. Con lo cual, con este proyecto,
            impulsamos a la población a darse cuenta de aquellas especies que
            existen dentro de su región y también fuera de ella. El generar
            conciencia dentro de la sociedad será un gran paso para el siguiente
            objetivo. Protegerlos y preservarlos es obligacion de todos.
          </span>
        </Col>
        <Col md={6} className="text-light" className="text-light">
          <h4 className="text-light">Links rapidos</h4>
          <div style={{ fontSize: "14px", color: "#fff" }}>
            <p className="text-light">
              <Link to="/" className="text-light">
                Inicio
              </Link>
            </p>
            <p className="text-light">
              <Link to="/especies/" className="text-light">
                Especies
              </Link>
            </p>
            <p className="text-light">
              <Link to="/maps/" className="text-light">
                Mapa
              </Link>
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
