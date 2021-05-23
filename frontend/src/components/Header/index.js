import "./styles.css";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export default function Header() {
  return (
    <div className="main d-flex justify-content-center w-100 mt-4 p-4 text-dark flex-column">
      <h1>En tus manos esta el futuro de la biodiversidad</h1>
      <LinkContainer to="/maps">
        <Button>Ver especies</Button>
      </LinkContainer>
    </div>
  );
}
